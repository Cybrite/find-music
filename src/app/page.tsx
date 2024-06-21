import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import StickyCard from "@/components/StickyCard";

export default function Home() {
  return (
    <body>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.05]">
        <Hero />
        <Featured />
        <StickyCard/>
      </main>
    </body>
  );
}
