import { Section } from "../components/Section";
import { ContentCard } from "../components/ContentCard";
import { QuoteBlock } from "../components/QuoteBlock";
import { MediaModule } from "../components/MediaModule";
import { CTAButton } from "../components/CTAButton";
import { useState } from "react";
import type { Page } from "../components/Router";
import { workItems } from "../data/workData";

interface WorkPageProps {
  navigate: (page: Page, id?: string) => void;
}

export function WorkPage({ navigate }: WorkPageProps) {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All" 
    ? workItems 
    : workItems.filter(item => item.category === filter);

  const categories = ["All", "Photography", "Videography", "Animation"];

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <Section spacing="lg" theme="cream" layout="centered">
        <div className="max-w-4xl">
          <div className="h-px w-16 bg-[#8B7355] mb-6 mx-auto" />
          <h1 className="text-display mb-8 tracking-tight">
            Selected Works
          </h1>
          <p className="text-lead text-gray-600 max-w-2xl mx-auto mb-12">
            A curated collection of photography, videography, and animation projects
            that tell stories and push creative boundaries.
          </p>

          {/* Filter */}
          <div className="flex justify-center gap-6 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`text-meta transition-all duration-300 pb-1 ${
                  filter === category
                    ? "text-[#8B7355] border-b-2 border-[#8B7355]"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* Quote Section */}
      <Section spacing="md" theme="light">
        <QuoteBlock
          quote="Great work is born from the intersection of passion, preparation, and the willingness to see what others overlook."
          variant="highlighted"
          alignment="left"
        />
      </Section>

      {/* Featured Video */}
      <Section spacing="lg" theme="cream" layout="full-bleed">
        <MediaModule
          src="https://images.unsplash.com/photo-1670411952195-fffeca152dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBmaWxtbWFrZXIlMjBjYW1lcmF8ZW58MXx8fHwxNzYxMjk0MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Cinematic work showcase"
          type="video"
          aspectRatio="wide"
          caption="2025 Showreel — A compilation of recent projects"
          size="full"
          parallax
        />
      </Section>

      {/* Work Grid */}
      <Section spacing="lg" theme="light">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <ContentCard
              key={item.id}
              title={item.title}
              excerpt={item.description}
              coverImage={item.coverImage}
              tags={[item.category, item.year]}
              variant="work"
              size="sm"
              featured={item.featured}
              isVideo={item.isVideo}
              onClick={() => navigate("work-detail", item.id)}
            />
          ))}
        </div>
      </Section>

      {/* Masonry Gallery Section */}
      <Section spacing="lg" theme="cream">
        <h2 className="text-h2 mb-12 text-center">Recent Highlights</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MediaModule
            src="https://images.unsplash.com/photo-1705147651064-36aedc005020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBjaW5lbWF0aWMlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjEyOTQxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Landscape"
            aspectRatio="portrait"
            size="full"
            parallax
          />
          <MediaModule
            src="https://images.unsplash.com/photo-1612052355380-d7c1d631f00f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDF8fHx8MTc2MTI3ODQ1NXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Portrait"
            aspectRatio="square"
            size="full"
            parallax
          />
          <MediaModule
            src="https://images.unsplash.com/photo-1614492092395-af5493e6866d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBmYXNoaW9uJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYxMTcyMjYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Fashion"
            aspectRatio="portrait"
            size="full"
            parallax
          />
          <MediaModule
            src="https://images.unsplash.com/photo-1740174459682-4dd3f72e2512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljcyUyMGFuaW1hdGlvbnxlbnwxfHx8fDE3NjExOTg0OTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Animation"
            aspectRatio="square"
            type="video"
            size="full"
            parallax
          />
        </div>
      </Section>

      {/* CTA Section */}
      <Section spacing="lg" theme="dark" layout="centered">
        <div className="max-w-3xl text-center">
          <h2 className="text-h1 text-white mb-6">
            Let's create together
          </h2>
          <p className="text-lead text-gray-300 mb-8">
            Every project starts with a conversation. Share your vision,
            and let's explore how we can bring it to life.
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
    </div>
  );
}
