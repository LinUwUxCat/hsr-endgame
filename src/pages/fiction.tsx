import { useState, type ReactElement } from "react";
import EChartsReact from "echarts-for-react";
import { fiction, getFullHp } from "../data/fiction";
import CurrentPF from "../components/CurrentPF";
import Pagination from "../components/Pagination";
import EndgameInfo from "../components/EndgameInfo";

export default function PFPage(): ReactElement {

    const [pfList] = useState(fiction.sort((a, b) => a.dateEnd < b.dateEnd ? -1 : 1));
    const [currentPF, setCurrentPF] = useState<number>(pfList.length - 1);

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
                <Pagination currentPage={currentPF} changePage={setCurrentPF} maxPages={pfList.length}>
                    <div style={{textAlign: "center"}}>
                        <EndgameInfo endgame={pfList[currentPF]} />
                    </div>
                </Pagination>
            </div>
            <CurrentPF pf={pfList[currentPF]} />
            <div style={{width: "95%"}}><EChartsReact option={options} /></div>
        </div>
    )
}