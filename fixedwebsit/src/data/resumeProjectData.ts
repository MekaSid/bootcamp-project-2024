// src/data/projectData.ts

export interface Project {
    title: string;
    role: string;
    duration: string;
    description: string[];
  }
  
  export const projectData: Project[] = [
    {
      title: "TRACKED | React Native Mobile App",
      role: "Independent Developer",
      duration: "August 2024 - Present",
      description: [
        "Developed a full-stack application that computes nutritional macros from user inputs with Natural Language Processing",
        "Integrated Flask API to streamline Python backend and React Native frontend for complete mobile application development",
        "Applied a nutrient database for macro information retrieval enabling accurate insights based on user-entered information",
      ],
    },
    {
      title: "SIGMA PHI DELTA | Chess AI Project",
      role: "Software Developer",
      duration: "April 2023 - June 2023",
      description: [
        "Assisted with software development of chess AI using Python to implement alpha-beta pruning and create neural networks",
        "Integrated software with working 3-axis gantry system machine promoting effective collaboration",
        "Utilized algorithmic stepping and pruning into implementation to minimize data usage and maximize efficiency",
      ],
    },
  ];
  