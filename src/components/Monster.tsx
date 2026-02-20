import type { ReactElement } from "react";
import type { ElemType, Monster, PFMonster } from "../data/types";
import "./Monster.css"

interface MonsterElementProps {
   monster : Monster;
   size?: number;
}

export default function MonsterElement({monster, size} : MonsterElementProps) : ReactElement {
    if (size == undefined) size = 1;

    function getWeakness(w : ElemType[]){
        return w.map(e => {
            return <img src={"/types/" + e.toString() + ".png"} style={{width: "26px", height: "26px"}}/>
        })
    }

    return (
        <div className="monster" style={{display: "flex", flexDirection: "column"}}>
            <div className="monster-img">
                <img src={"/monster/" + monster.id + ".png"} style={{width: `${128*size}px`, height: `${128*size}px`}}/>
                <div className="monster-name" style={{width: `${128*size}px`, height: `${128*size}px`}}>{monster.name ?? monster.id ?? "UNKNOWN"}</div>
                {(monster as PFMonster).amount != undefined && <div className="monster-amount">{(monster as PFMonster).amount}</div>}
            </div>
            
            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                {getWeakness(monster.weakness ?? [])}
                <span style={{fontWeight: "bold"}}>{typeof monster.toughness == "number" ? monster.toughness : monster.toughness?.join(", ")}{monster.toughnessBarCount != undefined && monster.toughnessBarCount > 1 ? ("×"+monster.toughnessBarCount) : ""}</span>
            </div>
            
            <div style={{fontWeight: "bold"}}>
                <span style={{color: "#cc0000"}}>{monster.hp}</span>
                <span>{monster.hpBarCount != undefined && monster.hpBarCount > 1 ? ("×"+monster.hpBarCount) : ""}</span>
                {monster.hpPercent && <span style={{fontWeight: "normal", color: "#666"}}> [{monster.hpPercent}%]</span>}
            </div>

            {monster.unsure && <div style={{fontSize: "0.7rem", color: "grey"}} title="Missing Data : HP Value incorrect">
                missing data
            </div>}
        </div>
    )
}