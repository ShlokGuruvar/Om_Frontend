import { Section } from "../components/Section";
import { QuoteBlock } from "../components/QuoteBlock";
import { MediaModule } from "../components/MediaModule";
import { ContentCard } from "../components/ContentCard";
import { CTAButton } from "../components/CTAButton";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "../data/blogData";
import type { Page } from "../components/Router";

interface BlogDetailPageProps {
  navigate: (page: Page, id?: string) => void;
  postId?: string;
}

export function BlogDetailPage({ navigate, postId }: BlogDetailPageProps) {
  const post = blogPosts.find(p => p.id === postId) || blogPosts[0];
  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Back Navigation */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <button
          onClick={() => navigate("blog")}
          className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-meta">Back to Blog</span>
        </button>
      </div>

      {/* Hero Section */}
      <Section spacing="md" theme="light" layout="centered">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 text-meta text-gray-500 mb-6 justify-center">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span className="text-[#8B7355]">{post.tags.join(", ")}</span>
          </div>
          <h1 className="text-display mb-8 tracking-tight">
            {post.title}
          </h1>
          <p className="text-lead text-gray-600">
            {post.excerpt}
          </p>
        </div>
      </Section>

      {/* Featured Image */}
      <Section spacing="lg" theme="cream" layout="full-bleed">
        <MediaModule
          src={post.coverImage}
          alt={post.title}
          aspectRatio="wide"
          size="full"
          rounded
        />
      </Section>

      {/* Content */}
      <Section spacing="lg" theme="light">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-body text-gray-700 leading-relaxed mb-6">
              {post.content}
            </p>
            <p className="text-body text-gray-700 leading-relaxed mb-6">
              The journey of mastering visual storytelling is ongoing. Each project teaches new lessons,
              each challenge presents opportunities for growth. Whether working with natural light or
              crafting complex lighting setups, the fundamentals remain constant: respect the subject,
              understand the story, and let your technical skills serve the creative vision.
            </p>
            <p className="text-body text-gray-700 leading-relaxed mb-6">
              In my experience, the best work emerges when preparation meets spontaneity. You plan
              meticulously, understand your tools intimately, and then remain open to the unexpected
              moments that make a project truly special. This balance between control and flexibility
              defines professional creative work.
            </p>
          </div>
        </div>
      </Section>

      {/* Quote */}
      <Section spacing="md" theme="cream">
        <div className="max-w-3xl mx-auto">
          <QuoteBlock
            quote="The camera is just a tool. The real magic happens when you understand light, composition, and most importantly, your subject's story."
            author={post.author}
            variant="highlighted"
          />
        </div>
      </Section>

      {/* Additional Content */}
      <Section spacing="lg" theme="light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-h2 mb-6">Key Takeaways</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-h4 mb-3">Technical Excellence</h3>
              <p className="text-body text-gray-700 leading-relaxed">
                Master your equipment until it becomes an extension of your creative vision.
                Technical proficiency frees you to focus on storytelling.
              </p>
            </div>
            <div>
              <h3 className="text-h4 mb-3">Creative Vision</h3>
              <p className="text-body text-gray-700 leading-relaxed">
                Develop a unique perspective. Study the masters, but find your own voice.
                Authenticity resonates more than imitation.
              </p>
            </div>
            <div>
              <h3 className="text-h4 mb-3">Continuous Learning</h3>
              <p className="text-body text-gray-700 leading-relaxed">
                The industry evolves constantly. Stay curious, experiment with new techniques,
                and never stop refining your craft.
              </p>
            </div>
            <div>
              <h3 className="text-h4 mb-3">Collaboration</h3>
              <p className="text-body text-gray-700 leading-relaxed">
                Great work rarely happens in isolation. Build relationships, value diverse
                perspectives, and create a supportive creative community.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Image Gallery */}
      <Section spacing="lg" theme="cream">
        <h2 className="text-h2 mb-12 text-center">Visual Examples</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <MediaModule
            src={post.coverImage}
            alt="Example 1"
            aspectRatio="video"
            size="full"
            parallax
          />
          <MediaModule
            src="https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzYxMjY3MTA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Example 2"
            aspectRatio="video"
            size="full"
            parallax
          />
        </div>
      </Section>

      {/* Related Posts */}
      <Section spacing="lg" theme="light">
        <h2 className="text-h2 mb-12 text-center">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {relatedPosts.map((relatedPost) => (
            <ContentCard
              key={relatedPost.id}
              title={relatedPost.title}
              excerpt={relatedPost.excerpt}
              coverImage={relatedPost.coverImage}
              tags={relatedPost.tags}
              date={relatedPost.date}
              readTime={relatedPost.readTime}
              variant="blog"
              size="sm"
              onClick={() => navigate("blog-detail", relatedPost.id)}
            />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section spacing="lg" theme="dark" layout="centered">
        <div className="max-w-2xl text-center">
          <h2 className="text-h1 text-white mb-6">
            Want to learn more?
          </h2>
          <p className="text-lead text-gray-300 mb-8">
            Explore my portfolio or get in touch to discuss your next project.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <CTAButton
              variant="secondary"
              size="lg"
              onClick={() => navigate("work")}
            >
              View Portfolio
            </CTAButton>
            <CTAButton
              variant="outline"
              size="lg"
              onClick={() => navigate("contact")}
            >
              Get In Touch
            </CTAButton>
          </div>
        </div>
      </Section>
    </div>
  );
}
