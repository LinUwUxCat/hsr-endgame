import type { ReactElement } from "react";
import type { PureFiction } from "../data/types";
import "./CurrentEndgame.css"
import AAPhase from "./AAPhase";

interface CurrentPFProps {
    pf : PureFiction;
}

export default function CurrentPF({pf} : CurrentPFProps) : ReactElement {

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "50vw"}}>
                <AAPhase node={pf.node1} name="First Half"/>
                <AAPhase node={pf.node2} name="Second Half"/>
            </div>
        </div>
    )
}