import type { ReactElement } from "react";
import type { ApocalypticShadow } from "../data/types";
import "./CurrentEndgame.css"
import AAPhase from "./AAPhase";

interface CurrentASProps {
    as: ApocalypticShadow;
}

export default function CurrentAS({ as }: CurrentASProps): ReactElement {

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "50vw" }}>
                <AAPhase node={as.node1} name="First Half" />
                <AAPhase node={as.node2} name="Second Half" />
            </div>
        </div>
    )
}