import { defineRouting } from "next-intl/routing";
import { locales, defaultLocale } from "./config";

export const routing = defineRouting({
     locales,
     defaultLocale,
     localePrefix: {
          mode: "as-needed",
          prefixes: {
               ka: "/ge",
          }
     },
     localeDetection: true
})