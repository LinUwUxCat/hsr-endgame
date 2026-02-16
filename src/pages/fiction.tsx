import { useEffect, useState, type ReactElement } from "react";
import { sd } from "../utils/date";
import EChartsReact from "echarts-for-react";
import { fiction, getFullHp } from "../data/fiction";
import CurrentPF from "../components/CurrentPF";

export default function PFPage(): ReactElement {

    const [pfList, setPfList] = useState(fiction);
    const [currentPF, setCurrentPF] = useState<number>(0);

    useEffect(() => {
        setPfList(fiction.sort((a, b) => a.dateEnd < b.dateEnd ? -1 : 1))
        setCurrentPF(pfList.length - 1)
    }, []) // Init

    const options = {
        grid: { top: 8, right: 8, bottom: 8, left: 8 },
        xAxis: {
            type: 'category',
            data: pfList.map(m => m.name),
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                name: "Regular",
                data: pfList.map(m => getFullHp(m)),
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
                <button onClick={() => { setCurrentPF(currentPF - 1 < 0 ? pfList.length - 1 : currentPF - 1) }}>&lt;</button>
                <div style={{textAlign: "center"}}>
                    <div>{pfList[currentPF].name}</div>
                    <div>{sd(pfList[currentPF].dateStart)} - {sd(pfList[currentPF].dateEnd)}</div>
                </div>
                <button onClick={() => { setCurrentPF((currentPF + 1) % pfList.length) }}>&gt;</button>
            </div>
            <CurrentPF pf={pfList[currentPF]} />
            <div style={{width: "95%"}}><EChartsReact option={options} /></div>
        </div>
    )
}