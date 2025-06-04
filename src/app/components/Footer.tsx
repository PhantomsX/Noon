"use client"
import Image from "next/image";
import React from "react";
import logoEn from "@/public/icons/big-logo-en.svg";
import logoAr from "@/public/icons/big-logo-ar.svg";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "motion/react";

const Footer = () => {
  const t = useTranslations("");
  const locale = useLocale();
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      dir="ltr"
      className="flex max-sm:flex-col-reverse max-sm:gap-2.5 justify-between items-center mt-auto p-8"
    >
      <span
        dir={locale === "ar" ? "rtl" : "ltr"}
        className="text-white sm:text-[#BE7B2C] max-sm:text-[10px]"
      >
        {t("rights")}
      </span>
      <div className="select-none pointer-events-none">
        <Image
          src={locale === "ar" ? logoAr : logoEn}
          draggable={false}
          alt="logo"
          className="w-44 sm:w-28"
        />
      </div>
    </motion.footer>
  );
};

export default Footer;
