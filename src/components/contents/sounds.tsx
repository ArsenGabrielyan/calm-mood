"use client"
import AppLayout from "@/components/layout";
import { sounds } from "@/lib/sounds";
import { useTranslations } from "next-intl";

export default function SoundsContent(){
     const t = useTranslations("allSounds")
     return (
          <AppLayout screenHeight>
               <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">{t("title")}</h1>
               <div className="mt-4 space-y-2 flex justify-center items-center flex-col gap-4 max-w-7xl">
                    TODO: Remake a sounds page
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                         {sounds.map(({id,name,Icon})=>(
                              <div key={id} className="w-full space-y-2">
                                   <Icon/>
                                   {t(name)}
                              </div>
                         ))}
                    </div>
               </div>
          </AppLayout>
     );
}