import { BreathingExerciseState, BreathingPhase, CirclePhase } from "@/lib/types";
import { preloadAudio } from "@/lib/utils";
import { VolumeOff, Volume, Volume1, Volume2 } from "lucide-react";
import { useRef, useMemo, useEffect } from "react";

export default function useExercise(state: BreathingExerciseState){
     const lastPhase = useRef<CirclePhase>(null);
     const audioRef = useRef<HTMLAudioElement>(null);

     const volumeIcon = useMemo(()=>state.volume<5 ? <VolumeOff/> : state.volume<10 ? <Volume/> : state.volume<60 ? <Volume1/> : <Volume2/>,[state.volume])

     const cycleMs = state.time * 1000;
     const holdTime = useMemo(()=>cycleMs/5, [cycleMs]);
     const growTime = holdTime * 2;

     const SOUND_BY_PHASE: Record<CirclePhase, string> = {
          growing: Math.round(growTime/1000) >= 7 ? "/sounds/breathe-in-long.mp3" : "/sounds/breathe-in.mp3",
          hold: Math.round(holdTime/1000) >= 5 ? "/sounds/hold-long.mp3" : "/sounds/hold.mp3",
          shrinking: Math.round(growTime/1000) >= 7 ? "/sounds/breathe-out-long.mp3" : "/sounds/breathe-out.mp3",
     };
     const PHASE_DURATION: Record<BreathingPhase, number> = {
          inhale: growTime,
          hold: holdTime,
          exhale: growTime,
     };

     useEffect(()=>{
          preloadAudio(
               "/sounds/breathe-in.mp3",
               "/sounds/hold.mp3",
               "/sounds/breathe-out.mp3",
               "/sounds/breathe-in-long.mp3",
               "/sounds/hold-long.mp3",
               "/sounds/breathe-out-long.mp3"
          )
          audioRef.current = new Audio();
          audioRef.current.preload = "auto";
     }, []);

     useEffect(() => {
          if (!audioRef.current || state.volume === 0) return;
          if (lastPhase.current === state.circleType) return;

          lastPhase.current = state.circleType;
          
          audioRef.current.src = SOUND_BY_PHASE[state.circleType];
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(() => {});
     }, [state.circleType, state.volume]);

     useEffect(()=>{
          if(!audioRef.current) return;
          audioRef.current.volume = Math.min(1,Math.max(0,state.volume/100));
     },[state.volume])

     return {
          PHASE_DURATION,
          volumeIcon,
          growTime,
          holdTime
     }
}