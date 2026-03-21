import hyCommon from "@i18n/hy/common.json"
import hyWebsite from "@i18n/hy/website.json"
import hyPages from "@i18n/hy/pages.json"

import { NamespaceKeys, NestedKeyOf, useTranslations } from "next-intl";

export type LangCodeType = 'en' | 'hy' | 'ru' | 'ka';
type CountryCodeType = 'us' | 'am' | 'ru' | 'ge';
export interface ILanguage{
     code: LangCodeType,
     countryCode: CountryCodeType,
     label: string
}
export type MessageSchema = (
     typeof hyCommon &
     typeof hyWebsite &
     typeof hyPages
)

type TranslationNS = NamespaceKeys<MessageSchema,NestedKeyOf<MessageSchema>>
export type TFunction<T extends TranslationNS> = ReturnType<typeof useTranslations<T>>