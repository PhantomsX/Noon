import React from "react";
import Footer from "../components/Footer";
import RadioElement from "../components/RadioElement";
import Slider from "../components/Slider";
import Input from "../components/Input";
import { useTranslations } from "next-intl";
import { Aboreto, Afacad } from "next/font/google";

const aboreto = Aboreto({
  subsets: ["latin"],
  variable: "--font-aboreto",
  weight: ["400"],
  display: "swap",
});
const afacad = Afacad({
  subsets: ["latin"],
  variable: "--font-afacad",
  weight: "500",
  display: "swap",
});

const CalculatePage = () => {
  const t = useTranslations();
  return (
    <main
      style={afacad.style}
      className="flex-1 main-bg-gradient flex-col flex"
    >
      <div className="flex max-sm:flex-col pt-12 sm:pt-28 sm:ps-[88px] max-sm:gap-16 px-9">
        <h2
          style={aboreto.style}
          className="text-bg capitalize text-4xl !font-bold sm:max-w-[340px] shrink-0"
        >
          {t("calculateTitle")}
        </h2>
        <div className="flex-1 flex max-lg:flex-col md:gap-16 gap-8 justify-center">
          <div className="max-w-md w-full">
            <h4 className="text-white">{t("Choose Architectural Design")}</h4>
            <div className="mt-5 space-y-5">
              <div className="bg-linearGradient rounded">
                <select
                  defaultValue="Pick a color"
                  className="select bg-transparent w-full cursor-pointer uppercase"
                >
                  <option>tower</option>
                  <option>Amber</option>
                  <option>Velvet</option>
                </select>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <RadioElement name="radio-1" label={t("Office Use")} />
                <RadioElement name="radio-1" label={t("Mixed Use")} />
                <RadioElement name="radio-1" label={t("Residential")} />
              </div>
              <div className="border flex justify-center border-bg items-center py-2.5">
                <p className="text-white uppercase text">{t("building")}</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <RadioElement name="radio-2" label={t("Mixed Use")} />
                <RadioElement name="radio-2" label={t("Residential")} />
                <RadioElement name="radio-2" label={t("Hospitality")} />

                <RadioElement name="radio-2" label={t("Commercial")} />
                <RadioElement name="radio-2" label={t("Health Care")} />
                <RadioElement name="radio-2" label={t("Offices")} />
              </div>
              <div className="border flex justify-center border-bg items-center py-2.5">
                <p className="text-white uppercase text">{t("industrial")}</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3gap-8">
                <RadioElement name="radio-3" label={t("Warehouse")} />
                <RadioElement name="radio-3" label={t("factory")} />
              </div>
              <Slider />
            </div>
            <hr className="divider h-px border-white" />
            <div>
              <div className="text-lg font-medium mb-1 text-white">
                {t("Total Estimated Cost")}
              </div>
              <p className="text-sm text-neutral-500">
                {t("pricing for all services is in saudi riyals")}
              </p>
              <div className="bg-linearGradient w-fit p-2.5 mt-5">0000000</div>
            </div>
          </div>
          <div className="divider after:bg-linearGradient before:bg-linearGradient lg:divider-horizontal" />
          <div className="bg-white max-w-2xl w-full  px-5 py-8">
            <div role="grid" className="grid grid-cols-2 gap-x-4 gap-y-14 mb-4">
              <Input label={t("First Name")} type="text" />
              <Input label={t("Last Name")} type="text" />
              <Input label={t("Telephone")} type="tel" />
              <Input label={t("Email")} type="email" />
              <div className="col-span-full">
                <label className="flex flex-col gap-4">
                  <span className="uppercase">{t("Message")}</span>
                  <textarea className="border outline-0 p-2" rows={10} />
                </label>
              </div>
            </div>

            <button className="cursor-pointer bg-linearGradient w-full uppercase font-bold text-lg py-2.5">
              {t("send inquiry")}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default CalculatePage;
