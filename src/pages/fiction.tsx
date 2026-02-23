import { useEffect, useState, type ReactElement } from "react";
import EChartsReact from "echarts-for-react";
import CurrentPF from "../components/CurrentPF";
import Pagination from "../components/Pagination";
import EndgameInfo from "../components/EndgameInfo";
import { useLanguage } from "../components/i18n/LanguageContext";
import { getFullHpPF, sortEndgameList } from "../utils/endgame";
import { mergeById } from "../utils/merge";
import type { PureFiction } from "../data/types";

import PF from "../data/PF.json"

export default function PFPage(): ReactElement {

    const { lang } = useLanguage();

    const [pfList, setPFList] = useState<PureFiction[]>(sortEndgameList(PF as PureFiction[]));
    const [currentPF, setCurrentPF] = useState<number>(pfList.length - 1);

    useEffect(() => {
        fetch(`/data/${lang}/PF.json`)
        .then(d => d.json()
            .then(json =>
                setPFList(sortEndgameList(mergeById(PF, json) as PureFiction[]))
            )
        )
    }, [lang])

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
                data: pfList.map(m => getFullHpPF(m)),
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