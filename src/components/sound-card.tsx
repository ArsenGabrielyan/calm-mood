"use client"
import { ISounds, PlayBackType } from "@/lib/types"
import { Slider } from "@/components/ui/slider"
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";
import { Loader2, Volume, Volume1, Volume2, VolumeOff } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Spinner } from "./ui/spinner";

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
          <div key={id} className="w-full max-w-full flex justify-between items-center flex-wrap flex-col md:flex-row gap-4 bg-card text-card-foreground py-4 px-3 lg:max-w-xs rounded-md border shadow-sm">
               <div className="flex-1 flex items-center justify-center flex-row relative">
                    {finishedLoading && <Spinner className="absolute top-1/2 left-1/2 -translate-1/2"/>}
                    <Icon className={cn(finishedLoading ? "fill-primary/25": "fill-primary","size-[85px]")}/>
               </div>
               <div className="w-full md:w-fit flex-2 flex flex-col items-center justify-between gap-4">
                    <h2 className="text-3xl md:text-2xl font-semibold text-primary text-center">{t(id)}</h2>
                    <div className="flex items-center gap-2 w-full">
                         {volumeIcon}
                         <Slider defaultValue={[volume]} min={0} max={100} onValueChange={(newVolume)=>setVolume(newVolume[0])}/>
                    </div>
               </div>
          </div>
     )
}