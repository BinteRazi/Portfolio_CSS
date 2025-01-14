import React from "react";
import Image from "next/image";
import styles from "./skills.module.css";

const SkillPage = () => {
  // Array of skills and their corresponding logo paths
  const skills = [
    { name: "Next.js", src: "/images/tech/next.js.png" },
    { name: "React", src: "/images/tech/react.png" },
    { name: "Tailwind", src: "/images/tech/tailwind.png" },
    { name: "Visual Studio Code", src: "/images/tech/visual.svg" },
    { name: "TypeScript", src: "/images/tech/typscript.png" },
    { name: "JavaScript", src: "/images/tech/javascript.png" },
    { name: "HTML", src: "/images/tech/html.png" },
    { name: "CSS", src: "/images/tech/css.png" },
  ];

  return (
    <div className={styles.skillPage}>
      <div className={styles.contentContainer}>
        {/* Header Section */}
        <div className={styles.header}>
          <h1>
            Skills &{" "}
            <span className={styles.highlighted}>Technologies</span>
          </h1>
          <p>Showcase of my expertise and technologies I have worked with.</p>
        </div>

        {/* Skills Logos Grid */}
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className={styles.skillCard}
              aria-label={skill.name}
            >
              <Image
                src={skill.src}
                alt={`${skill.name} Logo`}
                className="skillLogo"
                width={30}
                height={30}
              />
              <p className={styles.skillName}>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
