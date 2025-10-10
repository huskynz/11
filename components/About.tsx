export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          About Me
        </h2>
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Hi, I&apos;m Peter, currently a university student with a passion for tech. 
            I have been learning for the last three years (coming up on four). I have 
            gained a lot of skills, but my primary expertise is with Microsoft and 
            Cloudflare products.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            However, I also know how to work with AWS, GCP, DataDog, and Linux servers, 
            and I&apos;m still learning and expanding my skill set. I have earned two 
            Microsoft certifications: AZ-904 and MS-900, both of which are fundamental.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Additionally, I have been learning web technology along the way (though I&apos;m 
            not a designer). I also stream on Twitch for fun.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Years Learning</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">2</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">MS Certifications</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-teal-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">5+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Cloud Platforms</div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">∞</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Learning Mode</div>
          </div>
        </div>
      </div>
    </section>
  );
}
