"use client";
import React from "react";
import { Arrow } from "./icons";
import Image from "next/image";
import secBackground from "@/public/sec-bg.png";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

type Props = { title: string; href: string; breakpoint?: number };

const HomeLinkSection = (props: Props) => {
  const t = useTranslations();
  const router = useRouter();
  const locale = useLocale();
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
      <div className="flex flex-col gap-2 max-md:pt-3">
        <p className="capitalize text-start font-medium text-5xl group-hover:text-bg tracking-tighter">
          {props?.breakpoint && locale === "en" ? (
            <>
              <span>
                {props.title.split(" ").slice(0, props?.breakpoint).join(" ")}
              </span>
              <br />
              <span>
                {props.title.split(" ").slice(props?.breakpoint).join(" ")}
              </span>
            </>
          ) : (
            props.title
          )}
        </p>
        <span className="uppercase flex gap-2 items-center group-hover:text-lg transition-[font-size]">
          <span>{t("find")}</span> <Arrow />
        </span>
      </div>
    </button>
  );
};

export default HomeLinkSection;
