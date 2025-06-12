"use client";

import { motion, useTransform, useScroll } from "motion/react";
import { Aclonica } from "next/font/google";
import React from "react";
const aclonica = Aclonica({
  subsets: ["latin"],
  variable: "--font-aclonica",
  weight: ["400"],
  display: "swap",
});
const PageTitle = ({ children }: { children?: React.ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -20]);
  return (
    <motion.div style={{ y: titleY }} className="flex flex-col gap-3 mb-4">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-[#f9c39d]"
        style={aclonica.style}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.h1>

      {/* Add a subtle animated line */}
      <motion.div
        className="h-[3px] bg-[#f9c39d]/60 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: "40%" }}
        whileInView={{ width: "40%" }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{
          delay: 0.8,
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      />
    </motion.div>
  );
};

export default PageTitle;
