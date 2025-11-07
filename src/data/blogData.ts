export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  tags: string[];
  date: string;
  readTime: string;
  author: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Art of Cinematic Storytelling",
    excerpt: "Exploring how lighting, composition, and movement work together to create compelling visual narratives.",
    content: "In the world of visual storytelling, the marriage of lighting, composition, and movement creates magic that transcends mere documentation...",
    coverImage: "https://images.unsplash.com/photo-1670411952195-fffeca152dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBmaWxtbWFrZXIlMjBjYW1lcmF8ZW58MXx8fHwxNzYxMjk0MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Videography", "Technique"],
    date: "March 15, 2025",
    readTime: "5 min read",
    author: "Jordan Rivers",
    featured: true
  },
  {
    id: "2",
    title: "Behind the Lens: Portrait Photography Mastery",
    excerpt: "A deep dive into the techniques and psychology of creating powerful portrait photography.",
    content: "Portrait photography is as much about connection as it is about technique. The camera is simply a tool...",
    coverImage: "https://images.unsplash.com/photo-1612052355380-d7c1d631f00f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDF8fHx8MTc2MTI3ODQ1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Photography", "Portraits"],
    date: "March 8, 2025",
    readTime: "7 min read",
    author: "Jordan Rivers"
  },
  {
    id: "3",
    title: "Motion Graphics Workflow",
    excerpt: "My step-by-step process for creating dynamic motion graphics from concept to final render.",
    content: "Motion graphics is where creativity meets technical precision. Every project begins with a story...",
    coverImage: "https://images.unsplash.com/photo-1740174459682-4dd3f72e2512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljcyUyMGFuaW1hdGlvbnxlbnwxfHx8fDE3NjExOTg0OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Animation", "Workflow"],
    date: "February 28, 2025",
    readTime: "6 min read",
    author: "Jordan Rivers",
    featured: true
  },
  {
    id: "4",
    title: "Editorial Fashion Photography",
    excerpt: "Essential techniques for capturing authentic moments in fashion editorial work.",
    content: "Fashion editorial photography demands a unique blend of technical skill and creative vision...",
    coverImage: "https://images.unsplash.com/photo-1614492092395-af5493e6866d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBmYXNoaW9uJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYxMTcyMjYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Photography", "Editorial"],
    date: "February 20, 2025",
    readTime: "4 min read",
    author: "Jordan Rivers"
  },
  {
    id: "5",
    title: "Color Grading for Filmmakers",
    excerpt: "Understanding color theory and how to use it to enhance your visual storytelling.",
    content: "Color grading is the secret sauce that transforms good footage into cinematic excellence...",
    coverImage: "https://images.unsplash.com/photo-1695014192231-18462db3ebde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMHNldHxlbnwxfHx8fDE3NjEyOTQxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Videography", "Post-Production"],
    date: "February 12, 2025",
    readTime: "8 min read",
    author: "Jordan Rivers"
  },
  {
    id: "6",
    title: "Building Your Creative Portfolio",
    excerpt: "Practical advice on curating and presenting your best work to potential clients.",
    content: "Your portfolio is your visual resume, your first impression, and often your only chance...",
    coverImage: "https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzYxMjY3MTA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Career", "Business"],
    date: "February 5, 2025",
    readTime: "5 min read",
    author: "Jordan Rivers"
  },
  {
    id: "7",
    title: "Collaborative Creative Process",
    excerpt: "How working with diverse teams elevates the creative output and brings fresh perspectives.",
    content: "Collaboration is the heartbeat of great creative work. No matter how skilled you are...",
    coverImage: "https://images.unsplash.com/photo-1700561570982-5f845601c505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2MTI2MDM2NXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Workflow", "Team"],
    date: "January 28, 2025",
    readTime: "6 min read",
    author: "Jordan Rivers"
  },
  {
    id: "8",
    title: "Landscape Photography Composition",
    excerpt: "Mastering the art of capturing breathtaking landscapes with perfect composition and timing.",
    content: "Landscape photography is patience, preparation, and a deep respect for nature's timing...",
    coverImage: "https://images.unsplash.com/photo-1705147651064-36aedc005020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBjaW5lbWF0aWMlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjEyOTQxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Photography", "Landscape"],
    date: "January 15, 2025",
    readTime: "7 min read",
    author: "Jordan Rivers",
    featured: true
  }
];
