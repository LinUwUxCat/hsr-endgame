import type { ReactElement } from "react";
import type { AnomalyArbitration } from "../data/types";
import "./CurrentEndgame.css"
import AAPhase from "./AAPhase";
import EffectElement from "./Effect";
import StackedEffectElement from "./StackedEffect";

interface CurrentAAProps {
    aa : AnomalyArbitration;
}

export default function CurrentAA({aa} : CurrentAAProps) : ReactElement {

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <div className="grid" style={{gridTemplateColumns: "repeat(3, 1fr)", width: "99vw", marginBottom: "10px"}}>
                <StackedEffectElement effects={aa.knight1.anomaly ?? []}/>
                <StackedEffectElement effects={aa.knight2.anomaly ?? []}/>
                <StackedEffectElement effects={aa.knight3.anomaly ?? []}/>
            </div>
            <div className="grid" style={{gridTemplateColumns: "repeat(3, 1fr)", width: "99vw"}}>
                <AAPhase node={aa.knight1} name="Knight 1"/>
                <AAPhase node={aa.knight2} name="Knight 2"/>
                <AAPhase node={aa.knight3} name="Knight 3"/>
            </div>
            <div className="grid" style={{gridTemplateColumns: "repeat(3, 1fr)", width: "99vw", marginBottom: "10px"}}>
                {aa.boss.buffs?.map(e => <EffectElement effect={e}/>)}
            </div>
            <div className="grid" style={{gridTemplateColumns: "repeat(2, 1fr)", width: "99vw"}}>
                <div>
                    <StackedEffectElement effects={aa.boss.anomaly ?? []} />
                    <AAPhase node={aa.boss} name="King in Check"/>
                </div>
                <div>
                    <StackedEffectElement effects={aa.bossHard.anomaly ?? []} />
                    <AAPhase node={aa.bossHard} name="King in Check: Plight"/>
                </div>
            </div>
        </div>
    )
}