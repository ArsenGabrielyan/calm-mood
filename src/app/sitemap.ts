import { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { absoluteURL } from "@/lib/utils";

export default function Sitemap(): MetadataRoute.Sitemap{
     const routes = ["/breathing-exercise","/sounds","/"]
     return routes.flatMap(route=>locales.map(locale=>({
          url: absoluteURL(`/${locale}${route === "/" ? "" : route}`),
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: route === "/" ? 1 : 0.8,
     })))
}