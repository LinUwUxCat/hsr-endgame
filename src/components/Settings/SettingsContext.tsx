import { createContext, useContext } from "react";

export const SettingsContext = createContext<{
    getImageUrl: (id: string) => string,
    setUrl: (url: "Local" | "srtools") => void,
    getCurrentUrlSetting: "Local" | "srtools"
}>({
    getImageUrl: (id) => id,
    setUrl: () => null,
    getCurrentUrlSetting: "Local"
});


export const useSettings = () => useContext(SettingsContext);