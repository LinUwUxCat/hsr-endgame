import type { ReactElement } from "react";
import type { MemoryOfChaos } from "../data/types";
import "./CurrentEndgame.css"
import MocNode from "./MocNode";

interface CurrentMocProps {
    moc : MemoryOfChaos;
}

export default function CurrentMoc({moc} : CurrentMocProps) : ReactElement {

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div className="comp">
                <MocNode node={moc.node1} nodeNbr={1} />
                <MocNode node={moc.node2} nodeNbr={2}/>
            </div>
        </div>
    )
}