import type { ReactElement } from "react";
import { NavLink } from "react-router";

export default function Navbar(): ReactElement {
    return (
        <div style={{width: "100%", height: "64px", display: "flex", alignItems: "center"}}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/chaos">Memory of Chaos</NavLink>
            <NavLink to="/fiction">Pure Fiction</NavLink>
            <NavLink to="/shadow">Apocalyptic Shadow</NavLink>
            <NavLink to="/arbitration">Anomaly Arbitration</NavLink>
        </div>
    )
}
