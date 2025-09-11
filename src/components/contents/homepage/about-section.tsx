"use client"
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useCurrentTheme } from "@/hooks/use-curr-theme";
import { useEffect, useState } from "react";

export default function AboutSection(){
     const t = useTranslations("about")
     const currentTheme = useCurrentTheme()
     const [logo, setLogo] = useState("");
     useEffect(()=>{
          setLogo(currentTheme==="dark" ? "/images/logo-dark-aero.png" : "/images/logo-aero.png")
     },[currentTheme])
     return (
          <section className="bg-background text-foreground p-8 min-h-[40vh] flex justify-center scroll-m-20" id="about">
               <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full gap-8 max-w-6xl">
                    <div className="space-y-3 flex flex-col items-center justify-center gap-1.5 lg:items-start">
                         <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5 font-semibold border-primary border-b-2 pb-2.5 w-fit">{t("title")}</h2>
                         <p className="text-base md:text-lg lg:text-xl">{t("text")}</p>
                         <Button size="lg" asChild>
                              <Link href="/sounds">{t("allSoundsBtn")}</Link>
                         </Button>
                    </div>
                    {logo && (
                         <Image src={logo} alt="aero-logo" width={275} height={275} className="rounded-md shadow-md"/>
                    )}
               </div>
          </section>
     )
}