"use client";

import Image from "next/image";
import aboutBg from "@/public/images/openart-image_1776868356275_671e7903_1776868356294_a7b7914c.webp";
import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";

const BULLETS = [
  "aboutHeroBullet1",
  "aboutHeroBullet2",
  "aboutHeroBullet3",
  "aboutHeroBullet4",
] as const;

const AboutHero = () => {
  const t = useTranslations();
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mt-20 mb-16 sm:mb-20 lg:mb-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[600px] lg:min-h-[700px]">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center text-white space-y-6 lg:space-y-8 ltr:lg:pr-8 rtl:lg:pl-8 rtl:text-right ltr:text-left"
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="ltr:font-neue-montreal rtl:font-ibm-plex-arabic text-[#C6A87D]/60 text-xs tracking-[0.2em] uppercase flex items-center gap-2 "
          >
            <span className="inline-block w-6 h-px bg-[#C6A87D]/40" />
            {t("aboutHeroEyebrow")}
          </motion.p>

          {/* Two-tone title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="ltr:font-elegance rtl:font-year-of-camel text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight"
          >
            <span className="text-bg block">{t("aboutHeroTitleMain")}</span>
            <span className="text-[#C6A87D]/30 block">{t("aboutHeroTitleDim")}</span>
          </motion.h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="ltr:font-neue-montreal rtl:font-ibm-plex-arabic text-gray-300 text-base sm:text-lg leading-relaxed"
          >
            {t("aboutHeroBody")}
          </motion.p>

          {/* Bullets */}
          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="space-y-3"
          >
            {BULLETS.map((key) => (
              <li
                key={key}
                className="ltr:font-neue-montreal rtl:font-ibm-plex-arabic flex items-start gap-3 text-sm sm:text-base text-gray-200 "
              >
                <span
                  className="mt-[6px] shrink-0 w-1.5 h-1.5 rounded-full bg-[#C6A87D]"
                  aria-hidden="true"
                />
                {t(key)}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right — image */}
        <motion.div
          initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-linear-to-br from-[#BE7B2C]/20 to-[#F9C39D]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={aboutBg}
                alt={t("alt.modern_architecture")}
                className="h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[650px] w-full object-cover duration-700 group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutHero;
