import React from "react";
import Footer from "../components/Footer";
import squares from "@/public/squares.svg";
import suadiarabia from "@/public/suadiarabia.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Aboreto, Afacad } from "next/font/google";

const aboreto = Aboreto({
  subsets: ["latin"],
  variable: "--font-aboreto",
  weight: "400",
  display: "swap",
});
const afacad = Afacad({
  subsets: ["latin"],
  variable: "--font-afacad",
  weight: "500",
  display: "swap",
});
const ContactPage = () => {
  const t = useTranslations();
  return (
    <main
      style={afacad.style}
      className="flex-1 main-bg-gradient flex-col flex"
    >
      <Image src={squares} alt="squares" fill className="max-md:hidden" />
      <div className="z-10 max-md:mx-auto ">
        <div className="bg-main-bg *:max-w-3xs px-14 py-[30px] md:py-[76px] md:absolute md:right-[74px] md:top-1/2 md:-translate-y-1/2 flex max-md:flex-col w-[80%] max-md:mx-auto md:w-fit mt-16 justify-center gap-14">
          <div>
            <h2
              style={aboreto.style}
              className="text-bg capitalize text-[26.7px] md:text-5xl max-w-[8ch] pb-1 mb-4"
            >
              {t("headquarters")}
            </h2>
            <ul className="text-white ">
              <li>{t("address1")}</li>
              <li>12253</li>
              <li>
                <a href="tel:+966565498620" className="link link-hover">
                  +966565498620
                </a>
              </li>
              <li>
                <a href="mailto:info@nnc.sa" className="link link-hover">
                  info@nnc.sa
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2
              style={aboreto.style}
              className="text-bg capitalize text-[26.7px] md:text-5xl max-w-[8ch] pb-1 mb-4"
            >
              {t("branchOffice")}
            </h2>
            <ul className="text-white">
              <li>{t("address2")}</li>
              <li>42317</li>
              <li>
                <a href="tel:+966598959098" className="link link-hover">
                  +966598959098
                </a>
              </li>
              <li>
                <a href="mailto:infomadina@nnc.sa" className="link link-hover">
                  infomadina@nnc.sa
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Image
        src={suadiarabia}
        alt="suadiarabia"
        fill
        className="max-md:!relative"
      />

      <Footer />
    </main>
  );
};

export default ContactPage;
