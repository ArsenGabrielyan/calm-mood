import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
     const t = await getTranslations("notFound");
     return {
          title: t("metaTitle")
     }
}

export default function CatchAll(): void{
     notFound();
}