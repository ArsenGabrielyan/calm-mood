"use client"
import AppLayout from "../layout";
import PomodoroForm from "../forms/pomodoro";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { Pause, Play, Square } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { PomodoroRuntime, PomodoroState, PomodoroType } from "@/lib/types/pomodoro";
import PopupComponent from "../popup";
import { INITIAL_POMODORO_STATE } from "@/lib/constants";
import { ButtonGroup } from "../ui/button-group";
import { useTranslations } from "next-intl";

export default function PomodoroContent(){
     const t = useTranslations("pomodoro")
     const [pomodoroState, setPomodoroState] = useState<PomodoroState>(INITIAL_POMODORO_STATE);
     const [runtime, setRuntime] = useState<PomodoroRuntime | null>(null);
     const prevPhase = useRef<PomodoroRuntime["phase"]>(null)
     const setState = (overrides: Partial<PomodoroState>) =>
          setPomodoroState(prev=>({...prev, ...overrides}));
     const audioRef = useRef<HTMLAudioElement>(null)
     
     const onSubmit = async(values: PomodoroType) => {
          const focus = parseInt(values.focus)
          const shortBreak = parseInt(values.shortBreak)
          setState({
               focus,
               shortBreak,
               longBreak: parseInt(values.longBreak),
               loops: parseInt(values.loops),
               isStarted: true
          });
          const focusSec = focus * 60;
          setRuntime({
               phase: "focus",
               remaining: focusSec,
               total: focusSec,
               loopIndex: 1,
               isPaused: false,
               initialized: false,
          })
     }
     const handlePause = () => {
          setRuntime(prev => prev && { ...prev, isPaused: true });
     }
     const handleResume = () => {
          setRuntime(prev => prev && { ...prev, isPaused: false });
     }
     const handleStop = () => {
          setRuntime(null);
          setState(INITIAL_POMODORO_STATE);
     }
     function advancePomodoro(prev: PomodoroRuntime): PomodoroRuntime {
          if (prev.phase === "focus")
               return {
                    phase:
                         prev.loopIndex % pomodoroState.loops === 0
                              ? "long-break"
                              : "short-break",
                    remaining:
                         (prev.loopIndex % pomodoroState.loops === 0
                              ? pomodoroState.longBreak
                              : pomodoroState.shortBreak) * 60,
                    total:
                         (prev.loopIndex % pomodoroState.loops === 0
                              ? pomodoroState.longBreak
                              : pomodoroState.shortBreak) * 60,
                    loopIndex: prev.loopIndex,
                    isPaused: false,
                    initialized: prev.initialized
               };
          return {
               phase: "focus",
               remaining: pomodoroState.focus * 60,
               total: pomodoroState.focus * 60,
               loopIndex: prev.loopIndex + 1,
               isPaused: false,
               initialized: prev.initialized
          };
     }
     useEffect(()=>{
          if(!pomodoroState.isStarted) return;
          audioRef.current = new Audio()
     },[pomodoroState.isStarted])
     useEffect(()=>{
          if (!runtime || !audioRef.current) return;
          if (!runtime.initialized) {
               setRuntime(prev =>
                    prev ? { ...prev, initialized: true } : prev
               );
               prevPhase.current = runtime.phase;
               return;
          }
          audioRef.current.src = `/sounds/pomodoro-${runtime.phase==="focus" ? "focus" : "break"}.mp3`;
          audioRef.current.play()
     },[runtime?.phase])
     useEffect(() => {
          if (!runtime || runtime.isPaused) return;
          const tick = setInterval(() => {
               setRuntime(prev => {
                    if (!prev) return prev
                    prevPhase.current = prev?.phase
                    if (prev.remaining > 1) 
                         return { ...prev, remaining: prev.remaining - 1 };
                    return advancePomodoro(prev);
               });
          }, 1000);
          return () => clearInterval(tick);
     }, [runtime]);
     const minutes = useMemo(()=>!runtime ? "00" : Math.floor(runtime.remaining / 60)
          .toString()
          .padStart(2, "0")
     ,[runtime?.remaining]);
     const seconds = useMemo(()=>!runtime ? "00" : (runtime.remaining % 60)
          .toString()
          .padStart(2, "0")
     ,[runtime?.remaining]);
     const {isStarted, isOpen} = pomodoroState
     return (
          <AppLayout screenHeight>
               <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-semibold text-center">{t("title")}</h1>
               {!isStarted ? (
                    <PomodoroForm
                         onSubmit={onSubmit}
                    />
               ) : runtime ? (
                    <div className="bg-card text-card-foreground border shadow-md rounded-xl px-6 py-4 flex justify-center items-center flex-col w-full mt-4 gap-4">
                         {!!runtime && (
                              <h2 className="text-muted-foreground text-lg md:text-xl lg:text-2xl">{t(`phase.${runtime.phase}`)}</h2>
                         )}
                         <h2 className="text-6xl md:text-7xl lg:text-8xl">{minutes}:{seconds}</h2>
                         <Progress value={(1 - runtime.remaining / runtime.total) * 100}/>
                         <div className="flex justify-center items-center flex-wrap gap-2 w-full">
                              <Button className="flex-1" onClick={()=>runtime.isPaused ? handleResume() : handlePause()}>
                                   {runtime.isPaused ? <Play/> : <Pause/>}
                                   {runtime.isPaused ? t("continue") : t("pause")}
                              </Button>
                              <Button className="flex-1" onClick={()=>setState({isOpen: true})}>
                                   <Square/> {t("stop")}
                              </Button>
                         </div>
                    </div>
               ) : null}
               <PopupComponent
                    open={isOpen}
                    onOpen={isOpen=>setState({isOpen})}
                    title={t("confirmation")}
               >
                    <ButtonGroup className="w-full">
                         <Button onClick={handleStop} className="flex-1">{t("stop")}</Button>
                         <Button onClick={()=>setState({isOpen: false})} variant="secondary" className="flex-1">{t("close")}</Button>
                    </ButtonGroup>
               </PopupComponent>
          </AppLayout>
     )
}