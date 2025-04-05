"use client";
import Image from "next/image";
import mainBackground from "@/public/main-bg.jpg";
import logo from "@/public/icons/big-logo-en.svg";
import HomeLinkSection from "./components/HomeLinkSection";
import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations("home");
  return (
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
        alt="logo"
        className="absolute z-[1] left-1/2 -translate-x-1/2 scale-75 top-28 max-md:hidden"
      />
      <div className="grow flex max-md:flex-col text-white divide-y md:divide-x divide-black bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0)_77.36%,_rgba(0,_0,_0,_0.4)_85.02%)]">
        <HomeLinkSection title={t("portfolio")} href={"/portfolio"} />
        <HomeLinkSection title={t("about")} href={"/portfolio"} />
        <HomeLinkSection title={t("services")} href={"/portfolio"} />
        <HomeLinkSection title={t("calculate")} href={"/portfolio"} />
        <HomeLinkSection title={t("contact")} href={"/portfolio"} />
      </div>
    </main>
  );
}
