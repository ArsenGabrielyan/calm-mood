"use client"
import AppLayout from "@/components/layout";
import { sounds } from "@/lib/sounds";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { Pause, Play, Square } from "lucide-react";
import SoundCard from "../sound-card";
import { useState } from "react";

export default function SoundsContent(){
     const t = useTranslations("allSounds.page")
     const [isPlaying, setIsPlaying] = useState(false)
     const [soundState, setSoundState] = useState("play")
     const handlePlay = () => {
          setIsPlaying(!isPlaying)
          setSoundState(!isPlaying ? "pause" : "resume")
     }
     const handleStop = () => {
          setSoundState("play");
          setIsPlaying(false)
     }
     return (
          <AppLayout screenHeight>
               <h1 className="text-2xl text-center md:text-3xl lg:text-4xl font-semibold">{t("title")}</h1>
               <div className="mt-4 space-y-2 flex justify-center items-center flex-col gap-4 max-w-8xl">
                    <div className="flex items-center gap-3">
                         <Button className="size-14" onClick={handlePlay} title={t(soundState)}>
                              {isPlaying ? <Pause className="size-8"/> : <Play className="size-8"/>}
                         </Button>
                         <Button className="size-14" title={t("stop")} disabled={soundState==="play"} onClick={handleStop}>
                              <Square className="size-8"/>
                         </Button>
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1.5">
                         {sounds.map(sound=>(
                              <SoundCard key={sound.id} data={sound}/>
                         ))}
                    </div>
               </div>
          </AppLayout>
     );
}