import { Section } from "../components/Section";
import { QuoteBlock } from "../components/QuoteBlock";
import { MediaModule } from "../components/MediaModule";
import { CTAButton } from "../components/CTAButton";
import { Camera, Video, Sparkles, CheckCircle2, Clock, DollarSign } from "lucide-react";
import type { Page } from "../components/Router";

const services = [
  {
    icon: Camera,
    title: "Photography",
    description: "Editorial, portrait, and commercial photography that captures authentic moments and tells compelling visual stories.",
    services: ["Editorial Shoots", "Portrait Sessions", "Commercial Work", "Event Photography"],
    pricing: "Starting at $500"
  },
  {
    icon: Video,
    title: "Videography",
    description: "Cinematic video production from concept to delivery, creating films that move audiences and elevate brands.",
    services: ["Brand Films", "Documentaries", "Music Videos", "Commercial Content"],
    pricing: "Starting at $1,500"
  },
  {
    icon: Sparkles,
    title: "Animation",
    description: "Motion graphics and animation that bring ideas to life with dynamic storytelling and creative visual effects.",
    services: ["Motion Graphics", "2D/3D Animation", "Visual Effects", "Title Design"],
    pricing: "Starting at $800"
  }
];

const packages = [
  {
    name: "Essential",
    price: "$1,200",
    description: "Perfect for small projects and single-session shoots",
    features: [
      "Half-day shoot (4 hours)",
      "20 edited images or 1-minute video",
      "Basic retouching",
      "Online gallery delivery",
      "Personal usage rights"
    ]
  },
  {
    name: "Professional",
    price: "$3,500",
    description: "Ideal for brand campaigns and editorial work",
    features: [
      "Full-day shoot (8 hours)",
      "50 edited images or 3-minute video",
      "Advanced retouching",
      "Multiple deliverable formats",
      "Commercial usage rights",
      "Creative direction included"
    ],
    featured: true
  },
  {
    name: "Premium",
    price: "$7,500",
    description: "Comprehensive solution for large-scale productions",
    features: [
      "Multi-day production",
      "Unlimited edited deliverables",
      "Full post-production suite",
      "Multiple formats & versions",
      "Extended commercial rights",
      "Concept development",
      "On-location support team"
    ]
  }
];

interface ServicesPageProps {
  navigate: (page: Page) => void;
}

