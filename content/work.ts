export type ProjectCategory =
  | "Branding"
  | "Social Media"
  | "Campaigns"
  | "Video"
  | "Digital Marketing"
  | "Creative Design";

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  categoryDescription: string;
  thumbnail: string;
  images: string[];
  challenge: string;
  approach: string;
  idea: string;
  execution: string;
  outcome: string;
  /** Gradient colors for placeholder visuals */
  gradient: [string, string];
};

export const projectCategories: {
  name: ProjectCategory;
  description: string;
}[] = [
  {
    name: "Branding",
    description: "Identity systems, logos and visual direction",
  },
  {
    name: "Social Media",
    description: "Content systems, creative direction and platform presence",
  },
  {
    name: "Campaigns",
    description: "Ideas developed around specific marketing objectives",
  },
  {
    name: "Video",
    description: "Reels, promotional videos, product stories and brand films",
  },
  {
    name: "Digital Marketing",
    description: "Campaign strategy, advertising and audience-focused marketing",
  },
  {
    name: "Creative Design",
    description: "Posters, promotional creatives and visual communication",
  },
];

// TODO: replace with real client work
export const projects: Project[] = [
  {
    slug: "artisan-interiors-brand-identity",
    title: "Complete Brand Identity System",
    client: "Sample Project — Interior & Furniture",
    category: "Branding",
    categoryDescription: "Identity systems, logos and visual direction",
    thumbnail: "/projects/placeholder-1.svg",
    images: [
      "/projects/placeholder-1.svg",
      "/projects/placeholder-1b.svg",
    ],
    challenge:
      "The client needed a cohesive brand identity that reflected their craftsmanship and premium positioning in a competitive interior design market.",
    approach:
      "We began with an in-depth discovery phase, studying the local market, competitor positioning and the client's unique strengths in handcrafted furniture and bespoke interiors.",
    idea:
      "Create a visual identity rooted in the intersection of tradition and modern minimalism — communicating quality and attention to detail at every touchpoint.",
    execution:
      "We developed the complete brand system including logo, colour palette, typography, business cards, letterheads and social media templates. Every element was designed to feel premium yet approachable.",
    outcome:
      "The new identity helped the client establish a stronger market presence and provided a consistent visual language across all marketing channels.",
    gradient: ["#8b5cf6", "#6d28d9"],
  },
  {
    slug: "wellness-clinic-social-media",
    title: "Social Media Content System",
    client: "Sample Project — Healthcare & Ayurveda",
    category: "Social Media",
    categoryDescription:
      "Content systems, creative direction and platform presence",
    thumbnail: "/projects/placeholder-2.svg",
    images: [
      "/projects/placeholder-2.svg",
      "/projects/placeholder-2b.svg",
    ],
    challenge:
      "A healthcare and wellness clinic needed to build a consistent social media presence that educated their audience while maintaining professional credibility.",
    approach:
      "We audited existing content, studied the healthcare audience in Kerala, and developed a content strategy balancing informative posts, patient stories and service highlights.",
    idea:
      "Position the clinic as a trusted voice in wellness by combining Ayurvedic heritage with modern healthcare communication — making complex health topics accessible and shareable.",
    execution:
      "We created monthly content calendars, designed over 60 social media creatives, wrote engaging captions and managed posting schedules across Instagram and Facebook.",
    outcome:
      "Social media engagement improved significantly and the clinic saw increased enquiries through their social platforms within the first three months.",
    gradient: ["#06b6d4", "#8b5cf6"],
  },
  {
    slug: "resort-launch-campaign",
    title: "Grand Opening Digital Campaign",
    client: "Sample Project — Hospitality & Tourism",
    category: "Campaigns",
    categoryDescription:
      "Ideas developed around specific marketing objectives",
    thumbnail: "/projects/placeholder-3.svg",
    images: [
      "/projects/placeholder-3.svg",
      "/projects/placeholder-3b.svg",
    ],
    challenge:
      "A new resort needed to generate awareness and bookings ahead of its grand opening, with limited brand recognition in a competitive hospitality market.",
    approach:
      "We developed a phased campaign strategy — teaser, launch and sustain — designed to build anticipation and convert interest into actual reservations.",
    idea:
      "Create an immersive digital experience that transported the audience to the resort before they even visited, using cinematic visuals and storytelling.",
    execution:
      "The campaign spanned Meta ads, Instagram Reels, WhatsApp broadcasts and Google Ads. We created promotional videos, carousel ads and targeted landing pages.",
    outcome:
      "The campaign generated strong pre-launch interest and contributed to a successful opening weekend with bookings exceeding initial projections.",
    gradient: ["#f59e0b", "#ef4444"],
  },
  {
    slug: "restaurant-reels-series",
    title: "Recipe & Ambiance Reels Series",
    client: "Sample Project — Food & Restaurants",
    category: "Video",
    categoryDescription:
      "Reels, promotional videos, product stories and brand films",
    thumbnail: "/projects/placeholder-4.svg",
    images: [
      "/projects/placeholder-4.svg",
      "/projects/placeholder-4b.svg",
    ],
    challenge:
      "A restaurant wanted to showcase their culinary expertise and dining atmosphere through short-form video content that would drive foot traffic.",
    approach:
      "We planned a series of Reels and short videos focusing on signature dishes, chef preparation moments and the dining experience — designed for maximum engagement on Instagram.",
    idea:
      "Let the food and atmosphere tell the story. We focused on sensory details — sizzling sounds, vibrant plating, warm lighting — to create an emotional connection with viewers.",
    execution:
      "We produced a series of 15 Reels over two months, combining close-up food shots, kitchen-to-table sequences and customer experience moments, each optimized for Instagram's algorithm.",
    outcome:
      "The Reels series significantly increased the restaurant's Instagram reach and contributed to a noticeable increase in weekend footfall.",
    gradient: ["#e879f9", "#8b5cf6"],
  },
  {
    slug: "real-estate-lead-generation",
    title: "Meta Ads Lead Generation System",
    client: "Sample Project — Real Estate",
    category: "Digital Marketing",
    categoryDescription:
      "Campaign strategy, advertising and audience-focused marketing",
    thumbnail: "/projects/placeholder-5.svg",
    images: [
      "/projects/placeholder-5.svg",
      "/projects/placeholder-5b.svg",
    ],
    challenge:
      "A real estate developer needed a steady flow of qualified leads for a new residential project, with a focus on families and first-time homebuyers in Kerala.",
    approach:
      "We built a targeted Meta advertising funnel combining awareness campaigns with lead generation forms, supported by WhatsApp follow-up sequences.",
    idea:
      "Instead of just showing property images, we created story-driven ads focusing on the lifestyle and community aspect of the project — making it about the life, not just the building.",
    execution:
      "We launched Facebook and Instagram ad campaigns with audience segmentation, A/B tested ad creatives and copy, and set up automated WhatsApp responses for new leads.",
    outcome:
      "The campaign delivered a consistent stream of qualified leads at a competitive cost-per-lead and established a repeatable system for future project launches.",
    gradient: ["#10b981", "#06b6d4"],
  },
  {
    slug: "startup-launch-creatives",
    title: "Product Launch Creative Suite",
    client: "Sample Project — Tech Startup",
    category: "Creative Design",
    categoryDescription: "Posters, promotional creatives and visual communication",
    thumbnail: "/projects/placeholder-6.svg",
    images: [
      "/projects/placeholder-6.svg",
      "/projects/placeholder-6b.svg",
    ],
    challenge:
      "A tech startup needed a complete set of marketing creatives for their product launch — from social media graphics to presentation decks and promotional materials.",
    approach:
      "We developed a creative direction aligned with the startup's brand personality — innovative, approachable and forward-thinking — and applied it consistently across all materials.",
    idea:
      "Use bold, clean design language with dynamic compositions that reflect the energy and innovation of the product, making technical features feel exciting and accessible.",
    execution:
      "We designed social media launch graphics, promotional posters, investor presentation slides, email templates and event banners — all following a unified visual system.",
    outcome:
      "The cohesive creative suite gave the startup a professional market presence that exceeded their expectations and supported a successful product launch.",
    gradient: ["#8b5cf6", "#e879f9"],
  },
];
