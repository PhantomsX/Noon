"use client";
import React from "react";
import RadioElement from "../components/RadioElement";
import Slider from "../components/Slider";
import Input from "../components/Input";
import { useTranslations } from "next-intl";
import { Aclonica, Afacad } from "next/font/google";
import { motion } from "motion/react";
import PageTitle from "../components/PageTitle";

const aclonica = Aclonica({
  subsets: ["latin"],
  variable: "--font-aclonica",
  weight: ["400"],
  display: "swap",
});
const afacad = Afacad({
  subsets: ["latin"],
  variable: "--font-afacad",
  weight: "500",
  display: "swap",
});

const TextArea = ({ label }: { label: string }) => {
  return (
    <motion.label
      className="flex flex-col gap-2 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <span className="uppercase font-semibold text-sm text-white mb-1">
        {label}
      </span>
      <textarea
        className="border border-gray-300 dark:border-gray-600 rounded-lg outline-none px-3 py-2 bg-white dark:bg-neutral-900 text-black dark:text-white shadow-sm focus:border-gold focus:ring-2 focus:ring-gold transition-all duration-200 w-full"
        rows={10}
      />
    </motion.label>
  );
};

const CalculatePage = () => {
  const t = useTranslations();
  return (
    <main style={afacad.style} className="flex-1 flex-col flex">
      <motion.div
        className="flex max-sm:flex-col pt-12 sm:pt-28 sm:ps-[88px] max-sm:gap-16 px-9"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <PageTitle>{t("calculateTitle")}</PageTitle>
        <motion.div
          className="flex-1 flex max-lg:flex-col md:gap-16 gap-8 justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
          <motion.div
            className="max-w-md w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          >
            <h4 className="text-white">{t("Choose Architectural Design")}</h4>
            <div className="mt-5 space-y-5">
              <motion.div
                className="bg-linearGradient rounded"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
              >
                <select
                  defaultValue="Pick a color"
                  className="select bg-transparent w-full cursor-pointer uppercase"
                >
                  <option>tower</option>
                  <option>Amber</option>
                  <option>Velvet</option>
                </select>
              </motion.div>
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 1.0 }}
              >
                <RadioElement name="radio-1" label={t("Office Use")} />
                <RadioElement name="radio-1" label={t("Mixed Use")} />
                <RadioElement name="radio-1" label={t("Residential")} />
              </motion.div>
              <motion.div
                className="border flex justify-center border-bg items-center py-2.5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
              >
                <p className="text-white uppercase text">{t("building")}</p>
              </motion.div>
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 1.4 }}
              >
                <RadioElement name="radio-2" label={t("Mixed Use")} />
                <RadioElement name="radio-2" label={t("Residential")} />
                <RadioElement name="radio-2" label={t("Hospitality")} />

                <RadioElement name="radio-2" label={t("Commercial")} />
                <RadioElement name="radio-2" label={t("Health Care")} />
                <RadioElement name="radio-2" label={t("Offices")} />
              </motion.div>
              <motion.div
                className="border flex justify-center border-bg items-center py-2.5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 1.6 }}
              >
                <p className="text-white uppercase text">{t("industrial")}</p>
              </motion.div>
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 1.8 }}
              >
                <RadioElement name="radio-3" label={t("Warehouse")} />
                <RadioElement name="radio-3" label={t("factory")} />
              </motion.div>
              <Slider />
            </div>
            <div className="divider h-px border-white" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 2.0 }}
            >
              <div className="text-lg font-medium mb-1 text-white">
                {t("Total Estimated Cost")}
              </div>
              <p className="text-sm text-neutral-500">
                {t("pricing for all services is in saudi riyals")}
              </p>
              <div className="bg-linearGradient w-fit p-2.5 mt-5">0000000</div>
            </motion.div>
          </motion.div>
          <div className="divider after:bg-linearGradient before:bg-linearGradient lg:divider-horizontal" />
          <motion.div
            className="border border-bg max-w-2xl w-full px-5 py-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 2.2 }}
          >
            <div role="grid" className="grid grid-cols-2 gap-x-4 gap-y-14 mb-4">
              <Input label={t("First Name")} type="text" />
              <Input label={t("Last Name")} type="text" />
              <Input label={t("Telephone")} type="tel" />
              <Input label={t("Email")} type="email" />
              <div className="col-span-full">
                <TextArea label={t("Message")} />
              </div>
            </div>

            <button className="cursor-pointer bg-linearGradient w-full uppercase font-bold text-lg py-2.5">
              {t("send inquiry")}
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default CalculatePage;
