"use client";
import Image from "next/image";
import { motion } from "motion/react";
import AboutNoon from "./components/AboutNoon";
import Testimonials from "./components/Testimonials";
import PartnersLogos from "./components/PartnersLogos";
import ContactInfoSection from "./components/ContactInfoSection";

export default function Home() {
  // Links data for the bottom navigation
  const links = [
    { title: "Portfolio\nOf Work", href: "/projects" },
    { title: "About\nNoon", href: "/about" },
    { title: "Our Best\nOf Services", href: "/services" },
    { title: "Contact\nOf Us", href: "/contact" },
    { title: "Sign In \\ Sign Up", href: "/login" },
  ];

  return (
    <main className="w-full overflow-hidden bg-white text-[#C6A87D]">
      {/* Top Section: Header & Title (Black Background) */}
      <section className="w-full flex flex-col items-center text-center pt-16 pb-12 bg-black z-20 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-4 max-w-6xl px-4"
        >
          {/* Top small text */}
          <span className="font-neue-montreal tracking-[0.3em] text-[10px] md:text-sm uppercase text-[#C6A87D]">
            FOUNDED IN 2011
          </span>

          {/* Main Title */}
          <div className="px-2 md:px-0">
            <h1 className="font-elegance text-1xl md:text-2xl lg:text-3xl font-normal leading-tight text-[#C6A87D] drop-shadow-sm">
              Noon Consultants is one of the recognized Architecture in the KSA.
            </h1>
          </div>
        </motion.div>
      </section>

      {/* Hero Image Section & Navigation */}
      <div className="relative w-full h-[60vh] md:h-[80vh] bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home-hero-bg.png"
            alt="Home Background"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Gradient Overlay for better text readability at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        {/* Hero Navigation Links - Overlay on Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-0 left-0 w-full z-10 pb-12 px-4 md:px-8 lg:px-16"
        >
          <div className="w-full grid grid-cols-2 gap-8 md:grid-cols-5 md:gap-4">
            {links.map((link, index) => {
              const isLogin = link.title.includes("Sign In");

              return (
                <a
                  key={index}
                  href={link.href}
                  className="group flex flex-col items-center justify-start text-center gap-4 transition-transform hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center px-2 py-1">
                    <span
                      className={`whitespace-pre-line font-elegance ${
                        isLogin
                          ? "text-xs md:text-sm"
                          : "text-xl md:text-2xl lg:text-3xl"
                      } text-white group-hover:text-[#BE7B2C] transition-colors duration-300 drop-shadow-md leading-tight`}
                      style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
                    >
                      <span className="text-white group-hover:text-[#BE7B2C]">
                        {link.title}
                      </span>
                    </span>
                    <div className="flex items-center gap-1 mt-3 text-[8px] md:text-[9px] tracking-[0.2em] font-neue-montreal text-[#C6A87D]/60 group-hover:text-[#BE7B2C] transition-colors uppercase">
                      FIND MORE{" "}
                      <span className="transform group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Scrollable Content Below Hero */}
      <div className="relative z-10 w-full">
        {/* About Noon Section */}
        <AboutNoon />
        {/* Partners Words (Testimonials) */}
        <Testimonials />
        {/* Partners of Success (Logos) */}
        <PartnersLogos />
        {/* Contact Info Section */}
        <ContactInfoSection />
      </div>
    </main>
  );
}
