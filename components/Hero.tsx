import Image from "next/image";

export default function Hero() {
  return (
  <section className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Image
            src="https://serv.husky.nz/public/peter-small.png"
            alt="Peter Gallwas"
            width={192}
            height={192}
            className="rounded-full mx-auto shadow-2xl border-4 border-white dark:border-gray-700"
          />
        </div>
  <h1 className="text-5xl md:text-7xl font-bold mb-6 text-huskyBlue dark:text-huskyPink">
          Hi There!
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          I&apos;m Peter
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12">
          A Solutions Architect
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-huskyPurple text-white rounded-lg font-semibold hover:bg-huskyPink transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Let&apos;s Connect
          </a>
          <a
            href="#about"
            className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
