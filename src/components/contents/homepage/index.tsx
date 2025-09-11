"use client"
import AppLayout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import FeaturesSection from "./features-section";
import AboutSection from "./about-section";

export default function HomepageContent(){
     const t = useTranslations("index")
     return (
          <AppLayout>
               <section className="space-y-4 text-center min-h-screen flex justify-center items-center flex-col">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold">{t("appName")}</h1>
                    <p className="text-md md:text-lg lg:text-xl xl:texl-2xl">{t("appDescription")}</p>
                    <Button size="lg" asChild>
                         <Link href="#about">{t("learnMore")}</Link>
                    </Button>
               </section>
               <AboutSection/>
               <FeaturesSection/>
          </AppLayout>
     )
}