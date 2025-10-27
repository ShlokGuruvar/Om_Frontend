import { motion } from "motion/react";
import { ReactNode } from "react";

export interface CTAButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  icon?: ReactNode;
}

const variantStyles = {
  primary: "border-black text-black hover:bg-black hover:text-white",
  secondary: "border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white",
  outline: "border-gray-300 text-gray-700 hover:border-black hover:text-black",
  ghost: "border-transparent text-gray-700 hover:bg-gray-100"
};

const sizeStyles = {
  sm: "px-6 py-2 text-sm",
  md: "px-8 py-3 text-sm",
  lg: "px-12 py-4 text-sm"
};

export function CTAButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  fullWidth = false,
  icon
}: CTAButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        group relative overflow-hidden border uppercase tracking-widest 
        transition-all duration-300
        ${variantStyles[variant]} 
        ${sizeStyles[size]}
        ${fullWidth ? 'w-full' : ''}
        flex items-center justify-center gap-2
      `}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon}
      </span>
      <div 
        className={`
          absolute inset-0 transform scale-x-0 group-hover:scale-x-100 
          transition-transform duration-300 origin-left
          ${variant === 'primary' ? 'bg-black' : variant === 'secondary' ? 'bg-[#8B7355]' : 'bg-gray-100'}
        `} 
      />
    </motion.button>
  );
}
