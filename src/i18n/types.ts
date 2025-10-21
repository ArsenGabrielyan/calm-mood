import hyBase from "../../i18n/hy.json"

export type LangCodeType = 'en' | 'hy' | 'ru' | 'ka';
type CountryCodeType = 'us' | 'am' | 'ru' | 'ge';
export interface ILanguage{
     code: LangCodeType,
     countryCode: CountryCodeType,
     label: string
}
export type MessageSchema = typeof hyBase;