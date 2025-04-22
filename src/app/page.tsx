"use client";
import Image from "next/image";
import mainBackground from "@/public/main-bg.png";
import mainBackgroundMobile from "@/public/main-bg-mobile.png";

import building from "@/public/images/building.svg";
import building2 from "@/public/images/building2.svg";
import building3 from "@/public/images/building3.svg";
import client from "@/public/images/client.svg";
import clients from "@/public/images/clients.svg";
import logoEn from "@/public/icons/big-logo-en.svg";
import logoAr from "@/public/icons/big-logo-ar.svg";
import { useLocale, useTranslations } from "next-intl";
import { Aboreto, Afacad } from "next/font/google";
import ceo from "@/public/ceoimage.svg";

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

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <>
      <main className="relative flex-1 bg-[#493217]">
        <section className="relative min-h-screen flex flex-col">
          <Image
            fill
            priority
            src={mainBackground}
            alt="main-bg"
            className="object-fit hidden md:block object-center select-none"
          />
          <Image
            fill
            priority
            src={mainBackgroundMobile}
            alt="main-bg"
            className="object-fit md:hidden object-center select-none"
          />
          <div className="top-1/2 absolute -translate-y-1/2 right-32 ltr:left-32 bg-black/5 w-fit backdrop-blur-sm rounded-md p-2">
            <h1
              className="text-white uppercase text-[65px]"
              style={aboreto.style}
            >
              {t("founded in 2011")}
            </h1>
            <Image
              src={locale === "ar" ? logoAr : logoEn}
              draggable={false}
              priority
              alt="logo"
              className="select-none pointer-events-none "
            />
          </div>
        </section>

        <section className="container mx-auto pt-28 flex justify-between items-center gap-10">
          <div className="flex items-center">
            <Image
              src={building}
              alt="building"
              className="object-cover h-full"
            />
            <Image src={ceo} alt="ceo" className="object-cover h-[420px]" />
          </div>
          <div className="max-w-[420px] space-y-10">
            <h2
              className="text-bg w-fit text-[48.18px] relative before:content-[''] before:w-64 before:h-px before:bg-border before:absolute before:top-full before:right-7/12 ltr:before:left-7/12"
              style={aboreto.style}
            >
              {t("about")}
            </h2>
            <p
              className="text-white text-[22px] leading-[1.43] text-justify"
              style={afacad.style}
            >
              {t("aboutText1")}
            </p>
            <button
              style={afacad.style}
              className="uppercase rounded-full flex items-center gap-1 cursor-pointer text-lg text-white border-white border py-1.5 px-7"
            >
              {t("About US")}
              <svg
                width="13"
                height="8"
                viewBox="0 0 13 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6217 4.34718C12.8134 4.15544 12.8134 3.84457 12.6217 3.65283L9.49708 0.528252C9.30535 0.336513 8.99447 0.336513 8.80274 0.528252C8.611 0.719992 8.611 1.03086 8.80274 1.2226L11.5801 4L8.80274 6.7774C8.611 6.96914 8.611 7.28001 8.80274 7.47175C8.99447 7.66349 9.30535 7.66349 9.49708 7.47175L12.6217 4.34718ZM-4.29228e-08 4.49098L12.2745 4.49098L12.2745 3.50902L4.29228e-08 3.50902L-4.29228e-08 4.49098Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </section>
        <section className="container mx-auto -mt-12 flex gap-4 justify-end items-center">
          <div className="flex items-center shrink-0">
            <Image
              src={building2}
              alt="building2"
              className="object-cover h-full relative -top-20"
            />
          </div>
          <div className="space-y-10">
            <h2
              className="text-bg w-fit mx-auto text-[48.18px] relative before:content-[''] before:w-[278px] before:h-px before:bg-border before:absolute before:top-full before:right-7/12 ltr:before:left-7/12"
              style={aboreto.style}
            >
              {t("What Our Clients Say")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="py-7 px-11 max-w-[400px] flex flex-col gap-5 items-center justify-between border-[1.5px] border-dashed border-[#F5F5F599] rounded-sm"
                >
                  <Image src={client} alt="client" />
                  <p
                    className="text-white text-center text-lg"
                    style={afacad.style}
                  >
                    {t("clientText1")}
                  </p>
                  <p
                    style={aboreto.style}
                    className="text-white text-center text-lg"
                  >
                    <span>Ahmed Al-Mansouri,</span>
                    <br />
                    <span>CEO of Skyline Developers</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="relative min-h-screen overflow-hidden">
          <Image src={building3} alt="building3" fill />
          <div className="w-full absolute bottom-24 left-1/2 -translate-x-1/2">
            <h2
              className="text-bg w-fit mx-auto text-[48.18px] mb-20 relative before:content-[''] before:w-64 before:h-px before:bg-border before:absolute before:top-full before:right-7/12 ltr:before:left-7/12"
              style={aboreto.style}
            >
              {t("partners")}
            </h2>
            <Image
              src={clients}
              alt="clients"
              className="object-cover w-full"
            />
          </div>
        </section>
        <section className="container mx-auto py-28">
          <Image
            src={locale === "ar" ? logoAr : logoEn}
            draggable={false}
            priority
            alt="logo"
            className="select-none pointer-events-none scale-75 mx-auto mb-20"
          />
          <div className="flex justify-between">
            <div className="flex flex-wrap gap-10">
              <h2
                style={aboreto.style}
                className="text-bg capitalize font-medium text-5xl tracking-tighter max-w-[8ch] pb-1 mb-4"
              >
                {t("headquarters")}
              </h2>
              <ul className="text-white max-w-[220px]">
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
            <div className="flex flex-wrap gap-10">
              <h2
                style={aboreto.style}
                className="text-bg capitalize font-medium text-5xl tracking-tighter max-w-[8ch] pb-1 mb-4"
              >
                {t("branchOffice")}
              </h2>
              <ul className="text-white max-w-[280px]">
                <li>{t("address2")}</li>
                <li>42317</li>
                <li>
                  <a href="tel:+966598959098" className="link link-hover">
                    +966598959098
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:infomadina@nnc.sa"
                    className="link link-hover"
                  >
                    infomadina@nnc.sa
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
