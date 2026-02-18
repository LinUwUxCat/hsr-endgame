import { useEffect, useState, type ReactElement } from "react";
import { sd } from "../utils/date";
import CurrentAS from "../components/CurrentAS";
import { apocalyptic, getFullHp } from "../data/apoc";
import Graph from "../components/Graph";

export default function ASPage(): ReactElement {

    const [asList, setAsList] = useState(apocalyptic);
    const [currentAS, setCurrentAS] = useState<number>(0);

    useEffect(() => {
        setAsList(apocalyptic.sort((a, b) => a.dateEnd < b.dateEnd ? -1 : 1))
        setCurrentAS(asList.length - 1)
    }, []) // Init

    const data = {
        names: asList.map(l => l.name),
        data: [asList.map(l => getFullHp(l))],
        titles: ["Total HP Count"],
        colors: ["#cc0000"]
    }

    return (
        <div className="moc-page" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                <button onClick={() => { setCurrentAS(currentAS - 1 < 0 ? asList.length - 1 : currentAS - 1) }}>&lt;</button>
                <div style={{textAlign: "center"}}>
                    <div>{asList[currentAS].name}</div>
                    <div>{sd(asList[currentAS].dateStart)} - {sd(asList[currentAS].dateEnd)}</div>
                </div>
                <button onClick={() => { setCurrentAS((currentAS + 1) % asList.length) }}>&gt;</button>
            </div>
            <CurrentAS as={asList[currentAS]} />
            <div style={{width: "95%"}}><Graph {...data} /></div>
        </div>
    )
}