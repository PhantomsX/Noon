"use client";
import React, { startTransition, useState, useEffect } from "react";
import { motion } from "motion/react";
import logoEn from "@/public/icons/big-logo-en.svg";
import logoAr from "@/public/icons/big-logo-ar.svg";
import Link from "next/link";
import { Translate } from "./icons";
import { setUserLocale } from "@/i18n/locale";
import { useLocale, useTranslations } from "next-intl";
import NavbarDropdown from "./NavbarDropdown";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Search, Moon, Sun, Globe } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const locale = useLocale();
  const t = useTranslations();
  const pathname = usePathname();

  const handleChangeLang = () => {
    startTransition(() => {
      setUserLocale(locale === "en" ? "ar" : "en");
    });
  };

  const AnimatedLogo = motion.create(Image);

  const navLinks = [
    { title: "ABOUT US", href: "/about" },
    { title: "OUR PROJECTS", href: "/projects" },
    { title: "OUR SERVICES", href: "/services" },
    { title: "BLOGS", href: "/blogs" },
    { title: "CAREERS", href: "/careers" },
    { title: "PROFILE", href: "/profile" },
  ];

  // Check if a link is active
  const isActive = (href: string) => {
    return pathname === href || pathname?.startsWith(href + "/");
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        `sticky top-0 left-0 right-0 z-50 transition-all duration-300`,
        `bg-black/60 backdrop-blur-xl border-b border-white/10`,
      )}
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
          {/* Logo */}
          <Link href={"/"} className="shrink-0 relative z-10">
            <AnimatedLogo
              src={locale === "ar" ? logoAr : logoEn}
              draggable={false}
              priority
              alt={t("alt.logo")}
              className="w-12 sm:w-16 md:w-20 lg:w-24 h-auto cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>

          {/* Desktop Navigation Links - Center */}
          <motion.div
            className="hidden lg:flex items-center gap-x-6 xl:gap-x-10 absolute left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, staggerChildren: 0.05 }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "transition-all duration-300 text-sm font-semibold tracking-widest uppercase",
                    isActive(link.href)
                      ? "bg-[linear-gradient(270deg,#BE7B2C_0%,#F9C39D_100%)] bg-clip-text text-transparent"
                      : "text-white/60 hover:text-white",
                  )}
                >
                  {t(link.title)}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side Icons */}
          <motion.div
            className="flex items-center gap-1 sm:gap-2 md:gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Search Icon */}
            <motion.button
              className="btn btn-ghost btn-circle btn-sm md:btn-md text-white/70 hover:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={t("aria.search")}
            >
              <Search className="size-4 md:size-5" />
            </motion.button>

            {/* Dark Mode Toggle */}
            <motion.button
              className="btn btn-ghost btn-circle btn-sm md:btn-md text-white/70 hover:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={t("aria.toggle_dark_mode")}
            >
              <Moon className="size-4 md:size-5" />
            </motion.button>

            {/* Language Toggle */}
            <motion.button
              onClick={handleChangeLang}
              className="btn btn-ghost btn-circle btn-sm md:btn-md text-white/70 hover:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={t("aria.change_language")}
            >
              <Globe className="size-4 md:size-5" />
            </motion.button>

            {/* Mobile Menu */}
            <NavbarDropdown />
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
