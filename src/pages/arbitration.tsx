import { useState, type ReactElement } from "react";
import { getFullHp, arbitration } from "../data/arbitration";
import CurrentAA from "../components/CurrentAA";
import Graph from "../components/Graph";
import Pagination from "../components/Pagination";
import EndgameInfo from "../components/EndgameInfo";

export default function AAPage(): ReactElement {

    const [aaList] = useState(arbitration.sort((a, b) => a.dateEnd < b.dateEnd ? -1 : 1));
    const [currentAA, setCurrentAA] = useState<number>(aaList.length - 1);

    const data = {
        names: aaList.map(l => l.name),
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