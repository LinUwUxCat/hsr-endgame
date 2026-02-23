import { useEffect, useState, type ReactElement } from "react";
import CurrentAS from "../components/CurrentAS";
import Graph from "../components/Graph";
import Pagination from "../components/Pagination";
import EndgameInfo from "../components/EndgameInfo";
import { getFullHpAS, sortEndgameList } from "../utils/endgame";
import { useLanguage } from "../components/i18n/LanguageContext";

import AS from "../data/AS.json"
import type { ApocalypticShadow } from "../data/types";
import { mergeById } from "../utils/merge";

export default function ASPage(): ReactElement {

    const { t, lang } = useLanguage();

    const [asList, setASList] = useState(sortEndgameList(AS as ApocalypticShadow[]));
    const [currentAS, setCurrentAS] = useState<number>(asList.length - 1)

    useEffect(() => {
        fetch(`/data/${lang}/AS.json`)
        .then(d => d.json()
            .then(json =>
                setASList(sortEndgameList(mergeById(AS, json) as ApocalypticShadow[]))
            )
        )
    }, [lang])

    const data = {
        names: asList.map(l => l.name ?? ""),
        data: [asList.map(l => getFullHpAS(l))],
        titles: [t("graph.total-hp")],
        colors: ["#cc0000"]
    }

    return (
        <div className="moc-page" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                <Pagination currentPage={currentAS} changePage={setCurrentAS} maxPages={asList.length}>
                    <div style={{textAlign: "center"}}>
                        <EndgameInfo endgame={asList[currentAS]} />
                    </div>
                </Pagination>
            </div>
            <CurrentAS as={asList[currentAS]} />
            <div style={{width: "95%"}}><Graph {...data} /></div>
        </div>
    )
}