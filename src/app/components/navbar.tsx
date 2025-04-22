"use client";
import React, { startTransition, use } from "react";
import logo from "@/public/icons/navbar-logo.svg";
import Link from "next/link";
import { NightMode, Search, Translate } from "./icons";
import { setUserLocale } from "@/src/i18n/locale";
import { useLocale, useTranslations } from "next-intl";
import NavbarDropdown from "./NavbarDropdown";
import { Aboreto } from "next/font/google";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
type Props = {};

const aboreto = Aboreto({
  subsets: ["latin"],
  variable: "--font-aboreto",
  weight: "400",
  display: "swap",
});

const Navbar = (props: Props) => {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const handleChangeLang: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    startTransition(() => {
      setUserLocale(locale === "en" ? "ar" : "en");
    });
  };
  return (
    <div className="navbar py-0 md:justify-between z-10 bg-main-bg shadow-sm h-24 px-10">
      <div className="max-md:flex-1">
        <Link href={"/"}>
          <img src={logo.src} alt="Logo" className=" w-16 md:w-20 h-14" />
        </Link>
      </div>
      <div className="h-full">
        <ul className="menu menu-horizontal py-0 px-1 hidden md:flex h-full">
          {[
            { title: "home" },
            { title: "about" },
            { title: "portfolio" },
            { title: "services" },
            { title: "calculate" },
            { title: "contact" },
          ].map((item, index) => (
            <li key={index} className="h-full">
              <Link
                className={cn("text-white rounded-none flex justify-center items-center h-full uppercase text-xl", {
                  "bg-[linear-gradient(180deg,_#BF7C2E_0%,_#593A15_71.63%)]":
                    pathname === `/${item.title === "home" ? "" : item.title}`,
                })}
                href={`/${item.title === "home" ? "" : item.title}`}
                prefetch
                style={aboreto.style}
              >
                {t(item.title)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-none space-x-1">
        {/* <button className="btn btn-square btn-ghost">
          <NightMode />
        </button> */}
        <button onClick={handleChangeLang} className="btn btn-square btn-ghost">
          <Translate />
        </button>
        {/* <button className="btn btn-square btn-ghost">
          <Search />
        </button> */}
        <NavbarDropdown />
      </div>
    </div>
  );
};

export default Navbar;
