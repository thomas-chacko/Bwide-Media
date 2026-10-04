import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

const base = siteConfig.url;

/**
 * Build page metadata with sensible defaults.
 * Accepts partial overrides — title, description, path (for canonical), etc.
 */
export function buildMetadata(opts: {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  const {
    title,
    description = siteConfig.seo.defaultDescription,
    path = "/",
    ogImage = "/opengraph-image",
    noIndex = false,
  } = opts;

  const url = `${base}${path}`;

  return {
    title,
    description,
    keywords: [...siteConfig.seo.keywords],
    metadataBase: new URL(base),
    alternates: { canonical: url },
    openGraph: {
      title: title
        ? `${title} | ${siteConfig.name}`
        : siteConfig.seo.defaultTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: title
        ? `${title} | ${siteConfig.name}`
        : siteConfig.seo.defaultTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

/** Absolute URL helper */
export function absoluteUrl(path: string) {
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
