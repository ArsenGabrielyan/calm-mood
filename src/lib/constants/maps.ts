import { BreathingPhase, BreathingExerciseState, BreathingPatternId } from "../types";

export const PHASE_TO_CIRCLE: Record<BreathingPhase, BreathingExerciseState["circleType"]> = {
     inhale: "growing",
     hold: "hold",
     exhale: "shrinking",
};
export const BREATHING_PATTERNS: Record<BreathingPatternId,BreathingPhase[]> = {
     "inhale-hold-exhale":["inhale", "hold", "exhale"],
     "inhale-hold-exhale-hold": ["inhale", "hold", "exhale", "hold"],
     "inhale-exhale": ["inhale", "exhale"],
     "inhale-exhale-hold": ["inhale", "exhale", "hold"],
};