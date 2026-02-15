import type { ReactElement } from "react";
import type { Monster } from "../data/types";
import { getMonsterFull } from "../data/moc";
import MonsterElement from "./Monster";

interface WaveProps {
    wave : Monster[];
    waveNmr : number;
}

export default function Wave({wave, waveNmr} : WaveProps) : ReactElement {

    function getMonsters(){
        return wave.map(monster => {
            var m = getMonsterFull(monster)
            return (
                <MonsterElement monster={m}/>
            )
        })
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div style={{fontWeight: "bold"}}>Wave {waveNmr}</div>
            <div style={{display: "flex", flexDirection: "row"}}>{getMonsters()}</div>
        </div>
    )
}