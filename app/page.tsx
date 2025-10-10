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
      <Timeline />
      <div className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Read My Blog
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Explore my thoughts and experiences in tech
          </p>
          <Link
            href="/blog"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Visit Blog
          </Link>
        </div>
      </div>
      <Socials />
      <Contact />
    </div>
  );
}
