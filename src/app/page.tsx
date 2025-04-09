"use client";
import Image from "next/image";
import mainBackground from "@/public/main-bg.jpg";
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
          className="object-cover z-[-2]"
        />
        <Image
          src={logo}
          draggable={false}
          alt="logo"
          className="absolute z-[1] select-none pointer-events-none left-1/2 -translate-x-1/2 scale-75 top-28 max-lg:hidden"
        />
        <div className="grow flex max-lg:flex-col text-white divide-y lg:divide-x divide-black bg-[linear-gradient(270deg,_rgba(0,_0,_0,_0)_50%,_rgba(0,_0,_0,_0.4)_75%)] lg:bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0)_65%,_rgba(0,_0,_0,_0.4)_85%)]">
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
