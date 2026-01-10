import { BreathingExerciseSchema } from "./schemas";
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
      BreathingExercise = 'exercise'
}
export type BreathingPhase = "inhale" | "hold" | "exhale";

export type BreathingPatternId =
  | "inhale-hold-exhale"
  | "inhale-hold-exhale-hold"
  | "inhale-exhale"
  | "inhale-exhale-hold";

export type BreathingExerciseType = z.infer<typeof BreathingExerciseSchema>

export interface BreathingExerciseState{
      text: string,
      circleType: 'growing'|'shrinking'|'hold',
      open: boolean,
      volume: number,
      time: number,
      pattern: BreathingPatternId
}