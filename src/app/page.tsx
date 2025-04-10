"use client";
import Image from "next/image";
import mainBackground from "@/public/main-bg.png";
import mainBackgroundMobile from "@/public/main-bg-mobile.png";

import logo from "@/public/icons/big-logo-en.svg";
import HomeLinkSection from "./components/HomeLinkSection";
import { useTranslations } from "next-intl";
import LogosCarousel from "./components/LogosCarousel";
export default function Home() {
  const t = useTranslations();
  return (
    <>
      <main className="relative flex-1 flex flex-col">
        <Image
          fill
          priority
          src={mainBackground}
          alt="main-bg"
          className="md:object hidden md:block -fit z-[-2] object-center select-none"
        />
           <Image
          fill
          priority
          src={mainBackgroundMobile}
          alt="main-bg"
          className="object-fit md:hidddn -fit z-[-2] object-center select-none"
        />
        <Image
          src={logo}
          draggable={false}
          alt="logo"
          className="absolute z-[1] select-none pointer-events-none left-1/2 -translate-x-1/2 scale-75 top-28 max-lg:hidden"
        />
        <div className="grow flex max-lg:flex-col text-white divide-y lg:divide-x divide-black">
          <HomeLinkSection
            title={t("portfolio")}
            href={"/portfolio"}
            breakpoint={1}
          />
          <HomeLinkSection title={t("about")} href={"/about"} breakpoint={1} />
          <HomeLinkSection
            title={t("services")}
            href={"/services"}
            breakpoint={2}
          />
          <HomeLinkSection
            title={t("calculate")}
            href={"/calculate"}
            breakpoint={2}
          />
          <HomeLinkSection
            title={t("contact")}
            href={"/contact"}
            breakpoint={1}
          />
        </div>
      </main>
      <LogosCarousel />
    </>
  );
}
