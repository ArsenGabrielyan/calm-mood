import { cn, getDailyBackground } from "@/lib/utils"
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
               <main className={cn("relative w-full",!screenHeight && "space-y-2.5",screenHeight && "min-h-screen flex justify-center items-center flex-col gap-2.5 pt-[95px]")} style={getDailyBackground()}>
                    <div className="absolute inset-0 bg-linear-to-t from-transparent to-background to-70% opacity-70 -z-00"></div>
                    <div className={cn("relative z-10 text-foreground",screenHeight && "p-8 w-full md:w-fit flex justify-center items-center flex-col")}>
                         {children}
                    </div>
               </main>
               <AppFooter/>
          </>
     )
}