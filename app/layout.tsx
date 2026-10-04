import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { siteConfig } from "@/content/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: [...siteConfig.seo.keywords],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#07050f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="noise-overlay min-h-full flex flex-col">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <OrganizationJsonLd />
        <WebSiteJsonLd />

        <Navbar />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
