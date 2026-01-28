import { getBreathingExerciseSchema, getPomodoroSchema } from "./schemas";
import { SoundsType } from "./sounds";
import * as z from "zod"

export interface ISounds {
      id: SoundsType;
      url: string;
      Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
export type PlayBackType = "idle" | "playing" | "paused"
export enum NavLinks{
      Sounds = 'sounds',
      BreathingExercise = 'exercise',
      Pomodoro = 'pomodoro'
}
export type BreathingPhase = "inhale" | "hold" | "exhale";

export type BreathingPatternId =
  | "inhale-hold-exhale"
  | "inhale-hold-exhale-hold"
  | "inhale-exhale"
  | "inhale-exhale-hold";

export type CirclePhase = "growing" | "hold" | "shrinking"

export type BreathingExerciseType = z.infer<
      Awaited<ReturnType<typeof getBreathingExerciseSchema>>
>
export type PomodoroType = z.infer<
      Awaited<ReturnType<typeof getPomodoroSchema>>
>

export interface BreathingExerciseState{
      text: string,
      circleType: CirclePhase,
      prevCircleType?: CirclePhase;
      open: boolean,
      volume: number,
      time: number,
      pattern: BreathingPatternId
}
export interface PomodoroState{
      focus: number,
      shortBreak: number,
      longBreak: number,
      loops: number,
      currTime: number,
      isOpen: boolean,
      isStarted: boolean
}
export interface PomodoroRuntime{
      phase: "focus" | "long-break" | "short-break"
      remaining: number;   // seconds
      total: number;       // seconds
      loopIndex: number;
      isPaused: boolean;
      initialized: boolean;
}