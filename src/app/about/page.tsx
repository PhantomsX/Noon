"use client";

import AboutHero from "./components/AboutHero";
import AboutCEO from "./components/AboutCEO";
import AboutTeam from "./components/AboutTeam";
import AboutContact from "./components/AboutContact";

const AboutPage = () => (
  <main className="container mx-auto px-4 sm:px-6 lg:px-8 ltr:font-neue-montreal rtl:font-noto-kufi-arabic">
    <AboutHero />
    <AboutCEO />
    <AboutTeam />
    <AboutContact />
  </main>
);

export default AboutPage;
