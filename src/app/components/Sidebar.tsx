import React from "react";
import instagram from "@/public/instegram.svg";
import X from "@/public/X.svg";
import linkedIn from "@/public/linkedIn.svg";
import phone from "@/public/phone.svg";
import calc from "@/public/calculator.svg";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";

const Sidebar = ({
  orientation = "vertical",
}: {
  orientation?: "vertical" | "horizontal";
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <nav
      className={cn(`px-1.5 py-2.5 [&_img]:size-5 flex gap-7`, {
        "flex-row sm:flex-col": orientation === "vertical",
        "flex-row": orientation === "horizontal",
      })}
    >
      <a href="#" target="_blank">
        <Image src={instagram} alt="instagram" />
      </a>
      <a href="#" target="_blank">
        <Image src={X} alt="X" />
      </a>
      <a href="#" target="_blank">
        <Image src={linkedIn} alt="linkedIn" />
      </a>
      <Link href={"/calculator"}>
        <Image src={calc} alt="calc" />
      </Link>
      <Link href={"/about"}>
        <Image src={phone} alt="phone" />
      </Link>
    </nav>
  );
};

export default Sidebar;
