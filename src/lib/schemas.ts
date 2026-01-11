import { useTranslations } from "next-intl";
import * as z from "zod"

export const getBreathingExerciseSchema = (t: ReturnType<typeof useTranslations<"settings.validations">>) => z.object({
     exerciseTime: z.string().trim().refine(v => {
          const n = Number(v);
          return n >= 12 && n <= 300;
     }, t("duration")),
     pattern: z.enum([
          "inhale-hold-exhale",
          "inhale-hold-exhale-hold",
          "inhale-exhale",
          "inhale-exhale-hold",
     ],t("exercise-type")),
})