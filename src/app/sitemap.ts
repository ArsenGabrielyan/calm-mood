import { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { absoluteURL } from "@/lib/utils";
import { LangCodeType } from "@/i18n/types";
import { Languages } from "next/dist/lib/metadata/types/alternative-urls-types";

function generateLocalizedPages(path: string): Languages<LangCodeType>{
     const localized = locales.map(val=>[
          val,
          absoluteURL(val==="hy" ? path : `/${val}${path}`)
     ]);
     return Object.fromEntries(localized)
}

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
                    languages: generateLocalizedPages(route)
               }
          }
     })
}