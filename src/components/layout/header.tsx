"use client"
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Menu, X } from "lucide-react"
import { useTranslations } from "next-intl";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { useCurrentTheme } from "@/hooks/use-curr-theme";
import { ThemeToggler } from "../theme-changer/theme-toggler";
import LanguageSwitcher from "../language-switcher";

const links = [
     {name: "links.sounds", url: "/sounds"},
     {name: "links.exercise", url: "/breathing-exercise"},
]

export default function AppHeader(){
     const t = useTranslations("index")
     const isMobile = useIsMobile()
     const [isOpen, setIsOpen] = useState(false);
     const [isSticky, setIsSticky] = useState(false);
     const currentTheme = useCurrentTheme()
     const logo = useMemo(() => {
          if (!isSticky) return "logo.original";
          return currentTheme === "light" ? "logo.green" : "logo.lime";
     }, [isSticky, currentTheme]);

     useEffect(()=>{
          function handleScroll(this: Window) {
               setIsSticky(this.scrollY > 20)
          }
          window.addEventListener("scroll",handleScroll)
          return () => {
               window.removeEventListener("scroll",handleScroll)
          }
     },[])
     return (
          <header className={cn(isSticky ? "bg-muted text-primary shadow-md" : "bg-[#2d5e0d] text-white", "py-2 px-4 flex justify-between items-center gap-2 fixed top-0 left-0 z-20 w-full h-[91px] transition-all")}>
               <Link href="/" title={t("backButton")}><Image src={t(logo)} alt="logo" width={220} height={75}/></Link>
               {isMobile && (
                    <Button variant="ghost" size="icon" className={cn(isSticky ? "text-foreground" : "text-white")} onClick={()=>setIsOpen(!isOpen)}>
                         {isOpen ? <X className="size-8"/> : <Menu className="size-8"/>}
                    </Button>
               )}
               <ul className={cn("font-heading gap-2 lg:gap-4.5 items-center justify-center fixed lg:relative transition-all top-[90px] lg:top-0 left-0 w-full lg:w-fit flex-col lg:flex-row p-2 lg:p-0", isMobile && !isOpen ? "hidden" : "flex", isMobile && (isSticky ? "bg-muted text-primary border-b border-accent" : "bg-[#2d5e0d]"))}>
                    {links.map((link,i)=>(
                         <li key={`link-${i}`} className={cn("text-xl pb-1 border-b-2 border-b-transparent capitalize",isSticky ? "hover:border-b-primary" : "hover:border-b-white")}><Link href={link.url} title={t(link.name)}>{t(link.name)}</Link></li>
                    ))}
                    {isMobile && (
                         <li className="flex justify-center items-center gap-3">
                              <LanguageSwitcher/>
                              <ThemeToggler/>
                         </li>
                    )}
               </ul>
               {!isMobile && (
                    <div className="flex justify-center items-center gap-3">
                         <LanguageSwitcher/>
                         <ThemeToggler/>
                    </div>
               )}
          </header>
     )
}