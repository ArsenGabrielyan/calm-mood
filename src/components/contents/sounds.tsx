"use client"
import AppLayout from "@/components/layout";
import { useTranslations } from "next-intl";

export default function SoundsContent(){
     const t = useTranslations("allSounds")
     return (
          <AppLayout screenHeight>
               <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">{t("title")}</h1>
               <div className="mt-4 space-y-2 flex justify-center items-center flex-col gap-4 max-w-7xl">
                    TODO: Remake a sounds page
               </div>
          </AppLayout>
     );
}