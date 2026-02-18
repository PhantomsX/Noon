"use client";
import HeroSection from "./components/HeroSection";
import AboutNoon from "./components/AboutNoon";
import ProjectsPortfolio from "./components/ProjectsPortfolio";
import Testimonials from "./components/Testimonials";
import PartnersLogos from "./components/PartnersLogos";
import ContactInfoSection from "./components/ContactInfoSection";
import Certificates from "./components/Certificates";

export default function Home() {
  return (
    <main className="w-full overflow-hidden text-[#C6A87D]">
      {/* Hero Section with Full Screen Carousel */}
      <HeroSection />

      {/* About Noon Section */}
      <AboutNoon />

      {/* Certificates */}
      <Certificates />

      {/* Projects Portfolio */}
      <ProjectsPortfolio />

      {/* Partners of Success (Logos) */}
      <PartnersLogos />

      {/* Partners Words (Testimonials) */}
      {/* <Testimonials /> */}

      {/* Contact Info Section */}
      <ContactInfoSection />
    </main>
  );
}
