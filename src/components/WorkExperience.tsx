"use client";

import React, { useState } from "react";

const jobs = [
  {
    title: "Sideline",
    role: "Software Development Engineer Intern",
    date: "May. 2025 – Aug. 2025",
    location: "Chicago, IL",
    bullets: [
      "Developed the Post Boosting feature, resulting in a 20% increase in user engagement over a 3-month period.",
      "Built reusable iOS UI components (boost icons, animated overlays, modals), reducing boost-related development time and achieving UI load times under 250ms.",
      "Implemented key API endpoints for post boosting, ensuring API calls complete within 2 seconds and accelerating front-end development by 40%.",
      "Leveraged CI/CD pipelines, Git, and monitoring tools (Cocoa Sentry) to maintain service availability and ensure production readiness."
    ]
  },
  {
    title: "VOID Tech",
    role: "Software Engineer",
    date: "Jan. 2025 – Present",
    location: "Ann Arbor, MI",
    bullets: [
      "Worked with a team of 4 developers and 2 designers by managing task delegation across 18+ issues, fixing 5+ bugs, and developing 3 new features for Park Swift.",
      "Engaged in development phases by building 3 Swift UI components, and creating 2 ScrollView screens for Park Swift."
    ]
  },
  {
    title: "Michigan Hackers",
    role: "iOS Developer",
    date: "Oct. 2024 – Apr. 2025",
    location: "Ann Arbor, MI",
    bullets: [
      "Developed a full-stack mobile application using Swift and Python to provide students with company-specific interview and LeetCode questions, streamlining Software Engineering interview preparation.",
      "Built features such as a personalized question history, filtering by company and difficulty, and a collaborative discussion forum for users to share insights and solutions.",
      "Collaborated with 4 UX designers and 10 iOS developers, ensuring an intuitive experience for students navigating company preparation resources."
    ]
  },
  {
    title: "Discovery Partners Institute",
    role: "iOS App Development Intern",
    date: "Jun. 2023 – Aug. 2023",
    location: "Chicago, IL",
    bullets: [
      "Developed a full-stack entertainment mobile application using Swift, providing an engaging user experience with interactive features.",
      "Built authentication and user profile management systems, allowing personalized recommendations and progress tracking.",
      "Collaborated with 2 UX designers and 1 iOS developer, ensuring a seamless and visually appealing interface."
    ]
  }
];

const WorkExperience = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
      <div className="space-y-2">
        {jobs.map((job, idx) => (
          <div key={job.title} className="border rounded-lg overflow-hidden bg-white/70 dark:bg-black/30 shadow">
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left focus:outline-none hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"
              onClick={() => setOpen(open === idx ? null : idx)}
              aria-expanded={open === idx}
            >
              <span>
                <span className="font-bold">{job.title}</span>
                <span className="font-normal italic ml-2">{job.role}</span>
              </span>
              <span className="text-sm text-gray-500">{job.date}</span>
            </button>
            <div
              className={`px-6 pb-4 pt-0 text-sm transition-all duration-300 ease-in-out ${open === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                <div className="italic text-gray-600 dark:text-gray-300">{job.location}</div>
              </div>
              <ul className="list-disc list-inside ml-4">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience; 