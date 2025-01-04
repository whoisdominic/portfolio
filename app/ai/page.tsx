"use client";
import { motion } from "framer-motion";
import { PortfolioLLM } from "@/components/PortfolioLLM/PortfolioLLM";

const Ai = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <PortfolioLLM />
      </div>
    </motion.div>
  );
};

export default Ai;
