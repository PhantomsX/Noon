"use client";
import Image from "next/image";
import React from "react";
import logoEn from "@/public/icons/big-logo-en.svg";
import logoAr from "@/public/icons/big-logo-ar.svg";
import { useLocale } from "next-intl";
import { motion } from "motion/react";

const Footer = () => {
  const locale = useLocale();
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      dir="ltr"
      className="grid grid-cols-1 gap-y-4 md:grid-cols-3 md:gap-x-2.5 items-center mt-auto p-4 md:p-8 ltr:font-neue-montreal rtl:font-noto-kufi-arabic"
    >
      <span
        dir={locale === "ar" ? "rtl" : "ltr"}
        className="justify-self-center md:justify-self-start text-[#C6A87D]/50 max-md:text-[8px] md:text-[10px] uppercase tracking-widest font-neue-montreal"
      >
        All Right Reserved To Noon CONSULTANTS 2025. ®
      </span>
      <div className="justify-self-center md:justify-self-end select-none pointer-events-none">
        <Image
          src={locale === "ar" ? logoAr : logoEn}
          draggable={false}
          alt="logo"
          className="w-32 md:w-28"
        />
      </div>
    </motion.footer>
  );
};

export default Footer;
