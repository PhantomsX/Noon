"use client";
import React, { startTransition } from "react";
import { motion } from "motion/react";
import logoEn from "@/public/icons/big-logo-en.svg";
import logoAr from "@/public/icons/big-logo-ar.svg";
import Link from "next/link";
import { Translate } from "./icons";
import { setUserLocale } from "@/i18n/locale";
import { useLocale } from "next-intl";
import NavbarDropdown from "./NavbarDropdown";
import { cn } from "@/lib/utils";
import Image from "next/image";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import { User } from "lucide-react";

const Navbar = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleChangeLang = () => {
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
        `flex items-center justify-between z-50 h-24 px-4 md:px-10 sticky top-0 transition-all duration-300`,
        isHomePage
          ? "bg-transparent backdrop-blur-none shadow-none"
          : "bg-black/20 backdrop-blur-sm shadow-sm"
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
        className="hidden md:flex gap-x-12"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, staggerChildren: 0.05 }}
      >
        <NavLink title="about" href="/about" />
        <NavLink title="projectsTitle" href="/projects" />
        <NavLink title="services" href="/services" />
        {/* <NavLink title="contact" href="/contact" /> */}
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
        <Link href="/profile">
          <motion.div
            className="btn btn-ghost btn-circle avatar"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-10 rounded-full">
              <Image
                src="/images/ceoimage.svg"
                alt="Profile"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          </motion.div>
        </Link>
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
