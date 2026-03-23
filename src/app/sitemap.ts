import { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { absoluteURL } from "@/lib/utils";

export default function Sitemap(): MetadataRoute.Sitemap{
     const routes = [
          "/",
          "/breathing-exercise",
          "/sounds"
     ]
     return routes.map(route=>{
          const priority = route === "/" ? 1 : 0.8;
          return {
               url: absoluteURL(route),
               lastModified: new Date(),
               changeFrequency: "weekly",
               priority,
               alternates: {
                    languages: {
                         "x-default": absoluteURL(route),
                         ...Object.fromEntries(locales.map((locale) => [
                              locale,
                              absoluteURL(locale === "hy" ? route : `/${locale}${route}`)
                         ])
                   )}
               }
          }
     })
}