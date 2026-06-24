"use client";

import Image from "next/image";
import ceo from "@/public/images/ceoimage.png";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const PILLARS = [
  { label: "OUR MISSION", text: "OUR MISSION TEXT" },
  { label: "OUR VISION",  text: "OUR VISION TEXT"  },
  { label: "FUTURE REACH", text: "FUTURE REACH TEXT" },
] as const;

const AboutCEO = () => {
  const t = useTranslations();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="my-16 sm:my-20 lg:my-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* Left — avatar + quote + name */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col gap-8"
        >
          {/* Circle avatar */}
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-white/10 shrink-0">
            <Image
              src={ceo}
              alt={t("alt.ceo")}
              width={80}
              height={80}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Quote — two-tone */}
          <blockquote className="ltr:font-elegance rtl:font-year-of-camel text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug rtl:text-right">
            <span className="text-white">{t("aboutCeoQuote").split("—")[0].trim()}&thinsp;—&thinsp;</span>
            <span className="text-[#C6A87D]/50">{t("aboutCeoQuote").split("—").slice(1).join("—").trim()}</span>
          </blockquote>

          {/* Name + title */}
          <div className="rtl:text-right">
            <p className="ltr:font-neue-montreal rtl:font-ibm-plex-arabic text-white font-medium text-sm md:text-base">
              {t("aboutCeoSignature")}
            </p>
            <p className="ltr:font-neue-montreal rtl:font-ibm-plex-arabic text-gray-400 text-xs tracking-widest uppercase mt-1">
              {t("aboutCeoTitle")}
            </p>
          </div>
        </motion.div>

        {/* Right — mission / vision / growth stacked */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col divide-y divide-white/8"
        >
          {PILLARS.map(({ label, text }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
              className="py-6 first:pt-0 last:pb-0 rtl:text-right"
            >
              <p className="ltr:font-neue-montreal rtl:font-ibm-plex-arabic text-[#C6A87D]/60 text-[10px] tracking-[0.22em] uppercase mb-3">
                {t(label)}
              </p>
              <p className="ltr:font-neue-montreal rtl:font-ibm-plex-arabic text-gray-300 text-sm md:text-base leading-relaxed">
                {t(text)}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default AboutCEO;
