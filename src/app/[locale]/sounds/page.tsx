import SoundsContent from "@/components/contents/sounds";
import { sounds } from "@/lib/sounds";
import { KEYWORDS } from "@/lib/utils";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
     const t = await getTranslations("allSounds.page");
     return {
          title: t("title"),
          description: t("description"),
          keywords: ["ambience","ambience sounds",...sounds.map(val=>val.id),"sound",...KEYWORDS]
     }
}

export default function SoundsPage() {
     return (
          <SoundsContent/>
     )
}