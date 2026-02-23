import type { ReactElement } from "react";
import type { Monster } from "../data/types";
import MonsterElement from "./Monster";
import { monsters } from "../data/monsters";

interface WaveProps {
    wave: Monster[];
    waveNmr: number;
    monsterSize?: number;
}

export default function Wave({ wave, waveNmr, monsterSize }: WaveProps): ReactElement {

    function getMonsterFull(m: Monster): Monster {
        if (m.id == undefined) return m;
        let shortId = parseInt(m.id.slice(0, 7));
        shortId = shortId - (shortId % 10);
        if (monsters[shortId] == undefined) return m;
        return { ...monsters[shortId], ...m }
    }

    function getMonsters() {
        return wave.map(monster => {
            const m = getMonsterFull(monster)
            return (
                <MonsterElement size={monsterSize} monster={m} />
            )
        })
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontWeight: "bold" }}>Wave {waveNmr}</div>
            <div style={wave.length > 5 ? { display: "grid", gridTemplateColumns: "repeat(5, 1fr)" } : { display: "flex", flexDirection: "row" }}>{getMonsters()}</div>
        </div>
    )
}