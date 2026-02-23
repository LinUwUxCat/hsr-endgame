import { useEffect, useState, type ReactElement } from "react";
import CurrentAA from "../components/CurrentAA";
import Graph from "../components/Graph";
import Pagination from "../components/Pagination";
import EndgameInfo from "../components/EndgameInfo";
import type { AnomalyArbitration } from "../data/types";
import { getFullHpAA, sortEndgameList } from "../utils/endgame";
import AA from "../data/AA.json"
import { useLanguage } from "../components/i18n/LanguageContext";
import { mergeById } from "../utils/merge";

export default function AAPage(): ReactElement {
    const { t, lang } = useLanguage();
    const [aaList, setAAList] = useState<AnomalyArbitration[]>(sortEndgameList(AA as AnomalyArbitration[]));

    useEffect(() => {
        fetch(`/data/${lang}/AA.json`)
        .then(d => d.json()
            .then(json =>
                setAAList(sortEndgameList(mergeById(AA, json) as AnomalyArbitration[]))
            )
        )
            
    }, [lang])

    const [currentAA, setCurrentAA] = useState<number>(aaList.length - 1);

    const data = {
        names: aaList.map(l => l.name ?? ""),
        data: [aaList.map(l => Math.round(getFullHpAA(l, true))), aaList.map(m => getFullHpAA(m))],
        titles: [t("graph.total-hp-plight"), t("graph.total-hp")],
        colors: ['#cc0000', '#4444cc']
    }

    return (
        <div className="moc-page" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                <Pagination currentPage={currentAA} changePage={setCurrentAA} maxPages={aaList.length}>
                    <div style={{textAlign: "center"}}>
                        <EndgameInfo endgame={aaList[currentAA]} />
                    </div>
                </Pagination>
            </div>
            <CurrentAA aa={aaList[currentAA]} />
            <div style={{width: "95%"}}>
                <Graph {...data}/>
            </div>
        </div>
    )
}