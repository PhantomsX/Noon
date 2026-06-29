"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import aboutBg from "@/public/images/background-about.png";

export default function ContactBannerSection() {
  const t = useTranslations();

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={aboutBg}
          alt={t("alt.modern_architecture")}
          fill
          className="object-cover object-center"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-16">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col "
        >
          {/* Eyebrow */}
          <p className="rtl:font-ibm-plex-arabic ltr:font-neue-montreal text-[#C6A87D]/70 text-xs tracking-[0.2em] uppercase mb-5 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-[#C6A87D]/40" />
            {t("contactBanner.eyebrow")}
          </p>

          {/* Two-tone headline */}
          <h2 className="rtl:font-year-of-camel ltr:font-elegance text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            <span className="text-[#C6A87D]">
              {t("contactBanner.titleMain")}
            </span>
            <br />
            <span className="text-[#C6A87D]/30">
              {t("contactBanner.titleDim")}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="rtl:font-ibm-plex-arabic ltr:font-neue-montreal text-white/85 text-sm md:text-base leading-relaxed mt-5 max-w-md">
            {t("contactBanner.subtitle")}
          </p>
        </motion.div>

        {/* Right — CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col  md:items-end gap-4 shrink-0"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 px-10 py-4 text-sm tracking-widest uppercase font-semibold text-black bg-linear-to-r from-[#BE7B2C] via-[#F9C39D] to-[#BE7B2C] bg-size-[200%_100%] hover:bg-right transition-all duration-500 rounded-sm overflow-hidden shadow-lg hover:shadow-[#C6A87D]/30 hover:shadow-xl rtl:font-ibm-plex-arabic ltr:font-neue-montreal"
          >
            <span className="relative z-10">{t("contactBanner.cta")} →</span>
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent" />
          </Link>
          <span className="rtl:font-ibm-plex-arabic ltr:font-neue-montreal text-white/40 text-xs tracking-wide">
            {t("contactBanner.email")}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
