import { useState, type ReactNode } from "react";
import { SettingsContext } from "./SettingsContext";

interface SettingsProviderProps {
    children: ReactNode;
}

type UrlOptions = "Local" | "srtools"

export const SettingsProvider = ({children} : SettingsProviderProps) => {

    const [url, setUrl] = useState<UrlOptions>(localStorage.getItem("imageUrl") as UrlOptions ?? "srtools");

    function getImageUrl(id: string) : string{
        let shortId = parseInt(id.slice(0, 7));
        shortId = shortId - (shortId % 10)
        switch (url) {
            case "Local": { // We need shortId for Local
                return `/monster/${shortId}.png`;
            }
            case "srtools": {
                return `https://cdn.neonteam.dev/neonteam/assets/spriteoutput/monsterfigure/Monster_${shortId}.webp`
            }
        }
        return id;
    }

    function setImageUrl(newUrl : UrlOptions) {
        localStorage.setItem("imageUrl", newUrl);
        setUrl(newUrl);
    }

    return <SettingsContext value={{getImageUrl, setUrl: setImageUrl, getCurrentUrlSetting: url}}>
        {children}
    </SettingsContext>
}