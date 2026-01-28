import { Clock12, Clock2, Clock4, Clock6 } from "lucide-react";
import { PomodoroState } from "../types";

export const PRESETS = [
  { id: "calm", Icon: Clock2, seconds: 12 },
  { id: "focus", Icon: Clock4, seconds: 20 },
  { id: "relax", Icon: Clock6, seconds: 30 },
  { id: "deep", Icon: Clock12, seconds: 60 },
];
export const EXERCISE_INTERVAL_TIME = 12000;
export const INITIAL_POMODORO_STATE: PomodoroState = {
  focus: 0,
  shortBreak: 0,
  longBreak: 0,
  loops: 0,
  currTime: 0,
  isOpen: false,
  isStarted: false
}