"use client";
import React from "react";
import { Arrow } from "./icons";
import Link from "next/link";
import Image from "next/image";
import secBackground from "@/public/sec-bg.png";
import { useTranslations } from "next-intl";

type Props = { title: string; href: string };

const HomeLinkSection = (props: Props) => {
  const t = useTranslations("home");
  return (
    <div className="flex-1 relative px-10 pb-8 flex items-end bg-black/10 backdrop-blur-[2px]">
      <Image
        src={secBackground}
        alt="section background"
        fill
        className="opacity-10 z-[-1] select-none"
      />
      <div className="flex flex-col gap-2">
        <p className="capitalize text-3xl font-medium lg:text-4xl">{props.title}</p>
        <Link
          href={props.href}
          className="uppercase text-sm flex gap-2 items-center"
        >
          {t("find")} <Arrow />
        </Link>
      </div>
    </div>
  );
};

export default HomeLinkSection;
