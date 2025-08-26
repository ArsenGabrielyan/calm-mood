"use client"
import { AudioLines, Languages, Palette, Wind } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FeaturesSection(){
     const t = useTranslations("features")
     return (
          <section className="bg-background text-foreground p-8 min-h-[40vh] flex justify-center scroll-m-20" id="features">
               <div className="flex flex-col items-center justify-center w-full gap-8 max-w-7xl">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold border-primary border-b-2 pb-2.5 w-fit">{t("title")}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="flex justify-center items-center flex-col gap-2 text-center">
                              <AudioLines className="text-primary size-14"/>
                              <h3 className="text-xl md:text-2xl font-semibold">{t("sounds.title")}</h3>
                              <p>{t("sounds.description")}</p>
                         </div>
                         <div className="flex justify-center items-center flex-col gap-2 text-center">
                              <Wind className="text-primary size-14"/>
                              <h3 className="text-xl md:text-2xl font-semibold">{t("exercise.title")}</h3>
                              <p>{t("exercise.description")}</p>
                         </div>
                         <div className="flex justify-center items-center flex-col gap-2 text-center">
                              <Palette className="text-primary size-14"/>
                              <h3 className="text-xl md:text-2xl font-semibold">{t("themes.title")}</h3>
                              <p>{t("themes.description")}</p>
                         </div>
                         <div className="flex justify-center items-center flex-col gap-2 text-center">
                              <Languages className="text-primary size-14"/>
                              <h3 className="text-xl md:text-2xl font-semibold">{t("multilang.title")}</h3>
                              <p>{t("multilang.description")}</p>
                         </div>
                    </div>
               </div>
          </section>
     )
}