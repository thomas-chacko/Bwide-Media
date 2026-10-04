import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { WorkGrid } from "@/components/sections/WorkGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = buildMetadata({
  title: "Our Work",
  description:
    "Explore selected projects by BWIDE Media — branding, social media, digital campaigns, video production and creative design work for businesses across Kerala and India.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Work", href: "/work" },
        ]}
      />
      <div className="pt-24 md:pt-32">
        <WorkGrid />
        <CtaBanner />
      </div>
    </>
  );
}
