import type { ReactElement } from "react";
import type { ApocalypticShadow } from "../data/types";
import "./CurrentEndgame.css"
import AAPhase from "./AAPhase";
import EffectElement from "./Effect";
import StackedEffectElement from "./StackedEffect";

interface CurrentASProps {
    as: ApocalypticShadow;
}

export default function CurrentAS({ as }: CurrentASProps): ReactElement {

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "99vw" }}>
            <div style={{width: "100%"}}>
                <EffectElement effect={as.buff}/>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "50vw" }}>
                <AAPhase monsterSize={2} node={as.node1} name="First Half" />
                <AAPhase monsterSize={2} node={as.node2} name="Second Half" />
            </div>
            <div className="grid" style={{gridTemplateColumns: "repeat(2, 1fr)", width: "99vw"}}>
                <div className="grid">
                    <StackedEffectElement effects={as.node1.selectableBuff ?? []}/>
                    <StackedEffectElement effects={as.node1.bossTrait ?? []}/>
                </div>
                <div>
                    <StackedEffectElement effects={as.node2.selectableBuff ?? []}/>
                    <StackedEffectElement effects={as.node2.bossTrait ?? []}/>
                </div>
            </div>
        </div>
    )
}