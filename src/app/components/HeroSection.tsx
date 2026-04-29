"use client";
import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

const PROJECTS_IMAGES = [
  "/slider-projects/AL-NOUR-MOSQUE.webp",
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

  // Show text 800 ms after mount
  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  // Track the active slide index
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

  const slides = [
    {
      title: t("home.hero.slide1.title"),
      body: t("home.hero.slide1.body"),
    },
    {
      title: null,
      body: null,
    },
    {
      title: null,
      body: null,
    },
    {
      title: null,
      body: null,
    },
    {
      title: null,
      body: null,
    },
    {
      title: null,
      body: null,
    },
    {
      title: null,
      body: null,
    },
  ];

  return (
    <section className="relative w-full h-[calc(100vh-95px)] overflow-hidden">
      <Carousel
        className="w-full h-full"
        opts={{
          loop: true,
          align: "start",
          direction: locale === "ar" ? "rtl" : "ltr",
        }}
        plugins={[
          Autoplay({
            delay: 5000,
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
              {/* Background image with Ken-Burns scale */}
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

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/60 to-transparent z-10" />
              <div className="absolute inset-0 ltr:bg-linear-to-r rtl:bg-linear-to-l from-black/80 via-black/40 to-transparent z-10" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Hero Content – rendered on top of the carousel */}
      <div className="absolute inset-0 z-20 h-full flex flex-col justify-end px-4 md:px-12 lg:px-16 pb-50 max-w-[1920px] mx-auto pointer-events-none">
        {textVisible && (
          <motion.div
            className="rtl:text-right ltr:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Main Heading */}
            <motion.h1 className="ltr:font-elegance  text-bg rtl:font-year-of-camel text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-5">
              {slides[0].title}
            </motion.h1>

            {/* Body */}
            {slides[0].body && (
              <motion.p
                className="uppercase text-base md:text-2xl lg:text-3xl leading-relaxed text-bg ltr:font-neue-montreal rtl:font-ibm-plex-arabic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                {slides[0].body}
              </motion.p>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
