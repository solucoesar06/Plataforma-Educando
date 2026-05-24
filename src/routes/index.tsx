import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/ui/hero";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
    </main>
  );
}
