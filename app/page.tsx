import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Socials from "@/components/Socials";
export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      <Hero />
      <About />
      <Socials />
      <Contact />
    </div>
  );
}
