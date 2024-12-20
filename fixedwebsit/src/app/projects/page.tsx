
import React from 'react';
import MiniProjectCard from './MiniProjectCard';
import styles from './projects.module.css'; 
import Project from '@/database/projectSchema'
import connectDB from '@/database/db';


async function getProjects() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await Project.find().orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    console.log(err)
    return null;
  }
}


export default async function ProjectsPage() {

  const projects = await getProjects();

  if (!projects) {
    return (
      <header>
        <p>No blogs found</p>
      </header>
    );
  }

  return (
    <div className = {styles.container}>
      <h1 className={styles.pageTitle}>Projects</h1>
      <div className={styles.gridContainer}>
      {projects.map((project, index) => (
        <MiniProjectCard
          key={index}
          logo={project.logo}
          title={project.title}
          description={project.description}
          link={project.link}
          languages={project.languages}
        />
      ))}
    </div>

    </div>
    
  );
}
