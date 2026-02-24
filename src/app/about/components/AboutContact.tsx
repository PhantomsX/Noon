"use client";

import Image from "next/image";
import suadiarabia from "@/public/suadiarabia.svg";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const AboutContact = () => {
  const t = useTranslations();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 3.2 }}
      className="my-16 sm:my-20 lg:my-24 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
        {/* ── Contact Information ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 3.4 }}
          className="space-y-8 lg:space-y-12"
        >
          {/* Head Quarters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.5 }}
            className="relative p-6 lg:p-8 rounded-2xl bg-white/5 border border-gray-800/50 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="absolute -inset-0.5 bg-linear-to-br from-[#BE7B2C]/20 to-[#F9C39D]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 3.6 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#BE7B2C] to-[#F9C39D] flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <motion.h2
                  className="text-bg capitalize ltr:font-elegance rtl:font-font-noto-kufi-arabic font-medium text-2xl sm:text-3xl lg:text-4xl"
                  whileHover={{ scale: 1.02 }}
                >
                  {t("headquarters")}
                </motion.h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 3.7 }}
                className="space-y-4"
              >
                <motion.div
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, delay: 3.8 }}
                  className="flex items-start gap-3"
                >
                  <svg
                    className="w-5 h-5 text-[#F9C39D] mt-1 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="text-white text-base lg:text-lg">
                    <div className="font-medium">{t("address1")}</div>
                    <div className="text-gray-400 text-sm">12385</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, delay: 3.9 }}
                  className="flex items-center gap-3"
                >
                  <svg
                    className="w-5 h-5 text-[#F9C39D] shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a
                    href="tel:+966539929050"
                    dir="ltr"
                    className="text-white text-base lg:text-lg hover:scale-105 transition-transform"
                  >
                    +966 53 992 9050
                  </a>
                </motion.div>

                <motion.div
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, delay: 4.0 }}
                  className="flex items-center gap-3"
                >
                  <svg
                    className="w-5 h-5 text-[#F9C39D] shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a
                    href="mailto:info@nnc.sa"
                    dir="ltr"
                    className="text-white text-base lg:text-lg hover:scale-105 transition-transform"
                  >
                    info@nnc.sa
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Branch Office */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4.1 }}
            className="relative p-6 lg:p-8 rounded-2xl bg-white/5 border border-gray-800/50 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="absolute -inset-0.5 bg-linear-to-br from-[#F9C39D]/20 to-[#BE7B2C]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 4.2 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#F9C39D] to-[#BE7B2C] flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z"
                      clipRule="evenodd"
                    />
                    <path d="M9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" />
                  </svg>
                </div>
                <motion.h2
                  className="text-bg capitalize ltr:font-elegance rtl:font-font-noto-kufi-arabic font-medium text-2xl sm:text-3xl lg:text-4xl"
                  whileHover={{ scale: 1.02 }}
                >
                  {t("branchOffice")}
                </motion.h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 4.3 }}
                className="space-y-4"
              >
                <motion.div
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, delay: 4.4 }}
                  className="flex items-start gap-3"
                >
                  <svg
                    className="size-5 text-[#F9C39D] mt-1 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="text-white text-base lg:text-lg">
                    <div className="font-medium">{t("address2")}</div>
                    <div className="text-gray-400 text-sm">42317</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, delay: 4.5 }}
                  className="flex items-center gap-3"
                >
                  <svg
                    className="size-5 text-[#F9C39D] shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a
                    href="tel:+966598959098"
                    dir="ltr"
                    className="text-white text-base lg:text-lg hover:scale-105 transition-transform"
                  >
                    +966 59 895 9098{" "}
                  </a>
                </motion.div>

                <motion.div
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, delay: 4.6 }}
                  className="flex items-center gap-3"
                >
                  <svg
                    className="size-5 text-[#F9C39D] shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a
                    href="mailto:info@nnc.sa"
                    dir="ltr"
                    className="text-white text-base lg:text-lg hover:scale-105 transition-transform"
                  >
                    info@nnc.sa
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* New Branch Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4.7 }}
            className="relative p-6 lg:p-8 rounded-2xl bg-linear-to-br from-[#BE7B2C]/10 to-[#F9C39D]/10 border border-[#F9C39D]/30 hover:border-[#F9C39D]/50 transition-all duration-300 group overflow-hidden"
          >
            <div className="absolute -inset-0.5 bg-linear-to-br from-[#BE7B2C]/30 to-[#F9C39D]/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-4 right-4 w-20 h-20 border border-[#F9C39D]/20 rounded-full animate-pulse" />
            <div className="absolute bottom-4 left-4 w-16 h-16 border border-[#BE7B2C]/20 rounded-full animate-pulse delay-1000" />

            <div className="relative text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 4.8 }}
                className="flex items-center justify-center gap-4 mb-6"
              >
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#BE7B2C] to-[#F9C39D] flex items-center justify-center animate-pulse">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </motion.div>

              <motion.h2
                className="text-bg capitalize ltr:font-elegance rtl:font-font-noto-kufi-arabic font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 leading-tight"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 4.9 }}
              >
                <span className="block">{t("new_branch")}</span>
                <span className="block text-[#F9C39D]">{t("coming_soon")}</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 5.0 }}
                className="text-white/80 text-base lg:text-lg"
              >
                <p>{t("common.stay_tuned")}</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Saudi Arabia Map ────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 3.6 }}
          className="relative h-[500px] lg:h-[700px] xl:h-[800px] group"
        >
          <div className="absolute inset-0 bg-linear-to-br from-[#BE7B2C]/10 to-[#F9C39D]/10 rounded-3xl" />
          <div className="relative h-full rounded-3xl overflow-hidden border border-gray-800/30 bg-black/20 backdrop-blur-sm group-hover:border-[#F9C39D]/30 transition-all duration-300">
            <div className="absolute top-6 left-6 w-3 h-3 bg-[#F9C39D] rounded-full animate-pulse" />
            <div className="absolute top-6 right-6 w-2 h-2 bg-[#BE7B2C] rounded-full animate-pulse delay-500" />
            <div className="absolute bottom-6 left-6 w-2 h-2 bg-[#F9C39D] rounded-full animate-pulse delay-1000" />

            <Image
              src={suadiarabia}
              alt={t("alt.saudi_map")}
              fill
              className="object-contain p-6 lg:p-8 xl:p-12 group-hover:scale-105 transition-transform duration-700"
              priority
            />

            <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-black/40 to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 5.0 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center"
          >
            <h3 className="text-bg font-elegance text-xl lg:text-2xl xl:text-3xl">
              {t("common.presence_ksa")}
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutContact;
