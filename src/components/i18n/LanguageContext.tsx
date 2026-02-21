import { createContext, useContext } from "react";

export const LangContext = createContext<{t: (str:string)=>string, lang: "en" | "cn", setLang: (newLang: "en" | "cn") => void}>({
    lang: "en",
    setLang: () => "",
    t: () => "ERROR"
});


export const useLanguage = () => useContext(LangContext);