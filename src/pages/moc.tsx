import { useState, type ReactElement } from "react";
import { getFullHp, memoryOfChaos } from "../data/moc";
import CurrentMoc from "../components/CurrentMoc";
import EChartsReact from "echarts-for-react";
import Pagination from "../components/Pagination";
import EndgameInfo from "../components/EndgameInfo";

export default function MocPage(): ReactElement {

    const [mocList] = useState(memoryOfChaos.sort((a, b) => a.dateEnd < b.dateEnd ? -1 : 1));
    const [currentMoc, setCurrentMoc] = useState<number>(mocList.length - 1);

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
                <Pagination currentPage={currentMoc} changePage={setCurrentMoc} maxPages={mocList.length}>
                    <div style={{textAlign: "center"}}>
                        <EndgameInfo endgame={mocList[currentMoc]} />
                    </div>
                </Pagination>
            </div>
            <CurrentMoc moc={mocList[currentMoc]} />
            <div style={{width: "95%"}}><EChartsReact option={options} /></div>
        </div>
    )
}