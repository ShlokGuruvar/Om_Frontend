import { Section } from "../components/Section";
import { QuoteBlock } from "../components/QuoteBlock";
import { MediaModule } from "../components/MediaModule";
import { CTAButton } from "../components/CTAButton";
import { Award, Book, Target, Heart } from "lucide-react";
import type { Page } from "../components/Router";

interface AboutPageProps {
  navigate: (page: Page) => void;
}

export function AboutPage({ navigate }: AboutPageProps) {
  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* Hero Section */}
      <Section spacing="md_lg" theme="light" layout="media-left">
        <div>
          <MediaModule
            src="https://images.unsplash.com/photo-1695477718933-a35f4921e903?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydGlzdCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjEwNTMwOTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Creative workspace"
            aspectRatio="portrait"
            parallax
          />
        </div>
        <div>
          <div className="h-px w-16 bg-[#8B7355] mb-6" />
          <h1 className="text-display mb-8 tracking-tight">
            About Me
          </h1>
          <p className="text-lead text-gray-700 leading-relaxed mb-6">
            I'm a visual storyteller working across photography,
            videography, and animation. Currently pursuing my
            passion for motion design while building a diverse
            creative portfolio.
          </p>
          <p className="text-body text-gray-700 leading-relaxed mb-6">
            My work explores the intersection of light,
            movement, and narrative. Whether capturing a single
            frame or crafting a cinematic sequence, I focus on
            creating authentic, emotionally resonant visual
            experiences.
          </p>
          <p className="text-body text-gray-700 leading-relaxed">
            Based in Los Angeles, I collaborate with brands,
            artists, and creatives who value bold visual
            storytelling and aren't afraid to push boundaries.
          </p>
        </div>
      </Section>

      {/* Stats Section */}
      <Section spacing="lg" theme="cream">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-6xl text-[#8B7355] mb-3">
              50+
            </h3>
            <p className="text-meta text-gray-600">
              Projects Completed
            </p>
          </div>
          <div>
            <h3 className="text-6xl text-[#8B7355] mb-3">5+</h3>
            <p className="text-meta text-gray-600">
              Years of Experience
            </p>
          </div>
          <div>
            <h3 className="text-6xl text-[#8B7355] mb-3">
              20+
            </h3>
            <p className="text-meta text-gray-600">
              Happy Clients
            </p>
          </div>
          <div>
            <h3 className="text-6xl text-[#8B7355] mb-3">8</h3>
            <p className="text-meta text-gray-600">
              Awards Received
            </p>
          </div>
        </div>
      </Section>

      {/* Quote Section */}
      <Section spacing="sm" theme="light">
        <QuoteBlock
          quote="Every project is an opportunity to learn, grow, and push the boundaries of what's possible with visual media."
          variant="large"
          alignment="center"
        />
      </Section>

      {/* Philosophy Section */}
      <Section spacing="lg" theme="cream">
        <div className="text-center mb-16">
          <h2 className="text-h1 mb-6">My Philosophy</h2>
          <p className="text-lead text-gray-600 max-w-3xl mx-auto">
            These core principles guide every project I
            undertake
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-[#8B7355]" />
            </div>
            <h3 className="text-h4 mb-3">Authenticity</h3>
            <p className="text-body text-gray-600">
              Creating work that feels genuine and connects
              emotionally with audiences
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-[#8B7355]" />
            </div>
            <h3 className="text-h4 mb-3">Precision</h3>
            <p className="text-body text-gray-600">
              Attention to detail in every aspect from lighting
              to post-production
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-6">
              <Book className="w-8 h-8 text-[#8B7355]" />
            </div>
            <h3 className="text-h4 mb-3">Storytelling</h3>
            <p className="text-body text-gray-600">
              Every image and frame should contribute to a
              larger narrative
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-[#8B7355]" />
            </div>
            <h3 className="text-h4 mb-3">Excellence</h3>
            <p className="text-body text-gray-600">
              Committed to delivering work that exceeds
              expectations
            </p>
          </div>
        </div>
      </Section>

      {/* Journey Section */}
      <Section spacing="sm" theme="light" layout="media-right">
        <div>
          <h2 className="text-h2 mb-6">The Journey</h2>
          <p className="text-body text-gray-700 leading-relaxed mb-6">
            My path into visual storytelling began with a
            curiosity about how images could convey emotion and
            meaning. What started as experimenting with a camera
            has evolved into a professional practice spanning
            photography, videography, and animation.
          </p>
          <p className="text-body text-gray-700 leading-relaxed mb-6">
            Over the past five years, I've had the privilege of
            working with incredible clients and
            collaborators—from independent artists to major
            brands like Apple, Netflix, and National Geographic.
            Each project has been an opportunity to refine my
            craft and explore new creative territories.
          </p>
          <p className="text-body text-gray-700 leading-relaxed mb-8">
            Currently, I'm focused on expanding my work in
            motion design and animation while continuing to take
            on select photography and videography projects that
            align with my creative vision.
          </p>
        </div>
        <div>
          <MediaModule
            src="https://images.unsplash.com/photo-1674668920910-85b8d3c187ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYW1lcmElMjBnZWFyfGVufDF8fHx8MTc2MTM5MjUxMXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Professional camera gear"
            aspectRatio="square"
            parallax
          />
        </div>
      </Section>

      {/* Education & Recognition */}
      <Section spacing="md" theme="cream">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-h2 mb-8">Education</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-[#8B7355] pl-6">
                <h3 className="text-h4 mb-2">
                  BFA in Animation
                </h3>
                <p className="text-body text-gray-600 mb-1">
                  California Institute of the Arts
                </p>
                <p className="text-meta text-gray-500">
                  2020 - 2024
                </p>
              </div>
              <div className="border-l-2 border-[#8B7355] pl-6">
                <h3 className="text-h4 mb-2">
                  Professional Photography Certificate
                </h3>
                <p className="text-body text-gray-600 mb-1">
                  New York Film Academy
                </p>
                <p className="text-meta text-gray-500">2019</p>
              </div>
              <div className="border-l-2 border-[#8B7355] pl-6">
                <h3 className="text-h4 mb-2">
                  Cinematography Workshop
                </h3>
                <p className="text-body text-gray-600 mb-1">
                  American Film Institute
                </p>
                <p className="text-meta text-gray-500">2021</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-h2 mb-8">
              Awards & Recognition
            </h2>
            <div className="space-y-6">
              <div className="border-l-2 border-[#C9A87C] pl-6">
                <h3 className="text-h4 mb-2">
                  Best Cinematography
                </h3>
                <p className="text-body text-gray-600 mb-1">
                  Sundance Film Festival
                </p>
                <p className="text-meta text-gray-500">2024</p>
              </div>
              <div className="border-l-2 border-[#C9A87C] pl-6">
                <h3 className="text-h4 mb-2">
                  Emerging Photographer of the Year
                </h3>
                <p className="text-body text-gray-600 mb-1">
                  International Photography Awards
                </p>
                <p className="text-meta text-gray-500">2023</p>
              </div>
              <div className="border-l-2 border-[#C9A87C] pl-6">
                <h3 className="text-h4 mb-2">
                  Motion Graphics Excellence
                </h3>
                <p className="text-body text-gray-600 mb-1">
                  AICP Awards
                </p>
                <p className="text-meta text-gray-500">2024</p>
              </div>
              <div className="border-l-2 border-[#C9A87C] pl-6">
                <h3 className="text-h4 mb-2">
                  Featured Artist
                </h3>
                <p className="text-body text-gray-600 mb-1">
                  National Geographic
                </p>
                <p className="text-meta text-gray-500">2025</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section spacing="md" theme="light">
        <div className="text-center mb-16">
          <h2 className="text-h1 mb-6">Skills & Expertise</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-h3 mb-6 text-[#8B7355]">
              Photography
            </h3>
            <ul className="space-y-3">
              <li className="text-body text-gray-700">
                Portrait Photography
              </li>
              <li className="text-body text-gray-700">
                Editorial & Fashion
              </li>
              <li className="text-body text-gray-700">
                Landscape & Travel
              </li>
              <li className="text-body text-gray-700">
                Commercial Work
              </li>
              <li className="text-body text-gray-700">
                Studio Lighting
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-h3 mb-6 text-[#8B7355]">
              Videography
            </h3>
            <ul className="space-y-3">
              <li className="text-body text-gray-700">
                Documentary Films
              </li>
              <li className="text-body text-gray-700">
                Brand Content
              </li>
              <li className="text-body text-gray-700">
                Music Videos
              </li>
              <li className="text-body text-gray-700">
                Cinematography
              </li>
              <li className="text-body text-gray-700">
                Color Grading
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-h3 mb-6 text-[#8B7355]">
              Animation
            </h3>
            <ul className="space-y-3">
              <li className="text-body text-gray-700">
                Motion Graphics
              </li>
              <li className="text-body text-gray-700">
                2D/3D Animation
              </li>
              <li className="text-body text-gray-700">
                Visual Effects
              </li>
              <li className="text-body text-gray-700">
                Title Design
              </li>
              <li className="text-body text-gray-700">
                Compositing
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Equipment Section */}
      <Section spacing="md" theme="cream" layout="media-left">
        <div>
          <MediaModule
            src="https://images.unsplash.com/photo-1758613654584-86714842a2d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBzdHVkaW8lMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYxNDkxMzIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Studio equipment"
            aspectRatio="video"
            parallax
          />
        </div>
        <div>
          <h2 className="text-h2 mb-6">Tools of the Trade</h2>
          <p className="text-body text-gray-700 leading-relaxed mb-8">
            Working with professional-grade equipment ensures
            the highest quality output for every project. My
            toolkit includes industry-standard cameras, lenses,
            lighting equipment, and post-production software.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-h4 mb-3">Cameras</h3>
              <ul className="space-y-2 text-body text-gray-600">
                <li>Canon R5</li>
                <li>Sony A7R V</li>
                <li>ARRI Alexa Mini</li>
                <li>RED Komodo</li>
              </ul>
            </div>
            <div>
              <h3 className="text-h4 mb-3">Software</h3>
              <ul className="space-y-2 text-body text-gray-600">
                <li>Adobe Creative Suite</li>
                <li>DaVinci Resolve</li>
                <li>Cinema 4D</li>
                <li>After Effects</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Collaboration Section */}
      <Section spacing="md" theme="light">
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-6">
            Notable Collaborations
          </h2>
          <p className="text-lead text-gray-600 max-w-2xl mx-auto">
            I've had the honor of working with inspiring brands
            and individuals
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto items-center justify-items-center opacity-60">
          <div className="text-2xl tracking-wider">APPLE</div>
          <div className="text-2xl tracking-wider">NETFLIX</div>
          <div className="text-2xl tracking-wider">NAT GEO</div>
          <div className="text-2xl tracking-wider">VOGUE</div>
          <div className="text-2xl tracking-wider">ADOBE</div>
          <div className="text-2xl tracking-wider">NIKE</div>
          <div className="text-2xl tracking-wider">BAZAAR</div>
          <div className="text-2xl tracking-wider">SONY</div>
        </div>
      </Section>

      {/* Quote Section */}
      <Section spacing="md" theme="cream">
        <QuoteBlock
          quote="The best creative work happens when you combine technical mastery with genuine passion and an openness to collaboration."
          author="CinePsychic"
          variant="highlighted"
          alignment="center"
        />
      </Section>

      {/* CTA Section */}
      <Section spacing="lg" theme="dark" layout="centered">
        <div className="max-w-3xl text-center">
          <h2 className="text-h1 text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-lead text-gray-300 mb-8">
            I'm always excited to collaborate on new projects
            and explore creative possibilities. Whether you have
            a clear vision or need help developing one, I'm here
            to help.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <CTAButton
              variant="secondary"
              size="lg"
              onClick={() => navigate("contact")}
            >
              Get In Touch
            </CTAButton>
            <CTAButton
              variant="outline"
              size="lg"
              onClick={() => navigate("work")}
            >
              View My Work
            </CTAButton>
          </div>
        </div>
      </Section>
    </div>
  );
}