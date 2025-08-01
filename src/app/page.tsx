import AppLayout from "@/components/layout";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <AppLayout>
      <section className="space-y-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">Հանգիստ Տրամադրություն</h1>
        <p className="text-md md:text-lg lg:text-xl xl:texl-2xl">Այն նախատեսված է հանգստանալու համար։ Լսե՛ք և վայելեք։</p>
        <Button>Իմանալ ավելին</Button>
      </section>
    </AppLayout>
  );
}
