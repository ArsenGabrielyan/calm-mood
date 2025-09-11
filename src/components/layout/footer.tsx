import { Link } from "@/i18n/navigation";
import { ThemeToggler } from "../theme-changer/theme-toggler";
import LanguageSwitcher from "../language-switcher";
import { useTranslations } from "next-intl";

export default function AppFooter(){
     const year = new Date().getFullYear();
     const t = useTranslations("index");
     return (
          <footer className="bg-[#2d5e0d] text-white py-3 px-5 flex justify-between items-center gap-2 flex-col md:flex-row">
               <p className="font-heading text-center md:text-left text-lg md:text-xl">&copy; {year} <Link href="https://github.com/ArsenGabrielyan" className="text-white underline hover:text-[#baffc7]">{t("author")}</Link> | {t("allRightsReserved")}</p>
               <div className="flex justify-center items-center gap-3">
                    <LanguageSwitcher/>
                    <ThemeToggler/>
               </div>
          </footer>
     )
}