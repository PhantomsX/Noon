"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export default function AboutNoon() {
  const t = useTranslations();
  return (
    <section className="relative w-full py-12 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20">
        {/* Left: Image (Dr. Naser Al Sayed) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full md:w-1/2 h-[500px] md:h-[600px] shrink-0"
        >
          <Image
            src="/images/ceoimage.svg"
            alt={t("alt.ceo")}
            fill
            className="object-contain object-center"
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col justify-center items-start text-left"
        >
          <h2 className="font-elegance text-3xl md:text-6xl text-[#C6A87D] mb-6 md:mb-8 leading-tight">
            {t("aboutNoon")}
          </h2>

          <div className="max-w-md">
            <p className="font-neue-montreal text-gray-300 mb-12 leading-relaxed text-base">
              {t("aboutText1")}
            </p>

            {/* Signature and Caption */}
            <div className="flex flex-col items-start">
              <span className="font-monalisa text-4xl text-[#C6A87D]">
                Dr. Naser El Sayed
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
