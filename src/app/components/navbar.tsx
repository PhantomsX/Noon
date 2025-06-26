"use client";
import React, { startTransition, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import logoEn from "@/public/icons/big-logo-en.svg";
import logoAr from "@/public/icons/big-logo-ar.svg";
import Link from "next/link";
import { Translate } from "./icons";
import { setUserLocale } from "@/src/i18n/locale";
import { useLocale } from "next-intl";
import NavbarDropdown from "./NavbarDropdown";
import { cn } from "@/lib/utils";
import Image from "next/image";
import NavLink from "./NavLink";

const Navbar = () => {
  const locale = useLocale();
  const handleChangeLang: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    startTransition(() => {
      setUserLocale(locale === "en" ? "ar" : "en");
    });
  };

  const AnimatedLogo = motion.create(Image);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        `navbar py-0 justify-between bg-black/20 z-50 backdrop-blur-sm shadow-sm h-24 px-4 md:px-10 sticky top-0 transition-all duration-300`
      )}
    >
      <Link href={"/"}>
        <AnimatedLogo
          src={locale === "ar" ? logoAr : logoEn}
          draggable={false}
          priority
          alt="logo"
          className="w-24 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
      </Link>

      {/* Desktop Navigation Links */}
      <motion.div
        className="hidden md:flex gap-x-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, staggerChildren: 0.05 }}
      >
        <NavLink title="about" href="/about" />
        <NavLink title="projectsTitle" href="/projects" />
        <NavLink title="services" href="/services" />
        <NavLink title="careers.title" href="/careers" />
        {/* <NavLink title="login" href="/login" />
        <NavLink title="register" href="/register" /> */}
      </motion.div>

      <motion.div
        className="flex-none gap-x-1 flex"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.button
          onClick={handleChangeLang}
          className="btn btn-square btn-ghost"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Translate />
        </motion.button>
        <NavbarDropdown />
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
