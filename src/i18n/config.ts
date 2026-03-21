import { ILanguage, LangCodeType, MessageSchema } from "./types";

export const languages = [
     {code: "hy", countryCode: "am", label: "Հայերեն"},
     {code: "en", countryCode: "us", label: "English"},
     {code: "ru", countryCode: "ru", label: "Русский"},
     {code: "ka", countryCode: "ge", label: "ქართული"}
] as const satisfies readonly ILanguage[];

export const locales: LangCodeType[] = languages.map(lang=>lang.code);
export const defaultLocale: LangCodeType = "hy";

export const messages = [
     "common",
     "pages",
     "website",
] as const

export async function loadMessages(locale: LangCodeType): Promise<MessageSchema>{
     const [common, pages, website] = await Promise.all(
          messages.map(msg=>
               import(`../../i18n/${locale}/${msg}.json`).then(m=>m.default)
          )
     );
     return {
          ...common,
          ...pages,
          ...website,
     }
}