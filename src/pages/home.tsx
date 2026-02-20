import type { ReactElement } from "react";

export default function HomePage(): ReactElement {

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div>Use the navbar to navigate.</div>
            <div>There is a lot of missing data here. Most monster images and names are missing.</div>
            <div>That said, HP values should be correct for anything pre-4.0.</div>
            <div>There will be a "missing data" line wherever HP is incorrect.</div>
            <div>If you know of a way to extract endgame data from the game directly, please message @linuxcat on discord.</div>
        </div>
    )

}