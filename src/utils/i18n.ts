import en from './i18n/en.json' with { type: 'json' };
import cn from './i18n/cn.json' with { type: 'json' };

export default function translate(str : string, language: "en" | "cn") : string{
    const lang = language == 'cn' ? cn : en;
    let last : unknown = lang; // This is the worst thing ever

    try {
        const keys = str.split(".");
        keys.forEach(k => {
            last = last[k];
        })
    } catch {
        return str;
    }

    return (last as string) ?? str; 
}