import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Quote } from "lucide-react";

export interface QuoteBlockProps {
  quote: string;
  author?: string;
  role?: string;
  variant?: "default" | "large" | "compact" | "highlighted";
  alignment?: "left" | "center" | "right";
}

const variantStyles = {
  default: {
    container: "py-12",
    quote: "text-2xl md:text-3xl",
    icon: "w-12 h-12"
  },
  large: {
    container: "py-16",
    quote: "text-3xl md:text-5xl",
    icon: "w-16 h-16"
  },
  compact: {
    container: "py-8",
    quote: "text-xl md:text-2xl",
    icon: "w-8 h-8"
  },
  highlighted: {
    container: "py-12 px-8 border-l-4 border-[#C9A87C] bg-white/50",
    quote: "text-2xl md:text-3xl",
    icon: "w-12 h-12"
  }
};

const alignmentStyles = {
  left: "text-left items-start",
  center: "text-center items-center",
  right: "text-right items-end"
};

export function QuoteBlock({
  quote,
  author,
  role,
  variant = "default",
  alignment = "left"
}: QuoteBlockProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const styles = variantStyles[variant];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={`${styles.container} ${alignmentStyles[alignment]} flex flex-col gap-6`}
    >
      <Quote className={`${styles.icon} text-[#C9A87C] opacity-30`} />
      <blockquote className={`${styles.quote} leading-relaxed italic`}>
        "{quote}"
      </blockquote>
      {(author || role) && (
        <div className="text-meta text-gray-500">
          {author && <div>{author}</div>}
          {role && <div className="text-[#8B7355]">{role}</div>}
        </div>
      )}
    </motion.div>
  );
}
