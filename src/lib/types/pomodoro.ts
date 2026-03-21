import * as z from "zod"
import { getPomodoroSchema } from "../schemas";

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
export type PomodoroType = z.infer<
     Awaited<ReturnType<typeof getPomodoroSchema>>
>