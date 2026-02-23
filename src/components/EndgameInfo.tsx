import type { ReactElement } from "react";
import type { Endgame } from "../data/types";

interface EndgameInfoProps {
    endgame: Endgame;
}

export default function EndgameInfo({endgame} : EndgameInfoProps) : ReactElement {
    return (
        <div style={{
            border: "2px solid black", 
            padding: "15px 30px", 
            borderRadius: "6px", 
            fontSize: "1.4rem", 
            display: "flex", 
            flexDirection: "column", 
            textAlign: "center",
            fontWeight: 600,
            margin: "25px 0"
        }}>
            <div>{endgame.version && `[${endgame.version}]`} {endgame.name}</div>
            <div>{endgame.dateStart} - {endgame.dateEnd}</div>
        </div>
    )
}