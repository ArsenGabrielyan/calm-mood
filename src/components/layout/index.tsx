import AppFooter from "./footer"
import AppHeader from "./header"

interface AppLayoutProps{
     children: React.ReactNode
}
export default function AppLayout({children}: AppLayoutProps){
     return (
          <>
               <AppHeader/>
               <main>
                    {children}
               </main>
               <AppFooter/>
          </>
     )
}