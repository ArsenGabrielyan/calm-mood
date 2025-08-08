"use client"
import AppLayout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { AudioLines, Languages, Palette, Wind } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomepageContent(){
     return (
          <AppLayout>
               <section className="space-y-4 text-center min-h-screen flex justify-center items-center flex-col">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">Հանգիստ Տրամադրություն</h1>
                    <p className="text-md md:text-lg lg:text-xl xl:texl-2xl">Այն նախատեսված է հանգստանալու համար։ Լսե՛ք և վայելեք։</p>
                    <Button size="lg" asChild>
                         <Link href="#about">Իմանալ ավելին</Link>
                    </Button>
               </section>
               <section className="bg-background text-foreground p-8 min-h-[40vh] flex justify-center scroll-m-20" id="about">
                    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full gap-8 max-w-6xl">
                         <div className="space-y-3 flex flex-col items-center justify-center gap-1.5 lg:items-start">
                              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold border-primary border-b-2 pb-2.5 w-fit">Այս պրոյեկտի մասին</h2>
                              <p className="text-base md:text-lg lg:text-xl">Այս պրոյեկտը նպաստում է մարդու նյարդային համակարգի հանգստությանը՝ ստեղծելով հոգեպես խաղաղ միջավայր։ Այն արթնացնում է սեր բնության նկատմամբ՝ օգնելով մարդուն զգալ հանգստություն ու ներդաշնակություն։ Մարդը կիմանա նոր բաներ անտառի, գետերի, թռչունների և բնության այլ հրաշքների մասին՝ վերամիավորվելով բնության հետ նոր ձևով։</p>
                              <Button size="lg" asChild>
                                   <Link href="/sounds">Բոլոր Ձայնները</Link>
                              </Button>
                         </div>
                         <Image src="/images/logo-aero.png" alt="aero-logo" width={275} height={275} className="rounded-md shadow-md"/>
                    </div>
               </section>
               <section className="bg-background text-foreground p-8 min-h-[40vh] flex justify-center scroll-m-20" id="features">
                    <div className="flex flex-col items-center justify-center w-full gap-8 max-w-7xl">
                         <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold border-primary border-b-2 pb-2.5 w-fit">Հնարավորություններ</h2>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="flex justify-center items-center flex-col gap-2 text-center">
                                   <AudioLines className="text-primary size-14"/>
                                   <h3 className="text-xl md:text-2xl font-semibold">Հանգստ. ձայներ</h3>
                                   <p>Հանգստացեք բնության ձայների միջոցով՝ անտառ, ծով և այլն։ Հարմար է կենտրոնանալու, քնելու կամ պարզապես խաղաղության համար։</p>
                              </div>
                                   <div className="flex justify-center items-center flex-col gap-2 text-center">
                                   <Wind className="text-primary size-14"/>
                                   <h3 className="text-xl md:text-2xl font-semibold">Շնչառական վարժություն</h3>
                                   <p>Հետևեք շնչառական ուղեցույցին՝ նյարդերը հանգստացնելու, սթրեսը նվազեցնելու և ներդաշնակություն վերականգնելու համար։</p>
                              </div>
                                   <div className="flex justify-center items-center flex-col gap-2 text-center">
                                   <Palette className="text-primary size-14"/>
                                   <h3 className="text-xl md:text-2xl font-semibold">Դիզայն</h3>
                                   <p>Ընտրեք դիզայն՝ Բաց կամ Մութ ոճերից, ըստ ձեր նախընտրած տեսքի կամ համակարգի (լռելյայն) դիզայնի։</p>
                              </div>
                              <div className="flex justify-center items-center flex-col gap-2 text-center">
                                   <Languages className="text-primary size-14"/>
                                   <h3 className="text-xl md:text-2xl font-semibold">Բազմալեզու ինտերֆեյս</h3>
                                   <p>Օգտագործեք այն հայերեն, անգլերեն, ռուսերեն կամ վրացերեն լեզուներով՝ շուտով ավելանալու են նոր լեզուներ։</p>
                              </div>
                         </div>
                    </div>
               </section>
          </AppLayout>
     )
}