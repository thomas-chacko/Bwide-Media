export const siteConfig = {
  name: "BWIDE MEDIA",
  tagline: "Strategy. Creativity. Storytelling. Digital.",
  description:
    "BWIDE Media is a creative advertising and digital marketing agency in Kerala, India. We help businesses build stronger brands through strategy, creativity, storytelling and digital marketing.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bwidemedia.com",
  phone: "9446010489",
  phoneFormatted: "+91 9446010489",
  phoneHref: "tel:+919446010489",
  whatsappHref: "https://wa.me/919446010489",
  email: "bwidemedia@gmail.com",
  emailHref: "mailto:bwidemedia@gmail.com",
  instagram: "@bwidemedia",
  instagramUrl: "https://www.instagram.com/bwidemedia",
  location: "Kerala, India",
  region: "Kerala",
  country: "India",
  /** Set to true when you have real client logos to display */
  showClientLogos: false,
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ] as const,
  footerServices: [
    { label: "Digital Marketing", href: "/services#digital-marketing" },
    { label: "Social Media", href: "/services#social-media" },
    { label: "Advertising", href: "/services#meta-advertising" },
    { label: "Branding", href: "/services#branding" },
    { label: "Creative", href: "/services#creative" },
    { label: "Video", href: "/services#video" },
  ] as const,
  seo: {
    titleTemplate: "%s | BWIDE Media",
    defaultTitle:
      "BWIDE Media — Creative Advertising & Digital Marketing Agency in Kerala",
    defaultDescription:
      "BWIDE Media is a creative advertising and digital marketing agency in Kerala, India. Strategy, social media management, Meta ads, branding, video production and lead generation.",
    keywords: [
      "digital marketing agency in Kerala",
      "creative advertising agency Kerala",
      "social media management",
      "Meta ads",
      "Facebook ads",
      "Instagram ads",
      "branding and logo design",
      "video production",
      "reels",
      "lead generation",
      "WhatsApp campaigns",
    ],
  },
} as const;

export type NavLink = (typeof siteConfig.navLinks)[number];
