import en from './i18n/en.json' with { type: 'json' };
import cn from './i18n/cn.json' with { type: 'json' };

// This is genuinely the worst function i've ever written i think
export default function translate(str : string, language: "en" | "cn") : string{
    const lang = language == 'cn' ? cn : en;

    try {
        const keys = str.split(".");
        return keys.reduce<unknown>((prev, cur) => (prev as {[k: string] : string})[cur], lang) as string ?? str;
    } catch {
        return str;
    }

}