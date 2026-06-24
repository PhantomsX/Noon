"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import ContactInfoSection from "../components/ContactInfoSection";

const SERVICES = [
  "Architectural Design",
  "Urban Design",
  "Master Planning",
  "Construction Supervision",
  "Structure Engineering",
  "Permits",
  "Engineering Studies",
  "Landscaping",
  "Project Management",
  "Interior Design",
  "Architect of Record",
];

export default function ContactPage() {
  const t = useTranslations();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    telephone: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ firstName: "", lastName: "", telephone: "", email: "", service: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
    }
  };

  const labelCls =
    "block ltr:font-neue-montreal rtl:font-ibm-plex-arabic text-[10px] tracking-[0.2em] text-[#C6A87D]/70 uppercase mb-2";
  const inputCls =
    "w-full bg-transparent border-b border-white/15 py-2.5 text-gray-200 text-sm ltr:font-neue-montreal rtl:font-ibm-plex-arabic focus:outline-none focus:border-[#C6A87D]/60 transition-colors duration-300 placeholder:text-white/20";

  return (
    <main className="min-h-screen">
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        {/* Left — headline + contact info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-20 lg:py-28 bg-[#0a0a0a] border-r border-white/5"
        >
          {/* Eyebrow */}
          <p className="ltr:font-neue-montreal rtl:font-ibm-plex-arabic text-[#C6A87D]/60 text-xs tracking-[0.2em] uppercase mb-6 flex items-center gap-2 rtl:flex-row-reverse">
            <span className="inline-block w-6 h-px bg-[#C6A87D]/40" />
            {t("contactPage.eyebrow")}
          </p>

          {/* Two-tone title */}
          <h1 className="ltr:font-elegance rtl:font-year-of-camel text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-6 rtl:text-right">
            <span className="text-bg block">{t("contactPage.titleMain")}</span>
            <span className="text-[#C6A87D]/30 block">{t("contactPage.titleDim")}</span>
          </h1>

          {/* Subtitle */}
          <p className="ltr:font-neue-montreal rtl:font-ibm-plex-arabic text-gray-400 text-sm leading-relaxed mb-12 max-w-xs rtl:text-right">
            {t("contactPage.subtitle")}
          </p>

          {/* Contact info */}
          <div className="flex flex-col gap-4">
            {[
              { icon: "phone", text: "+966 53 992 9050" },
              { icon: "email", text: "Info@nnc.sa" },
              { icon: "location", text: "Al-Nakheel District, Riyadh" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-3 rtl:flex-row-reverse">
                <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  {icon === "phone" && (
                    <svg className="w-3.5 h-3.5 text-[#C6A87D]/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  )}
                  {icon === "email" && (
                    <svg className="w-3.5 h-3.5 text-[#C6A87D]/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  )}
                  {icon === "location" && (
                    <svg className="w-3.5 h-3.5 text-[#C6A87D]/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  )}
                </span>
                <span className="ltr:font-neue-montreal rtl:font-ibm-plex-arabic text-gray-300 text-sm">{text}</span>
              </div>
            ))}
          </div>

          {/* Privacy note */}
          <div className="mt-12 flex items-start gap-3 rtl:flex-row-reverse">
            <svg className="w-4 h-4 text-white/20 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <p className="ltr:font-neue-montreal rtl:font-ibm-plex-arabic text-white/30 text-xs leading-relaxed rtl:text-right">
              {t("contactPage.privacyNote")}
            </p>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-20 lg:py-28"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full max-w-lg">

            {/* Row 1 – First / Last name */}
            <div className="grid grid-cols-2 gap-6">
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
                  placeholder="Nizar"
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
                  placeholder="El Sayed"
                  className={inputCls}
                  autoComplete="family-name"
                />
              </div>
            </div>

            {/* Row 2 – Phone / Email */}
            <div className="grid grid-cols-2 gap-6">
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
                  placeholder="+966 5x xxx xxxx"
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
                  placeholder="you@example.com"
                  className={inputCls}
                  autoComplete="email"
                  dir="ltr"
                />
              </div>
            </div>

            {/* Service dropdown */}
            <div>
              <label htmlFor="cp-service" className={labelCls}>
                {t("contactPage.serviceNeeded")}
              </label>
              <select
                id="cp-service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full bg-[#111] border border-white/10 py-3 px-4 text-gray-300 text-sm ltr:font-neue-montreal rtl:font-ibm-plex-arabic focus:outline-none focus:border-[#C6A87D]/60 transition-colors duration-300 appearance-none cursor-pointer"
              >
                <option value="" disabled>{t("contactPage.selectService")}</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="cp-message" className={labelCls}>
                {t("contactPage.message")}
              </label>
              <textarea
                id="cp-message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder={t("contactPage.messagePlaceholder")}
                className="w-full bg-[#111] border border-white/10 p-4 text-gray-200 text-sm ltr:font-neue-montreal rtl:font-ibm-plex-arabic focus:outline-none focus:border-[#C6A87D]/60 transition-colors duration-300 resize-none placeholder:text-white/20 mt-1"
              />
            </div>

            {/* Submit + reply time */}
            <div className="flex items-center gap-6">
              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="group relative inline-flex items-center gap-3 px-8 py-4 text-sm tracking-widest uppercase font-semibold text-black bg-linear-to-r from-[#BE7B2C] via-[#F9C39D] to-[#BE7B2C] bg-size-[200%_100%] hover:bg-right transition-all duration-500 rounded-full overflow-hidden ltr:font-neue-montreal rtl:font-ibm-plex-arabic shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">
                  {status === "sending" ? "Sending…" : status === "sent" ? "Sent ✓" : `${t("contactPage.sendInquiry")} →`}
                </span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent" />
              </button>
              {status === "error" ? (
                <p className="ltr:font-neue-montreal rtl:font-ibm-plex-arabic text-red-400 text-xs">
                  Failed to send. Please try again.
                </p>
              ) : (
                <p className="ltr:font-neue-montreal rtl:font-ibm-plex-arabic text-white/30 text-xs leading-relaxed rtl:text-right">
                  {t("contactPage.replyTime")}
                </p>
              )}
            </div>

          </form>
        </motion.div>

      </section>

      <ContactInfoSection />
    </main>
  );
}
