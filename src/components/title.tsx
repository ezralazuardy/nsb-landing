"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type HeadingProps = {
  title: string;
  subtitle: string;
};

const Heading = ({ title, subtitle }: HeadingProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <div className="container mx-auto px-8 pt-8 pb-4 md:pt-8 md:pb-4">
      <motion.div
        className="max-w-4xl mx-auto md:mx-0"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 font-serif"
          variants={itemVariants}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-xl text-muted-foreground mb-8 max-w-4xl"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Heading;
