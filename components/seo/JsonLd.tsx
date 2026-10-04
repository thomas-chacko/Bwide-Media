import { siteConfig } from "@/content/site";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/** Renders structured data (JSON-LD) in a script tag */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Organization / ProfessionalService JSON-LD */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: `+91${siteConfig.phone}`,
    email: siteConfig.email,
    description: siteConfig.description,
    areaServed: [
      { "@type": "State", name: "Kerala" },
      { "@type": "Country", name: "India" },
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    sameAs: [siteConfig.instagramUrl],
    serviceType: [
      "Digital Marketing",
      "Social Media Management",
      "Meta Advertising",
      "Creative Content Production",
      "Branding and Logo Design",
      "Video Production",
    ],
  };

  return <JsonLd data={data} />;
}

/** WebSite JSON-LD */
export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  };

  return <JsonLd data={data} />;
}

/** BreadcrumbList JSON-LD */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };

  return <JsonLd data={data} />;
}

/** FAQPage JSON-LD */
export function FaqJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLd data={data} />;
}

/** CreativeWork JSON-LD for case studies */
export function CreativeWorkJsonLd({
  title,
  description,
  slug,
}: {
  title: string;
  description: string;
  slug: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description,
    url: `${siteConfig.url}/work/${slug}`,
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  return <JsonLd data={data} />;
}
