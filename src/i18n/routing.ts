import { defineRouting } from "next-intl/routing";
import { languages } from "./config";

export const routing = defineRouting({
     locales: languages.map(lang=>lang.code),
     defaultLocale: "hy",
     localePrefix: {
          mode: "always",
          prefixes: {
               ka: "/ge",
          }
     },
     localeDetection: true
})