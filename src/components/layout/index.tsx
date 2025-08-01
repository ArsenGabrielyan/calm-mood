import AppFooter from "./footer"
import AppHeader from "./header"

interface AppLayoutProps{
     children: React.ReactNode
}
export default function AppLayout({children}: AppLayoutProps){
     return (
          <>
               <AppHeader/>
               <main className="relative w-full min-h-screen bg-[url('/images/backgrounds/bg.webp')] bg-[url('/images/backgrounds/bg.jpg')] bg-fixed bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col gap-2.5">
                    <div className="absolute inset-0 bg-linear-to-b from-transparent to-background opacity-70 -z-00"></div>
                    <div className="relative z-10 p-8 text-foreground">
                         {children}
                    </div>
               </main>
               <AppFooter/>
          </>
     )
}