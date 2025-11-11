import { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { absoluteURL } from "@/lib/utils";

function generateSitemapItem(absoluteUrl: string, priority: 1 | 0.8): MetadataRoute.Sitemap[number]{
     return {
          url: absoluteURL(absoluteUrl),
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority
     }
}

export default function Sitemap(): MetadataRoute.Sitemap{
     const routes = [
          "/",
          "/breathing-exercise",
          "/sounds"
     ]
     return routes.flatMap(route=>{
          const priority = route === "/" ? 1 : 0.8;
          return [
               generateSitemapItem(`${route === "/" ? "" : route}`,priority),
               ...locales.map(locale=>generateSitemapItem(`/${locale}${route === "/" ? "" : route}`,priority))
          ]
     })
}