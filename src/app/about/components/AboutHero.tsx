"use client";

import Image from "next/image";
import aboutBg from "@/public/images/openart-image_1776868356275_671e7903_1776868356294_a7b7914c.webp";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import PageTitle from "@/app/components/PageTitle";

const AboutHero = () => {
  const t = useTranslations();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mt-20 mb-16 sm:mb-20 lg:mb-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[600px] lg:min-h-[700px]">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center text-white space-y-6 lg:space-y-8 lg:pr-8"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-6 lg:mb-8"
          >
            <PageTitle>{t("about")}</PageTitle>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base sm:text-lg lg:text-xl leading-relaxed mb-8 lg:mb-10"
          >
            {t("aboutText1")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="space-y-4 lg:space-y-5"
          >
            <p className="text-base sm:text-lg leading-relaxed whitespace-pre-line">
              {t("aboutText2")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="space-y-4 lg:space-y-5"
          >
            <p className="text-base sm:text-lg leading-relaxed whitespace-pre-line">
              {t("aboutText3")}
            </p>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
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
            {/* Background decoration */}
            <div className="absolute -inset-4 bg-linear-to-br from-[#BE7B2C]/20 to-[#F9C39D]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />

            {/* Main image container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
              <Image
                src={aboutBg}
                alt={t("alt.modern_architecture")}
                className="h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[650px] w-full object-cover duration-700"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutHero;
