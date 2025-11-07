import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Award, Camera, Film, Palette, MapPin, Mail } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { HorizontalScrollSection } from "../components/HorizontalScrollSection";
import type { Page } from "../components/Router";

interface AboutPageProps {
  navigate: (page: Page) => void;
}

export function AboutPage({ navigate }: AboutPageProps) {
  const storyRef = useRef(null);
  const isStoryInView = useInView(storyRef, { once: true });

  return (
    <div className="bg-[#FAF9F6]">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1643264623879-bb85ea39c62a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjIzNzk5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Jordan Rivers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
        </motion.div>

        <div className="absolute inset-0 flex items-end justify-center pb-16 px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center max-w-3xl"
          >
            <p className="text-meta text-[#C9A87C] mb-4">ABOUT ME</p>
            <h1 className="text-5xl md:text-7xl text-white mb-6">
              Jordan Rivers
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Visual storyteller capturing life's most precious moments through the lens of creativity and passion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={storyRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isStoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12">
              <div className="w-16 h-1 bg-[#C9A87C] mb-8" />
              <h2 className="text-h1 mb-8">The Story Behind the Lens</h2>
            </div>
            
            <div className="space-y-6 text-body text-gray-700 leading-relaxed">
              <p>
                I've been capturing moments for over five years, transforming fleeting instances into timeless memories. What started as a passion for documenting family gatherings evolved into a full-time career photographing weddings, portraits, and commercial projects across the globe.
              </p>
              <p>
                My journey into visual arts began in my teenage years with a simple camera and an insatiable curiosity about light, composition, and human emotion. After studying Film and Animation at the National Institute of Design, I developed a unique style that blends documentary authenticity with artistic vision.
              </p>
              <p>
                Today, I split my time between Mumbai and Delhi, traveling internationally for destination weddings and commercial projects. Each assignment is an opportunity to tell a unique story, capture genuine emotions, and create art that resonates for generations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 px-6 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-meta text-[#C9A87C] mb-4">EXPERTISE</p>
            <h2 className="text-h2">What I Do Best</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="text-center p-8 bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 rounded-full bg-[#FAF9F6] flex items-center justify-center mx-auto mb-6">
                <Camera className="w-8 h-8 text-[#C9A87C]" />
              </div>
              <h3 className="text-h4 mb-3">Photography</h3>
              <p className="text-body text-gray-600">
                Wedding, portrait, and commercial photography with artistic precision
              </p>
            </motion.div>

            <motion.div
              className="text-center p-8 bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-[#FAF9F6] flex items-center justify-center mx-auto mb-6">
                <Film className="w-8 h-8 text-[#C9A87C]" />
              </div>
              <h3 className="text-h4 mb-3">Videography</h3>
              <p className="text-body text-gray-600">
                Cinematic storytelling through documentary and narrative film
              </p>
            </motion.div>

            <motion.div
              className="text-center p-8 bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 rounded-full bg-[#FAF9F6] flex items-center justify-center mx-auto mb-6">
                <Palette className="w-8 h-8 text-[#C9A87C]" />
              </div>
              <h3 className="text-h4 mb-3">Animation</h3>
              <p className="text-body text-gray-600">
                Motion graphics and visual effects for brand storytelling
              </p>
            </motion.div>

            <motion.div
              className="text-center p-8 bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-16 h-16 rounded-full bg-[#FAF9F6] flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-[#C9A87C]" />
              </div>
              <h3 className="text-h4 mb-3">Direction</h3>
              <p className="text-body text-gray-600">
                Creative direction for campaigns and visual projects
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipment Showcase - Horizontal Scroll */}
      <div className="min-h-screen py-16 bg-[#1A1A1A]">
        <div className="px-6 mb-8">
          <p className="text-meta text-[#C9A87C] text-center mb-2">THE TOOLS</p>
          <h2 className="text-h2 text-white text-center mb-2">Equipment & Gear</h2>
          <p className="text-center text-gray-400">Professional tools for exceptional results</p>
        </div>
        
        <HorizontalScrollSection className="px-6">
          {[
            { name: "Canon EOS R5", type: "Primary Camera" },
            { name: "Sony A7S III", type: "Video Specialist" },
            { name: "DJI Ronin", type: "Gimbal Stabilizer" },
            { name: "Profoto B10", type: "Lighting System" },
            { name: "Sigma Art Series", type: "Prime Lenses" }
          ].map((item, i) => (
            <div key={i} className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw]">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1588420490858-3828a17244a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBlcXVpcG1lbnQlMjBzdHVkaW98ZW58MXx8fHwxNzYyNDEzMDY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt={item.name}
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
              <div className="py-6 text-white">
                <p className="text-meta text-[#C9A87C] mb-2">{item.type}</p>
                <h4 className="text-h4">{item.name}</h4>
              </div>
            </div>
          ))}
        </HorizontalScrollSection>
      </div>

      {/* Philosophy */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="w-16 h-1 bg-[#C9A87C] mx-auto mb-8" />
            <h2 className="text-h2 mb-8">My Philosophy</h2>
          </div>
          
          <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed italic mb-12">
            "Every moment has a story. Every frame captures an emotion. My role is not just to document, but to preserve the essence of human connection and celebration in its purest form."
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div>
              <h3 className="text-h4 mb-3 text-[#C9A87C]">Authenticity</h3>
              <p className="text-body text-gray-600">
                Capturing genuine moments without intrusion or artificial direction
              </p>
            </div>
            <div>
              <h3 className="text-h4 mb-3 text-[#C9A87C]">Artistry</h3>
              <p className="text-body text-gray-600">
                Blending technical excellence with creative vision
              </p>
            </div>
            <div>
              <h3 className="text-h4 mb-3 text-[#C9A87C]">Connection</h3>
              <p className="text-body text-gray-600">
                Building trust and rapport to capture true emotions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-meta text-[#C9A87C] mb-4">JOURNEY</p>
            <h2 className="text-h2">Career Milestones</h2>
          </div>

          <div className="space-y-12">
            <motion.div
              className="flex gap-6 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-h4 text-[#C9A87C]">2025</span>
              </div>
              <div className="relative pl-8 border-l-2 border-[#C9A87C]">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#C9A87C]" />
                <h3 className="text-h4 mb-2">ISPWP Award Winner</h3>
                <p className="text-body text-gray-600">
                  Recognized as Wedding Photographer of the Year for excellence in visual storytelling
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-6 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-h4 text-[#C9A87C]">2023</span>
              </div>
              <div className="relative pl-8 border-l-2 border-gray-300">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-300" />
                <h3 className="text-h4 mb-2">Featured in National Geographic</h3>
                <p className="text-body text-gray-600">
                  Documentary work featured in National Geographic India's annual showcase
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-6 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-h4 text-[#C9A87C]">2021</span>
              </div>
              <div className="relative pl-8 border-l-2 border-gray-300">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-300" />
                <h3 className="text-h4 mb-2">Founded Studio</h3>
                <p className="text-body text-gray-600">
                  Established independent studio focusing on wedding and commercial photography
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-6 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-h4 text-[#C9A87C]">2019</span>
              </div>
              <div className="relative pl-8 border-l-2 border-gray-300">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-300" />
                <h3 className="text-h4 mb-2">Graduated NID</h3>
                <p className="text-body text-gray-600">
                  Completed Film & Animation degree at National Institute of Design, Ahmedabad
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-h1 text-white mb-6">Let's Connect</h2>
            <p className="text-lead text-gray-300">
              Based in Mumbai & Delhi, available worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm"
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <MapPin className="w-6 h-6 text-[#C9A87C] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-h4 text-white mb-2">Location</h3>
                <p className="text-body text-gray-300">Mumbai, Delhi & Worldwide</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm cursor-pointer"
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              transition={{ duration: 0.3 }}
              onClick={() => navigate("contact")}
            >
              <Mail className="w-6 h-6 text-[#C9A87C] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-h4 text-white mb-2">Get In Touch</h3>
                <p className="text-body text-gray-300">hello@jordanrivers.com</p>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <motion.button
              onClick={() => navigate("contact")}
              className="px-10 py-4 bg-[#C9A87C] text-white hover:bg-[#B89668] transition-colors duration-300 uppercase tracking-widest"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
