import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { WhyBwide } from "@/components/sections/WhyBwide";
import { Philosophy } from "@/components/sections/Philosophy";
import { Industries } from "@/components/sections/Industries";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn about BWIDE Media — a creative advertising and digital marketing agency in Kerala, India. Our process, philosophy and approach to building stronger brands.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />
      <div className="pt-24 md:pt-32">
        <About />
        <Process />
        <WhyBwide />
        <Philosophy />
        <Industries />
        <CtaBanner />
      </div>
    </>
  );
}
