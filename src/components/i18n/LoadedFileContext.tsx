import { createContext, useContext } from "react";
import type { Monster } from "../../data/types";

export const LoadedFileContext = createContext<{
    monsters: Monster[],
    setMonsters: (newMonsters: Monster[]) => void,
}>({
    monsters: [],
    setMonsters: () => null,
});


export const useLoadedFile = () => useContext(LoadedFileContext);