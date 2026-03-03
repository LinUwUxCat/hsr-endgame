import type { ReactElement } from "react";
import type { Monster } from "../data/types";
import MonsterElement from "./Monster";
import { useLoadedFile } from "./i18n/LoadedFileContext";

interface WaveProps {
    wave: Monster[];
    waveNmr: number;
    monsterSize?: number;
}

export default function Wave({ wave, waveNmr, monsterSize }: WaveProps): ReactElement {

    const { monsters } = useLoadedFile();

    function getMonsterFull(m: Monster): Monster {
        if (m.id == undefined) return m;

        let found = monsters.find(v => v.id == m.id);

        if (found == undefined) return m;
        return { ...found, ...m }
    }

    function getMonsters() {
        return wave.map((monster, i) => {
            const m = getMonsterFull(monster)
            return (
                <MonsterElement size={monsterSize} monster={m} key={`${m.id}-${i}`}/>
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