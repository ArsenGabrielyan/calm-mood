import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { hasLocale } from "next-intl";
import { loadMessages } from "./config";

export default getRequestConfig(async({requestLocale}) =>{
     const requested = await requestLocale;
     const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
     const messages = await loadMessages(locale)
     return { locale, messages}
})