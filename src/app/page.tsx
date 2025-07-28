import CtaSection from "@/components/home/cta-section";
import HeroSection from "@/components/home/hero-section";
import PropertyPreview from "@/components/home/property-preview";
import BenefitSection from "@/components/home/benefit-section";
import TestimonialsSection from "@/components/home/testimonials-section";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <BenefitSection />
      {/* <PropertyPreview /> */}
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}
