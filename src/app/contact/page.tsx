"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import PageTitle from "../components/PageTitle";
import ContactInfoSection from "../components/ContactInfoSection";

export default function ContactPage() {
  const t = useTranslations();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    telephone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    // TODO: wire up to backend / email service
    console.log("Contact form submitted:", form);
  };

  /* ── shared field styles ── */
  const inputCls =
    "w-full bg-transparent border-0 border-b border-[#C6A87D]/40 py-2 text-gray-200 text-sm focus:outline-none focus:border-[#C6A87D] transition-colors duration-300";
  const labelCls =
    "block rtl:font-ibm-plex-arabic ltr:font-neue-montreal text-[10px] tracking-widest text-[#C6A87D]/70 uppercase mb-1";

  return (
    <main className="min-h-screen">
      {/* ── Header ── */}
      <section className="flex max-sm:flex-col gap-4 px-6 md:px-9 pt-12 sm:ps-[80px]!">
        <aside className="sm:max-w-[420px]">
          <PageTitle>{t("contactPage.title")}</PageTitle>
        </aside>

        <div className="flex-1">
          <p className="text-xl mb-8 text-white text-center md:text-start ltr:font-neue-montreal rtl:font-ibm-plex-arabic">
            {t("contactPage.description")}
          </p>
        </div>
      </section>

      {/* ── Form ── */}
      <section className="px-6 md:px-9 sm:px-[80px] py-16 flex *:flex-1 justify-center">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-10 max-w-[1400px]"
        >
          {/* Row 1 – First Name / Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            <div>
              <label htmlFor="cp-firstName" className={labelCls}>
                {t("contactPage.firstName")}
              </label>
              <input
                id="cp-firstName"
                name="firstName"
                type="text"
                value={form.firstName}
                onChange={handleChange}
                className={inputCls}
                autoComplete="given-name"
              />
            </div>
            <div>
              <label htmlFor="cp-lastName" className={labelCls}>
                {t("contactPage.lastName")}
              </label>
              <input
                id="cp-lastName"
                name="lastName"
                type="text"
                value={form.lastName}
                onChange={handleChange}
                className={inputCls}
                autoComplete="family-name"
              />
            </div>
          </div>

          {/* Row 2 – Telephone / Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            <div>
              <label htmlFor="cp-telephone" className={labelCls}>
                {t("contactPage.telephone")}
              </label>
              <input
                id="cp-telephone"
                name="telephone"
                type="tel"
                value={form.telephone}
                onChange={handleChange}
                className={inputCls}
                autoComplete="tel"
                dir="ltr"
              />
            </div>
            <div>
              <label htmlFor="cp-email" className={labelCls}>
                {t("contactPage.email")}
              </label>
              <input
                id="cp-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={inputCls}
                autoComplete="email"
                dir="ltr"
              />
            </div>
          </div>

          {/* Row 3 – Message */}
          <div>
            <label htmlFor="cp-message" className={labelCls}>
              {t("contactPage.message")}
            </label>
            <textarea
              id="cp-message"
              name="message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              className="w-full mt-2 bg-transparent border border-[#C6A87D]/20 p-4 text-gray-200 text-sm focus:outline-none focus:border-[#C6A87D] transition-colors duration-300 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 text-sm tracking-[0.25em] uppercase font-semibold text-black bg-linear-to-r from-[#BE7B2C] via-[#F9C39D] to-[#BE7B2C] bg-size-[200%_100%] hover:bg-right transition-all duration-500"
          >
            {t("contactPage.sendInquiry")}
          </button>
        </motion.form>
      </section>

      {/* ── Office addresses & social links ── */}
      <ContactInfoSection />
    </main>
  );
}
