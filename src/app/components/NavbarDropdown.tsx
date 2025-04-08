import React from "react";
import { Menu } from "./icons";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import logo from "@/public/icons/big-logo-en.svg";

const NavbarDropdown = () => {
  const t = useTranslations();
  return (
    <>
      <button
        popoverTarget="popover-1"
        style={{ anchorName: "--anchor-1" } as React.CSSProperties}
        className="btn btn-square btn-ghost"
      >
        <Menu />
      </button>
      <div
        className="dropdown dropdown-end select-none top-7 -right-11 sm:max-w-sm w-[calc(100%+44px)] bg-main-bg/90"
        popover="auto"
        id="popover-1"
        style={{ positionAnchor: "--anchor-1" } as React.CSSProperties}
      >
        <ul className="px-10 menu w-full divide-y divide-[#454545]">
          {[
            { title: "about" },
            { title: "portfolio" },
            { title: "services" },
            { title: "clients" },
            { title: "calculate" },
            { title: "contact" },
          ].map((item, index) => (
            <li key={index} className="items-center-safe py-5">
              <Link
                className="text-white capitalize text-2xl"
                href={`/${item.title}`}
              >
                {t(item.title)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="select-none pointer-events-none">
          <Image
            src={logo}
            draggable={false}
            alt="logo"
            className="w-44 py-10 mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default NavbarDropdown;
