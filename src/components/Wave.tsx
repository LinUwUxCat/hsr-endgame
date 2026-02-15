import type { ReactElement } from "react";
import type { Monster } from "../data/types";
import { getMonsterFull } from "../data/data";

interface WaveProps {
    wave : Monster[];
    waveNmr : number;
}

export default function Wave({wave, waveNmr} : WaveProps) : ReactElement {

    function getMonsters(){
        return wave.map(monster => {
            var m = getMonsterFull(monster)
            return (
                <div style={{display: "flex", flexDirection: "column", padding: "10px"}}>
                    <div>{m.name}</div>
                    <div>{m.hp}{m.hpBarCount != undefined ? `x${m.hpBarCount}` : ""}</div>
                    <div>{m.toughness}{m.toughnessBarCount != undefined ? `x${m.toughnessBarCount}` : ""}</div>
                </div>
            )
        })
    }

    return (
        <div>
            <div>Wave {waveNmr}</div>
            <div style={{display: "flex", flexDirection: "row"}}>{getMonsters()}</div>
        </div>
    )
}