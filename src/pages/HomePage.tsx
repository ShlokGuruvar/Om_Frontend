import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Play, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { HorizontalScrollSection } from "../components/HorizontalScrollSection";
import { MobileCard } from "../components/MobileCard";
import type { Page } from "../components/Router";

interface HomePageProps {
  navigate: (page: Page) => void;
}

export function HomePage({ navigate }: HomePageProps) {
  const quoteRef = useRef(null);
  const isQuoteInView = useInView(quoteRef, { once: true, margin: "-100px" });

  return (
    <div className="bg-[#FAF9F6]">
      {/* Hero Section - Full Screen Video/Image */}
      <section className="relative h-screen w-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1671450632893-9b6ec834f492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwYnJpZGV8ZW58MXx8fHwxNzYyNDkwNzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </motion.div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-end justify-center pb-20 px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center max-w-4xl"
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-md mb-6 cursor-pointer hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-6 h-6 text-white ml-1" fill="white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl text-white mb-4">
              Jordan Rivers
            </h1>
            <p className="text-white/80 text-lg md:text-xl tracking-wide">
              Filmmaker · Photographer · Visual Artist
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white/70 rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Category Tag */}
      <section className="py-8 px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-meta text-[#C9A87C]">2025 / Reel</p>
        </div>
      </section>

      {/* Horizontal Scroll Gallery - Wedding Collection */}
      <div className="min-h-screen py-16">
        <div className="px-6 mb-8">
          <h2 className="text-h2 text-center mb-2">Wedding Stories</h2>
          <p className="text-center text-gray-600">Scroll to explore</p>
        </div>
        
        <HorizontalScrollSection className="px-6">
          {[
            {
              image: "https://images.unsplash.com/photo-1671450632893-9b6ec834f492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwYnJpZGV8ZW58MXx8fHwxNzYyNDkwNzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
              title: "Anjana & Yash",
              subtitle: "DELHI WEDDING"
            },
            {
              image: "https://images.unsplash.com/photo-1641279762487-33beaaf68775?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjb3VwbGUlMjB3ZWRkaW5nfGVufDF8fHx8MTc2MjQ5MDc0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
              title: "Radha & Krishna",
              subtitle: "DESTINATION WEDDING"
            },
            {
              image: "https://images.unsplash.com/photo-1610173826014-d131b02d69ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBicmlkZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjQ5MDc0OHww&ixlib=rb-4.1.0&q=80&w=1080",
              title: "Priya's Bridal",
              subtitle: "PORTRAIT SESSION"
            },
            {
              image: "https://images.unsplash.com/photo-1680490958274-46cb87e30cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzYyNDM4MzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
              title: "Sacred Ceremony",
              subtitle: "TRADITIONAL RITUALS"
            },
            {
              image: "https://images.unsplash.com/photo-1656103743142-229f0adaf068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NjI0MTM5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
              title: "Outdoor Romance",
              subtitle: "COUPLE PORTRAITS"
            }
          ].map((item, i) => (
            <div key={i} className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw]">
              <MobileCard
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                variant="compact"
                onClick={() => navigate("work")}
              />
            </div>
          ))}
        </HorizontalScrollSection>
      </div>

      {/* Quote Section */}
      <section className="py-20 px-6 bg-white">
        <motion.div
          ref={quoteRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isQuoteInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-6">
            <div className="w-12 h-0.5 bg-[#C9A87C] mx-auto mb-8" />
            <p className="text-2xl md:text-4xl leading-relaxed text-gray-800 italic mb-8">
              "The colors, the people, the moments - every frame tells a story worth remembering forever."
            </p>
            <div className="w-12 h-0.5 bg-[#C9A87C] mx-auto" />
          </div>
        </motion.div>
      </section>

      {/* Featured Work - Full Width Card */}
      <section className="py-16 px-6">
        <MobileCard
          image="https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwZGVjb3JhdGlvbnxlbnwxfHx8fDE3NjI0NDg4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          title="The Colours That Bind"
          subtitle="FEATURED PROJECT"
          description="A celebration of traditions, vibrant colors, and timeless love stories captured through the lens."
          variant="text-overlay"
          onClick={() => navigate("work")}
        />
      </section>

      {/* Mobile Grid Layout */}
      <section className="px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            "https://images.unsplash.com/photo-1645856052472-95fe99103c11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzYyNDQwMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1533091090875-1ff4acc497dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYyNDkwNzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1642287040066-2bd340523289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVuaW5nJTIwY2l0eXNjYXBlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MjQ5MDc1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1610879328923-3de1e04c3ddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI0MjQ4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1581784878214-8d5596b98a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjIzODUzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          ].map((img, i) => (
            <motion.div
              key={i}
              className="aspect-square overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05, zIndex: 10 }}
              transition={{ duration: 0.3 }}
              onClick={() => navigate("work")}
            >
              <ImageWithFallback
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Text Content Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-meta text-[#C9A87C] mb-4 text-center">CRAFTING MOMENTS</p>
          <h2 className="text-h2 mb-6 text-center">
            I don't just photograph - I collect stories.
          </h2>
          <p className="text-body text-gray-600 leading-relaxed mb-6">
            Every wedding, every portrait, every frame is an opportunity to preserve a fleeting moment in time. My approach combines documentary authenticity with artistic vision, ensuring that your memories are captured in their truest, most beautiful form.
          </p>
          <p className="text-body text-gray-600 leading-relaxed">
            Based between Mumbai and Delhi, I travel worldwide to tell visual stories that matter. From intimate ceremonies to grand celebrations, I bring the same passion and attention to detail to every project.
          </p>
        </div>
      </section>

      {/* Video Production Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-black overflow-hidden group cursor-pointer">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1634812930988-141ddf8ecab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB2aWRlbyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzYyNDcyNTQxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Video production"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-meta text-[#C9A87C] mb-2">VIDEO REEL</p>
              <h3 className="text-h3 text-white">2025 Showreel</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Landscape Photography - Horizontal Scroll */}
      <div className="min-h-screen py-16 bg-[#1A1A1A]">
        <div className="px-6 mb-8">
          <p className="text-meta text-[#C9A87C] text-center mb-2">BEYOND WEDDINGS</p>
          <h2 className="text-h2 text-white text-center mb-2">Landscape & Travel</h2>
        </div>
        
        <HorizontalScrollSection className="px-6">
          {[
            {
              image: "https://images.unsplash.com/photo-1601759783107-f89cae1a7ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwbmF0dXJlJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2MjQ3OTk4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
              title: "Mountain Majesty"
            },
            {
              image: "https://images.unsplash.com/photo-1642287040066-2bd340523289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVuaW5nJTIwY2l0eXNjYXBlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MjQ5MDc1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
              title: "Urban Nights"
            },
            {
              image: "https://images.unsplash.com/photo-1705544363562-cdf94dd458cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MjQwMjk2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
              title: "Corporate Stories"
            },
            {
              image: "https://images.unsplash.com/photo-1581784878214-8d5596b98a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjIzODUzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
              title: "Interior Spaces"
            }
          ].map((item, i) => (
            <div key={i} className="flex-shrink-0 w-[85vw] md:w-[50vw] lg:w-[40vw]">
              <div className="aspect-[4/3] overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="py-4">
                <h4 className="text-h4 text-white">{item.title}</h4>
              </div>
            </div>
          ))}
        </HorizontalScrollSection>
      </div>

      {/* Awards Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-h2 text-center mb-12">Awards & Recognition</h2>
          <div className="space-y-8">
            <motion.div 
              className="border-b border-gray-200 pb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-h4 mb-2">Wedding Photographer of the Year</h3>
                  <p className="text-body text-gray-600">ISPWP Excellence Awards</p>
                </div>
                <span className="text-[#C9A87C]">2024</span>
              </div>
            </motion.div>
            <motion.div 
              className="border-b border-gray-200 pb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-h4 mb-2">Best Documentary Film</h3>
                  <p className="text-body text-gray-600">Mumbai International Film Festival</p>
                </div>
                <span className="text-[#C9A87C]">2023</span>
              </div>
            </motion.div>
            <motion.div 
              className="border-b border-gray-200 pb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-h4 mb-2">Featured Artist</h3>
                  <p className="text-body text-gray-600">National Geographic India</p>
                </div>
                <span className="text-[#C9A87C]">2023</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-h1 text-white mb-6">
            Let's Create Magic Together
          </h2>
          <p className="text-lead text-gray-300 mb-10">
            Have a project in mind? I'd love to hear about it and explore how we can bring your vision to life.
          </p>
          <motion.button
            onClick={() => navigate("contact")}
            className="group inline-flex items-center gap-3 px-10 py-4 bg-[#C9A87C] text-white hover:bg-[#B89668] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="uppercase tracking-widest">Get In Touch</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </section>
    </div>
  );
}
