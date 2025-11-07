import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface ScrollIndicatorProps {
  direction?: "horizontal" | "vertical";
  text?: string;
  className?: string;
}

export function ScrollIndicator({ 
  direction = "horizontal", 
  text = "Scroll to explore",
  className = "" 
}: ScrollIndicatorProps) {
  if (direction === "horizontal") {
    return (
      <motion.div
        className={`flex items-center gap-2 text-sm text-gray-500 ${className}`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <span>{text}</span>
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`flex flex-col items-center gap-2 text-sm text-gray-500 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <span className="uppercase tracking-wider text-xs">{text}</span>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
        </div>
      </motion.div>
    </motion.div>
  );
}
