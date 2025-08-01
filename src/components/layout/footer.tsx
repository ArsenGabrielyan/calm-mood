import Link from "next/link";
import { ThemeToggler } from "../theme-changer/theme-toggler";
import LanguageSwitcher from "../language-switcher";
import { Button } from "../ui/button";

export default function AppFooter(){
     const year = new Date().getFullYear();
     return (
          <footer className="bg-[#2d5e0d] text-white py-3 px-5 flex justify-between items-center gap-2">
               <p>&copy; {year} <Link href="https://arsen-g.web.app/" className="text-white underline hover:text-[#baffc7]">Արսեն Գ․</Link> | Բոլոր իրավունքները պաշտպանված են</p>
               <div className="flex justify-center items-center gap-3">
                    <LanguageSwitcher/>
                    <ThemeToggler/>
               </div>
          </footer>
     )
}