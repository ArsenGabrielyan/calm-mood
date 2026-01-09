"use client"
import AppLayout from "@/components/layout";
import { cn, preloadAudio } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useState, useEffect, useMemo, useRef } from "react";
import PopupComponent from "../popup";
import { Button } from "../ui/button";
import { Cog, Volume, Volume1, Volume2, VolumeOff } from "lucide-react";
import { Slider } from "../ui/slider";
import { toast } from "sonner";
import ExerciseSettings from "../setttings/exercise";
import { BreathingExerciseType } from "@/lib/types";

export const EXERCISE_INTERVAL_TIME = 13000;

export default function ExerciseContent(){
     const t = useTranslations("breathingExercise")
     const [text, setText] = useState(t("breatheIn"));
     const [circleType, setCircleType] = useState<'growing'|'shrinking'|'hold'>("growing");
     const [open, setOpen] = useState(false);
     const [volume, setVolume] = useState(0);
     const [exerciseTime, setExerciseTime] = useState(EXERCISE_INTERVAL_TIME/1000);
     const holdTime = useMemo(()=>(exerciseTime*1000)/5,[exerciseTime]);
     const growTime = holdTime*2;
     const volumeIcon = useMemo(()=>volume<5 ? <VolumeOff/> : volume<10 ? <Volume/> : volume<60 ? <Volume1/> : <Volume2/>,[volume])
     const audioRef = useRef<HTMLAudioElement>(null);
     const SOUND_BY_PHASE: Record<typeof circleType, string> = {
          growing: "/sounds/breathe-in.mp3",
          hold: "/sounds/hold.mp3",
          shrinking: "/sounds/breathe-out.mp3",
     };
     useEffect(()=>{
          preloadAudio(
               "/sounds/breathe-in.mp3",
               "/sounds/hold.mp3",
               "/sounds/breathe-out.mp3"
          )
          audioRef.current = new Audio();
          audioRef.current.preload = "auto";
     }, []);
     useEffect(() => {
          const startBreathCycle = () => {
               setText(t("breatheIn"));
               setCircleType('growing');
                    setTimeout(() => {
                    setText(t("hold"));
                    setCircleType('hold');
                    setTimeout(() => {
                         setText(t("breatheOut"));
                         setCircleType('shrinking');
                    }, holdTime);
               }, growTime);
          };
          startBreathCycle();
          const intervalId = setInterval(startBreathCycle, EXERCISE_INTERVAL_TIME);
          return () => clearInterval(intervalId);
     }, [t]);
     useEffect(() => {
          if (!audioRef.current || volume === 0) return;
          const src = SOUND_BY_PHASE[circleType];
          if (!src) return;
          audioRef.current.src = src;
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(()=>toast.error("Հաղորդագրությունն այստեղ"))
     }, [circleType]);
     useEffect(()=>{
          if(!audioRef.current) return;
          audioRef.current.volume = Math.min(1,Math.max(0,volume/100));
     },[volume])
     const handleSubmit = (values: BreathingExerciseType) => {
          console.log(values)
     }
     return (
          <AppLayout screenHeight>
               <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-semibold text-center">{t("title")}</h1>
               <div className="mt-4 space-y-2 flex justify-center items-center breathing-root">
                    <div className="bg-card text-card-foreground border shadow-sm rounded-md px-9 py-6 flex justify-center items-center flex-col gap-4 max-w-[400px] relative group">
                         <Button variant="ghost" size="icon" title="Կարգավորումներ" className="absolute top-3 right-3" onClick={()=>setOpen(true)}>
                              <Cog className="size-5"/>
                         </Button>
                         <div className="size-72 flex justify-center items-center rounded-full border-2 border-primary will-change-transform">
                              <div className={cn("bg-primary rounded-full size-full",circleType==='growing' ? 'animate-grow-circle' : circleType==='hold' ? 'animate-hold-circle' : 'animate-shrink-circle')}/>
                         </div>
                         <p className="font-heading text-4xl font-semibold text-primary" aria-live="polite">{text}</p>
                         <div className="flex items-center gap-2 w-full">
                              {volumeIcon}
                              <Slider defaultValue={[volume]} min={0} max={100} onValueChange={(newVolume)=>{
                                   setVolume(newVolume[0])
                              }}/>
                         </div>
                    </div>
               </div>
               <PopupComponent
                    open={open}
                    onOpen={setOpen}
                    title="Կարգավորումներ"
               >
                    <ExerciseSettings
                         onSubmit={handleSubmit}
                         setOpen={setOpen}
                    />
               </PopupComponent>
          </AppLayout>
     );
}