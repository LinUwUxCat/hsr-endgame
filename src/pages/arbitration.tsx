import { useEffect, useState, type ReactElement } from "react";
import { getFullHp } from "../data/arbitration";
import CurrentAA from "../components/CurrentAA";
import Graph from "../components/Graph";
import Pagination from "../components/Pagination";
import EndgameInfo from "../components/EndgameInfo";
import type { AnomalyArbitration } from "../data/types";
import { date } from "../utils/date";
import AA from "../data/AA.json"
import { useLanguage } from "../components/i18n/LanguageContext";
import merge from "deepmerge-json";

export default function AAPage(): ReactElement {

    function sortAA(aa : AnomalyArbitration[]){
        return aa.sort((a, b) => date(a.dateEnd!) < date(b.dateEnd!) ? -1 : 1)
    }

    const { lang } = useLanguage();
    const [aaList, setAAList] = useState<AnomalyArbitration[]>(sortAA(AA as AnomalyArbitration[]));

    function setlist(arg: AnomalyArbitration[]){
        console.log(arg)
        setAAList(arg);
    }

    useEffect(() => {
        fetch(`/data/${lang}/AA.json`)
        .then(d => d.json()
            .then(json =>
                setlist(sortAA(merge(AA, json) as AnomalyArbitration[]))
            )
        )
            
    }, [lang])

    const [currentAA, setCurrentAA] = useState<number>(aaList.length - 1);

    const data = {
        names: aaList.map(l => l.name ?? ""),
        data: [aaList.map(l => Math.round(getFullHp(l, true))), aaList.map(m => getFullHp(m))],
        titles: ["Total HP Count (Plight)", "Total HP Count (Regular)"],
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