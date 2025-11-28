import ExerciseContent from "@/components/contents/exercise";
import { absoluteURL } from "@/lib/utils";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
     const {locale} = await params;
     const t = await getTranslations("breathingExercise");
     const appTxt = await getTranslations("index")
     return {
          title: t("title"),
          description: t("description"),
          openGraph: {
               title: t("title"),
               description: t("description"),
               url: absoluteURL(`/${locale}/breathing-exercise`),
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
               canonical: absoluteURL(`/${locale}/breathing-exercise`)
          },
     }
}

export default function BreathingExercisePage() {
     return (
          <ExerciseContent/>
     );
}
