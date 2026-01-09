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

export type BreathingExerciseType = z.infer<typeof BreathingExerciseSchema>