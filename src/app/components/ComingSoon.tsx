"use client";
import React from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Rocket, Clock, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComingSoonProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const ComingSoon = ({ title, subtitle, className }: ComingSoonProps) => {
  const t = useTranslations();

  return (
    <div
      className={cn(
        "min-h-[70vh] flex flex-col items-center justify-center relative overflow-hidden px-4",
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          className="w-20 h-20 md:w-24 md:h-24 bg-[linear-gradient(270deg,#BE7B2C_0%,#F9C39D_100%)] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(190,123,45,0.3)]"
        >
          <Rocket className="text-black size-10 md:size-12" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-4 py-4 ltr:font-neue-montreal rtl:font-noto-kufi-arabic bg-[linear-gradient(270deg,#BE7B2C_0%,#F9C39D_100%)] bg-clip-text text-transparent uppercase tracking-wider"
        >
          {title || t("comingSoon")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-[#C6A87D] text-lg md:text-xl max-w-lg mx-auto font-abeezee leading-relaxed mb-12"
        >
          {subtitle || t("comingSoonPage.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <div className="flex items-center gap-2 text-white/60 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
            <Clock className="size-5 text-[#BE7B2D]" />
            <span className="text-sm font-medium tracking-widest uppercase">
              {t("comingSoonPage.underDevelopment")}
            </span>
          </div>

          <button className="group flex items-center gap-2 bg-[linear-gradient(270deg,#BE7B2C_0%,#F9C39D_100%)] text-black px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(190,123,45,0.2)]">
            <Bell className="size-5 transition-transform group-hover:rotate-12" />
            <span className="text-sm uppercase tracking-wider">
              {t("comingSoonPage.notifyMe")}
            </span>
          </button>
        </motion.div>
      </motion.div>

      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
};

export default ComingSoon;
