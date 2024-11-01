// src/data/experienceData.ts

export interface Experience {
    company: string;
    position: string;
    duration: string;
    responsibilities: string[];
  }
  
  export const experienceData: Experience[] = [
    {
      company: "SHOPVOX",
      position: "Software Engineering Intern",
      duration: "July 2023 - September 2023",
      responsibilities: [
        "Developed existing HTML and CSS to fix 100+ web-based issues prompted from the marketing department for a polished UI",
        "Collaborated with team members to implement and improve data management features to enhance UX",
        "Utilized Statamic and TailwindCSS to organize pages and manage codebase overseeing company’s marketing",
      ],
    },
    {
      company: "TESSOLVE",
      position: "Software Engineering Intern",
      duration: "June 2021 - August 2021",
      responsibilities: [
        "Assembled Python script to filter inventory of 10,000+ unique computer chips by a specific criteria",
        "Enhanced ability to collect certain sets of data of computer chips and technological devices to export into Excel",
        "Received mentorship from full-time Software Engineer for tasks relating to front-end and back-end integration",
      ],
    },
    {
      company: "HACK4IMPACT",
      position: "Software Developer",
      duration: "September 2024 - Present",
      responsibilities: [
        "Participated in a bootcamp on TypeScript, React, Next.js, and MongoDB, applying practices for web application development",
        "Built projects gaining experience with application development, backend development, databases, and modern frameworks",
        "Fostered learning among humanitarian-focused developers and designers, reinforcing the idea to use technology for social good",
      ],
    },
    {
      company: "CAL POLY - ITS - CLIENT SERVICES",
      position: "Student Assistant",
      duration: "November 2023 - Present",
      responsibilities: [
        "Assisted in resolving 1,000+ service tickets regarding university-wide technical issues",
        "Troubleshot 1,000+ electronic products including hard drives, software, mobile apps, and OS systems",
        "Facilitated supportive and efficient customer service to aid students and faculty respectively",
      ],
    },
    {
      company: "SIGMA PHI DELTA",
      position: "Professional Event Planner",
      duration: "September 2023 - June 2024",
      responsibilities: [
        "Organized 15+ philanthropy experiences and fundraising events generating large non-profit revenue",
        "Collaborated with 5+ businesses to execute inclusive fundraising events utilizing organized mixed team structure",
        "Oversaw 10+ events including mock interviews, resume building, and LinkedIn workshops for students’ professional development",
      ],
    },
  ];
  