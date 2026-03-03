import { useEffect, useState, type ReactNode } from "react";
import { useLanguage } from "./LanguageContext";
import monsters_json from "../../data/monsters.json"
import type { Monster } from "../../data/types";
import { mergeById } from "../../utils/merge";
import { LoadedFileContext } from "./LoadedFileContext";

interface LoadedFileProviderProps {
    children: ReactNode;
}

// To be loaded under LanguageProvider as it's needed in there
export const LoadedFileProvider = ({children} : LoadedFileProviderProps) => {

    const [monsters, setMonsters] = useState<Monster[]>(monsters_json as Monster[]);

    const { lang } = useLanguage();

    useEffect(() => {
        fetch(`/data/${lang}/monsters.json`)
        .then(d => d.json()
            .then(json =>
                setMonsters(mergeById(monsters_json, json) as Monster[])
            )
        )
    }, [lang])

    return <LoadedFileContext value={{monsters, setMonsters}}>
        {children}
    </LoadedFileContext>
}