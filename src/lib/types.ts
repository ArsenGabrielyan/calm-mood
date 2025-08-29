export interface ISounds{
     name: string,
     url: string,
     icon: string,
     volume: number
}
export type LangCodeType = 'en' | 'hy' | 'ru' | 'ka';
export type CountryCodeType = 'us' | 'am' | 'ru' | 'ge';
export interface ILanguage{
     code: LangCodeType,
     countryCode: CountryCodeType,
     label: string
}