"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import AboutNoon from "./components/AboutNoon";
import ProjectsPortfolio from "./components/ProjectsPortfolio";
import Testimonials from "./components/Testimonials";
import PartnersLogos from "./components/PartnersLogos";
import ContactInfoSection from "./components/ContactInfoSection";
import Certificates from "./components/Certificates";

export default function Home() {
  const t = useTranslations();

  return (
    <main className="w-full overflow-hidden text-[#C6A87D]">
      {/* Hero Section with Full Screen Image */}
      <section className="relative w-full h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.1, x: "-2%", y: "-1%" }}
          animate={{
            scale: [1.1, 1.2, 1.1],
            x: ["-2%", "2%", "-2%"],
            y: ["-1%", "1%", "-1%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image
            src="/hero-image.jpg"
            alt={t("alt.hero")}
            fill
            priority
            quality={100}
            className="object-cover object-top"
          />
        </motion.div>
        {/* Gradient Overlay - Bottom to Top (Dark to Transparent) */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/60 to-transparent" />
        {/* Gradient Overlay - Directional (Left in LTR, Right in RTL) */}
        <div className="absolute inset-0 ltr:bg-linear-to-r rtl:bg-linear-to-l from-black/80 via-black/40 to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-12 lg:px-16 max-w-[1920px] mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-[850px]"
          >
            {/* Founded Text */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-abeezee text-2xl tracking-[0.3em] uppercase mb-6 bg-[linear-gradient(270deg,#BE7B2C_0%,#F9C39D_100%)] bg-clip-text text-transparent"
            >
              {t("home.founded")}
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="ltr:font-elegance rtl:font-noto-kufi-arabic text-3xl md:text-5xl leading-tight mb-8 bg-[linear-gradient(270deg,#BE7B2C_0%,#F9C39D_100%)] bg-clip-text text-transparent"
            >
              {t("home.title")}
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* About Noon Section */}
      <AboutNoon />

      {/* Projects Portfolio */}
      <ProjectsPortfolio />

      {/* Partners of Success (Logos) */}
      <PartnersLogos />

      {/* Certificates */}
      <Certificates />

      {/* Partners Words (Testimonials) */}
      <Testimonials />
      {/* Contact Info Section */}
      <ContactInfoSection />
    </main>
  );
}
