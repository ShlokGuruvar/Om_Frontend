import { motion, useInView } from "motion/react";
import { useState, useRef } from "react";
import { Filter, Grid, Columns } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { HorizontalScrollSection } from "../components/HorizontalScrollSection";
import { MobileCard } from "../components/MobileCard";
import type { Page } from "../components/Router";

interface WorkPageProps {
  navigate: (page: Page, params?: { id: string }) => void;
}

export function WorkPage({ navigate }: WorkPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("masonry");
  
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const categories = [
    { id: "all", label: "All Work" },
    { id: "weddings", label: "Weddings" },
    { id: "portraits", label: "Portraits" },
    { id: "commercial", label: "Commercial" },
    { id: "documentary", label: "Documentary" },
    { id: "travel", label: "Travel" }
  ];

  const projects = [
    {
      id: "1",
      title: "Anjana & Yash",
      category: "weddings",
      location: "Delhi, India",
      year: "2024",
      image: "https://images.unsplash.com/photo-1671450632893-9b6ec834f492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwYnJpZGV8ZW58MXx8fHwxNzYyNDkwNzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: true
    },
    {
      id: "2",
      title: "Sacred Ceremonies",
      category: "weddings",
      location: "Jaipur, India",
      year: "2024",
      image: "https://images.unsplash.com/photo-1680490958274-46cb87e30cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzYyNDM4MzA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "3",
      title: "Bridal Portraits",
      category: "portraits",
      location: "Mumbai, India",
      year: "2024",
      image: "https://images.unsplash.com/photo-1610173826014-d131b02d69ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBicmlkZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjQ5MDc0OHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "4",
      title: "Eternal Love",
      category: "weddings",
      location: "Goa, India",
      year: "2024",
      image: "https://images.unsplash.com/photo-1641279762487-33beaaf68775?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjb3VwbGUlMjB3ZWRkaW5nfGVufDF8fHx8MTc2MjQ5MDc0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      featured: true
    },
    {
      id: "5",
      title: "Festival of Colors",
      category: "weddings",
      location: "Udaipur, India",
      year: "2024",
      image: "https://images.unsplash.com/photo-1645856052472-95fe99103c11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzYyNDQwMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "6",
      title: "Fashion Editorial",
      category: "portraits",
      location: "London, UK",
      year: "2024",
      image: "https://images.unsplash.com/photo-1610879328923-3de1e04c3ddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI0MjQ4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "7",
      title: "Corporate Excellence",
      category: "commercial",
      location: "Dubai, UAE",
      year: "2023",
      image: "https://images.unsplash.com/photo-1705544363562-cdf94dd458cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MjQwMjk2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "8",
      title: "Urban Landscapes",
      category: "travel",
      location: "Singapore",
      year: "2023",
      image: "https://images.unsplash.com/photo-1642287040066-2bd340523289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVuaW5nJTIwY2l0eXNjYXBlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MjQ5MDc1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      featured: true
    },
    {
      id: "9",
      title: "Natural Beauty",
      category: "travel",
      location: "Iceland",
      year: "2023",
      image: "https://images.unsplash.com/photo-1601759783107-f89cae1a7ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwbmF0dXJlJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2MjQ3OTk4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "10",
      title: "Luxury Interiors",
      category: "commercial",
      location: "Paris, France",
      year: "2023",
      image: "https://images.unsplash.com/photo-1581784878214-8d5596b98a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjIzODUzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "11",
      title: "Timeless Moments",
      category: "weddings",
      location: "Bali, Indonesia",
      year: "2023",
      image: "https://images.unsplash.com/photo-1533091090875-1ff4acc497dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYyNDkwNzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "12",
      title: "Outdoor Romance",
      category: "weddings",
      location: "California, USA",
      year: "2023",
      image: "https://images.unsplash.com/photo-1656103743142-229f0adaf068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NjI0MTM5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwZGVjb3JhdGlvbnxlbnwxfHx8fDE3NjI0NDg4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl text-white mb-4">Portfolio</h1>
            <p className="text-xl text-white/80">A collection of visual stories</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects - Horizontal Scroll */}
      <div className="min-h-screen py-16 bg-white">
        <div className="px-6 mb-8">
          <p className="text-meta text-[#C9A87C] text-center mb-2">FEATURED</p>
          <h2 className="text-h2 text-center mb-2">Highlighted Work</h2>
          <p className="text-center text-gray-600">Scroll to explore featured projects</p>
        </div>
        
        <HorizontalScrollSection className="px-6">
          {featuredProjects.map((project) => (
            <div key={project.id} className="flex-shrink-0 w-[90vw] md:w-[60vw] lg:w-[45vw]">
              <MobileCard
                image={project.image}
                title={project.title}
                subtitle={`${project.location} · ${project.year}`}
                description="Tap to view full project"
                variant="full"
                onClick={() => navigate("work-detail", { id: project.id })}
              />
            </div>
          ))}
        </HorizontalScrollSection>
      </div>

      {/* Category Filter */}
      <section className="py-12 px-6 bg-[#FAF9F6] border-y border-gray-200 sticky top-16 z-20 backdrop-blur-md bg-[#FAF9F6]/95">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Filter Toggle */}
          <div className="flex items-center justify-between mb-6 md:mb-0">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">Filter by category</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 ${viewMode === "grid" ? "text-[#C9A87C]" : "text-gray-400"}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("masonry")}
                className={`p-2 ${viewMode === "masonry" ? "text-[#C9A87C]" : "text-gray-400"}`}
              >
                <Columns className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#C9A87C] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid/Masonry */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <MobileCard
                    image={project.image}
                    title={project.title}
                    subtitle={`${project.location} · ${project.year}`}
                    variant="compact"
                    onClick={() => navigate("work-detail", { id: project.id })}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="break-inside-avoid mb-6"
                >
                  <div className="relative overflow-hidden cursor-pointer group">
                    <div className={index % 3 === 0 ? "aspect-[3/4]" : index % 3 === 1 ? "aspect-square" : "aspect-[4/3]"}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      >
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <p className="text-meta text-[#C9A87C] mb-1">{project.location}</p>
                        <h3 className="text-h4">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-5xl md:text-6xl text-[#C9A87C] mb-2">50+</h3>
              <p className="text-meta text-gray-600">Projects</p>
            </div>
            <div>
              <h3 className="text-5xl md:text-6xl text-[#C9A87C] mb-2">12</h3>
              <p className="text-meta text-gray-600">Countries</p>
            </div>
            <div>
              <h3 className="text-5xl md:text-6xl text-[#C9A87C] mb-2">100+</h3>
              <p className="text-meta text-gray-600">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-5xl md:text-6xl text-[#C9A87C] mb-2">8</h3>
              <p className="text-meta text-gray-600">Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-h1 text-white mb-6">
            Like What You See?
          </h2>
          <p className="text-lead text-gray-300 mb-10">
            Let's collaborate on your next project and create something extraordinary together.
          </p>
          <motion.button
            onClick={() => navigate("contact")}
            className="px-10 py-4 bg-[#C9A87C] text-white hover:bg-[#B89668] transition-colors duration-300 uppercase tracking-widest"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.button>
        </div>
      </section>
    </div>
  );
}
