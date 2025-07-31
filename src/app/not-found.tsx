import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
     title: "Վայ, այս էջը չի գտնվել"
}

export default function NotFound(){
     return (
          <div className="p-5 flex justify-center items-center flex-col min-h-screen space-y-3">
               <h1 className="text-7xl tracking-tight font-extrabold lg:text-9xl text-primary">404</h1>
               <p className="text-3xl tracking-tight font-bold md:text-4x">Այս էջը չի գտնվել</p>
               <p className="text-md md:text-lg font-light text-center">Այս էջը, որ դուք փնտրում եք, չի գտնվել: Հնարավոր է սխալ մուտքագրել հասցեն, էջը տեղափոխվել է կամ ընդհանրապես գոյություն չունի:</p>
               <Button asChild>
                    <Link href="/">Վերադառնալ</Link>
               </Button>
          </div>
     )
}