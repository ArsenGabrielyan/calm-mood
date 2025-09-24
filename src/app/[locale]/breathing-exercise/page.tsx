import ExerciseContent from "@/components/contents/exercise";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
     const t = await getTranslations("breathingExercise");
     return {
          title: t("title"),
          description: t("description")
     }
}

export default function BreathingExercisePage() {
     return (
          <ExerciseContent/>
     );
}
