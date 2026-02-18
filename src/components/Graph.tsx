import EChartsReact from "echarts-for-react";
import type { ReactElement } from "react";

interface GraphProps {

    names: string[];
    titles: string[];
    data: number[][];
    colors: string[]
}

export default function Graph({ data, names, titles, colors }: GraphProps): ReactElement {
    const options = {
        grid: { top: 8, right: 8, bottom: 8, left: 8 },
        xAxis: {
            type: 'category',
            data: names,
        },
        yAxis: {
            type: 'value',
        },
        series: data.map((s, i) => {
            return {
                name: titles[i],
                data: s,
                type: 'line',
                smooth: false
            }
        }),
        tooltip: {
            trigger: 'axis',
        },
        color: colors,
    }

    return (
        <EChartsReact option={options} />
    )
}
