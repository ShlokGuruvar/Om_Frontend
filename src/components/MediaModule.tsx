import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Play } from "lucide-react";

export interface MediaModuleProps {
  src: string;
  alt: string;
  type?: "image" | "video";
  aspectRatio?: "square" | "video" | "portrait" | "wide";
  caption?: string;
  rounded?: boolean;
  mask?: "none" | "rounded" | "circle";
  size?: "sm" | "md" | "lg" | "full";
  parallax?: boolean;
}

const aspectRatioStyles = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]"
};

const maskStyles = {
  none: "",
  rounded: "rounded-lg overflow-hidden",
  circle: "rounded-full overflow-hidden"
};

const sizeStyles = {
  sm: "max-w-md",
  md: "max-w-2xl",
  lg: "max-w-4xl",
  full: "w-full"
};

export function MediaModule({
  src,
  alt,
  type = "image",
  aspectRatio = "video",
  caption,
  rounded = true,
  mask = "rounded",
  size = "full",
  parallax = false
}: MediaModuleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={`${sizeStyles[size]} mx-auto`}
    >
      <div className={`relative ${aspectRatioStyles[aspectRatio]} ${maskStyles[mask]} bg-gray-100 group`}>
        {type === "video" ? (
          <div className="relative w-full h-full">
            <ImageWithFallback
              src={src}
              alt={alt}
              className={`w-full h-full object-cover ${parallax ? 'group-hover:scale-105 transition-transform duration-700' : ''}`}
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                <Play className="w-6 h-6 text-black ml-1" fill="black" />
              </div>
            </div>
          </div>
        ) : (
          <ImageWithFallback
            src={src}
            alt={alt}
            className={`w-full h-full object-cover ${parallax ? 'group-hover:scale-105 transition-transform duration-700' : ''}`}
          />
        )}
      </div>
      {caption && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-meta text-gray-500 mt-4"
        >
          {caption}
        </motion.p>
      )}
    </motion.div>
  );
}
