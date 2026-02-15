import type { ReactElement } from "react";
import type { AnomalyArbitration, Monster } from "../data/types";
import "./CurrentEndgame.css"
import AAPhase from "./AAPhase";

interface CurrentAAProps {
    aa : AnomalyArbitration;
}

export default function CurrentAA({aa} : CurrentAAProps) : ReactElement {

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
                <AAPhase node={aa.knight1} name="Knight 1"/>
                <AAPhase node={aa.knight2} name="Knight 2"/>
                <AAPhase node={aa.knight3} name="Knight 3"/>
            </div>
            <div style={{display: "flex", flexDirection: "row", gap: "10em"}}>
                <AAPhase node={aa.boss} name="King in Check"/>
                <AAPhase node={aa.bossHard} name="King in Check: Plight"/>
            </div>
        </div>
    )
}