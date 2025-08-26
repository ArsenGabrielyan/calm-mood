import SoundsContent from "@/components/contents/sounds";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
     const t = await getTranslations("allSounds");
     return {
          title: t("title")
     }
}

export default function SoundsPage() {
     return (
          <SoundsContent/>
     )
}