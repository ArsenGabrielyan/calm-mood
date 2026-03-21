import * as z from "zod"
import { getBreathingExerciseSchema } from "../schemas";

export type BreathingPhase = "inhale" | "hold" | "exhale";

export type BreathingPatternId =
  | "inhale-hold-exhale"
  | "inhale-hold-exhale-hold"
  | "inhale-exhale"
  | "inhale-exhale-hold";

export type CirclePhase = "growing" | "hold" | "shrinking"

export interface BreathingExerciseState{
  text: string,
  circleType: CirclePhase,
  prevCircleType?: CirclePhase;
  open: boolean,
  volume: number,
  time: number,
  pattern: BreathingPatternId
}

export type BreathingExerciseType = z.infer<
  Awaited<ReturnType<typeof getBreathingExerciseSchema>>
>