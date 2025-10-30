import { forwardRef, useRef, useImperativeHandle } from 'react';
import { motion, useInView } from "motion/react";

interface SectionProps {
  children: React.ReactNode;
  layout?: "default" | "centered" | "media-left";
  theme?: "light" | "dark" | "cream";
  spacing?: "sm" | "md" | "lg" | "xl" | "md_lg_pt";
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

// Theme styles mapping
const themeStyles: Record<NonNullable<SectionProps['theme']>, string> = {
  light: "bg-white text-gray-900",
  dark: "bg-gray-900 text-white",
  cream: "bg-[#FAF9F6] text-gray-900"
};

// Spacing styles mapping
const spacingStyles: Record<NonNullable<SectionProps['spacing']>, string> = {
  sm: "py-12",
  md: "py-20",
  lg: "py-32",
  xl: "py-40",
  md_lg_pt: "pt-20 pb-32"
};

// Layout styles mapping
const layoutStyles: Record<NonNullable<SectionProps['layout']>, string> = {
  default: "px-6",
  centered: "px-6 text-center",
  "media-left": "px-6 grid md:grid-cols-2 gap-12 items-center"
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  function Section(
    {
      children,
      layout = "default",
      theme = "light",
      spacing = "lg",
      className = "",
      id,
      ...rest
    },
    forwardedRef
  ) {
    const internalRef = useRef<HTMLElement>(null);
    const isInView = useInView(internalRef, { once: true, margin: "-100px" });

    useImperativeHandle(forwardedRef, () => internalRef.current as HTMLElement);

    return (
      <motion.section
        id={id}
        ref={internalRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={`${themeStyles[theme]} ${spacingStyles[spacing]} ${className}`}
        {...rest}
      >
        <div className={`max-w-7xl mx-auto ${layoutStyles[layout]}`}>
          {children}
        </div>
      </motion.section>
    );
  }
);

Section.displayName = 'Section';
