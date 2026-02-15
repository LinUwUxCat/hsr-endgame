import type { ReactElement } from "react";
import type { Phase } from "../data/types";
import Wave from "./Wave";

interface MocNodeProps {
    node : Phase;
}

export default function MocNode({node} : MocNodeProps) : ReactElement {

    function getRecTypes() {
        if (node.recommendedTypes == undefined) return "";
        else return <div>Recommended types : {node.recommendedTypes}</div>
    }

    return (
        <div>
            {getRecTypes()}
            <Wave wave={node.wave1} waveNmr={1} />
            <Wave wave={node.wave2} waveNmr={2} />
        </div>
    )
}