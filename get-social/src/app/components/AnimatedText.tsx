"use client";
import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.01,
      staggerChildren: 0.1,
      // duration: 0.6, // Adjust for animation speed
      // ease: "easeInOut", // Choose an easing function for a smoother effect
    },
  },
};

// ??

const singleWord = {
  initial: {
    opacity: 0,
    // scale: 0.3,
    y: 50, // Adjust for slide direction
  },
  animate: {
    opacity: 1,
    // scale: 1,
    y: 0,
    transition: {
      // delay: 0.3,
      duration: 1, // Adjust for animation speed
      // ease: "easeInOut", // Choose an easing function for a smoother effect
    },
  },
};

const animateText = ({ text = "", className = "" }) => {
  return (
    <div className="mx-auto py-2  flex items-center justify-ceenter text-center overflow-hidden sm:py-0">
      <motion.h1
        className={` inline-block mr-9  w-full left-9  text-white font-light capitalize text-6xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className=" left-9 inline-block"
            variants={singleWord}
            // initial="initial"
            // animate="animate"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};
export default animateText;
