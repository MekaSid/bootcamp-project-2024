
export interface Project {
    logo: string;
    title: string;
    description: string;
    link: string;
    languages: { icon: string; name: string }[];
  }
  
  export const projects: Project[] = [
    {
      logo: '/projecticons/tracked.png',
      title: 'Tracked',
      description: 'A React Native mobile app that uses Natural Language Processing to analyze user meal descriptions and calculate nutritional macros via a Python Flask API.',
      link: 'https://github.com/MekaSid/Tracked/tree/master',
      languages: [
        { icon: '/languages/react.png', name: 'React-Native' },
        { icon: '/languages/python.png', name: 'Python' },
      ],
    },

    
    
    {
      logo: '/projecticons/octordle.png',
      title: 'Octordle Solver',
      description: 'A Python project that uses statistics and data pruning to solve Octordle puzzles with high efficiency and accuracy.',
      link: 'https://github.com/MekaSid/Octordle-AI',
      languages: [
        { icon: '/languages/python.png', name: 'Python' },
      ],
    },
    {
      logo: '/projecticons/chess.png',
      title: 'Chess AI',
      description: 'A Chess AI project using Alpha-Beta pruning and neural networks to evaluate and predict moves. The model trains on chess data and uses Stockfish-based predictions for optimal moves, with components for data handling, board evaluation, and a basic GUI.',
      link: 'https://github.com/keonroohparvar/AI_ChessEngine',
      languages: [
        { icon: '/languages/python.png', name: 'Python' },
      ],
    },
    {
      logo: '/projecticons/autoplanner.png',
      title: 'AutoPlanner',
      description: 'A travel generator that creates personalized schedules for flights, hotels, and activities based on user preferences, utilizing Playwright for web scraping and pandas for itinerary development.',
      link: 'https://github.com/MekaSid/AutoPlanner',
      languages: [
        { icon: '/languages/python.png', name: 'Python' },
      ],
    },
    {
      logo: '/projecticons/fitnesstracker.png',
      title: 'Fitness Tracker',
      description: 'A Java-based Fitness Tracker Application with a JavaFX GUI and MySQL database for managing exercises, trainers, and workouts.',
      link: 'https://github.com/MekaSid/fitnesstracker/tree/main',
      languages: [
        { icon: '/languages/sql.png', name: 'SQL' },
        { icon: '/languages/java.png', name: 'Java'}
      ],
    },
    {
      logo: '/projecticons/website.png',
      title: 'Personal Website',
      description: 'My personal website built using Next.js and Typescript.',
      link: 'https://github.com/yourusername/react-web-app',
      languages: [
        { icon: '/languages/react.png', name: 'React'},
        { icon: '/languages/typescript.png', name: 'Typescript' },

      ],
    },
    {
      logo: '/projecticons/huffman.png',
      title: 'Huffman Encoding',
      description: 'A Python project for efficient data compression using Huffman encoding and decoding.',
      link: 'https://github.com/MekaSid/Huffman-Encoding',
      languages: [
        { icon: '/languages/python.png', name: 'Python' },
      ],
    },
    {
      logo: '/projecticons/virtualworld.png',
      title: 'The Regular Show Game',
      description: 'A Java-based object-oriented virtual world game featuring multithreading, A* pathfinding, and OOP principles. ',
      link: 'https://github.com/MekaSid/The-Regular-Show-Game',
      languages: [
        { icon: '/languages/java.png', name: 'Java' },
      ],
    },
  ];
  