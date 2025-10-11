import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Socials from "@/components/Socials";
import Link from "next/link";

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
