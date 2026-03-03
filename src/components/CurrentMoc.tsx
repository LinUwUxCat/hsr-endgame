import type { ReactElement } from "react";
import type { MemoryOfChaos } from "../data/types";
import "./CurrentEndgame.css"
import AAKnight from "./AAPhase";
import EffectElement from "./Effect";

interface CurrentMocProps {
    moc : MemoryOfChaos;
}

export default function CurrentMoc({moc} : CurrentMocProps) : ReactElement {

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div style={{maxWidth: "80vw"}}>
                <EffectElement effect={moc.turbulence} />
            </div>
            <div className="comp" style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)"}}>
                <AAKnight node={moc.node1} name="Node 1" />
                <AAKnight node={moc.node2} name="Node 2" />
            </div>
        </div>
    )
}