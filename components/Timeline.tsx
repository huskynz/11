"use client";

interface TimelineEvent {
  year: string;
  events: string[];
  category?: 'certification' | 'technology' | 'career' | 'project' | 'infrastructure';
}

const timeline: TimelineEvent[] = [
  {
    year: "2018",
    events: ["Deployed first Ubuntu 18.04 VM in Hyper-V"],
    category: 'infrastructure'
  },
  {
    year: "2019",
    events: ["Moved to New Zealand"],
    category: 'career'
  },
  {
    year: "2020",
    events: [
      "Started learning VMware Workstation Pro",
      "Deployed first Azure Web App",
      "Created www.husky.nz",
      "Created my Github account",
      "Started learning Linux",
      "Developed skills with Azure",
    ],
    category: 'technology'
  },
  {
    year: "2021",
    events: [
      "Earned AZ-900 Certification",
      "Learned more HTML and the web",
      "Deployed my first Active Directory domain on an Azure VM",
      "Configured Azure AD Connect to synchronize on-premises Active Directory with Azure Active Directory",
      "Remote Desktop Deployment with web access and MFA in Azure",
      "Contributed to development of a Azure Site to site vpn and Azure multi-network WAN",
      "Developed skills with the Microsoft 365 suite",
      "Developed skills with Intune and Windows Autopilot",
    ],
    category: 'certification'
  },
  {
    year: "2022",
    events: [
      "Expanded knowledge of Git and GitHub",
      "Studied .NET and .NET websites",
      "Began learning AWS",
      "Migrated AD Domain from Azure to AWS",
    ],
    category: 'technology'
  },
  {
    year: "2023",
    events: [
      "Earned MS-900 Certification",
      "Gained work experience at Inde Technology (5 weeks)",
      "Began experimenting with Sophos Firewalls",
      "Started learning Node.js and TypeScript",
      "Began to learn more about Cloudflare",
    ],
    category: 'certification'
  },
  {
    year: "2024",
    events: [
      "Used Azure migrate to move AD domain from AWS to Azure",
      "New Zealand Certificate in Information Technology Essentials (Level 4) at Ara",
      "Started streaming on Twitch",
      "Deployed a new version of www.husky.nz using TypeScript and Astro.js (This site)",
      "Had some fun developing https://legacy.husky.nz witch is a website built with HTML3.0 no CSS and no JavaScript",
      "Bought a HP DL380 G8 server",
      "ESXI + Vcenter 8",
    ],
    category: 'project'
  },
  {
    year: "2025",
    events: [
      "HP remote management",
      "Setup Microsoft Configuration Manager in my homelab",
      "Setup A SAN in my homelab to Learn and Understand network storage",
      "Setup Citrix Virtual Apps and Desktop and intrgrated with ESXi and Vcenter to auto provisioning and deployment of VDI vm's",
    ],
    category: 'infrastructure'
  },
];

// Helper function to get category colors
const getCategoryColor = (category: string = 'technology') => {
  const colors = {
    certification: 'bg-amber-500',
    technology: 'bg-blue-500',
    career: 'bg-green-500',
    project: 'bg-purple-500',
    infrastructure: 'bg-gray-500'
  };
  return colors[category as keyof typeof colors] || colors.technology;
};

// Helper function to get category icon
const getCategoryIcon = (category: string = 'technology') => {
  const icons = {
    certification: '🏆',
    technology: '⚡',
    career: '💼',
    project: '🚀',
    infrastructure: '🏗️'
  };
  return icons[category as keyof typeof icons] || icons.technology;
};


export default function Timeline() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          My Journey
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
          
          <div className="space-y-12">
            {timeline.map((timelineYear, i) => {
              const categoryColor = getCategoryColor(timelineYear.category);
              
              return (
                <div key={timelineYear.year} className="relative">
                  {/* Timeline dot */}
                  <div className={`absolute left-4 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 ${categoryColor}`}></div>
                  
                  {/* Content */}
                  <div className="ml-16">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
                      <h3 className="text-2xl font-bold text-huskyPurple dark:text-huskyPink mb-4">
                        {timelineYear.year}
                      </h3>
                      
                      <ul className="space-y-3">
                        {timelineYear.events.map((event, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className={`mt-2 w-2 h-2 rounded-full ${categoryColor} flex-shrink-0`}></div>
                            <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              {event}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
