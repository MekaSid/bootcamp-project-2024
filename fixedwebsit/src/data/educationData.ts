
export interface Education {
    institution: string;
    degree: string;
    graduationDate: string;
    gpa: string;
    coursework: string[];
  }
  
  export const educationData: Education = {
    institution: "California Polytechnic State University - San Luis Obispo",
    degree:
      "B.S - Computer Science, Concentration in Artificial Intelligence and Machine Learning, Minor in Statistics",
    graduationDate: "Expected Graduation: June 2026",
    gpa: "GPA: 3.6",
    coursework: [
      "Data Structures",
      "OOP",
      "Discrete Structures",
      "Computer Organization",
      "Algorithms",
      "Artificial Intelligence",
      "Systems Programming",
      "Knowledge Based Systems",
      "Database Systems",
      "Theory of Computation",
      "Computer Security",
      "Software Engineering",
    ],
  };
  