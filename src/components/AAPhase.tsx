import type { ReactElement } from "react";
import type { AAPhase } from "../data/types";
import Wave from "./Wave";

interface AAKnightProps {
    node: AAPhase;
    name: string;
}

export default function AAKnight({ node, name }: AAKnightProps): ReactElement {

    function getRecTypes() {
        if (node.recommendedTypes == undefined) return "";
        else return <div style={{display: "flex", alignItems: "center"}}>Recommended types : {node.recommendedTypes.map(e => {
            return <img src={"/types/" + e.toString() + ".png"} style={{ width: "26px", height: "26px" }} />
        })}</div>
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{name}</div>
            {getRecTypes()}
            {node.waves.map((wave, index) => <Wave wave={wave} waveNmr={index + 1} />)}
        </div>
    )
}