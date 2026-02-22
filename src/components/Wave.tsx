import type { ReactElement } from "react";
import type { Monster } from "../data/types";
import { getMonsterFull } from "../data/moc";
import MonsterElement from "./Monster";

interface WaveProps {
    wave : Monster[];
    waveNmr : number;
    monsterSize? : number;
}

export default function Wave({wave, waveNmr, monsterSize} : WaveProps) : ReactElement {

    function getMonsters(){
        return wave.map(monster => {
            const m = getMonsterFull(monster)
            return (
                <MonsterElement size={monsterSize} monster={m}/>
            )
        })
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div style={{fontWeight: "bold"}}>Wave {waveNmr}</div>
            <div style={wave.length > 5 ? {display: "grid", gridTemplateColumns: "repeat(5, 1fr)"} : {display: "flex", flexDirection: "row"}}>{getMonsters()}</div>
        </div>
    )
}