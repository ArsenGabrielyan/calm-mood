import * as z from "zod"

export const BreathingExerciseSchema = z.object({
     exerciseTime: z.string().trim().refine(v => {
          const n = Number(v);
          return n >= 12 && n <= 300;
     }, "Ժամանակահատվածը պետք է լինի 12-300 վրկ"),
     pattern: z.enum([
          "inhale-hold-exhale",
          "inhale-hold-exhale-hold",
          "inhale-exhale",
          "inhale-exhale-hold",
     ]),
})