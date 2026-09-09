"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";

const HERO_IMAGES = [
  "/hero/IMAGE-1.jpg", // IMAGE 1
  "/hero/IMAGE-2.jpg", // IMAGE 2
  "/hero/IMAGE-3.jpg", // IMAGE 3
  "/hero/IMAGE-4.jpg", // IMAGE 4
  "/hero/IMAGE-5.jpg", // IMAGE 5
  "/hero/IMAGE-6.jpg", // IMAGE 6
  "/hero/IMAGE-7.jpg", // IMAGE 7
  "/hero/IMAGE-8.jpg", // IMAGE 8
  "/hero/IMAGE-9.jpg", // IMAGE 9
];

export default function HeroSection() {
  const t = useTranslations();

  const [textVisible, setTextVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  
  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 800);

    return () => clearTimeout(timer);
  }, []);

  
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => {
        const next = (prev + 1) % HERO_IMAGES.length;

        
        setTextVisible(next === 0);

        return next;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[calc(100vh-95px)] overflow-hidden">

      {/* ================= BACKGROUND IMAGES ================= */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeImage}
            className="absolute inset-0"
            initial={{
              opacity: 0,
              scale: 1.12,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.08,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <Image
              src={HERO_IMAGES[activeImage]}
              alt={`Hero image ${activeImage + 1}`}
              fill
              priority={activeImage === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* ================= HERO CONTENT ================= */}
      <AnimatePresence>
        {textVisible && (
          <motion.div
            key="hero-text"
            className="absolute inset-0 z-20 flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-20 md:pb-28 pointer-events-none"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="rtl:text-right ltr:text-left max-w-3xl pointer-events-auto">

              {/* Eyebrow */}
              <motion.p
                className="text-[#C6A87D]/80 text-xs md:text-sm tracking-[0.2em] uppercase ltr:font-neue-montreal rtl:font-ibm-plex-arabic mb-5 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="inline-block w-6 h-px bg-[#C6A87D]/60" />
                {t("home.hero.eyebrow")}
              </motion.p>

              {/* Main Headline */}
              <motion.h1
                className="text-bg text-4xl sm:text-5xl font-semibold ltr:font-elegance rtl:font-year-of-camel"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t("home.hero.headline")}
              </motion.h1>

              {/* Dim Headline */}
              <motion.p
                className="text-[#C6A87D]/50 text-4xl sm:text-5xl tracking-wider font-semibold ltr:font-elegance rtl:font-year-of-camel mb-7"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t("home.hero.headlineDim")}
              </motion.p>

              {/* Subtext */}
              <motion.p
                className="text-white/80 text-sm md:text-base leading-relaxed ltr:font-neue-montreal rtl:font-ibm-plex-arabic mb-9 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t("home.hero.subtext")}
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex items-center gap-5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center rounded-full gap-2 border border-[#C6A87D]/70 text-[#C6A87D] text-sm ltr:font-neue-montreal rtl:font-ibm-plex-arabic px-6 py-3 hover:bg-[#C6A87D]/10 transition-colors duration-300"
                >
                  {t("home.hero.cta1")}
                  <span className="rtl:rotate-180">→</span>
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[#C6A87D]/80 text-sm ltr:font-neue-montreal rtl:font-ibm-plex-arabic hover:text-[#C6A87D] transition-colors duration-300"
                >
                  {t("home.hero.cta2")}
                  <span className="rtl:rotate-180">→</span>
                </Link>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= SCROLL HINT ================= */}
      <div className="absolute bottom-6 ltr:right-8 rtl:left-8 z-30 flex items-center gap-2">
        <div className="relative w-px h-8 bg-white/20 overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-2/5 bg-white/60 animate-scroll-hint" />
        </div>

        <span
          className="text-[9px] tracking-[0.15em] text-white/40 ltr:font-neue-montreal rtl:font-ibm-plex-arabic"
          style={{ writingMode: "vertical-rl" }}
        >
          {t("home.hero.scroll")}
        </span>
      </div>

    </section>
  );
}