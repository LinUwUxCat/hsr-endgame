import { useEffect, useState, type ReactElement } from "react";
import { sd } from "../utils/date";
import EChartsReact from "echarts-for-react";
import { getFullHp, arbitration } from "../data/arbitration";
import CurrentAA from "../components/CurrentAA";

export default function AAPage(): ReactElement {

    const [aaList, setAaList] = useState(arbitration);
    const [currentAA, setCurrentAA] = useState<number>(0);

    useEffect(() => {
        setAaList(arbitration.sort((a, b) => a.dateEnd < b.dateEnd ? -1 : 1))
        setCurrentAA(aaList.length - 1)
    }, []) // Init

    const options = {
        grid: { top: 8, right: 8, bottom: 8, left: 8 },
        xAxis: {
            type: 'category',
            data: aaList.map(m => m.name),
        },
        yAxis: {
            type: 'value',
        },
        legend: {
            data: ["Regular", "Plight"]
        },
        series: [
            {
                name: "Regular",
                data: aaList.map(m => getFullHp(m)),
                type: 'line',
                smooth: false,
            },
            {
                name: "Plight",
                data: aaList.map(m => getFullHp(m, true)),
                type: 'line',
                smooth: false,
            },
        ],
        tooltip: {
            trigger: 'axis',
        },
        color: ['#4444cc', '#cc0000']
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
            <div style={{width: "95%"}}><EChartsReact option={options} /></div>
        </div>
    )
}