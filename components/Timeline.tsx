"use client";

import { timeline } from '../lib/events';

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
