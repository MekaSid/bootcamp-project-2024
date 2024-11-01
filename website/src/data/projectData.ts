
export interface Project {
    logo: string;
    title: string;
    description: string;
    link: string;
  }
  
  export const projects: Project[] = [
    {
      logo: '/python.png',
      title: 'Python Project',
      description: 'A project built with Python for data analysis.',
      link: 'https://github.com/yourusername/python-project',
    },
    {
      logo: '/path/to/javascript-logo.png',
      title: 'JavaScript App',
      description: 'A dynamic app developed using JavaScript.',
      link: 'https://github.com/yourusername/javascript-app',
    },
    {
      logo: '/path/to/react-logo.png',
      title: 'React Web App',
      description: 'A responsive web app built with React.',
      link: 'https://github.com/yourusername/react-web-app',
    },
  ];
  