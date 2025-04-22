import React from "react";
import { Menu } from "./icons";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import logoEn from "@/public/icons/big-logo-en.svg";
import logoAr from "@/public/icons/big-logo-ar.svg";

const NavbarDropdown = () => {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <>
      <button
        popoverTarget="popover-1"
        style={{ anchorName: "--anchor-1" } as React.CSSProperties}
        className="btn btn-square btn-ghost md:hidden"
      >
        <Menu />
      </button>
      <div
        className="dropdown ltr:dropdown-end select-none top-7 -left-11 ltr:-right-11 sm:max-w-sm w-[calc(100%+44px)] bg-main-bg/90"
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
                onClick={() => {
                  const popover = document.getElementById(
                    "popover-1"
                  ) as HTMLDivElement;
                  popover?.hidePopover?.(); // hidePopover is part of Popover API
                }}
                prefetch
              >
                {t(item.title)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="select-none pointer-events-none">
          <Image
            src={locale === "ar" ? logoAr : logoEn}
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
