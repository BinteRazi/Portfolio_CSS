import React from "react";
import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <section className={styles.aboutSection} id="about">
        <div className={styles.container}>
          <Image
            src="/images/Web-Developer.jpg" 
            alt="About Me" 
            width={250} 
            height={350}
            className={styles.aboutImage} 
          />
          <div className={styles.aboutContent}>
            <h2 className={styles.aboutTitle}>About Me</h2>
            <p className={styles.aboutText}>
              I am a creative and passionate web developer with a flair for building interactive, visually stunning, and highly functional web applications.
              Leveraging cutting-edge technologies like React, Next.js, TypeScript, and Tailwind CSS, I bring ideas to life with precision and creativity.
              With a focus on delivering seamless user experiences and innovative solutions, I strive to transform complex concepts into engaging digital 
              realities that leave a lasting impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
