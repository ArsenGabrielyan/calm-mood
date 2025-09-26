"use client"
import { ISounds, PlayBackType } from "@/lib/types"
import { Slider } from "@/components/ui/slider"
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";
import { Loader2, Volume, Volume1, Volume2, VolumeOff } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface SoundCardProps{
     data: ISounds,
     playback: PlayBackType,
     errorMessage: string
}
export default function SoundCard({data, playback, errorMessage}: SoundCardProps){
     const {id,Icon,url} = data;
     const t = useTranslations("allSounds.sounds")
     const [volume, setVolume] = useState(0);
     const [loader, setLoader] = useState({ isLoading: false, isLoaded: false });
     const audioRef = useRef<HTMLAudioElement>(null);
     const volumeIcon = useMemo(()=>volume<5 ? <VolumeOff/> : volume<10 ? <Volume/> : volume<60 ? <Volume1/> : <Volume2/>,[volume])
     useEffect(()=>{
          if(!audioRef.current && volume > 0 && playback==='playing'){
               const a = new Audio();
               a.src = url;
               a.loop = true;
               a.preload = "none";
               a.volume = Math.min(1,Math.max(0,volume/100));
               a.addEventListener("canplaythrough",()=>setLoader(prev=>({
                    ...prev,
                    isLoading: false,
                    isLoaded: true
               })))
               audioRef.current = a;
          }
     },[url,volume,playback])
     useEffect(()=>{
          if(audioRef.current){
               audioRef.current.volume = Math.min(1,Math.max(0,volume/100));
               if(volume===0) audioRef.current.pause();
          }
     },[volume])
     useEffect(()=>{
          const a = audioRef.current;
          if(!a) return;
          if(playback==="playing" && volume > 0) {
               if(!loader.isLoaded) setLoader(prev=>({...prev, isLoading: true}));
               a.play().catch(()=>toast.error(errorMessage))
          }
          else if(playback==="paused") a.pause()
          else {
               a.pause();
               a.currentTime = 0;
          }
     },[playback,volume,errorMessage,loader.isLoaded])
     const finishedLoading = loader.isLoading && !loader.isLoaded
     return (
          <div key={id} className="w-full max-w-full grid grid-cols-1 md:grid-cols-2 gap-4 bg-card text-card-foreground p-4 lg:max-w-[260px] rounded-md border shadow-sm">
               <div className="w-full flex items-center justify-center relative">
                    {finishedLoading && <Loader2 className="animate-spin absolute top-1/2 left-1/2 -translate-1/2"/>}
                    <Icon className={cn(finishedLoading ? "fill-primary/25": "fill-primary","size-[85px]")}/>
               </div>
               <div className="w-full flex flex-col items-center justify-between gap-4">
                    <h2 className="text-3xl md:text-2xl font-semibold text-primary text-center">{t(id)}</h2>
                    <div className="flex items-center gap-2 w-full">
                         {volumeIcon}
                         <Slider defaultValue={[volume]} min={0} max={100} onValueChange={(newVolume)=>setVolume(newVolume[0])}/>
                    </div>
               </div>
          </div>
     )
}