import React, { useState, useEffect, useRef } from "react";
import { Menu } from "./icons";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import logoEn from "@/public/icons/big-logo-en.svg";
import logoAr from "@/public/icons/big-logo-ar.svg";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useOnClickOutside } from "usehooks-ts";

const NavbarDropdown = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    setIsOpen(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  useOnClickOutside(menuRef, closeMenu);

  const menuItems = [
    { title: "about" },
    { title: "portfolio" },
    { title: "services" },
    { title: "clients" },
    { title: "calculate" },
    { title: "contact" },
  ];

  const toggleMenu = () => {
    if (!isOpen) {
      setIsVisible(true);
      setIsOpen(true);
    } else {
      setIsOpen(false);
      // Delay hiding to allow exit animation
      setTimeout(() => setIsVisible(false), 300);
    }
  };

  return (
    <div ref={menuRef} className="relative">
      <motion.button
        id="menu-button"
        onClick={toggleMenu}
        className={cn(
          "btn btn-square btn-ghost p-2 transition-all duration-300",
          isOpen ? "rotate-90" : ""
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X /> : <Menu />}
      </motion.button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            id="dropdown-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn(
              "absolute right-0 mt-2 w-72 rounded-lg bg-black/90 backdrop-blur-sm shadow-xl z-50 overflow-hidden",
              "ring-1 ring-white/10"
            )}
            style={{
              position: "fixed",
              top: "5rem",
              right: "1rem",
            }}
          >
            <ul className="py-2">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.05 * index,
                    duration: 0.3,
                  }}
                  className="hover:bg-white/10 transition-colors"
                >
                  <Link
                    href={`/${item.title}`}
                    onClick={closeMenu}
                    className="px-4 py-3 flex items-center text-white/90 hover:text-white text-lg font-medium"
                    prefetch
                  >
                    <span>{t(item.title)}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            <Link
              href={"/"}
              onClick={closeMenu}
              className="border-t border-white/10 p-4 flex justify-center"
            >
              <Image
                src={locale === "ar" ? logoAr : logoEn}
                draggable={false}
                alt="logo"
                width={160}
                height={60}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarDropdown;
