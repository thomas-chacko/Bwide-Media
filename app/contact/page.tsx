import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with BWIDE Media for digital marketing, social media management, Meta ads, branding, creative content and video production services in Kerala, India.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      <div>
        <ContactSection />
      </div>
    </>
  );
}
