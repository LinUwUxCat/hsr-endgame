import type { ReactElement } from "react";
import type { Effect } from "../data/types";
import { getEffect } from "../utils/effect";

interface StackedEffectElementProps {
    effects: Effect[]
}

export default function StackedEffectElement({effects} : StackedEffectElementProps) : ReactElement {
    if (effects.length == 0) return <></>
    if (effects.reduce((prev, cur) => prev+(cur.effect?1:0), 0) == 0) return <></>

    return (
        <div style={{
            backgroundColor: "#3a3a3a",
            color: "white",
            display: "flex",
            flexDirection: "column",
            padding: "25px",
            borderRadius: "10px"
        }}>
            {effects.map(effect => (
                <div style={{display: "flex", flexDirection: "column",}}>
                    <div>{effect.name ?? ""}</div>
                    <div style={{display: "flex", flexDirection: "column"}}>{getEffect(effect.effect ?? "")}</div>
                </div>
            ))}
            
        </div>
    )
}