"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export default function AboutNoon() {
  const t = useTranslations();

  return (
    <section className="relative w-full py-12 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-16">
        {/* CEO Image – right side in LTR, left in RTL (flex-row-reverse handles it) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full md:w-[45%] h-[420px] md:h-[560px] shrink-0"
        >
          <Image
            src="/images/ceoimage.png"
            alt={t("alt.ceo")}
            fill
            className="object-contain object-center"
          />
        </motion.div>

        {/* Text Content – left side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-[55%] flex flex-col justify-center rtl:text-right ltr:text-left"
        >
          <div className="max-w-xl">
            {/* Opening quote */}
            <p className="rtl:font-ibm-plex-arabic ltr:font-neue-montreal text-gray-200 leading-loose text-sm md:text-base italic mb-6">
              &ldquo;{t("aboutCeoQuote")}&rdquo;
            </p>

            {/* Body paragraphs */}
            <p className="rtl:font-ibm-plex-arabic ltr:font-neue-montreal text-gray-300 leading-loose text-sm md:text-base mb-4">
              {t("aboutText4")}
            </p>
            <p className="rtl:font-ibm-plex-arabic ltr:font-neue-montreal text-gray-300 leading-loose text-sm md:text-base mb-6">
              {t("aboutText5")}
            </p>

            {/* Standout line */}
            <p className="rtl:font-ibm-plex-arabic ltr:font-neue-montreal text-[#C6A87D] leading-loose text-sm md:text-base font-medium">
              {t("aboutCeoStandout")}
            </p>
          </div>

          {/* Signature */}
          <div className="mt-10">
            <span className="rtl:font-year-of-camel ltr:font-monalisa text-2xl md:text-3xl font-bold text-[#C6A87D]">
              {t("aboutCeoSignature")}
            </span>
            <p className="rtl:font-ibm-plex-arabic ltr:font-neue-montreal text-gray-400 text-xs md:text-sm mt-1 tracking-widest uppercase">
              {t("aboutCeoTitle")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