export function ServicesPage({ navigate }: ServicesPageProps) {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <Section spacing="lg" theme="light" layout="centered">
        <div className="max-w-4xl">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-16 bg-[#8B7355]" />
          </div>
          <h1 className="text-display mb-8 tracking-tight text-center">
            Services
          </h1>
          <p className="text-lead text-gray-600 text-center">
            Comprehensive visual solutions tailored to your creative vision,
            from concept to final delivery
          </p>
        </div>
      </Section>

      {/* Main Services Grid */}
      <Section spacing="xl" theme="cream">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white border border-gray-200 p-8 transition-all duration-500 hover:border-[#8B7355] hover:shadow-xl"
              >
                <Icon className="w-12 h-12 mb-6 text-[#8B7355]" />
                <h3 className="text-h3 mb-4">{service.title}</h3>
                <p className="text-body text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.services.map((item) => (
                    <li key={item} className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#C9A87C] rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-meta text-[#8B7355]">
                  {service.pricing}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Quote Section */}
      <Section spacing="md" theme="light">
        <QuoteBlock
          quote="Great visual work is more than technical skill—it's about understanding your story and bringing it to life with creativity and precision."
          variant="large"
          alignment="center"
        />
      </Section>

      {/* Behind the Scenes */}
      <Section spacing="xl" theme="cream" layout="media-left">
        <div>
          <MediaModule
            src="https://images.unsplash.com/photo-1574867022210-bd9ecc413bf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWhpbmQlMjBzY2VuZXMlMjBmaWxtJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NjE0OTEzMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Behind the scenes"
            type="video"
            aspectRatio="video"
            parallax
          />
        </div>
        <div>
          <div className="h-px w-16 bg-[#8B7355] mb-6" />
          <h2 className="text-h2 mb-6">The Full-Service Experience</h2>
          <p className="text-body text-gray-700 leading-relaxed mb-6">
            Every project receives the same level of dedication and attention to detail,
            regardless of scope. From initial consultation to final delivery, I work
            closely with you to ensure your vision becomes reality.
          </p>
          <p className="text-body text-gray-700 leading-relaxed mb-8">
            My approach combines creative direction, technical expertise, and collaborative
            problem-solving to deliver results that exceed expectations.
          </p>
          <CTAButton
            variant="secondary"
            onClick={() => navigate("contact")}
          >
            Discuss Your Project
          </CTAButton>
        </div>
      </Section>

      {/* Process Section */}
      <Section spacing="xl" theme="light">
        <div className="text-center mb-16">
          <h2 className="text-h1 mb-6">My Process</h2>
          <p className="text-lead text-gray-600 max-w-2xl mx-auto">
            A streamlined workflow designed to deliver exceptional results
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { 
              number: "01", 
              title: "Discovery", 
              description: "Understanding your vision, goals, and target audience through in-depth consultation"
            },
            { 
              number: "02", 
              title: "Planning", 
              description: "Developing concepts, creating shot lists, and coordinating all production logistics"
            },
            { 
              number: "03", 
              title: "Creation", 
              description: "Capturing high-quality content with professional equipment and artistic precision"
            },
            { 
              number: "04", 
              title: "Delivery", 
              description: "Refining through post-production and delivering polished final assets"
            }
          ].map((step, index) => (
            <div key={step.number} className="text-center">
              <div className="text-6xl text-[#C9A87C] mb-4 opacity-40">{step.number}</div>
              <h3 className="text-h4 mb-3">{step.title}</h3>
              <p className="text-body text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Packages Section */}
      <Section spacing="xl" theme="cream">
        <div className="text-center mb-16">
          <h2 className="text-h1 mb-6">Service Packages</h2>
          <p className="text-lead text-gray-600 max-w-2xl mx-auto">
            Flexible options to match your project needs and budget
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`bg-white border-2 p-8 transition-all duration-300 ${
                pkg.featured 
                  ? 'border-[#8B7355] shadow-xl scale-105' 
                  : 'border-gray-200 hover:border-[#8B7355]'
              }`}
            >
              {pkg.featured && (
                <div className="text-meta text-[#8B7355] mb-4">MOST POPULAR</div>
              )}
              <h3 className="text-h3 mb-2">{pkg.name}</h3>
              <div className="text-4xl mb-4 text-[#8B7355]">{pkg.price}</div>
              <p className="text-body text-gray-600 mb-8">{pkg.description}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-body text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#8B7355] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <CTAButton
                variant={pkg.featured ? "primary" : "outline"}
                fullWidth
                onClick={() => navigate("contact")}
              >
                Get Started
              </CTAButton>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-body text-gray-600">
            Need something custom? <button onClick={() => navigate("contact")} className="text-[#8B7355] hover:underline">Let's talk</button>
          </p>
        </div>
      </Section>

      {/* What's Included Section */}
      <Section spacing="xl" theme="light">
        <div className="text-center mb-16">
          <h2 className="text-h1 mb-6">What's Included</h2>
          <p className="text-lead text-gray-600 max-w-2xl mx-auto">
            Every project includes these core elements
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#FAF9F6] flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-[#8B7355]" />
            </div>
            <h3 className="text-h4 mb-3">Timely Delivery</h3>
            <p className="text-body text-gray-600">
              Fast turnaround times without compromising quality. Most projects
              delivered within 2-3 weeks.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#FAF9F6] flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-[#8B7355]" />
            </div>
            <h3 className="text-h4 mb-3">Quality Guarantee</h3>
            <p className="text-body text-gray-600">
              Revision rounds included to ensure you're completely satisfied
              with the final result.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#FAF9F6] flex items-center justify-center mx-auto mb-6">
              <DollarSign className="w-8 h-8 text-[#8B7355]" />
            </div>
            <h3 className="text-h4 mb-3">Transparent Pricing</h3>
            <p className="text-body text-gray-600">
              Clear, upfront pricing with no hidden fees. You'll know exactly
              what to expect.
            </p>
          </div>
        </div>
      </Section>

      {/* Add-ons Section */}
      <Section spacing="xl" theme="cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-h2 mb-12 text-center">Available Add-Ons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="text-h4 mb-2">Rush Delivery</h3>
              <p className="text-body text-gray-600 mb-3">
                Need it fast? Get your final deliverables in 48-72 hours.
              </p>
              <p className="text-meta text-[#8B7355]">+25% of project cost</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="text-h4 mb-2">Extended Usage Rights</h3>
              <p className="text-body text-gray-600 mb-3">
                Full commercial rights for unlimited use across all platforms.
              </p>
              <p className="text-meta text-[#8B7355]">Starting at $500</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="text-h4 mb-2">Social Media Package</h3>
              <p className="text-body text-gray-600 mb-3">
                Optimized versions for Instagram, TikTok, and other platforms.
              </p>
              <p className="text-meta text-[#8B7355]">$300</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="text-h4 mb-2">Behind-the-Scenes</h3>
              <p className="text-body text-gray-600 mb-3">
                Raw footage and photos from your shoot for marketing use.
              </p>
              <p className="text-meta text-[#8B7355]">$400</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Gallery Section */}
      <Section spacing="xl" theme="light">
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-6">Recent Service Highlights</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <MediaModule
            src="https://images.unsplash.com/photo-1662018111856-78218bfd7f3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Nlc3MlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxNDkxMzI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Creative process"
            aspectRatio="video"
            caption="Brand campaign for tech startup"
            parallax
          />
          <MediaModule
            src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYxNDc1NDMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Team collaboration"
            aspectRatio="video"
            caption="Corporate video production"
            parallax
          />
        </div>
      </Section>

      {/* FAQ Section */}
      <Section spacing="xl" theme="cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-h2 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-h4 mb-3">What's your typical turnaround time?</h3>
              <p className="text-body text-gray-700">
                Most projects are delivered within 2-3 weeks after the shoot. Rush delivery
                is available for an additional fee if you need faster turnaround.
              </p>
            </div>
            <div>
              <h3 className="text-h4 mb-3">Do you travel for projects?</h3>
              <p className="text-body text-gray-700">
                Yes! I'm available for projects worldwide. Travel expenses are quoted separately
                based on location and project requirements.
              </p>
            </div>
            <div>
              <h3 className="text-h4 mb-3">What's included in the pricing?</h3>
              <p className="text-body text-gray-700">
                All packages include creative direction, professional equipment, shooting time,
                post-production editing, and digital delivery of final assets.
              </p>
            </div>
            <div>
              <h3 className="text-h4 mb-3">Can I request revisions?</h3>
              <p className="text-body text-gray-700">
                Absolutely! Each package includes revision rounds. I want you to be completely
                satisfied with the final result.
              </p>
            </div>
            <div>
              <h3 className="text-h4 mb-3">How do we get started?</h3>
              <p className="text-body text-gray-700">
                Simply reach out through the contact form, and we'll schedule a consultation
                to discuss your project needs and goals.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section spacing="xl" theme="dark" layout="centered">
        <div className="max-w-3xl text-center">
          <h2 className="text-h1 text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lead text-gray-300 mb-8">
            Let's discuss your vision and create something exceptional together.
            Get in touch for a free consultation and custom quote.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <CTAButton
              variant="secondary"
              size="lg"
              onClick={() => navigate("contact")}
            >
              Get a Quote
            </CTAButton>
            <CTAButton
              variant="outline"
              size="lg"
              onClick={() => navigate("work")}
            >
              View Portfolio
            </CTAButton>
          </div>
        </div>
      </Section>
    </div>
  );
}
