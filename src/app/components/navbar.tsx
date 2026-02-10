"use client";
import React, { startTransition } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import logoEn from "@/public/icons/big-logo-en.svg";
import logoAr from "@/public/icons/big-logo-ar.svg";
import Link from "next/link";
import { setUserLocale } from "@/i18n/locale";
import { useLocale, useTranslations } from "next-intl";
import NavbarDropdown from "./NavbarDropdown";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Search, Globe } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const locale = useLocale();
  const t = useTranslations();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

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
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-black/60 backdrop-blur-2xl border-b border-white/8 py-2 lg:py-4 shadow-2xl shadow-black/20"
          : "bg-transparent py-4 lg:py-6",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={"/"} className="shrink-0 relative z-20">
            <AnimatedLogo
              src={locale === "ar" ? logoAr : logoEn}
              draggable={false}
              priority
              alt={t("alt.logo")}
              className={cn(
                "h-auto cursor-pointer transition-all duration-500",
                "w-20 md:w-24 lg:w-28",
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>

          {/* Desktop Navigation Links - Center */}
          <div className="hidden lg:flex items-center gap-x-8 xl:gap-x-12 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "relative text-xs lg:text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 group py-2",
                    isActive(link.href)
                      ? "text-transparent bg-clip-text bg-linear-to-r from-[#BE7B2C] to-[#F9C39D]"
                      : "text-white/70 hover:text-[#F9C39D]",
                  )}
                >
                  {t(link.title)}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-0 h-[2px] bg-linear-to-r from-[#BE7B2C] to-[#F9C39D] transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100",
                      isActive(link.href) && "w-full opacity-100",
                    )}
                  />
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute -inset-x-4 -inset-y-2 bg-white/3 rounded-lg -z-10 blur-sm"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Side Icons */}
          <motion.div
            className="flex items-center gap-2 sm:gap-3 z-20"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {/* Language Toggle */}
            <motion.button
              onClick={handleChangeLang}
              className="group btn btn-ghost btn-circle btn-sm md:btn-md hover:bg-white/8 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={t("aria.change_language")}
            >
              <Globe className="size-5 text-white/70 group-hover:text-[#F9C39D] transition-colors duration-300" />
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
