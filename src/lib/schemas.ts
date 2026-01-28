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

export const getPomodoroSchema =  (t: ReturnType<typeof useTranslations<"pomodoro.validation">>) => z.object({
     focus: z.string().trim().refine(v => {
          const n = Number(v);
          return n >= 25 && n <= 60;
     }, t("focus-time")),
     shortBreak: z.string().trim().refine(v => {
          const n = Number(v);
          return n >= 5 && n <= 25;
     }, t("short-break")),
     longBreak: z.string().trim().refine(v => {
          const n = Number(v);
          return n >= 10 && n <= 40;
     }, t("long-break")),
     loops: z.string().trim().refine(v => {
          const n = Number(v);
          return n >= 2 && n <= 10;
     }, t("loops")),
})