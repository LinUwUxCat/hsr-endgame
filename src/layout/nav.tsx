import type { ReactElement } from "react";
import { NavLink } from "react-router";
import "./nav.css"
import Popup from "reactjs-popup";

export default function Navbar(): ReactElement {
    return (
        <div className="navbar">
            <NavLink className="navlink" to="/"><img src=""/>Home</NavLink>
            <NavLink className="navlink" to="/chaos"><img src="/home/MemoryOfChaos.webp"/>Memory of Chaos</NavLink>
            <NavLink className="navlink" to="/fiction"><img src="/home/PureFiction.webp"/>Pure Fiction</NavLink>
            <NavLink className="navlink" to="/shadow"><img src="/home/ApocalypticShadow.webp"/>Apocalyptic Shadow</NavLink>
            <NavLink className="navlink" to="/arbitration"><img src="/home/AnomalyArbitration.webp"/>Anomaly Arbitration</NavLink>
            <div style={{flexGrow: 1}}></div>
            <Popup trigger={<div className="navlink">About</div>} modal>
                <div className="about-popup">
                    <div>Website created by <a href="https://linuxc.at">LinuxCat</a>.</div>
                    <div>The images used on this website are sourced from Honkai: Star Rail.</div>
                    <div>Honkai: Star Rail is a registered trademark of miHoYo Co., Ltd. This website is not affiliated with miHoYo.</div>
                    <div>Montserrat is licensed under the SIL Open Font License, Version 1.1. This license is available at <a href="https://openfontlicense.org/">https://openfontlicense.org/</a></div>
                </div>
            </Popup> 
        </div>
    )
}
