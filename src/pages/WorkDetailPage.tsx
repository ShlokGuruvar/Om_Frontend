import { Section } from "../components/Section";
import { QuoteBlock } from "../components/QuoteBlock";
import { MediaModule } from "../components/MediaModule";
import { ContentCard } from "../components/ContentCard";
import { CTAButton } from "../components/CTAButton";
import { Badge } from "../components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { workItems } from "../data/workData";
import type { Page } from "../components/Router";

interface WorkDetailPageProps {
  navigate: (page: Page, id?: string) => void;
  workId?: string;
}

export function WorkDetailPage({ navigate, workId }: WorkDetailPageProps) {
  const work = workItems.find(w => w.id === workId) || workItems[0];
  const relatedWork = workItems.filter(w => w.id !== work.id && w.category === work.category).slice(0, 3);

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <button
          onClick={() => navigate("work")}
          className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-meta">Back to Work</span>
        </button>
      </div>

      {/* Hero Section */}
      <Section spacing="md" theme="light" layout="centered">
        <div className="max-w-5xl">
          <div className="flex items-center gap-3 justify-center mb-6">
            <Badge variant="secondary" className="bg-[#C9A87C] text-white">
              {work.category}
            </Badge>
            <span className="text-meta text-gray-500">{work.year}</span>
          </div>
          <h1 className="text-display mb-6 tracking-tight">
            {work.title}
          </h1>
          <p className="text-h4 text-gray-600 mb-8">
            {work.description}
          </p>
          <div className="flex items-center justify-center gap-8 text-body">
            <div>
              <span className="text-gray-500">Client: </span>
              <span className="text-gray-900">{work.client}</span>
            </div>
            <div className="h-4 w-px bg-gray-300" />
            <div>
              <span className="text-gray-500">Role: </span>
              <span className="text-gray-900">{work.role}</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Hero Image */}
      <Section spacing="lg" theme="cream" layout="full-bleed">
        <MediaModule
          src={work.coverImage}
          alt={work.title}
          type={work.isVideo ? "video" : "image"}
          aspectRatio="wide"
          size="full"
        />
      </Section>

      {/* Sticky Sidebar Navigation */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-32 h-fit">
            <nav className="space-y-2">
              <a href="#overview" className="block text-meta text-gray-600 hover:text-black transition-colors duration-300">
                Overview
              </a>
              <a href="#process" className="block text-meta text-gray-600 hover:text-black transition-colors duration-300">
                Process
              </a>
              <a href="#tools" className="block text-meta text-gray-600 hover:text-black transition-colors duration-300">
                Tools
              </a>
              <a href="#outcome" className="block text-meta text-gray-600 hover:text-black transition-colors duration-300">
                Outcome
              </a>
              <a href="#gallery" className="block text-meta text-gray-600 hover:text-black transition-colors duration-300">
                Gallery
              </a>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-20">
            {/* Overview */}
            <div id="overview">
              <h2 className="text-h2 mb-6">Overview</h2>
              <p className="text-lead text-gray-700 leading-relaxed mb-6">
                {work.overview}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-2 border-[#C9A87C] pl-6">
                  <h3 className="text-h4 mb-3">Timeline</h3>
                  <p className="text-body text-gray-700">{work.timeline}</p>
                </div>
                <div className="border-l-2 border-[#C9A87C] pl-6">
                  <h3 className="text-h4 mb-3">Category</h3>
                  <p className="text-body text-gray-700">{work.category}</p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <QuoteBlock
              quote="Every project is an opportunity to push boundaries, learn something new, and create work that resonates beyond the brief."
              variant="highlighted"
            />

            {/* Process */}
            <div id="process">
              <h2 className="text-h2 mb-6">Process</h2>
              <p className="text-body text-gray-700 leading-relaxed mb-8">
                {work.process}
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#FAF9F6] flex items-center justify-center mx-auto mb-4 text-h3 text-[#8B7355]">
                    01
                  </div>
                  <h3 className="text-h4 mb-2">Research</h3>
                  <p className="text-body text-gray-600">Deep dive into brief and vision</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#FAF9F6] flex items-center justify-center mx-auto mb-4 text-h3 text-[#8B7355]">
                    02
                  </div>
                  <h3 className="text-h4 mb-2">Production</h3>
                  <p className="text-body text-gray-600">Execution with precision and care</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#FAF9F6] flex items-center justify-center mx-auto mb-4 text-h3 text-[#8B7355]">
                    03
                  </div>
                  <h3 className="text-h4 mb-2">Refinement</h3>
                  <p className="text-body text-gray-600">Polish to perfection</p>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div id="tools">
              <h2 className="text-h2 mb-6">Tools & Technology</h2>
              <div className="flex flex-wrap gap-3">
                {work.tools.map((tool) => (
                  <Badge key={tool} variant="secondary" className="text-sm">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div id="outcome" className="bg-[#FAF9F6] p-8 rounded-lg">
              <h2 className="text-h2 mb-4">Outcome & Impact</h2>
              <p className="text-lead text-gray-700 leading-relaxed">
                {work.outcome}
              </p>
            </div>

            {/* Gallery */}
            <div id="gallery">
              <h2 className="text-h2 mb-8">Project Gallery</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {work.images.map((image, index) => (
                  <MediaModule
                    key={index}
                    src={image}
                    alt={`${work.title} - ${index + 1}`}
                    aspectRatio="video"
                    size="full"
                    parallax
                  />
                ))}
              </div>
            </div>

            {/* Before/After Comparison */}
            {work.images.length >= 2 && (
              <div>
                <h2 className="text-h2 mb-8">Visual Comparison</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <MediaModule
                      src={work.images[0]}
                      alt="Before"
                      caption="Raw Capture"
                      aspectRatio="video"
                      size="full"
                    />
                  </div>
                  <div>
                    <MediaModule
                      src={work.images[work.images.length - 1]}
                      alt="After"
                      caption="Final Result"
                      aspectRatio="video"
                      size="full"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Work */}
      {relatedWork.length > 0 && (
        <Section spacing="xl" theme="cream">
          <h2 className="text-h2 mb-12 text-center">More {work.category} Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedWork.map((related) => (
              <ContentCard
                key={related.id}
                title={related.title}
                excerpt={related.description}
                coverImage={related.coverImage}
                tags={[related.category, related.year]}
                variant="work"
                size="sm"
                isVideo={related.isVideo}
                onClick={() => navigate("work-detail", related.id)}
              />
            ))}
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section spacing="lg" theme="dark" layout="centered">
        <div className="max-w-2xl text-center">
          <h2 className="text-h1 text-white mb-6">
            Like what you see?
          </h2>
          <p className="text-lead text-gray-300 mb-8">
            Let's discuss how we can create something exceptional for your next project.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <CTAButton
              variant="secondary"
              size="lg"
              onClick={() => navigate("contact")}
              icon={<ExternalLink className="w-4 h-4" />}
            >
              Start a Conversation
            </CTAButton>
            <CTAButton
              variant="outline"
              size="lg"
              onClick={() => navigate("work")}
            >
              View All Work
            </CTAButton>
          </div>
        </div>
      </Section>
    </div>
  );
}
