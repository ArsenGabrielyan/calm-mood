import { ILanguage, LangCodeType } from "./types";

export const languages = [
     {code: "hy", countryCode: "am", label: "Հայերեն"},
     {code: "en", countryCode: "us", label: "English"},
     {code: "ru", countryCode: "ru", label: "Русский"},
     {code: "ka", countryCode: "ge", label: "ქართული"}
] as const satisfies readonly ILanguage[];

export const locales: LangCodeType[] = languages.map(lang=>lang.code);
export const defaultLocale: LangCodeType = "hy";