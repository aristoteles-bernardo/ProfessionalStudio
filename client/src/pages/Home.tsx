import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      <Hero />
      <Services />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}
