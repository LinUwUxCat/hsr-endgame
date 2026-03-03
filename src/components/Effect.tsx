import type { ReactElement, ReactNode } from "react";
import type { Effect } from "../data/types";

interface EffectElementProps {
    effect?: Effect
}

export default function EffectElement({effect} : EffectElementProps) : ReactElement {
    if (effect == undefined || (effect.name == undefined && effect.effect == undefined)) return <></>;

    // This is a great example of terrible fucking code.
    // This is the kind of thing people would just ask an LLM to do nowadays. but out of principle, i won't. 
    function getEffect(e : string) : ReactNode {
        return e
        .replaceAll("<unbreak>", "") // Remove this
        .replaceAll("</unbreak>", "")// Remove this
        .split(/<br>|\\n/).map((line, ind) => {  // Do a div per line break
            return <div key={ind}>{line.split("</color>").map((v, iii) => { // Color Part : 
                let index = v.indexOf("<color=") + 7; // Find Color - Method 1
                if (index != 6) {
                    let endIndex = index + v.substring(index).indexOf(">");
                    let color = v.substring(index, endIndex);
                    let value = v.substring(endIndex+1);
                    return <span key={iii}>{v.substring(0, index-7)}<span style={{color: color}}>{value}</span></span>
                } else { // Find color - method 2
                    index = v.indexOf("<color style='color:") + 20;
                    if (index != 19) {
                        let endIndex = index + v.substring(index).indexOf(";'>");
                        let color = v.substring(index, endIndex);
                        let value = v.substring(endIndex+3);
                        return <span key={iii}>{v.substring(0, index-20)}<span style={{color: color}}>{value}</span></span> 
                    } else { // If there was no color found, then just give a span
                        return <span key={iii}>{v}</span>
                    }
                }
            })}</div>
        })
    }

    return (
        <div style={{
            backgroundColor: "#3a3a3a",
            color: "white",
            display: "flex",
            flexDirection: "column",
            padding: "25px",
            borderRadius: "10px"
        }}>
            <div>{effect.name ?? ""}</div>
            <div style={{display: "flex", flexDirection: "column"}}>{getEffect(effect.effect ?? "")}</div>
        </div>
    )
}