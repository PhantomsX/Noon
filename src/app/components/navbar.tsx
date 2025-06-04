"use client";
import React, { startTransition, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/public/icons/navbar-logo.svg";
import Link from "next/link";
import { Translate } from "./icons";
import { setUserLocale } from "@/src/i18n/locale";
import { useLocale } from "next-intl";
import NavbarDropdown from "./NavbarDropdown";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const locale = useLocale();
  const handleChangeLang: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    startTransition(() => {
      setUserLocale(locale === "en" ? "ar" : "en");
    });
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        `navbar py-0 md:justify-between bg-black/20 z-50 backdrop-blur-sm shadow-sm h-24 px-4 md:px-10 sticky top-0 transition-all duration-300`
      )}
    >
      <motion.div
        className="max-md:flex-1"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href={"/"}>
          <img
            src={logo.src}
            alt="Logo"
            className="w-16 md:w-20 h-14 cursor-pointer"
          />
        </Link>
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
