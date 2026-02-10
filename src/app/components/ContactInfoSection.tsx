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
  const t = useTranslations();
  const socials = [
    {
      icon: instagram,
      href: "https://www.instagram.com/nnc_ksa/profilecard/?igsh=MWpwa3F1YXkzMm5nYg==",
    },
    { icon: XIcon, href: "#" },
    { icon: linkedIn, href: "https://www.linkedin.com/company/nnc-ksa/" },
    { icon: phone, href: "tel:+966114110000" },
  ];

  return (
    <section className="w-full py-10 md:pt-20 md:pb-10 px-4 md:px-16 lg:px-24 border-t border-[#C6A87D]/20">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-16">
        {/* Container for both offices and socials */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Riyadh Office */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-start gap-6 md:gap-12"
          >
            <h2 className="font-elegance text-3xl md:text-4xl text-[#C6A87D] leading-none whitespace-nowrap">
              {t("headquarters")}
            </h2>
            <div className="flex flex-col font-neue-montreal text-sm md:text-base text-gray-300 gap-1 mt-2">
              <p>{t("address1")}</p>
              <p>12253</p>
              <a dir="ltr" href="tel:+966565498620">
                +966565498620
              </a>
              <a dir="ltr" href="mailto:info@nnc.sa">
                info@nnc.sa
              </a>
            </div>
          </motion.div>

          {/* Madinah Office */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row items-start gap-6 md:gap-12"
          >
            <h2 className="font-elegance text-3xl md:text-4xl text-[#C6A87D] leading-none whitespace-nowrap">
              {t("branchOffice")}
            </h2>
            <div className="flex flex-col font-neue-montreal text-sm md:text-base text-gray-300 gap-1 mt-2">
              <p>{t("address2")}</p>
              <p>42317</p>
              <a dir="ltr" href="tel:+966598959098">
                +966598959098
              </a>
              <a dir="ltr" href="mailto:infomadina@nnc.sa">
                infomadina@nnc.sa
              </a>
            </div>
          </motion.div>

          {/* Social Icons (Vertical Stack on the right) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-row lg:flex-col gap-6 items-center ml-auto lg:pr-4"
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
                  alt={t("alt.social")}
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
