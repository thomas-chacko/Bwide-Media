import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WorkGrid } from "@/components/sections/WorkGrid";
import { CaseStudyTeaser } from "@/components/sections/CaseStudyTeaser";
import { Process } from "@/components/sections/Process";
import { WhyBwide } from "@/components/sections/WhyBwide";
import { Industries } from "@/components/sections/Industries";
import { SelectedProjects } from "@/components/sections/SelectedProjects";
import { Philosophy } from "@/components/sections/Philosophy";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WorkGrid />
      <CaseStudyTeaser />
      <Process />
      <WhyBwide />
      <Industries />
      <SelectedProjects />
      <Philosophy />
      <CtaBanner />
      <ContactSection />
    </>
  );
}
