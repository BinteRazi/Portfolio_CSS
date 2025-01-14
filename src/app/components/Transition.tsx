"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import styles from "../module/Transition.module.css";

const TransitionVariants: Variants = {
    initial: {
        y: "100%",
        height: "100%",
    },
    animate: {
        y: "0%",
        height: "0%",
    },
    exit: {
        y: ["0%", "100%"],
        height: ["0%", "100%"],
    },
};

const Transition = () => {
    const layers = [0.2, 0.4, 0.6]; // Delays for layers
    return (
        <div>
            {layers.map((delay, index) => (
                <motion.div
                    key={index}
                    className={`${styles.transitionLayer} ${styles[`layer${index + 1}`]}`}
                    variants={TransitionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ delay, duration: 0.6, ease: "easeInOut" }}
                />
            ))}
        </div>
    );
};

export default Transition;
