"use client";

// Import Motion
import { motion } from "framer-motion";

// Types
import { VariantsType } from "@/types";

// Hooks
import useScrollProgress from "@/้hooks/useScrollProgress";

const variants: VariantsType = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

export default function template({ children }: { children: React.ReactNode }) {
  const completion: number = useScrollProgress();

  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
    >
      {children}

      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed z-50 bg-primary w-2 top-0 right-0 bottom-0 transition-all duration-700"
      ></span>

      <div className="h-[2500px]"></div>
    </motion.main>
  );
}
