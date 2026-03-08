import { useEffect, useState, type ReactElement } from "react";
import { useParams } from "react-router";
import { findMonsterInAllEndgames } from "../utils/data";
import MonsterElement from "../components/Monster";
import type { Monster } from "../data/types";
import { date } from "../utils/date";
import { useLoadedFile } from "../components/i18n/LoadedFileContext";
import EChartsReact from "echarts-for-react";
import { useLanguage } from "../components/i18n/LanguageContext";

export default function MonsterPage(): ReactElement {
    const { id } = useParams();
    const { monsters } = useLoadedFile();
    const { t } = useLanguage();

    const [monsterAppearances, setMonsterAppearances] = useState<{ hp: number; hpHard?: string | undefined; id: string; endgame: string; dateStart: string; endgameId: string; }[]>([]);
    const [monster, setMonster] = useState<Monster | undefined>(monsters.find(v => v.id == id) as Monster)

    useEffect(() => {
        if (id == undefined) return;
        // Heavy operation probably
        setMonsterAppearances(findMonsterInAllEndgames(id).sort((a, b) => date(a.dateStart) < date(b.dateStart) ? -1 : 1));

        // Fetch monster names
        setMonster(monsters.find(v => v.id == id) as Monster)
    }, [id, monsters])

    if (monster == undefined) return <></>;

    function endgameToColor(e: string): string {
        if (e == "AA") return "#cc0000";
        if (e == "MOC") return "#7f1a9e";
        if (e == "PF") return "#6cc4ff";
        if (e == "AS") return "#1a8d1a";
        return "";
    }

    const option = {
        grid: { top: 8, right: 8, bottom: 8, left: 8 },
        xAxis: {
            type: 'category',
            data: monsterAppearances.map(m => `${m.endgame} ${m.endgameId} - ${m.dateStart}`),
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                name: t("graph.total-hp"),
                data: monsterAppearances.map(m => {
                    return {
                        value: m.hp,
                        itemStyle: {
                            color: endgameToColor(m.endgame)
                        }
                    }
                }),
                type: 'line',
                smooth: false,
                symbolSize: 15,
                symbol: "circle",
                lineStyle: {
                    width: 0.5
                }
            },
        ],
        tooltip: {
            trigger: 'axis',
        },
        color: ['#333333']
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", width: "90%", padding: "1% 5%" }}>
                <MonsterElement monster={monster} size={3} noclick />
            </div>
            <EChartsReact option={option} />
        </>
    )
}