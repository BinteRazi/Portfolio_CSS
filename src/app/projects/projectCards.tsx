"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from './project.module.css';

interface Props {
  title: string;
  desc: string;
  image: string;
  tags: string[];
}

const ProjectCard = ({ title, desc, image, tags }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <motion.div
      onClick={handleFlip}
      className={`${styles.projectCard} ${isFlipped ? styles.flipped : ""}`}
      initial={{ rotateY: 0 }}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.8 }}
      onAnimationComplete={() => setIsAnimating(false)}
    >
      {/* Front Side */}
      <div
        className={styles.projectCardimage}
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Back Side */}
      <div className={styles.projectCardback}>
        <h1>{title}</h1>
        <p>{desc}</p>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
