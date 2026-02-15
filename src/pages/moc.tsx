import { useEffect, useState, type ReactElement } from "react";
import { memoryOfChaos } from "../data/data";
import { sd } from "../utils/date";
import CurrentMoc from "../components/CurrentMoc";

export default function MocPage() : ReactElement {

    const [mocList, setMocList] = useState(memoryOfChaos);
    const [currentMoc, setCurrentMoc] = useState<number>(0);

    useEffect(() => {
        setMocList(mocList.sort((a, b) => a.dateEnd > b.dateEnd ? -1 : 1))
    }, []) // Init


    return (
        <div className="moc-page">
            <button onClick={() => {setCurrentMoc(currentMoc - 1 < 0 ? mocList.length-1 : currentMoc - 1)}}>&lt;</button>
            <div>
                <div>{mocList[currentMoc].name}</div>
                <div>{sd(mocList[currentMoc].dateStart)} - {sd(mocList[currentMoc].dateEnd)}</div>
            </div>
            <button onClick={() => {setCurrentMoc((currentMoc + 1) % mocList.length)}}>&gt;</button>
            <CurrentMoc moc={mocList[currentMoc]} />
        </div>
    )
}