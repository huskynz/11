export default function Socials() {
  const socials = [
    {
      name: "Email",
      text: "peter@husky.nz",
      href: "mailto:peter@husky.nz",
      icon: "📧",
    },
    {
      name: "GitHub (Main)",
      text: "HuskyNZ",
      href: "https://github.com/HuskyNZ",
      icon: "🐙",
    },
    {
      name: "GitHub (Personal)",
      text: "Husky-Devel",
      href: "https://github.com/husky-devel",
      icon: "💻",
    },
    {
      name: "Twitch",
      text: "huskynzofficial",
      href: "https://hnz.li/twitch",
      icon: "📺",
    },
    {
      name: "YouTube",
      text: "@huskynz",
      href: "https://hnz.li/youtube",
      icon: "🎥",
    },
    {
      name: "Discord",
      text: "huskynzofficial",
      href: "https://discord.com",
      icon: "💬",
    },
    {
      name: "Download CV",
      text: "Download",
      href: "https://serv.husky.nz/public/peter-cv-v7.pdf",
      icon: "📄",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Connect With Me
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Feel free to reach out via email or connect on social media.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
            >
              <span className="text-4xl">{social.icon}</span>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 dark:text-white">
                  {social.name}
                </div>
                <div className="text-blue-600 dark:text-blue-400 text-sm">
                  {social.text}
                </div>
              </div>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
