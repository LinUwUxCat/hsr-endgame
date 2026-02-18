import type { ReactElement } from "react";
import { NavLink } from "react-router";
import "./nav.css"

export default function Navbar(): ReactElement {
    return (
        <div className="navbar" style={{
            width: "100%",
            height: "48px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#333333"
        }}>
            <NavLink className="navlink" to="/"><img src=""/>Home</NavLink>
            <NavLink className="navlink" to="/chaos"><img src="/home/MemoryOfChaos.webp"/>Memory of Chaos</NavLink>
            <NavLink className="navlink" to="/fiction"><img src="/home/PureFiction.webp"/>Pure Fiction</NavLink>
            <NavLink className="navlink" to="/shadow"><img src="/home/ApocalypticShadow.webp"/>Apocalyptic Shadow</NavLink>
            <NavLink className="navlink" to="/arbitration"><img src="/home/AnomalyArbitration.webp"/>Anomaly Arbitration</NavLink>
        </div>
    )
}
