"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export default function ContactFormSection() {
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
    "w-full bg-transparent border-0 border-b border-[#C6A87D]/40 py-2 text-gray-200 text-sm placeholder-transparent focus:outline-none focus:border-[#C6A87D] transition-colors duration-300";
  const labelCls =
    "block rtl:font-noto-kufi-arabic ltr:font-neue-montreal text-[10px] tracking-widest text-[#C6A87D]/70 mb-1 uppercase";

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rtl:font-noto-kufi-arabic ltr:font-elegance text-4xl md:text-5xl text-[#C6A87D] text-center mb-14"
        >
          {t("contactForm.title")}
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col gap-8"
        >
          {/* Row 1 – First Name / Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <label htmlFor="firstName" className={labelCls}>
                {t("contactForm.firstName")}
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={form.firstName}
                onChange={handleChange}
                className={inputCls}
                autoComplete="given-name"
              />
            </div>
            <div>
              <label htmlFor="lastName" className={labelCls}>
                {t("contactForm.lastName")}
              </label>
              <input
                id="lastName"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <label htmlFor="telephone" className={labelCls}>
                {t("contactForm.telephone")}
              </label>
              <input
                id="telephone"
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
              <label htmlFor="email" className={labelCls}>
                {t("contactForm.email")}
              </label>
              <input
                id="email"
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
            <label htmlFor="message" className={labelCls}>
              {t("contactForm.message")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-transparent border border-[#C6A87D]/20 rounded-sm p-3 text-gray-200 text-sm focus:outline-none focus:border-[#C6A87D] transition-colors duration-300 resize-none mt-1"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-4 text-sm tracking-[0.25em] uppercase font-semibold text-black bg-linear-to-r from-[#BE7B2C] via-[#F9C39D] to-[#BE7B2C] bg-size-[200%_100%] hover:bg-right transition-all duration-500 rounded-sm"
          >
            {t("contactForm.sendInquiry")}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
