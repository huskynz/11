"use client";

import { useEffect, useState } from "react";

interface TimelineEvent {
  year: string;
  events: string[];
}

const timeline: TimelineEvent[] = [
  {
    year: "2018",
    events: ["Deployed first Ubuntu 18.04 VM in Hyper-V"],
  },
  {
    year: "2019",
    events: ["Moved to New Zealand"],
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
  },
  {
    year: "2022",
    events: [
      "Expanded knowledge of Git and GitHub",
      "Studied .NET and .NET websites",
      "Began learning AWS",
      "Migrated AD Domain from Azure to AWS",
    ],
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
  },
  {
    year: "2025",
    events: [
      "HP remote management",
      "Setup Microsoft Configuration Manager in my homelab",
      "Setup A SAN in my homelab to Learn and Understand network storage",
      "Setup Citrix Virtual Apps and Desktop and intrgrated with ESXi and Vcenter to auto provisioning and deployment of VDI vm's",
    ],
  },
];

export default function Timeline() {
  const [visibleYears, setVisibleYears] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const year = entry.target.getAttribute("data-year");
            if (year) {
              setVisibleYears((prev) => new Set(prev).add(year));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".timeline-item").forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          My Journey
        </h2>
        <div className="space-y-12">
          {timeline.map((timelineYear) => (
            <div
              key={timelineYear.year}
              className={`timeline-item transition-all duration-700 ${
                visibleYears.has(timelineYear.year)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              data-year={timelineYear.year}
            >
              <div className="font-bold text-3xl text-gray-900 dark:text-white mb-6 text-center">
                {timelineYear.year}
              </div>
              <div className="space-y-4">
                {timelineYear.events.map((event, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all ${
                      visibleYears.has(timelineYear.year)
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-10"
                    }`}
                    style={{
                      transitionDelay: visibleYears.has(timelineYear.year)
                        ? `${index * 100}ms`
                        : "0ms",
                    }}
                  >
                    <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 flex-shrink-0"></div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      {event}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
