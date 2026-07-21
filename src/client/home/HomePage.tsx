// src/client/home/HomePage.tsx
import { prisma } from "@/core/lib/prisma";
import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import ServicesSection from "../components/ServicesSection";
import AreasSection from "../components/AreasSection";
import BrandsSection from "../components/BrandsSection";
import ProcessSection from "../components/ProcessSection";
import BeforeAfter from "../components/BeforeAfter";
import FAQSection from "../components/FAQSection";
import SEOText from "../components/SEOText";
import ReviewsSection from "../components/ReviewsSection";
import FinalCTA from "../components/FinalCTA";

export default async function HomePage() {
  const categories = await prisma.blogCategory.findMany({
    where: { showOnHome: true },
    orderBy: { order: "asc" },
    take: 3,
  });

  return (
    <main className="w-full" style={{ backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-text-primary)' }}>

      {/* HERO */}
      <Hero/>

      {/* WHY CHOOSE */}
      <WhyChoose/>

      {/* SERVICES */}
      <ServicesSection/>

      {/* AREAS */}
      <AreasSection/>

      {/* BRANDS */}
      <BrandsSection/>

      {/* PROCESS */}
      <ProcessSection/>

      {/* BEFORE AND AFTER */}
      <BeforeAfter/>

      {/* REVIEWS */}
      <ReviewsSection/>

      {/* FAQ */}
      <FAQSection/>

      {/* SEOText */}
      <SEOText/>

      {/* FINAL CTA */}
      <FinalCTA/>



    </main>
  );
}