"use client"
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { Download } from "lucide-react";
import { useTranslations } from "next-intl";

export default function DownloadSection(){
     const t = useTranslations("download")
     return (
          <section className="bg-background text-foreground p-8 min-h-[40vh] flex justify-center scroll-m-20" id="features">
               <div className="flex flex-col items-center justify-center w-full gap-8 max-w-7xl">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5 font-semibold border-primary border-b-2 pb-2.5 w-fit">{t("title")}</h2>
                    <p className="text-base md:text-lg text-center">{t("desc")}</p>
                    <Button asChild>
                         <Link href="https://github.com/ArsenGabrielyan/calm-mood-desktop/releases/latest" target="_blank" rel="noreferrer nofollower noopener">
                              <Download/>
                              {t("button")}
                         </Link>
                    </Button>
               </div>
          </section>
     )
}