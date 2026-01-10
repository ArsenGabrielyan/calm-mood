import { Clock12, Clock2, Clock4, Clock6 } from "lucide-react";

export const PRESETS = [
  { id: "calm", Icon: Clock2, seconds: 12 },
  { id: "focus", Icon: Clock4, seconds: 20 },
  { id: "relax", Icon: Clock6, seconds: 30 },
  { id: "deep", Icon: Clock12, seconds: 60 },
];
export const EXERCISE_INTERVAL_TIME = 12000;