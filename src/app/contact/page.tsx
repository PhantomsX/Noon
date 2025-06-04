"use client";

"use client";

import React from "react";
import suadiarabia from "@/public/suadiarabia.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Aclonica, Afacad } from "next/font/google";
import { motion } from "motion/react";
import Sidebar from "../components/Sidebar";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const imageVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.2,
    },
  },
};

const aclonica = Aclonica({
  subsets: ["latin"],
  variable: "--font-aclonica",
  weight: "400",
  display: "swap",
});
const afacad = Afacad({
  subsets: ["latin"],
  variable: "--font-afacad",
  weight: "400",
  display: "swap",
});
const ContactPage = () => {
  const t = useTranslations();
  return (
    <motion.main
      style={afacad.style}
      className="flex-1 relative min-h-screen flex-col flex"
      initial="hidden"
      animate="visible"
    >
      <div className="z-10 max-md:mx-auto">
        <motion.div
          className="px-14 md:absolute md:top-0 md:end-0 flex flex-col max-md:mx-auto md:w-fit justify-center gap-14"
          variants={containerVariants}
        >
          <motion.div className="flex flex-wrap gap-2" variants={itemVariants}>
            <motion.h2
              style={aclonica.style}
              className="text-bg capitalize font-medium text-2xl md:text-5xl ltr:tracking-tighter max-w-[8ch] pb-1 mb-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t("headquarters")}
            </motion.h2>
            <motion.ul
              className="text-white max-w-[190px] md:max-w-[220px] max-md:text-[12.85px] space-y-2"
              variants={containerVariants}
            >
              <motion.li variants={itemVariants} whileHover={{ x: 5 }}>
                {t("address1")}
              </motion.li>
              <motion.li variants={itemVariants} whileHover={{ x: 5 }}>
                12253
              </motion.li>
              <motion.li variants={itemVariants} whileHover={{ x: 5 }}>
                <a
                  href="tel:00966114110000"
                  className="hover:text-bg transition-colors"
                >
                  +966 11 411 0000
                </a>
              </motion.li>
              <motion.li variants={itemVariants} whileHover={{ x: 5 }}>
                <a
                  href="mailto:info@noon.sa"
                  className="hover:text-bg transition-colors"
                >
                  info@noon.sa
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.div className="flex flex-wrap gap-2" variants={itemVariants}>
            <motion.h2
              style={aclonica.style}
              className="text-bg capitalize text-2xl md:text-5xl ltr:tracking-tighter max-w-[8ch] pb-1 mb-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t("branchOffice")}
            </motion.h2>
            <motion.ul
              className="text-white max-w-[230px] md:max-w-[280px] max-md:text-[12.85px] space-y-2"
              variants={containerVariants}
            >
              <motion.li variants={itemVariants} whileHover={{ x: 5 }}>
                {t("address2")}
              </motion.li>
              <motion.li variants={itemVariants} whileHover={{ x: 5 }}>
                42317
              </motion.li>
              <motion.li variants={itemVariants} whileHover={{ x: 5 }}>
                <a
                  href="tel:00966124199999"
                  className="hover:text-bg transition-colors"
                >
                  +966 12 419 9999
                </a>
              </motion.li>
              <motion.li variants={itemVariants} whileHover={{ x: 5 }}>
                <a
                  href="mailto:info@noon.sa"
                  className="hover:text-bg transition-colors"
                >
                  info@noon.sa
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h2
              style={aclonica.style}
              className="text-bg capitalize text-2xl md:text-5xl ltr:tracking-tighter pb-1 mb-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span variants={itemVariants}>
                {t("new_branch")}
              </motion.span>
              <br />
              <motion.span variants={itemVariants}>
                {t("coming_soon")}
              </motion.span>
            </motion.h2>
          </motion.div>
          <Sidebar orientation="horizontal" />
        </motion.div>
      </div>

      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="md:absolute md:top-0 md:start-0 h-full w-full  z-0"
      >
        <div className="relative w-full h-full">
          <Image
            src={suadiarabia}
            alt="suadiarabia"
            fill
            className="object-contain object-left h-full"
            priority
          />
        </div>
      </motion.div>
    </motion.main>
  );
};

export default ContactPage;
