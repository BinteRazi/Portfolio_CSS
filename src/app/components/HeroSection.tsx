import React from "react";
import Image from "next/image";
import styles from "../module/HeroSection.module.css";

const HeroSection = () => {
  return (
    <section>
      <div className={styles.heroGrid}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            <span className={styles.gradientText}>Hello, I am </span> Nimra Razi
          </h1>
          <p className={styles.heroDescription}>
            A passionate web developer skilled with modern frameworks and cutting-edge technologies.
          </p>
          <div className={styles.heroButtons}>
            <button className={`${styles.button} ${styles.hireMe}`}>Hire Me</button>
            <button className={`${styles.button} ${styles.downloadCv}`}>
              <span className={styles.cvInnerButton}>Download Cv</span>
            </button>
          </div>
        </div>

        <div className={styles.heroImageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/girl image.png"
              alt="hero"
              width={350}
              height={350}
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
