import { useState, type ReactElement } from "react";
import CurrentAS from "../components/CurrentAS";
import { apocalyptic, getFullHp } from "../data/apoc";
import Graph from "../components/Graph";
import Pagination from "../components/Pagination";
import EndgameInfo from "../components/EndgameInfo";

export default function ASPage(): ReactElement {

    const [asList] = useState(apocalyptic.sort((a, b) => a.dateEnd < b.dateEnd ? -1 : 1));
    const [currentAS, setCurrentAS] = useState<number>(asList.length - 1)

    const data = {
        names: asList.map(l => l.name),
        data: [asList.map(l => getFullHp(l))],
        titles: ["Total HP Count"],
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