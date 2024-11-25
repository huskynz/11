"use client";

import { useEffect, useRef } from 'react';

interface TimelineEvent {
  year: string;
  events: string[];
}

const timeline: TimelineEvent[] = [
    {
      year: "2018",
      events: ["Deployed first Ubuntu 18.04 VM in Hyper-V"]
    },
    {
      year: "2019",
      events: ["Moved to New Zealand"]
    },
    {
      year: "2020",
      events: [
        "Started learning VMware Workstation Pro",
        "Deployed first Azure Web App",
        "Created www.husky.nz",
        "Created my Github account",
        "Started learning Linux",
        "Developed skills with Azure"
      ]
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
        "Developed skills with Intune and Windows Autopilot"
      ]
    },
    {
      year: "2022",
      events: [
        "Expanded knowledge of Git and GitHub",
        "Studied .NET and .NET websites",
        "Began learning AWS",
        "Migrated AD Domain from Azure to AWS"
      ]
    },
    {
      year: "2023",
      events: [
        "Earned MS-900 Certification",
        "Gained work experience at Inde Technology (5 weeks)",
        "Began experimenting with Sophos Firewalls",
        "Started learning Node.js and TypeScript",
        "Began to learn more about Cloudflare"
      ]
    },
    {
      year: "2024",
      events: [
        "Used Azure migrate to move AD domain from AWS to Azure",
        "New Zealand Certificate in Information Technology Essentials (Level 4) at Ara",
        "Started streaming on Twitch",
        "Deployed a new version of www.husky.nz using TypeScript and Astro.js",
        "Had some fun developing https://legacy.husky.nz witch is a website built with HTML3.0 no CSS and no JavaScript",
        "Built this current site because I wanted to learn some more about react and NextJS"
      ]
    }
  ];

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const background = section?.querySelector('.timeline-background');
      const content = section?.querySelector('.timeline-content');
      const timelineItems = section?.querySelectorAll('.timeline-item');
      
      if (!section || !background || !content) return;

      const sectionRect = section.getBoundingClientRect();
      const isInView = sectionRect.top < window.innerHeight / 2 && sectionRect.bottom > 0;

      if (isInView) {
        background.classList.add('active');
        content.classList.add('active');
        
        timelineItems?.forEach((item) => {
          const itemRect = item.getBoundingClientRect();
          const isItemInView = itemRect.top < window.innerHeight * 0.8;
          
          if (isItemInView) {
            item.classList.add('active');
            const events = item.querySelectorAll('.timeline-event');
            
            events.forEach((event, index) => {
              setTimeout(() => {
                event.classList.add('active');
              }, index * 200);
            });
          }
        });
      } else {
        background.classList.remove('active');
        content.classList.remove('active');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="animate timeline-section relative min-h-screen" id="timeline-section">
      <div className="timeline-background fixed inset-0 backdrop-blur-xl bg-white/50 dark:bg-black/50 opacity-0 transition-opacity duration-500 -z-10" />
      
      <div className="timeline-content space-y-4 py-24 opacity-0 transform translate-y-10 transition-all duration-500">
        <p className="font-semibold text-black dark:text-white text-2xl text-center">
          My Journey
        </p>
        <div className="space-y-12 max-w-2xl mx-auto px-4">
          {timeline.map((timelineYear) => (
            <div 
              key={timelineYear.year}
              className="timeline-item transform translate-y-10"
              data-year={timelineYear.year}
            >
              <div className="font-bold text-3xl text-black dark:text-white mb-6 text-center">
                {timelineYear.year}
              </div>
              <div className="space-y-4">
                {timelineYear.events.map((event, index) => (
                  <div 
                    key={index}
                    className="timeline-event bg-black transform translate-x-10 group flex items-center gap-4 p-4 rounded-lg border border-black/25 dark:border-white/25 hover:bg-black/5 hover:dark:bg-white/15 blend transition-all"
                  >
                    <div className="h-2 w-2 rounded-full bg-black dark:bg-white" />
                    <div className="text-sm text-black/75 dark:text-white/75">
                      {event}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .timeline-section {
          scroll-margin-top: 2rem;
        }
        
        .timeline-background.active {
          opacity: 1;
        }
        
        .timeline-content.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .timeline-item.active {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .timeline-event.active {
          opacity: 1;
          transform: translateX(0);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
}