import { Hero } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats";
import { ServicesSection } from "@/components/sections/services";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pillars } from "@/components/sections/pillars";
import { ServiceArea } from "@/components/sections/service-area";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { LeadCta } from "@/components/sections/lead-cta";
import { FaqSchema } from "@/components/schema";
import { faqs } from "@/config/faqs";

export default function Home() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Hero />
      <StatsBar />
      <ServicesSection />
      <HowItWorks />
      <Pillars />
      <ServiceArea />
      <Testimonials />
      <Faq faqs={faqs} heading="Junk removal questions, answered" />
      <LeadCta source="home" />
    </>
  );
}
