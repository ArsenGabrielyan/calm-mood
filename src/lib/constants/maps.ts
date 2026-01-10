import { BreathingPhase, BreathingExerciseState, BreathingPatternId } from "../types";

export const PHASE_TO_CIRCLE: Record<BreathingPhase, BreathingExerciseState["circleType"]> = {
     inhale: "growing",
     hold: "hold",
     exhale: "shrinking",
};
export const BREATHING_PATTERNS: Record<BreathingPatternId,{
     label: string;
     phases: BreathingPhase[];
}> = {
     "inhale-hold-exhale": {
          label: "Շունչ – Պահում – Արտաշունչ",
          phases: ["inhale", "hold", "exhale"],
     },
     "inhale-hold-exhale-hold": {
          label: "Շունչ – Պահում – Արտաշունչ – Պահում",
          phases: ["inhale", "hold", "exhale", "hold"],
     },
     "inhale-exhale": {
          label: "Շունչ – Արտաշունչ",
          phases: ["inhale", "exhale"],
     },
     "inhale-exhale-hold": {
          label: "Շունչ – Արտաշունչ – Պահում",
          phases: ["inhale", "exhale", "hold"],
     },
};