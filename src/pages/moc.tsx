import { useEffect, useState, type ReactElement } from "react";
import { getFullHp, memoryOfChaos } from "../data/moc";
import { sd } from "../utils/date";
import CurrentMoc from "../components/CurrentMoc";
import EChartsReact from "echarts-for-react";

export default function MocPage(): ReactElement {

    const [mocList, setMocList] = useState(memoryOfChaos);
    const [currentMoc, setCurrentMoc] = useState<number>(0);

    useEffect(() => {
        setMocList(mocList.sort((a, b) => a.dateEnd < b.dateEnd ? -1 : 1))
        setCurrentMoc(mocList.length - 1)
    }, []) // Init

    const options = {
        grid: { top: 8, right: 8, bottom: 8, left: 8 },
        xAxis: {
            type: 'category',
            data: mocList.map(m => m.name),
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: mocList.map(m => getFullHp(m)),
                type: 'line',
                smooth: false,
            },
        ],
        tooltip: {
            trigger: 'axis',
        },
        color: ['#cc0000']
    }

    return (
        <div className="moc-page" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                <button onClick={() => { setCurrentMoc(currentMoc - 1 < 0 ? mocList.length - 1 : currentMoc - 1) }}>&lt;</button>
                <div style={{textAlign: "center"}}>
                    <div>{mocList[currentMoc].name}</div>
                    <div>{sd(mocList[currentMoc].dateStart)} - {sd(mocList[currentMoc].dateEnd)}</div>
                </div>
                <button onClick={() => { setCurrentMoc((currentMoc + 1) % mocList.length) }}>&gt;</button>
            </div>
            <CurrentMoc moc={mocList[currentMoc]} />
            <div style={{width: "95%"}}><EChartsReact option={options} /></div>
        </div>
    )
}