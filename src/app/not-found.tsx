"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Search } from "lucide-react";

const NotFoundPage = () => {
  const t = useTranslations("NotFound");
  const AnimatedSearch = motion(Search);
  return (
    <motion.div
      className="flex flex-col items-center justify-center flex-1 text-center px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-bg py-3 flex items-center gap-2 tracking-widest ltr:font-elegance rtl:font-amiri text-5xl md:text-7xl font-bold mb-4"
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <span>4</span>
        <AnimatedSearch
          className="size-20 text-yellow-600"
          initial={{ opacity: 1, scale: 1, rotate: 0 }}
          animate={{
            scale: 1.1,
            rotate: [0, 10, -10, 0],
            transition: {
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        />
        <span>4</span>
      </motion.h1>
      <motion.p
        className="text-white ltr:font-elegance rtl:font-amirit-lg md:text-2xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      >
        {t("message")}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      >
        <Link href="/" className="text-bg text-lg hover:underline">
          {t("backToHome")}
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NotFoundPage;
