import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface MobileCardProps {
  image: string;
  title?: string;
  subtitle?: string;
  description?: string;
  variant?: "full" | "compact" | "text-overlay";
  onClick?: () => void;
}

export function MobileCard({ 
  image, 
  title, 
  subtitle, 
  description, 
  variant = "full",
  onClick 
}: MobileCardProps) {
  if (variant === "text-overlay") {
    return (
      <motion.div
        className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden cursor-pointer group"
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        <ImageWithFallback
          src={image}
          alt={title || "Portfolio image"}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          {subtitle && (
            <p className="text-meta text-[#C9A87C] mb-2">{subtitle}</p>
          )}
          {title && (
            <h3 className="text-h3 mb-2">{title}</h3>
          )}
          {description && (
            <p className="text-body opacity-80">{description}</p>
          )}
        </div>
      </motion.div>
    );
  }

  if (variant === "compact") {
    return (
      <motion.div
        className="relative overflow-hidden cursor-pointer group"
        onClick={onClick}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <div className="aspect-[4/5] overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          >
            <ImageWithFallback
              src={image}
              alt={title || "Portfolio image"}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        {(title || subtitle) && (
          <div className="py-4">
            {subtitle && (
              <p className="text-meta text-[#C9A87C] mb-1">{subtitle}</p>
            )}
            {title && (
              <h4 className="text-h4">{title}</h4>
            )}
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      className="relative overflow-hidden cursor-pointer bg-white"
      onClick={onClick}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
    >
      <div className="aspect-video overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
        >
          <ImageWithFallback
            src={image}
            alt={title || "Portfolio image"}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      <div className="p-6">
        {subtitle && (
          <p className="text-meta text-[#C9A87C] mb-2">{subtitle}</p>
        )}
        {title && (
          <h3 className="text-h3 mb-3">{title}</h3>
        )}
        {description && (
          <p className="text-body text-gray-600 leading-relaxed">{description}</p>
        )}
      </div>
    </motion.div>
  );
}
