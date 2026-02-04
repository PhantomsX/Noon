"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

interface NavLinkProps {
  title: string;
  href: string;
}

const NavLink = ({ title, href }: NavLinkProps) => {
  const t = useTranslations();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      <Link
        href={href}
        className="text-white/80 capitalize ltr:font-elegance rtl:font-font-noto-kufi-arabic hover:text-white transition-colors text-lg font-medium py-2 px-3 relative z-10"
      >
        {t(title)}
        {/* Underline effect */}
        <motion.span
          className="absolute bottom-0 left-0 w-full h-[2px] bg-linear-to-r from-[#BE7B2C] to-[#F9C39D]"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </Link>
    </motion.div>
  );
};

export default NavLink;
