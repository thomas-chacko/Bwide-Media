export const industries = [
  "Interior & Furniture",
  "Healthcare & Ayurveda",
  "Hospitality",
  "Tourism",
  "Retail",
  "Real Estate",
  "Food & Restaurants",
  "Lifestyle",
  "Education",
  "Professional Services",
  "Startups & Growing Businesses",
] as const;

export type Industry = (typeof industries)[number];
