import { ISounds } from "@/lib/types"
import { Slider } from "@/components/ui/slider"
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Volume, Volume1, Volume2, VolumeOff } from "lucide-react";

interface SoundCardProps{
     data: ISounds,
}
export default function SoundCard({data}: SoundCardProps){
     const {id,Icon} = data;
     const t = useTranslations("allSounds.sounds")
     const [volume, setVolume] = useState(0);
     return (
          <div key={id} className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 bg-card text-card-foreground p-4 lg:max-w-[260px] rounded-md border shadow-sm">
               <div className="w-full flex items-center justify-center">
                    <Icon className="fill-primary size-[85px]"/>
               </div>
               <div className="w-full flex flex-col items-center justify-center gap-4">
                    <h2 className="text-2xl sm:text-xl md:text-lg font-semibold text-primary text-center">{t(id)}</h2>
                    <div className="flex items-center gap-2 w-full">
                         {volume < 5 ? (
                              <VolumeOff/>
                         ) : volume < 20 ? (
                              <Volume/>
                         ) : volume < 60 ? (
                              <Volume1/>
                         ) : (
                              <Volume2/>
                         )}
                         <Slider defaultValue={[volume]} min={0} max={100} onValueChange={(newVolume)=>setVolume(newVolume[0])}/>
                    </div>
               </div>
          </div>
     )
}