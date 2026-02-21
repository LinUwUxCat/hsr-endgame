import type { ReactElement } from "react";
import { useLanguage } from "./LanguageContext";

export default function Ts({children} : {children: string}): ReactElement {
    const {t} = useLanguage();

    return (
        <span>{t(children)}</span>
    )
}