"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

interface FeaturedProject {
  id: string;
  image: string;
  nameKey: string;
  typeKey: string;
}

const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "p1",
    image: "/home-page-projects/Italalat-Resort.png",
    nameKey: "home.hero.featured.italalat.name",
    typeKey: "home.hero.featured.italalat.type",
  },
  {
    id: "p2",
    image: "/slider-projects/V-TOWER.webp",
    nameKey: "home.hero.featured.vTower.name",
    typeKey: "home.hero.featured.vTower.type",
  },
  {
    id: "p3",
    image: "/home-page-projects/THE-BLOOM-OFFICES.png",
    nameKey: "home.hero.featured.bloom.name",
    typeKey: "home.hero.featured.bloom.type",
  },
  {
    id: "p4",
    image: "/home-page-projects/AL-JUMAAH-MOSQUE.png",
    nameKey: "home.hero.featured.mosque.name",
    typeKey: "home.hero.featured.mosque.type",
  },
];

const WHEEL_REVEAL_THRESHOLD = 60;
const TOUCH_REVEAL_THRESHOLD = 40;

export default function HeroSection() {
  const t = useTranslations();
  const [textVisible, setTextVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  // Lock page scroll until the featured-projects slides have fully revealed,
  // then release scroll back to the browser.
  useEffect(() => {
    if (scrolled) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let touchStartY = 0;
    let touchDelta = 0;

    const reveal = () => setScrolled(true);

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        touchDelta += e.deltaY;
        if (touchDelta >= WHEEL_REVEAL_THRESHOLD) reveal();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0]?.clientY ?? 0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const currentY = e.touches[0]?.clientY ?? touchStartY;
      const delta = touchStartY - currentY;
      if (delta > TOUCH_REVEAL_THRESHOLD) reveal();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        reveal();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [scrolled]);

  // Once revealed, watch the page scroll — returning to the very top
  // resets the hero back to its initial text-only state.
  useEffect(() => {
    if (!scrolled) return;

    const handleScroll = () => {
      if (window.scrollY <= 0) setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <section className="relative w-full h-[calc(100vh-95px)] overflow-hidden">
      {/* Solid themed background — no imagery on the first screen */}
      <div className="absolute inset-0 bg-linear-to-br from-main-bg via-[#141414] to-[#0c0a08]" />

      {/* Hero content overlay */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-20 md:pb-28 pointer-events-none">
        {textVisible && (
          <motion.div
            className="rtl:text-right ltr:text-left max-w-3xl transition-[opacity,transform] duration-500 ease-out"
            style={{
              opacity: scrolled ? 0 : 1,
              transform: scrolled ? "translateY(-24px)" : "translateY(0)",
              pointerEvents: scrolled ? "none" : "auto",
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <motion.p
              className="text-[#C6A87D]/60 text-xs md:text-sm tracking-[0.2em] uppercase ltr:font-neue-montreal rtl:font-ibm-plex-arabic mb-5 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-block w-6 h-px bg-[#C6A87D]/40" />
              {t("home.hero.eyebrow")}
            </motion.p>

            <motion.h1
              className="text-bg text-4xl sm:text-5xl  font-semibold ltr:font-elegance rtl:font-year-of-camel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("home.hero.headline")}
            </motion.h1>

            {/* Dim headline */}
            <motion.p
              className="text-[#C6A87D]/35 text-4xl sm:text-5xl tracking-wider font-semibold ltr:font-elegance rtl:font-year-of-camel mb-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t("home.hero.headlineDim")}
            </motion.p>

            {/* Subtext */}
            <motion.p
              className="text-[#C6A87D]/70 text-sm md:text-base leading-relaxed ltr:font-neue-montreal rtl:font-ibm-plex-arabic mb-9 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t("home.hero.subtext")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex items-center gap-5 pointer-events-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center rounded-full gap-2 border border-[#C6A87D]/70 text-[#C6A87D] text-sm ltr:font-neue-montreal rtl:font-ibm-plex-arabic px-6 py-3 hover:bg-[#C6A87D]/10 transition-colors duration-300"
              >
                {t("home.hero.cta1")} <span className="rtl:rotate-180">→</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#C6A87D]/70 text-sm ltr:font-neue-montreal rtl:font-ibm-plex-arabic hover:text-[#C6A87D] transition-colors duration-300"
              >
                {t("home.hero.cta2")} <span className="rtl:rotate-180">→</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Featured projects strip — revealed on scroll, replaces the text layer */}
      <div
        className="absolute inset-0 z-30 flex transition-[opacity,transform] duration-500 ease-out"
        style={{
          opacity: scrolled ? 1 : 0,
          transform: scrolled ? "translateY(0)" : "translateY(30px)",
          pointerEvents: scrolled ? "auto" : "none",
        }}
      >
        {FEATURED_PROJECTS.map((project, idx) => (
          <Link
            key={project.id}
            href="/projects"
            className="relative flex-1 overflow-hidden border-r border-white/10 last:border-r-0 group"
          >
            <Image
              src={project.image}
              alt={t(project.nameKey)}
              fill
              quality={90}
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-4 ltr:left-4 rtl:right-4 rtl:text-right">
              <span className="block text-[10px] text-white/40 mb-1">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <p className="text-sm font-medium text-white/90 ltr:font-neue-montreal rtl:font-ibm-plex-arabic">
                {t(project.nameKey)}
              </p>
              <span className="text-xs text-white/50 ltr:font-neue-montreal rtl:font-ibm-plex-arabic">
                {t(project.typeKey)}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-6 ltr:right-8 rtl:left-8 z-30 flex items-center gap-2 transition-opacity duration-300"
        style={{ opacity: scrolled ? 0 : 1 }}
      >
        <div className="relative w-px h-8 bg-white/10 overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-2/5 bg-white/40 animate-scroll-hint" />
        </div>
        <span
          className="text-[9px] tracking-[0.15em] text-white/25 ltr:font-neue-montreal rtl:font-ibm-plex-arabic"
          style={{ writingMode: "vertical-rl" }}
        >
          {t("home.hero.scroll")}
        </span>
      </div>
    </section>
  );
}
