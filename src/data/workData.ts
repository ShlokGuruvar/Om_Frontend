export interface WorkItem {
  id: string;
  title: string;
  client: string;
  role: string;
  year: string;
  category: "Photography" | "Videography" | "Animation";
  coverImage: string;
  description: string;
  overview: string;
  tools: string[];
  timeline: string;
  process: string;
  outcome: string;
  images: string[];
  isVideo?: boolean;
  featured?: boolean;
}

export const workItems: WorkItem[] = [
  {
    id: "1",
    title: "Desert Dreamscape",
    client: "National Geographic",
    role: "Photographer & Director",
    year: "2025",
    category: "Photography",
    coverImage: "https://images.unsplash.com/photo-1705147651064-36aedc005020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBjaW5lbWF0aWMlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjEyOTQxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "A cinematic exploration of vast desert landscapes and solitude",
    overview: "This project captures the raw beauty and haunting isolation of desert environments across the American Southwest.",
    tools: ["Canon R5", "DJI Mavic 3", "Adobe Lightroom", "Capture One"],
    timeline: "3 months",
    process: "Extensive location scouting followed by multiple sunrise and sunset shoots to capture optimal lighting conditions.",
    outcome: "Featured in National Geographic's annual photography issue with 12-page spread.",
    images: [
      "https://images.unsplash.com/photo-1705147651064-36aedc005020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBjaW5lbWF0aWMlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjEyOTQxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzYxMjY3MTA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    featured: true
  },
  {
    id: "2",
    title: "Urban Portraits",
    client: "Vogue",
    role: "Portrait Photographer",
    year: "2024",
    category: "Photography",
    coverImage: "https://images.unsplash.com/photo-1612052355380-d7c1d631f00f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDF8fHx8MTc2MTI3ODQ1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Street photography capturing raw human emotion",
    overview: "An intimate portrait series documenting urban life and the diverse faces of the city.",
    tools: ["Sony A7R V", "85mm f/1.4", "Natural Light", "Phase One"],
    timeline: "6 weeks",
    process: "Building trust with subjects through conversation before capturing candid moments in their natural environment.",
    outcome: "Published in Vogue's digital platform, reaching over 2M viewers.",
    images: [
      "https://images.unsplash.com/photo-1612052355380-d7c1d631f00f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDF8fHx8MTc2MTI3ODQ1NXww&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    id: "3",
    title: "Motion Reel 2025",
    client: "Self-Initiated",
    role: "Motion Designer & Animator",
    year: "2025",
    category: "Animation",
    coverImage: "https://images.unsplash.com/photo-1740174459682-4dd3f72e2512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljcyUyMGFuaW1hdGlvbnxlbnwxfHx8fDE3NjExOTg0OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "A showcase reel of motion graphics and animation work",
    overview: "Compilation of my best motion design work across various projects and clients.",
    tools: ["After Effects", "Cinema 4D", "Blender", "Adobe Premiere"],
    timeline: "Ongoing",
    process: "Curating the most impactful sequences from client work and personal experiments.",
    outcome: "Used as portfolio piece for attracting new animation clients.",
    images: [
      "https://images.unsplash.com/photo-1740174459682-4dd3f72e2512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljcyUyMGFuaW1hdGlvbnxlbnwxfHx8fDE3NjExOTg0OTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    isVideo: true,
    featured: true
  },
  {
    id: "4",
    title: "Cinematic Documentary",
    client: "Netflix",
    role: "Cinematographer",
    year: "2024",
    category: "Videography",
    coverImage: "https://images.unsplash.com/photo-1670411952195-fffeca152dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBmaWxtbWFrZXIlMjBjYW1lcmF8ZW58MXx8fHwxNzYxMjk0MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Documentary-style narrative filmmaking",
    overview: "A feature-length documentary exploring stories of resilience and community.",
    tools: ["ARRI Alexa Mini", "Zeiss CP.3", "DaVinci Resolve", "Pro Tools"],
    timeline: "8 months",
    process: "Extensive pre-production research, followed by intimate verité-style filming across multiple locations.",
    outcome: "Premiered at Sundance Film Festival, acquired by Netflix for global distribution.",
    images: [
      "https://images.unsplash.com/photo-1670411952195-fffeca152dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBmaWxtbWFrZXIlMjBjYW1lcmF8ZW58MXx8fHwxNzYxMjk0MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1695014192231-18462db3ebde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMHNldHxlbnwxfHx8fDE3NjEyOTQxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    isVideo: true,
    featured: true
  },
  {
    id: "5",
    title: "Editorial Fashion",
    client: "Harper's Bazaar",
    role: "Editorial Photographer",
    year: "2024",
    category: "Photography",
    coverImage: "https://images.unsplash.com/photo-1614492092395-af5493e6866d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBmYXNoaW9uJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYxMTcyMjYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Fashion editorial for emerging designers",
    overview: "High-fashion editorial spread featuring emerging designers and sustainable fashion.",
    tools: ["Hasselblad H6D", "Profoto Lighting", "Capture One"],
    timeline: "2 weeks",
    process: "Collaborative process with stylists, makeup artists, and designers to create cohesive visual narrative.",
    outcome: "Published in Harper's Bazaar spring issue, featured on social media with 500K+ engagement.",
    images: [
      "https://images.unsplash.com/photo-1614492092395-af5493e6866d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBmYXNoaW9uJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYxMTcyMjYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    id: "6",
    title: "Brand Film",
    client: "Apple",
    role: "Director & DP",
    year: "2025",
    category: "Videography",
    coverImage: "https://images.unsplash.com/photo-1695014192231-18462db3ebde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMHNldHxlbnwxfHx8fDE3NjEyOTQxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Commercial brand film showcasing innovation",
    overview: "90-second brand film highlighting Apple's commitment to creativity and innovation.",
    tools: ["RED Komodo", "Cooke Anamorphic", "Final Cut Pro", "DaVinci Resolve"],
    timeline: "1 month",
    process: "Concept development, storyboarding, location scouting, production, and post-production.",
    outcome: "Launched globally across Apple's platforms, viewed by millions worldwide.",
    images: [
      "https://images.unsplash.com/photo-1695014192231-18462db3ebde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMHNldHxlbnwxfHx8fDE3NjEyOTQxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    isVideo: true
  }
];
