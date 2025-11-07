import { Section } from "../components/Section";
import { ContentCard } from "../components/ContentCard";
import { QuoteBlock } from "../components/QuoteBlock";
import { CTAButton } from "../components/CTAButton";
import type { Page } from "../components/Router";
import { blogPosts } from "../data/blogData";

interface BlogPageProps {
  navigate: (page: Page, id?: string) => void;
}

export function BlogPage({ navigate }: BlogPageProps) {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <Section spacing="lg" theme="cream" layout="centered">
        <div className="max-w-4xl">
          <div className="h-px w-16 bg-[#8B7355] mb-6 mx-auto" />
          <h1 className="text-display mb-8 tracking-tight">
            Insights & Stories
          </h1>
          <p className="text-lead text-gray-600 max-w-2xl mx-auto">
            Exploring the craft, process, and inspiration behind visual storytelling.
            Sharing lessons learned and creative discoveries from the field.
          </p>
        </div>
      </Section>

      {/* Quote Section */}
      <Section spacing="md" theme="light">
        <QuoteBlock
          quote="Every photograph is a story waiting to be told. Every frame carries the weight of a moment that will never return."
          author="Jordan Rivers"
          variant="large"
          alignment="center"
        />
      </Section>

      {/* Featured Posts */}
      <Section spacing="lg" theme="cream">
        <div className="mb-12">
          <h2 className="text-h2 mb-4">Featured Articles</h2>
          <p className="text-body text-gray-600">Handpicked highlights from my creative journey</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <ContentCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              coverImage={post.coverImage}
              tags={post.tags}
              date={post.date}
              readTime={post.readTime}
              variant="blog"
              size="sm"
              featured={post.featured}
              onClick={() => navigate("blog-detail", post.id)}
            />
          ))}
        </div>
      </Section>

      {/* All Posts */}
      <Section spacing="lg" theme="light">
        <div className="mb-12">
          <h2 className="text-h2 mb-4">All Articles</h2>
          <p className="text-body text-gray-600">Techniques, workflows, and creative insights</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <ContentCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              coverImage={post.coverImage}
              tags={post.tags}
              date={post.date}
              readTime={post.readTime}
              variant="blog"
              size="sm"
              onClick={() => navigate("blog-detail", post.id)}
            />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section spacing="lg" theme="dark" layout="centered">
        <div className="max-w-3xl text-center">
          <h2 className="text-h1 text-white mb-6">
            Want to collaborate?
          </h2>
          <p className="text-lead text-gray-300 mb-8">
            I'm always open to new projects and creative partnerships.
            Let's create something extraordinary together.
          </p>
          <CTAButton
            variant="secondary"
            size="lg"
            onClick={() => navigate("contact")}
          >
            Get In Touch
          </CTAButton>
        </div>
      </Section>
    </div>
  );
}
