import type { ReactElement } from "react";
import type { ElemType, Monster, PFMonster } from "../data/types";
import "./Monster.css"
import { useSettings } from "./Settings/SettingsContext";
import { useNavigate } from "react-router";

interface MonsterElementProps {
   monster : Monster;
   size?: number;
   noclick?: boolean;
}

export default function MonsterElement({monster, size, noclick} : MonsterElementProps) : ReactElement {
    if (noclick == undefined) noclick = false;
    
    if (size == undefined) size = 1;

    const {getImageUrl} = useSettings();

    function getWeakness(w : ElemType[]){
        return w.map((e, i) => {
            return <img src={"/types/" + e.toString() + ".png"} style={{width: "26px", height: "26px"}} key={i}/>
        })
    }

    const navigate = useNavigate();

    return (
        <div className="monster" style={{display: "flex", flexDirection: "column"}} onClick={() => {if (!noclick) navigate(`/monster/${monster.id}`)}}>
            <div className="monster-img">
                <img src={getImageUrl(monster.image ?? monster.id ?? "/nonexistent")} style={{width: `${128*size}px`, height: `${128*size}px`}}/>
                <div className="monster-name" style={{width: `${128*size}px`, height: `${128*size}px`}}>{monster.name ?? monster.id ?? "UNKNOWN"}</div>
                {(monster as PFMonster).amount != undefined && (monster as PFMonster).amount! > 1 && <div className="monster-amount">{(monster as PFMonster).amount}</div>}
            </div>
            
            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                {getWeakness(monster.weakness ?? [])}
                <span style={{fontWeight: "bold"}}>{typeof monster.toughness == "number" ? monster.toughness : monster.toughness?.join(", ")}{monster.toughnessBarCount != undefined && monster.toughnessBarCount > 1 ? ("×"+monster.toughnessBarCount) : ""}</span>
            </div>
            
            {monster.hp && <div style={{fontWeight: "bold", display: "flex", alignItems: "center"}}>
                <img src="/icon/HP.webp" height={32} width={32} style={{filter: "invert(1)"}}/>
                <span style={{color: "#cc0000"}}>{monster.hp.toFixed(0)}</span>
                <span>{monster.hpBarCount != undefined && monster.hpBarCount > 1 ? ("×"+monster.hpBarCount) : ""}</span>
                {monster.hpPercent && <span style={{fontWeight: "normal", color: "#666"}}> [{Math.round(monster.hpPercent)}%]</span>}
            </div>}

            {monster.speed != undefined && monster.speed != 0 && <div style={{display: "flex", alignItems: "center"}}>
                <img src="/icon/SPD.webp" height={32} width={32} style={{filter: "invert(1)"}}/>
                <span>{monster.speed}</span>
            </div>}

            {monster.unsure && <div style={{fontSize: "0.7rem", color: "grey"}} title="Missing Data : HP Value incorrect">
                missing data
            </div>}
        </div>
    )
}