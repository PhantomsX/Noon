"use client";
import React, { startTransition } from "react";
import logo from "@/public/icons/navbar-logo.svg";
import Link from "next/link";
import { NightMode, Search, Translate } from "./icons";
import { setUserLocale } from "@/src/i18n/locale";
import { useLocale } from "next-intl";
import NavbarDropdown from "./NavbarDropdown";
type Props = {};

const Navbar = (props: Props) => {
  const locale = useLocale();
  const handleChangeLang: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    startTransition(() => {
      setUserLocale(locale === "en" ? "ar" : "en");
    });
  };
  return (
    <div className="navbar bg-main-bg shadow-sm h-24 px-10">
      <div className="flex-1">
        <Link href={"/"}>
          <img src={logo.src} alt="Logo" className="w-20 h-14" />
        </Link>
      </div>
      <div className="flex-none space-x-1">
        <button className="btn btn-square btn-ghost">
          <NightMode />
        </button>
        <button onClick={handleChangeLang} className="btn btn-square btn-ghost">
          <Translate />
        </button>
        <button className="btn btn-square btn-ghost">
          <Search />
        </button>
        <NavbarDropdown />
      </div>
    </div>
  );
};

export default Navbar;
