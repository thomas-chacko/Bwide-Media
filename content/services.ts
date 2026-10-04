export type Service = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Strategic digital marketing designed to reach the right audience and create measurable opportunities.",
    items: [
      "Digital Marketing Strategy",
      "Social Media Marketing",
      "Audience & Market Research",
      "Campaign Planning",
      "Performance Tracking",
      "Community Management",
      "Hashtag & Keyword Research",
    ],
  },
  {
    id: "social-media",
    title: "Social Media Management",
    description:
      "We turn social platforms into a consistent and purposeful brand communication channel.",
    items: [
      "Instagram",
      "Facebook",
      "LinkedIn",
      "WhatsApp",
      "YouTube",
      "Content Planning",
      "Content Scheduling",
      "Page Optimization",
    ],
  },
  {
    id: "meta-advertising",
    title: "Meta Advertising",
    description:
      "We create and manage targeted advertising campaigns designed around your business objectives.",
    items: [
      "Facebook & Instagram Ads",
      "Lead Generation",
      "WhatsApp Campaigns",
      "Traffic Campaigns",
      "Engagement Campaigns",
      "Audience Targeting",
      "Campaign Optimization",
      "Performance Analysis",
    ],
  },
  {
    id: "creative",
    title: "Creative & Content",
    description:
      "Creative communication that makes your brand easier to notice and remember.",
    items: [
      "Social Media Creatives",
      "Promotional Designs",
      "Informative Content",
      "Reels",
      "Video Content",
      "Campaign Creatives",
      "Product Content",
      "Brand Storytelling",
    ],
  },
  {
    id: "branding",
    title: "Branding & Design",
    description:
      "We create visual identities that communicate who you are before you say a word.",
    items: [
      "Logo Design",
      "Brand Identity",
      "Creative Direction",
      "Marketing Materials",
      "Promotional Design",
      "Visual Communication",
    ],
  },
  {
    id: "video",
    title: "Video & Visual Production",
    description:
      "From concept to final frame, we create visual content designed for today's digital audience.",
    items: [
      "Promotional Videos",
      "Product Videos",
      "Social Media Videos",
      "Reels",
      "Brand Films",
      "Video Editing",
      "Visual Storytelling",
    ],
  },
];
