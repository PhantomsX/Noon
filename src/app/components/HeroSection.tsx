"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

const ALL_PROJECT_IMAGES = [
  "/projects/Urban Projects/al-dhuhayan.jpg",
  "/projects/Urban Projects/alnimr.jpg",
  "/projects/Urban Projects/liven-residential-compund.jpg",
  "/projects/Urban Projects/business-pay.png",
  "/projects/Architectural Projects/al-women-equestrian-club.png",
  "/projects/Architectural Projects/al-qahtani-complex.png",
  "/projects/Architectural Projects/dr-mohammed-almalik-residence.png",
  "/projects/Architectural Projects/mr-waelalrais-private-villa.png",
  "/projects/Architectural Projects/v-tower.jpg",
  "/projects/Interior projects/vip-residence.png",
  "/projects/Interior projects/kindergarten-design.png",
  "/projects/Interior projects/al-wallan-hq-offices.png",
  "/projects/Interior projects/al-wallan-hq-offices-2.png",
];

/** Pick `count` unique random items from an array. */
function pickRandom<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default function HeroSection() {
  const t = useTranslations();

  // null = not yet initialised (client-only to avoid SSR hydration mismatch)
  const [heroImages, setHeroImages] = useState<string[] | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(false);

  // Pick images client-side only
  useEffect(() => {
    setHeroImages(pickRandom(ALL_PROJECT_IMAGES, 3));
  }, []);

  // Cycle through images every 5 s
  useEffect(() => {
    if (!heroImages) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages]);

  // Show text 800 ms after mount
  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* ── Crossfade background images ── */}
      {heroImages?.map((src, idx) => (
        <motion.div
          key={src}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: idx === activeIndex ? 1 : 0,
            scale: idx === activeIndex ? [1.0, 1.08] : 1.0,
          }}
          transition={{
            opacity: { duration: 1.2, ease: "easeInOut" },
            scale: { duration: 6, ease: "easeInOut" },
          }}
        >
          <Image
            src={src}
            alt={t("alt.hero")}
            fill
            priority={idx === 0}
            quality={100}
            className="object-cover object-center"
          />
        </motion.div>
      ))}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/60 to-transparent z-10" />
      <div className="absolute inset-0 ltr:bg-linear-to-r rtl:bg-linear-to-l from-black/80 via-black/40 to-transparent z-10" />

      {/* Hero Content – fades up AFTER images appear */}
      <div className="relative z-20 h-full flex flex-col justify-center px-4 md:px-12 lg:px-16 max-w-[1920px] mx-auto">
        <motion.div
          className="max-w-[850px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: textVisible ? 1 : 0, x: textVisible ? 0 : -50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Founded Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: textVisible ? 1 : 0,
              y: textVisible ? 0 : 30,
            }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-abeezee text-2xl tracking-[0.3em] uppercase mb-6 bg-[linear-gradient(270deg,#BE7B2C_0%,#F9C39D_100%)] bg-clip-text text-transparent"
          >
            {t("home.founded")}
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: textVisible ? 1 : 0,
              y: textVisible ? 0 : 40,
            }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="ltr:font-elegance rtl:font-noto-kufi-arabic text-3xl md:text-5xl leading-tight mb-8 bg-[linear-gradient(270deg,#BE7B2C_0%,#F9C39D_100%)] bg-clip-text text-transparent"
          >
            {t("home.title")}
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
}
