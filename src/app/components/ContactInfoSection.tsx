"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import instagram from "@/public/instegram.svg";
import linkedIn from "@/public/linkedIn.svg";
import phone from "@/public/phone.svg";
import XIcon from "@/public/X.svg";

const ContactInfoSection = () => {
  const t = useTranslations("contactInfo");
  const tAlt = useTranslations("alt");
  const socials = [
    {
      icon: instagram,
      href: "https://www.instagram.com/nnc_ksa/profilecard/?igsh=MWpwa3F1YXkzMm5nYg==",
    },
    { icon: XIcon, href: "#" },
    { icon: linkedIn, href: "https://www.linkedin.com/company/nnc-ksa/" },
    { icon: phone, href: "tel:+966539929050" },
  ];

  return (
    <section className="w-full relative overflow-hidden border-t border-[#C6A87D]/20">
      {/* Diagonal lines background pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-px bg-[#C6A87D]"
            style={{
              left: `${i * 5}%`,
              transform: "rotate(45deg)",
              transformOrigin: "top left",
            }}
          />
        ))}
      </div>

      <div className="relative px-6 md:px-14 py-8 md:py-12">
        {/* Main content row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Head Quarters Title */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="ltr:font-elegance rtl:font-year-of-camel text-4xl md:text-5xl text-[#C6A87D] leading-tight"
          >
            {t("titleLine1")}
            <br />
            {t("titleLine2")}
          </motion.h2>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=""
          >
            <a
              href="https://maps.app.goo.gl/ZCuLy3Jwe8Bwg47y9?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C6A87D] hover:underline transition-colors cursor-pointer flex flex-col gap-2 text-white/80 text-sm md:text-base"
            >
              <span>{t("addressCity")}</span>
              <span>{t("addressStreet")}</span>
              <span>{t("addressPostal")}</span>
            </a>
          </motion.div>

          {/* Phone and Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-2 text-white/80 text-sm md:text-base"
          >
            <a
              dir="ltr"
              href="tel:+966539929050"
              className="hover:text-[#C6A87D] transition-colors"
            >
              +966 53 992 9050
            </a>
            <a
              dir="ltr"
              href="mailto:info@nnc.sa"
              className="hover:text-[#C6A87D] transition-colors"
            >
              info@nnc.sa
            </a>
          </motion.div>

          {/* Social Icons - Vertical */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-row md:flex-col gap-4 md:gap-6"
          >
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
                className="hover:scale-110 transition-all duration-300"
              >
                <Image
                  src={social.icon}
                  alt={tAlt("social")}
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(80%) sepia(28%) saturate(547%) hue-rotate(357deg) brightness(88%) contrast(83%)",
                  }}
                />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
