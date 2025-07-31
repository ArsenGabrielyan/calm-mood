import Image from "next/image";
import Link from "next/link";

const links = [
     {name: "Բոլոր ձայնները", url: "/sounds"},
     {name: "Շնչառական վարժություն", url: "/breathing-exercise"},
]

export default function AppHeader(){
     return (
          <header className="bg-[#2d5e0d] text-white py-2 px-4 flex justify-between items-center gap-2">
               <Link href="/" title="Վերադառնալ"><Image src="/images/logos/logo.webp" alt="logo" width={250} height={75}/></Link>
               <ul className="flex gap-4 items-center justify-center">
                    {links.map((link,i)=>(
                         <li key={`link-${i}`} className="text-base md:text-lg pb-1 border-b-2 border-b-transparent hover:border-b-white capitalize"><Link href={link.url} title={link.name}>{link.name}</Link></li>
                    ))}
               </ul>
          </header>
     )
}