import SoundsContent from "@/components/contents/sounds";
import { sounds } from "@/lib/sounds";
import { absoluteURL, KEYWORDS } from "@/lib/utils";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
     const {locale} = await params;
     const t = await getTranslations("allSounds.page");
     const appTxt = await getTranslations("index")
     return {
          title: t("title"),
          description: t("description"),
          keywords: ["ambience","ambience sounds",...sounds.map(val=>val.id),"sound",...KEYWORDS],
          openGraph: {
               title: t("title"),
               description: t("description"),
               url: absoluteURL(`/${locale}/sounds`),
               locale,
               siteName: appTxt("appName"),
               type: "website",
               images: {
                    url: absoluteURL(appTxt("og-image")),
                    width: 1200,
                    height: 630
               }
          },
          twitter: {
               images: [{
                    url: absoluteURL(appTxt("og-image")),
                    width: 1200,
                    height: 630
               }],
               card: "summary_large_image",
               title: t("title"),
               description: t("description"),
          },
          alternates: {
               canonical: absoluteURL(`/${locale}/sounds`),
          },
     }
}

export default function SoundsPage() {
     return (
          <SoundsContent/>
     )
}