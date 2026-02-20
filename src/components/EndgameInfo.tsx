import type { ReactElement } from "react";
import type { Endgame } from "../data/types";
import { sd } from "../utils/date";

interface EndgameInfoProps {
    endgame: Endgame;
}

export default function EndgameInfo({endgame} : EndgameInfoProps) : ReactElement {
    return (
        <div style={{
            border: "4px solid black", 
            padding: "30px", 
            borderRadius: "20px", 
            fontSize: "1.4rem", 
            display: "flex", 
            flexDirection: "column", 
            textAlign: "center"
        }}>
            <div>{endgame.version && `[${endgame.version}]`} {endgame.name}</div>
            <div>{sd(endgame.dateStart)} - {sd(endgame.dateEnd)}</div>
        </div>
    )
}