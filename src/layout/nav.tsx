import type { ReactElement } from "react";
import { NavLink } from "react-router";
import "./nav.css"
import Popup from "reactjs-popup";
import { useLanguage } from "../components/i18n/LanguageContext";
import Ts from "../components/i18n/ts";

export default function Navbar(): ReactElement {
    const {t, lang, setLang} = useLanguage();

    return (
        <div className="navbar">
            <NavLink className="navlink" to="/"><img src=""/>{t("home.home-title")}</NavLink>
            <NavLink className="navlink" to="/chaos"><img src="/home/MemoryOfChaos.webp"/>{t("home.moc")}</NavLink>
            <NavLink className="navlink" to="/fiction"><img src="/home/PureFiction.webp"/>{t("home.pf")}</NavLink>
            <NavLink className="navlink" to="/shadow"><img src="/home/ApocalypticShadow.webp"/>{t("home.as")}</NavLink>
            <NavLink className="navlink" to="/arbitration"><img src="/home/AnomalyArbitration.webp"/>{t("home.aa")}</NavLink>
            <div style={{flexGrow: 1}}></div>
            <div className="navlink" onClick={()=>setLang(lang == "cn" ? "en" : "cn")}><img src="/home/translate.png" style={{marginRight: "10px"}} height={32} width={32}/><span>{lang == "cn" ? "EN" : "CN"}</span></div>
            <Popup trigger={<div className="navlink">About</div>} modal>
                <div className="about-popup">
                    <div><Ts>home.about.created-by</Ts><a href="https://linuxc.at">LinuxCat</a><Ts>home.about.created-by-2</Ts></div>
                    <Ts>home.about.cpy1</Ts>
                    <Ts>home.about.cpy2</Ts>
                    <div><Ts>home.about.cpy3</Ts><a href="https://openfontlicense.org/">https://openfontlicense.org/</a></div>
                    <div><Ts>home.test</Ts></div>
                </div>
            </Popup> 
        </div>
    )
}
