"use client";
import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

const PROJECTS_IMAGES = [
  "/slider-projects/ALSHUBAILI-OFFICES.webp",
  "/slider-projects/ALWASEEL-RESORT.webp",
  "/slider-projects/Al-Ammariya-Beverly-Hills.webp",
  "/slider-projects/CULTURE-CENTER.webp",
  "/slider-projects/LIVEN-PENTHOUSE.webp",
  "/slider-projects/V-TOWER.webp",
];

export default function HeroSection() {
  const t = useTranslations();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const locale = useLocale();

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const onSelect = useCallback((emblaApi: CarouselApi) => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section className="relative w-full h-[calc(100vh-95px)] overflow-hidden">
      {/* Background carousel */}
      <Carousel
        className="w-full h-full"
        opts={{
          loop: true,
          align: "start",
          direction: locale === "ar" ? "rtl" : "ltr",
          duration: 45,
        }}
        plugins={[
          Autoplay({
            delay: 3500,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          }),
          Fade(),
        ]}
        setApi={setApi}
      >
        <CarouselContent className="h-screen">
          {PROJECTS_IMAGES.map((src, idx) => (
            <CarouselItem
              key={src}
              className="relative h-screen pl-0 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 w-full h-full"
                animate={
                  idx === current ? { scale: [1.0, 1.08] } : { scale: 1.0 }
                }
                transition={{ duration: 6, ease: "easeInOut" }}
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

              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/60 to-transparent z-10" />
              <div className="absolute inset-0 ltr:bg-linear-to-r rtl:bg-linear-to-l from-black/80 via-black/40 to-transparent z-10" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Hero content overlay */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-20 md:pb-28 pointer-events-none">
        {textVisible && (
          <motion.div
            className="rtl:text-right ltr:text-left max-w-3xl"
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
              className="text-bg text-4xl sm:text-5xl  font-semibold leading-loose ltr:font-elegance rtl:font-year-of-camel"
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
                {t("home.hero.cta1")} →
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#C6A87D]/70 text-sm ltr:font-neue-montreal rtl:font-ibm-plex-arabic hover:text-[#C6A87D] transition-colors duration-300"
              >
                {t("home.hero.cta2")} →
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
