import React, { useState, useRef } from "react";
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
    { title: "ABOUT US", href: "/about" },
    { title: "OUR PROJECTS", href: "/projects" },
    { title: "OUR SERVICES", href: "/services" },
    { title: "BLOGS", href: "/blogs" },
    { title: "CAREERS", href: "/careers" },
    { title: "PROFILE", href: "/profile" },
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
    <div ref={menuRef} className="relative lg:hidden">
      <motion.button
        id="menu-button"
        onClick={toggleMenu}
        className={cn(
          "btn btn-square btn-ghost p-2 transition-all duration-300",
          isOpen ? "rotate-90" : "",
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? t("aria.close_menu") : t("aria.open_menu")}
      >
        {isOpen ? <X className="text-[#f9c39d]" /> : <Menu />}
      </motion.button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            id="dropdown-menu"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={
              isOpen
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.95, y: -20 }
            }
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={cn(
              "absolute mt-2 w-72 rounded-2xl bg-black/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 overflow-hidden",
              "border border-[#f9c39d]/20",
              locale === "ar" ? "left-0" : "right-0",
            )}
            style={{
              position: "fixed",
              top: "5.5rem",
              ...(locale === "ar" ? { left: "1.25rem" } : { right: "1.25rem" }),
            }}
          >
            <ul className="py-4 px-2">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: locale === "ar" ? 20 : -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.05 * index,
                    duration: 0.3,
                  }}
                  className="mb-1"
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={cn(
                      "group px-4 py-3 flex items-center rounded-xl transition-all duration-300",
                      "text-white/80 hover:bg-[#f9c39d]/10 hover:text-[#f9c39d]",
                      "text-lg font-medium tracking-wide",
                    )}
                    prefetch
                  >
                    <span className="capitalize">{t(item.title)}</span>
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
                alt={t("alt.logo")}
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
