import React from "react";
import instagram from "@/public/instegram.svg";
import tiktok from "@/public/tiktok.svg";
import snapchat from "@/public/snapchat.svg";
import linkedIn from "@/public/linkedIn.svg";
import phone from "@/public/phone.svg";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Sidebar = ({
  orientation = "vertical",
}: {
  orientation?: "vertical" | "horizontal";
}) => {
  return (
    <nav
      className={cn(`px-1.5 py-2.5 [&_img]:size-5 flex gap-7`, {
        "flex-row sm:flex-col": orientation === "vertical",
        "flex-row": orientation === "horizontal",
      })}
    >
      <a
        href="https://www.instagram.com/nnc_ksa/profilecard/?igsh=MWpwa3F1YXkzMm5nYg=="
        target="_blank"
      >
        <Image src={instagram} alt="instagram" />
      </a>
      <a href="https://www.snapchat.com/add/nnc_ksa" target="_blank">
        <Image src={snapchat} alt="snapchat" />
      </a>
      <a href="https://www.tiktok.com/@noon.consultants?_t=ZS-8wZ0flxEROh&_r=1">
        <Image src={tiktok} alt="tiktok" />
      </a>
      <a href="https://www.linkedin.com/company/nnc-ksa/" target="_blank">
        <Image src={linkedIn} alt="linkedIn" />
      </a>

      <Link href={"/about"}>
        <Image src={phone} alt="phone" />
      </Link>
    </nav>
  );
};

export default Sidebar;
