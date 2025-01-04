import { motion } from "framer-motion";

export const LoadingDots = () => {
  const dotVariants = {
    start: { y: 0 },
    end: { y: -10 },
  };

  const dotTransition = {
    duration: 0.5,
    repeat: Infinity, // Makes the animation repeat
    repeatType: "reverse", // Reverses the animation for a yoyo effect
    ease: "easeInOut",
  };

  return (
    <div className="flex items-center justify-center space-x-2 self-start mt-6">
      <motion.div
        className="w-3 h-3 bg-accent rounded-full"
        variants={dotVariants}
        initial="start"
        animate="end"
        transition={{ ...dotTransition, delay: 0 }}
      />
      <motion.div
        className="w-3 h-3 bg-accent rounded-full"
        variants={dotVariants}
        initial="start"
        animate="end"
        transition={{ ...dotTransition, delay: 0.2 }}
      />
      <motion.div
        className="w-3 h-3 bg-accent rounded-full"
        variants={dotVariants}
        initial="start"
        animate="end"
        transition={{ ...dotTransition, delay: 0.4 }}
      />
    </div>
  );
};
