import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Socials />
      <Contact />
    </div>
  );
}
