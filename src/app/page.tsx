import Scene from "@/components/3d/Scene";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-background text-foreground">
      <Scene />
      <Hero />
      <Work />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
