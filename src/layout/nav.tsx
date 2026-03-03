import type { ReactElement } from "react";
import { NavLink } from "react-router";
import "./nav.css"
import Popup from "reactjs-popup";
import { useLanguage } from "../components/i18n/LanguageContext";
import Ts from "../components/i18n/ts";
import { useSettings } from "../components/Settings/SettingsContext";

export default function Navbar(): ReactElement {
    const {t, lang, setLang} = useLanguage();
    const { setUrl, getCurrentUrlSetting } = useSettings();

    return (
        <div className="navbar">
            <NavLink className="navlink" to="/"><img width="38" height={38} src="/home/home.webp"/>{t("home.home-title")}</NavLink>
            <NavLink className="navlink" to="/chaos"><img src="/home/MemoryOfChaos.webp"/>{t("home.moc")}</NavLink>
            <NavLink className="navlink" to="/fiction"><img src="/home/PureFiction.webp"/>{t("home.pf")}</NavLink>
            <NavLink className="navlink" to="/shadow"><img src="/home/ApocalypticShadow.webp"/>{t("home.as")}</NavLink>
            <NavLink className="navlink" to="/arbitration"><img src="/home/AnomalyArbitration.webp"/>{t("home.aa")}</NavLink>
            <div style={{flexGrow: 1}}></div>
            <div className="navlink" onClick={()=>setLang(lang == "cn" ? "en" : "cn")}><img src="/home/translate.png" style={{marginRight: "10px"}} height={32} width={32}/><span>{lang == "cn" ? "EN" : "CN"}</span></div>
            <Popup trigger={<div className="navlink">Settings</div>} modal>
                <div className="about-popup">
                    <div className="about-about">Settings</div>
                    <div className="about-settings">
                        <div className="settings-url">
                            <span>Image url :</span>
                            <select onChange={(e) => setUrl(e.target.value as "Local" | "srtools")} defaultValue={getCurrentUrlSetting}>
                                <option value="Local">Local</option>
                                <option value="srtools">SRTools</option>
                            </select>
                        </div>
                    </div>
                    <div className="about-about">About</div>
                    <div><Ts>home.about.created-by</Ts><a href="https://linuxc.at">LinuxCat</a><Ts>home.about.created-by-2</Ts></div>
                    <Ts>home.about.cpy1</Ts>
                    <Ts>home.about.cpy2</Ts>
                    <div><Ts>home.about.cpy3</Ts><a href="https://openfontlicense.org/">https://openfontlicense.org/</a></div>
                </div>
            </Popup> 
        </div>
    )
}
