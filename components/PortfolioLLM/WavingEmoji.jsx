"use client";
import { motion } from "framer-motion";

export const WavingEmoji = () => {
  return (
    <motion.p
      className="ml-2 text-lg"
      animate={{
        rotate: [0, 17.5, -20, 20, 0],
      }}
      transition={{
        duration: 1.75,
        repeat: Infinity,
        ease: "easeInOut",
        repeatDelay: 2.5,
      }}
    >
      👋🏾
    </motion.p>
  );
};

export default WavingEmoji;
