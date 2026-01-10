"use client"
import AppLayout from "@/components/layout";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import PopupComponent from "../popup";
import { Button } from "../ui/button";
import { Cog } from "lucide-react";
import { Slider } from "../ui/slider";
import ExerciseSettings from "../setttings/exercise";
import { BreathingExerciseState, BreathingExerciseType, BreathingPhase } from "@/lib/types";
import { BREATHING_PATTERNS } from "@/lib/constants/maps";
import useExercise from "@/hooks/use-breathing-exercise";
import { EXERCISE_INTERVAL_TIME } from "@/lib/constants";

export default function ExerciseContent(){
     const t = useTranslations("breathingExercise");
     const [exerciseState, setExerciseState] = useState<BreathingExerciseState>({
          text: t("breatheIn"),
          circleType: "growing",
          open: false,
          volume: 0,
          time: EXERCISE_INTERVAL_TIME/1000,
          pattern: "inhale-hold-exhale"
     })
     const setState = (overrides: Partial<BreathingExerciseState>) => setExerciseState(prev=>({
          ...prev,
          ...overrides
     }));
     const { PHASE_DURATION, PHASE_TO_CIRCLE, volumeIcon, growTime, holdTime } = useExercise(exerciseState)
     const handleSubmit = (values: BreathingExerciseType) => setState({
          time: Number(values.exerciseTime),
          pattern: values.pattern,
          open: false
     })
     const {text, circleType, open, volume, time, pattern} = exerciseState

     useEffect(() => {
          if (!time) return;
          const phases: BreathingPhase[] = BREATHING_PATTERNS[pattern].phases;
          let timeout: NodeJS.Timeout;
          let phaseIndex = 0;
          
          const runPhase = () => {
               const phase = phases[phaseIndex];
               const texts: Record<BreathingPhase,string> = {
                    inhale: t("breatheIn"),
                    hold: t("hold"),
                    exhale: t("breatheOut")
               }
               setState({
                    text: texts[phase],
                    circleType: PHASE_TO_CIRCLE[phase]
               })
               phaseIndex = (phaseIndex + 1) % phases.length;
               timeout = setTimeout(runPhase,PHASE_DURATION[phase]);
          };
          runPhase();
          return () => clearTimeout(timeout);
     }, [t, time, pattern, growTime, holdTime]);
     return (
          <AppLayout screenHeight>
               <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-semibold text-center">{t("title")}</h1>
               <div className="mt-4 space-y-2 flex justify-center items-center breathing-root">
                    <div className="bg-card text-card-foreground border shadow-sm rounded-md px-9 py-6 flex justify-center items-center flex-col gap-4 max-w-[400px] relative group">
                         <Button variant="ghost" size="icon" title="Կարգավորումներ" className="absolute top-3 right-3" onClick={()=>setState({open: true})}>
                              <Cog className="size-5"/>
                         </Button>
                         <div className="size-72 flex justify-center items-center rounded-full border-2 border-primary will-change-transform">
                              <div className={cn("bg-primary rounded-full size-full",circleType==='growing' ? 'animate-grow-circle' : circleType==='hold' ? 'animate-hold-circle' : 'animate-shrink-circle')} style={{
                                   animationDuration: circleType==="hold" ? `${holdTime}ms` : `${growTime}ms`
                              }}/>
                         </div>
                         <p className="font-heading text-4xl font-semibold text-primary" aria-live="polite">{text}</p>
                         <div className="flex items-center gap-2 w-full">
                              {volumeIcon}
                              <Slider defaultValue={[volume]} min={0} max={100} onValueChange={(newVolume)=>setState({
                                   volume: newVolume[0]
                              })}/>
                         </div>
                    </div>
               </div>
               <PopupComponent
                    open={open}
                    onOpen={(open)=>setState({open})}
                    title="Կարգավորումներ"
               >
                    <ExerciseSettings
                         onSubmit={handleSubmit}
                         setOpen={(open)=>setState({open})}
                         defaultValue={{ time, pattern }}
                    />
               </PopupComponent>
          </AppLayout>
     );
}