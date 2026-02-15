import type { ReactElement } from "react";
import type { ElemType, Monster } from "../data/types";
import "./Monster.css"

interface MonsterElementProps {
   monster : Monster;
}

export default function MonsterElement({monster} : MonsterElementProps) : ReactElement {

    function getWeakness(w : ElemType[]){
        return w.map(e => {
            return <img src={"/types/" + e.toString() + ".png"} style={{width: "26px", height: "26px"}}/>
        })
    }

    return (
        <div className="monster" style={{display: "flex", flexDirection: "column"}}>
            <div className="monster-img">
                <img src={"/monster/" + monster.id + ".png"} style={{width: "128px", height: "128px"}}/>
                <div className="monster-name">{monster.name}</div>
            </div>
            
            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                {getWeakness(monster.weakness ?? [])}
                <span style={{fontWeight: "bold"}}>{monster.toughness}{monster.toughnessBarCount != undefined && monster.toughnessBarCount > 1 ? ("×"+monster.toughnessBarCount) : ""}</span>
            </div>
            
            <div style={{fontWeight: "bold"}}>
                <span style={{color: "#cc0000"}}>{monster.hp}</span>
                <span>{monster.hpBarCount != undefined && monster.hpBarCount > 1 ? ("×"+monster.hpBarCount) : ""}</span>
                {monster.hpPercent && <span style={{fontWeight: "normal", color: "#666"}}>[{monster.hpPercent}%]</span>}
            </div>
        </div>
    )
}