import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ChevronDown, Award, Users, Camera } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Section } from "../components/Section";
import { QuoteBlock } from "../components/QuoteBlock";
import { MediaModule } from "../components/MediaModule";
import { CTAButton } from "../components/CTAButton";
import type { Page } from "../components/Router";

interface HomePageProps {
  navigate: (page: Page) => void;
}

export function HomePage({ navigate }: HomePageProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1708006247791-00eee9388480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBob3RvZ3JhcGhlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTEzMzM2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Creative photographer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-[10rem] mb-6 text-white tracking-tight leading-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              CinePsychic
            </motion.h1>
            
            <motion.div 
              className="flex items-center justify-center gap-4 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="h-px w-16 bg-[#C9A87C]" />
              <p className="text-[#C9A87C] tracking-[0.3em] uppercase text-sm">
                Filmmaker · Photographer · Visual Artist
              </p>
              <div className="h-px w-16 bg-[#C9A87C]" />
            </motion.div>

            <motion.button
              onClick={() => navigate("work")}
              className="group relative px-12 py-4 border border-white text-white overflow-hidden transition-all duration-500 hover:text-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1, ease: [0.4, 0, 0.2, 1] }}
            >
              <span className="relative z-10 uppercase tracking-widest text-sm">View My Work</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.button>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </section>

      {/* Introduction Section */}
      <Section spacing="md_lg_pt" theme="light" layout="centered">
        <div className="max-w-4xl">
          <h2 className="text-h1 mb-8 text-center">Crafting Visual Stories</h2>
          <p className="text-lead text-gray-600 text-center leading-relaxed mb-12">
            With over five years of experience in photography, videography, and animation,
            I specialize in creating compelling visual narratives that connect with audiences
            and elevate brands. Every project is an opportunity to push creative boundaries.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#FAF9F6] flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-[#8B7355]" />
              </div>
              <h3 className="text-h4 mb-2">Photography</h3>
              <p className="text-body text-gray-600">Capturing authentic moments with artistic precision</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#FAF9F6] flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#8B7355]" />
              </div>
              <h3 className="text-h4 mb-2">Award-Winning</h3>
              <p className="text-body text-gray-600">Recognized for creative excellence</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#FAF9F6] flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#8B7355]" />
              </div>
              <h3 className="text-h4 mb-2">Collaborative</h3>
              <p className="text-body text-gray-600">Working with diverse teams and clients</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Quote Section */}
      <Section spacing="sm" theme="cream">
        <QuoteBlock
          quote="I believe in the power of visual storytelling to transcend language and culture, connecting people through shared emotions and experiences."
          author="CinePsychic"
          variant="large"
          alignment="center"
        />
      </Section>

      {/* Featured Work Preview */}
      <Section spacing="md" theme="light">
        <div className="text-center mb-16">
          <h2 className="text-h1 mb-6">Featured Projects</h2>
          <p className="text-lead text-gray-600 max-w-2xl mx-auto">
            A selection of recent work showcasing diverse creative approaches
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <MediaModule
            src="https://images.unsplash.com/photo-1670411952195-fffeca152dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBmaWxtbWFrZXIlMjBjYW1lcmF8ZW58MXx8fHwxNzYxMjk0MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Cinematic work"
            type="video"
            aspectRatio="video"
            caption="Documentary Film — Netflix Original"
            parallax
          />
          <MediaModule
            src="https://images.unsplash.com/photo-1705147651064-36aedc005020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBjaW5lbWF0aWMlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjEyOTQxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Landscape photography"
            aspectRatio="video"
            caption="Desert Dreamscape — National Geographic"
            parallax
          />
        </div>
        <div className="text-center">
          <CTAButton
            variant="primary"
            size="lg"
            onClick={() => navigate("work")}
          >
            View All Work
          </CTAButton>
        </div>
      </Section>

      {/* Process Section */}
      <Section spacing="xl" theme="dark">
        <div className="text-center mb-16">
          <h2 className="text-h1 text-white mb-6">Creative Process</h2>
          <p className="text-lead text-gray-300 max-w-2xl mx-auto">
            From concept to completion, every project follows a refined workflow
            designed to deliver exceptional results
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="text-6xl text-[#C9A87C] mb-4 opacity-40">01</div>
            <h3 className="text-h4 text-white mb-3">Discovery</h3>
            <p className="text-body text-gray-400">Understanding your vision, goals, and audience</p>
          </div>
          <div className="text-center">
            <div className="text-6xl text-[#C9A87C] mb-4 opacity-40">02</div>
            <h3 className="text-h4 text-white mb-3">Concept</h3>
            <p className="text-body text-gray-400">Developing creative direction and visual strategy</p>
          </div>
          <div className="text-center">
            <div className="text-6xl text-[#C9A87C] mb-4 opacity-40">03</div>
            <h3 className="text-h4 text-white mb-3">Production</h3>
            <p className="text-body text-gray-400">Capturing content with precision and artistry</p>
          </div>
          <div className="text-center">
            <div className="text-6xl text-[#C9A87C] mb-4 opacity-40">04</div>
            <h3 className="text-h4 text-white mb-3">Refinement</h3>
            <p className="text-body text-gray-400">Post-production polish and final delivery</p>
          </div>
        </div>
      </Section>

      {/* Behind the Scenes */}
      <Section spacing="lg" theme="cream" layout="media-left">
        <div>
          <MediaModule
            src="https://images.unsplash.com/photo-1758613654584-86714842a2d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBzdHVkaW8lMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYxNDkxMzIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Studio setup"
            aspectRatio="square"
            parallax
          />
        </div>
        <div>
          <div className="h-px w-16 bg-[#8B7355] mb-6" />
          <h2 className="text-h2 mb-6">Behind the Lens</h2>
          <p className="text-body text-gray-700 leading-relaxed mb-6">
            My approach combines technical mastery with creative intuition. Using
            industry-leading equipment and techniques, I create work that stands out
            in today's saturated visual landscape.
          </p>
          <p className="text-body text-gray-700 leading-relaxed mb-8">
            Whether it's a full production shoot or an intimate portrait session,
            every detail matters. From lighting and composition to post-production
            refinement, I ensure excellence at every stage.
          </p>
          <CTAButton
            variant="secondary"
            onClick={() => navigate("about")}
          >
            More About My Process
          </CTAButton>
        </div>
      </Section>

      {/* Stats Section */}
      <Section spacing="md" theme="light">
        <div className="grid md:grid-cols-4 gap-12 text-center max-w-5xl mx-auto">
          <div>
            <h3 className="text-6xl text-[#8B7355] mb-3">50+</h3>
            <p className="text-meta text-gray-600">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-6xl text-[#8B7355] mb-3">20+</h3>
            <p className="text-meta text-gray-600">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-6xl text-[#8B7355] mb-3">5+</h3>
            <p className="text-meta text-gray-600">Years Experience</p>
          </div>
          <div>
            <h3 className="text-6xl text-[#8B7355] mb-3">8</h3>
            <p className="text-meta text-gray-600">Awards Won</p>
          </div>
        </div>
      </Section>

      {/* Testimonial Section */}
      <Section spacing="sm" theme="cream">
        <div className="max-w-4xl mx-auto">
          <QuoteBlock
            quote="Jordan's ability to capture the essence of our brand through visual storytelling exceeded all expectations. The final result was nothing short of extraordinary."
            author="Sarah Mitchell"
            role="Creative Director, Apple"
            variant="large"
            alignment="center"
          />
        </div>
      </Section>

      {/* CTA Section */}
      <Section spacing="lg" theme="dark" layout="centered">
        <div className="max-w-3xl text-center">
          <h2 className="text-h1 text-white mb-6">
            Let's Create Something Extraordinary
          </h2>
          <p className="text-lead text-gray-300 mb-8">
            Whether you're looking for photography, videography, or animation,
            I'm here to help bring your vision to life with creativity and precision.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <CTAButton
              variant="secondary"
              size="lg"
              onClick={() => navigate("contact")}
            >
              Start a Project
            </CTAButton>
            <CTAButton
              variant="outline"
              size="lg"
              onClick={() => navigate("services")}
            >
              View Services
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
