"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import aboutBg from "@/public/images/background-about.png";

export default function ContactBannerSection() {
  const t = useTranslations();

  return (
    <section className="relative w-full overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={aboutBg}
          alt={t("alt.modern_architecture")}
          fill
          className="object-cover object-center"
          priority={false}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Gold gradient overlay – subtle tint from bottom */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[340px] py-15 px-4 text-center">
        {/* Decorative top line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-16 h-px bg-linear-to-r from-transparent via-[#C6A87D] to-transparent mb-6"
        />

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rtl:font-year-of-camel ltr:font-elegance text-4xl md:text-5xl lg:text-6xl font-semibold text-[#C6A87D] mb-6 leading-tight"
        >
          {t("contactForm.title")}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="rtl:font-ibm-plex-arabic ltr:font-neue-montreal text-white/85 text-base md:text-xl leading-relaxed max-w-2xl mb-10"
        >
          {t("contactBanner.subtitle")}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 px-10 py-4 text-sm tracking-widest uppercase font-semibold text-black bg-linear-to-r from-[#BE7B2C] via-[#F9C39D] to-[#BE7B2C] bg-size-[200%_100%] hover:bg-right transition-all duration-500 rounded-sm overflow-hidden shadow-lg hover:shadow-[#C6A87D]/30 hover:shadow-xl"
          >
            <span className="relative z-10">{t("contactBanner.cta")}</span>
            {/* Shimmer effect */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent" />
          </Link>
        </motion.div>

        {/* Decorative bottom line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-16 h-px bg-linear-to-r from-transparent via-[#C6A87D] to-transparent mt-12"
        />
      </div>
    </section>
  );
}
