"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export default function AboutNoon() {
  const t = useTranslations();

  return (
    <section className="relative w-full py-12 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">

          {/* Left — text content (wide) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col rtl:text-right ltr:text-left"
          >
            {/* Large quote */}
            <blockquote className="ltr:font-neue-montreal rtl:font-ibm-plex-arabic text-white font-bold text-2xl md:text-3xl lg:text-4xl leading-snug mb-8">
              &ldquo;{t("aboutCeoQuote")}&rdquo;
            </blockquote>

            {/* Body paragraphs */}
            <p className="rtl:font-ibm-plex-arabic ltr:font-neue-montreal text-gray-400 leading-relaxed text-sm md:text-base mb-4">
              {t("aboutText4")}
            </p>
            <p className="rtl:font-ibm-plex-arabic ltr:font-neue-montreal text-gray-400 leading-relaxed text-sm md:text-base mb-8">
              {t("aboutText5")}
            </p>

            {/* Standout blockquote */}
            <div className="ltr:border-l-2 rtl:border-r-2 border-[#C6A87D]/40 ltr:pl-4 rtl:pr-4 mb-10">
              <p className="rtl:font-ibm-plex-arabic ltr:font-neue-montreal text-white/70 text-sm md:text-base italic leading-relaxed">
                {t("aboutCeoStandout")}
              </p>
            </div>

            {/* Signature */}
            <div>
              <span className="rtl:font-year-of-camel ltr:font-monalisa text-2xl md:text-3xl font-bold text-[#C6A87D]">
                {t("aboutCeoSignature")}
              </span>
              <p className="rtl:font-ibm-plex-arabic ltr:font-neue-montreal text-gray-500 text-xs mt-1 tracking-widest uppercase">
                {t("aboutCeoTitle")}
              </p>
            </div>
          </motion.div>

          {/* Right — small circle avatar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 shrink-0 flex flex-col items-center"
          >
            <div className="w-full h-[420px] md:h-[560px] relative">
              <Image
                src="/images/ceoimage.png"
                alt={t("alt.ceo")}
                fill
                className="object-contain object-top"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
