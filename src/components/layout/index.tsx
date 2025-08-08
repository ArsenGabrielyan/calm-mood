import { cn } from "@/lib/utils"
import AppFooter from "./footer"
import AppHeader from "./header"

interface AppLayoutProps{
     children: React.ReactNode,
     screenHeight?: boolean
}
export default function AppLayout({children, screenHeight=false}: AppLayoutProps){
     return (
          <>
               <AppHeader/>
               <main className={cn("relative w-full bg-[url('/images/backgrounds/bg.webp')] bg-[url('/images/backgrounds/bg.jpg')] bg-fixed bg-cover bg-no-repeat bg-center",!screenHeight && "space-y-2.5",screenHeight && "min-h-screen flex justify-center items-center flex-col gap-2.5 pt-[95px]")}>
                    <div className="absolute inset-0 bg-linear-to-t from-transparent to-background to-70% opacity-70 -z-00"></div>
                    <div className={cn("relative z-10 text-foreground",screenHeight && "p-8")}>
                         {children}
                    </div>
               </main>
               <AppFooter/>
          </>
     )
}