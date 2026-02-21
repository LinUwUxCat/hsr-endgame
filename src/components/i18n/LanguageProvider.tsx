import type { ReactNode } from "react"
import { useState } from "react";
import translate from "../../utils/i18n";
import { LangContext } from "./LanguageContext";




interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider = ({children} : LanguageProviderProps) => {

    const [lang, setLang] = useState<"en" | "cn">(localStorage.getItem("language") as "en" | "cn" ?? "en");
    function t(str : string) : string{
        return translate(str, lang);
    }

    function setLanguage(newLang: "en" | "cn") : void {
        localStorage.setItem("language", newLang);
        setLang(newLang);
    }

    return <LangContext value={{t, lang, setLang: setLanguage}}>
        {children}
    </LangContext>
}