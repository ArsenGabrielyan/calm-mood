import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function NotFoundContent(){
     const t = useTranslations("notFound")
     return (
          <div className="p-5 flex justify-center items-center flex-col min-h-screen space-y-3">
               <h1 className="text-7xl tracking-tight font-extrabold lg:text-9xl text-primary">404</h1>
               <p className="font-heading text-3xl md:text-4xl lg:text-[42px] tracking-tight font-bold md:text-4x">{t("title")}</p>
               <p className="text-md md:text-lg font-light text-center">{t("description")}</p>
               <Button asChild>
                    <Link href="/">{t("backButton")}</Link>
               </Button>
          </div>
     )
}