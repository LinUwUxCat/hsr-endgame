import { useEffect, useState, type ReactElement } from "react";
import CurrentMoc from "../components/CurrentMoc";
import EChartsReact from "echarts-for-react";
import Pagination from "../components/Pagination";
import EndgameInfo from "../components/EndgameInfo";
import type { MemoryOfChaos } from "../data/types";
import { getFullHpMoc, sortEndgameList } from "../utils/endgame";
import { useLanguage } from "../components/i18n/LanguageContext";
import { mergeById } from "../utils/merge";

import MOC from "../data/MOC.json"



export default function MocPage(): ReactElement {

    const { lang } = useLanguage();

    const [mocList, setMocList] = useState<MemoryOfChaos[]>(sortEndgameList(MOC as MemoryOfChaos[]));
    const [currentMoc, setCurrentMoc] = useState<number>(mocList.length - 1);

    useEffect(() => {
        fetch(`/data/${lang}/MOC.json`)
        .then(d => d.json()
            .then(json =>
                setMocList(sortEndgameList(mergeById(MOC, json) as MemoryOfChaos[]))
            )
        )
    }, [lang])


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
                data: mocList.map(m => getFullHpMoc(m)),
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