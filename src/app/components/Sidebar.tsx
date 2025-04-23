import React from "react";
import instagram from "@/public/instegram.svg";
import X from "@/public/X.svg";
import linkedIn from "@/public/linkedIn.svg";
import phone from "@/public/phone.svg";
import calc from "@/public/calculator.svg";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <nav className="fixed z-40 backdrop-blur-sm right-0 top-1/2 px-1.5 py-2.5 [&_img]:size-5 flex flex-col gap-7 -translate-y-1/2 bg-main-bg/70">
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
