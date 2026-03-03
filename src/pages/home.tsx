import type { ReactElement } from "react";
import Ts from "../components/i18n/ts";

export default function HomePage(): ReactElement {

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <Ts>home.warning</Ts>
            <div>Use the navbar to navigate.</div>
            <div>Some data, like Buffs/Effects (in english) is still missing.</div>
            <div>The AS Node 2 Buff data is missing in chinese as well.</div>
            <div>If you know of a way to extract endgame data from the game directly, please message @linuxcat on discord.</div>
        </div>
    )

}