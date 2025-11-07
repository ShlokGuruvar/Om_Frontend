import { motion, useScroll, useTransform } from "motion/react";
import { useRef, ReactNode } from "react";

interface HorizontalScrollSectionProps {
  children: ReactNode;
  className?: string;
}

export function HorizontalScrollSection({ children, className = "" }: HorizontalScrollSectionProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div ref={targetRef} className={`relative ${className}`}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-4 md:gap-6"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
