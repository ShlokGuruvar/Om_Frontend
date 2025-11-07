import { motion, useInView } from "motion/react";
import { useRef, ReactNode } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Play } from "lucide-react";

export interface ContentCardProps {
  title: string;
  excerpt?: string;
  coverImage: string;
  tags?: string[];
  date?: string;
  readTime?: string;
  onClick?: () => void;
  variant?: "blog" | "work" | "service";
  size?: "sm" | "md" | "lg";
  featured?: boolean;
  isVideo?: boolean;
}

const variantStyles = {
  blog: {
    card: "bg-white border border-gray-200 hover:shadow-xl hover:border-[#8B7355]",
    title: "text-xl group-hover:text-[#8B7355]"
  },
  work: {
    card: "bg-gray-100 border-0 hover:shadow-2xl",
    title: "text-2xl group-hover:text-[#C9A87C]"
  },
  service: {
    card: "bg-white border-2 border-gray-200 hover:border-[#8B7355]",
    title: "text-xl"
  }
};

const sizeStyles = {
  sm: { card: "col-span-1 row-span-1", image: "aspect-[4/3]" },
  md: { card: "col-span-1 row-span-1 md:col-span-2", image: "aspect-video" },
  lg: { card: "col-span-1 row-span-2 md:col-span-2", image: "aspect-[16/10]" }
};

export function ContentCard({
  title,
  excerpt,
  coverImage,
  tags = [],
  date,
  readTime,
  onClick,
  variant = "blog",
  size = "sm",
  featured = false,
  isVideo = false
}: ContentCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const styles = variantStyles[variant];
  const sizes = sizeStyles[size];

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      onClick={onClick}
      className={`group cursor-pointer overflow-hidden transition-all duration-300 ${styles.card} ${sizes.card}`}
    >
      <div className={`relative ${sizes.image} overflow-hidden bg-gray-200`}>
        <ImageWithFallback
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {featured && (
          <div className="absolute top-4 left-4">
            <Badge variant="default" className="bg-[#C9A87C] text-white">Featured</Badge>
          </div>
        )}
        {tags.length > 0 && (
          <div className="absolute top-4 right-4 flex gap-2">
            {tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-white/90 backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {isVideo && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
              <Play className="w-5 h-5 text-black ml-0.5" fill="black" />
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6">
        {(date || readTime) && (
          <div className="flex items-center gap-4 text-meta text-gray-500 mb-3">
            {date && <span>{date}</span>}
            {date && readTime && <span>·</span>}
            {readTime && <span>{readTime}</span>}
          </div>
        )}
        
        <h3 className={`${styles.title} mb-3 transition-colors duration-300`}>
          {title}
        </h3>
        
        {excerpt && (
          <p className="text-gray-600 leading-relaxed line-clamp-3 text-body">
            {excerpt}
          </p>
        )}
      </div>
    </motion.article>
  );
}
