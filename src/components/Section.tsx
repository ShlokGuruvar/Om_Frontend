import { motion, useInView } from "motion/react";
import { useRef, ReactNode } from "react";

export interface SectionProps {
  children: ReactNode;
  layout?: "default" | "media-left" | "media-right" | "full-bleed" | "centered";
  theme?: "light" | "dark" | "cream";
  spacing?: "sm" | "md" | "md_lg" | "md_lg_pt" | "lg" | "xl";
  className?: string;
  id?: string;
}

const layoutStyles = {
  default: "grid md:grid-cols-1 gap-12",
  "media-left": "grid md:grid-cols-2 gap-12 items-center",
  "media-right": "grid md:grid-cols-2 gap-12 items-center",
  "full-bleed": "w-full",
  centered: "flex flex-col items-center text-center"
};

const themeStyles = {
  light: "bg-white text-gray-900",
  dark: "bg-[#1A1A1A] text-white",
  cream: "bg-[#FAF9F6] text-gray-900"
};

const spacingStyles = {
  sm: "py-12 px-6",
  md: "py-20 px-6",
  md_lg: "py-28 px-6",
  md_lg_pt: "pt-32 pb-96 px-6",
  lg: "py-32 px-6",
  xl: "py-40 px-6"
};

export function Section({
  children,
  layout = "default",
  theme = "light",
  spacing = "lg",
  className = "",
  id
}: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={`${themeStyles[theme]} ${spacingStyles[spacing]} ${className}`}
    >
      <div className={`max-w-7xl mx-auto ${layoutStyles[layout]}`}>
        {children}
      </div>
    </motion.section>
  );
}
