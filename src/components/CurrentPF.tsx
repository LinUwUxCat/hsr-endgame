import type { ReactElement } from "react";
import type { PureFiction } from "../data/types";
import "./CurrentEndgame.css"
import AAPhase from "./AAPhase";
import StackedEffectElement from "./StackedEffect";
import EffectElement from "./Effect";

interface CurrentPFProps {
    pf : PureFiction;
}

export default function CurrentPF({pf} : CurrentPFProps) : ReactElement {

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <div style={{width: "60vw", margin: "10px 0"}}> 
                <StackedEffectElement effects={pf.buffs ?? []} />
            </div>
            <div style={{width: "60vw", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginBottom: "20px"}}>
                {pf.anomaly?.map(v=> <EffectElement effect={v} />)}
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "50vw"}}>
                <AAPhase node={pf.node1} name="First Half"/>
                <AAPhase node={pf.node2} name="Second Half"/>
            </div>
        </div>
    )
}