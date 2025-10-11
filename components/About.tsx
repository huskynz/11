export default function About() {
  return (
  <section id="about" className="py-20 bg-white dark:bg-gray-900">
  <div className="mx-auto px-4 sm:px-6 lg:px-8">
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
    </div>
    </section>
  );
}
