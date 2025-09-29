import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { SiGithub } from "react-icons/si"

export default function AppFooter(){
     const year = new Date().getFullYear();
     const t = useTranslations("index");
     return (
          <footer className="bg-[#2d5e0d] text-white py-3 px-5 flex justify-between items-center gap-2 flex-col md:flex-row">
               <p className="font-heading text-center md:text-left text-lg md:text-md">&copy; {year} <Link href="https://github.com/ArsenGabrielyan" className="text-white underline hover:text-[#baffc7]">{t("author")}</Link> | {t("allRightsReserved")}</p>
               <div className="flex items-center gap-2">
                    <Button variant="ghost" asChild>
                         <Link href="https://github.com/ArsenGabrielyan/calm-mood"><SiGithub className="size-6"/> {t("github-link")}</Link>
                    </Button>
               </div>
          </footer>
     )
}