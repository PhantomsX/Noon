"use client";
import React from "react";
import { Arrow } from "./icons";
import Link from "next/link";
import Image from "next/image";
import secBackground from "@/public/sec-bg.png";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

type Props = { title: string; href: string };

const HomeLinkSection = (props: Props) => {
  const t = useTranslations();
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(props.href)}
      className="flex-1 cursor-pointer relative px-10 pb-8 flex items-end group bg-black/10 backdrop-blur-[2px]"
    >
      <Image
        src={secBackground}
        alt="section background"
        fill
        draggable={false}
        className="opacity-10 z-[-2] select-none"
      />
      <div className="flex flex-col gap-2">
        <p className="capitalize text-start font-medium text-4xl group-hover:text-bg">
          {props.title}
        </p>
        <span className="uppercase flex gap-2 items-center group-hover:text-lg transition-[font-size]">
          <span>{t("find")}</span> <Arrow />
        </span>
      </div>
    </button>
  );
};

export default HomeLinkSection;
