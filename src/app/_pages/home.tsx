"use client";
import HeroSection from "@/app/components/HeroSection";
import AboutNoon from "@/app/components/AboutNoon";
import ProjectsPortfolio from "@/app/components/ProjectsPortfolio";
import PartnersLogos from "@/app/components/PartnersLogos";
import ContactInfoSection from "@/app/components/ContactInfoSection";
import ContactBannerSection from "@/app/components/ContactBannerSection";
import Certificates from "@/app/components/Certificates";

export default function Home() {
  return (
    <main className="w-full overflow-hidden text-[#C6A87D]">
      {/* Hero Section with Full Screen Carousel */}
      <HeroSection />

      {/* About Noon Section */}
      <AboutNoon />

      {/* Projects Portfolio */}
      <ProjectsPortfolio />

      {/* Partners of Success (Logos) */}
      <PartnersLogos />

      {/* Partners Words (Testimonials) */}
      {/* <Testimonials /> */}

      {/* Contact Banner Section */}
      <ContactBannerSection />
      {/* Certificates */}
      <Certificates />

      {/* Contact Info Section */}
      <ContactInfoSection />
    </main>
  );
}
