import type { ReactElement } from "react";
import type { Endgame, OldEndgame } from "../data/types";
import { sd } from "../utils/date";

interface EndgameInfoProps {
    endgame: Endgame | OldEndgame;
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
            margin: "5% 0"
        }}>
            <div>{endgame.version && `[${endgame.version}]`} {endgame.name}</div>
            <div>{typeof endgame.dateStart == "string" ? endgame.dateStart: sd(endgame.dateStart!)} - {typeof endgame.dateEnd == "string" ? endgame.dateEnd: sd(endgame.dateEnd!)}</div>
        </div>
    )
}