import type { ReactElement } from "react";
import type { MemoryOfChaos } from "../data/types";
import "./CurrentEndgame.css"
import AAKnight from "./AAPhase";

interface CurrentMocProps {
    moc : MemoryOfChaos;
}

export default function CurrentMoc({moc} : CurrentMocProps) : ReactElement {

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div className="comp">
                <AAKnight node={moc.node1} name="Node 1" />
                <AAKnight node={moc.node2} name="Node 2" />
            </div>
        </div>
    )
}