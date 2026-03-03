import type { ReactElement } from "react";
import type { Effect } from "../data/types";
import { getEffect } from "../utils/effect";

interface EffectElementProps {
    effect?: Effect
}

export default function EffectElement({effect} : EffectElementProps) : ReactElement {
    if (effect == undefined || (effect.name == undefined && effect.effect == undefined)) return <></>;

    return (
        <div style={{
            backgroundColor: "#3a3a3a",
            color: "white",
            display: "flex",
            flexDirection: "column",
            padding: "25px",
            borderRadius: "10px"
        }}>
            <div style={{fontWeight: 700}}>{effect.name ?? ""}</div>
            <div style={{display: "flex", flexDirection: "column"}}>{getEffect(effect.effect ?? "")}</div>
        </div>
    )
}