import React from "react";
import ProjectCard from "./projectCards";
import styles from './project.module.css';

const projects = [
  {
    title: "Static Interactive Resume",
    desc: "A HTML and TypeScript-based app that allows users to create, edit, and showcase their professional resumes interactively.",
    image: "/images/project_01.png",
    tags: ["HTML", "CSS", "Node.js", "TypeScript"],
  },
  {
    title: "Dynamic Resume Builder",
    desc: "This Resume Builder enables users to create, edit, and preview professional resumes interactively with a sleek design.",
    image: "/images/project_02.jpg",
    tags: ["HTML", "CSS", "Node.js", "TypeScript"],
  },
  {
    title: "Editable Resume Builder",
    desc: "An editable resume builder that lets users customize and update their resumes effortlessly with a user-friendly interface.",
    image: "/images/project_03.jpg",
    tags: ["HTML", "CSS", "Node.js", "TypeScript"],
  },
  {
    title: "Website Landing Page",
    desc: "A simple website landing page built with Next.js, focusing on ease of development, and quick setup.",
    image: "/images/project_04.jpg",
    tags: ["Next.js", "React", "JavaScript", "CSS"],
  },
  {
    title: "Figma Head Design",
    desc: "A Figma design converted into a web interface using Next.js, ensuring fast performance and seamless user experience.",
    image: "/images/project_05.jpg",
    tags: ["Next.js", "React", "JavaScript", "CSS"],
  },
  {
    title: "Figma Landing Page Design",
    desc: "A Next.js landing page is a high-performance, SEO-friendly, and responsive web page designed to showcase a product, service, or brand.",
    image: "/images/project_06.jpg",
    tags: ["Next.js", "React", "JavaScript", "CSS"],
  },
];

const ProjectList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>My Projects</h2>
        <p className={styles.subtitle}>
          Welcome to my portfolio! Here, you will explore a collection of my projects showcasing my expertise in web development and design.
        </p>
      </div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            desc={project.desc}
            image={project.image}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
