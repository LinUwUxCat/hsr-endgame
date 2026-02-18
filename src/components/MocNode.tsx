import type { ReactElement } from "react";
import type { MoCPhase } from "../data/types";
import Wave from "./Wave";

interface MocNodeProps {
    node: MoCPhase;
    nodeNbr: number;
}

export default function MocNode({ node, nodeNbr }: MocNodeProps): ReactElement {

    function getRecTypes() {
        if (node.recommendedTypes == undefined) return "";
        else return <div style={{ display: "flex", alignItems: "center" }}>Recommended types : {node.recommendedTypes.map(e => {
            return <img src={"/types/" + e.toString() + ".png"} style={{ width: "26px", height: "26px" }} />
        })}</div>
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Node {nodeNbr}</div>
            {getRecTypes()}
            <Wave wave={node.wave1} waveNmr={1} />
            {node.wave2.length > 0 && <Wave wave={node.wave2} waveNmr={2} />}
        </div>
    )
}