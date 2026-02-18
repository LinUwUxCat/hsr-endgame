import { useEffect, useState, type ReactElement } from "react";
import { sd } from "../utils/date";
import { getFullHp, arbitration } from "../data/arbitration";
import CurrentAA from "../components/CurrentAA";
import Graph from "../components/Graph";

export default function AAPage(): ReactElement {

    const [aaList, setAaList] = useState(arbitration);
    const [currentAA, setCurrentAA] = useState<number>(0);

    useEffect(() => {
        setAaList(arbitration.sort((a, b) => a.dateEnd < b.dateEnd ? -1 : 1))
        setCurrentAA(aaList.length - 1)
    }, []) // Init

    const data = {
        names: aaList.map(l => l.name),
        data: [aaList.map(l => Math.round(getFullHp(l, true))), aaList.map(m => getFullHp(m))],
        titles: ["Total HP Count (Plight)", "Total HP Count (Regular)"],
        colors: ['#cc0000', '#4444cc']
    }

    return (
        <div className="moc-page" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                <button onClick={() => { setCurrentAA(currentAA - 1 < 0 ? aaList.length - 1 : currentAA - 1) }}>&lt;</button>
                <div style={{textAlign: "center"}}>
                    <div>{aaList[currentAA].name}</div>
                    <div>{sd(aaList[currentAA].dateStart)} - {sd(aaList[currentAA].dateEnd)}</div>
                </div>
                <button onClick={() => { setCurrentAA((currentAA + 1) % aaList.length) }}>&gt;</button>
            </div>
            <CurrentAA aa={aaList[currentAA]} />
            <div style={{width: "95%"}}>
                <Graph {...data}/>
            </div>
        </div>
    )
}