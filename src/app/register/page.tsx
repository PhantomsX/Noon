"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RegisterPage = () => {
  const t = useTranslations();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-xl rounded-3xl p-8 shadow-xl border border-[#f9c39d]/20"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-3xl font-bold text-center mb-4 text-white"
      >
        {t("auth.sign_up_title")}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center text-white mb-8"
      >
        {t("auth.already_have_account")}{" "}
        <Link href="/login" className="text-[#f9c39d] hover:underline">
          {t("auth.sign_in")}
        </Link>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="space-y-6"
      >
        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-sm text-white">{t("First Name")}</label>
            <input
              type="text"
              defaultValue="Ali"
              className="w-full h-12 px-4 border border-[#f9c39d]/30 rounded-lg bg-transparent text-white focus:border-[#f9c39d] focus:ring-2 focus:ring-[#f9c39d]/20 transition-all outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm text-white">{t("Last Name")}</label>
            <input
              type="text"
              defaultValue="Abozamel"
              className="w-full h-12 px-4 border border-[#f9c39d]/30 rounded-lg bg-transparent text-white focus:border-[#f9c39d] focus:ring-2 focus:ring-[#f9c39d]/20 transition-all outline-none"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="space-y-1">
          <label className="text-sm text-white">{t("Email")}</label>
          <input
            type="email"
            className="w-full h-12 px-4 border border-[#f9c39d]/30 rounded-lg bg-transparent text-white focus:border-[#f9c39d] focus:ring-2 focus:ring-[#f9c39d]/20 transition-all outline-none"
          />
        </div>

        {/* Job Title Field */}
        <div className="space-y-1">
          <label className="text-sm text-white">{t("auth.job_title")}</label>
          <div className="relative">
            <Select>
              <SelectTrigger className="w-full h-12! px-4 border border-[#f9c39d]/30 rounded-lg bg-transparent text-white focus:border-[#f9c39d] focus:ring-2 focus:ring-[#f9c39d]/20 transition-all outline-none">
                <SelectValue placeholder={t("auth.select_job_title")} />
              </SelectTrigger>
              <SelectContent className="border border-[#f9c39d]/30">
                <SelectItem value="designer">
                  {t("auth.jobs.designer")}
                </SelectItem>
                <SelectItem value="developer">
                  {t("auth.jobs.developer")}
                </SelectItem>
                <SelectItem value="manager">
                  {t("auth.jobs.manager")}
                </SelectItem>
                <SelectItem value="other">{t("auth.jobs.other")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Company Field */}
        <div className="space-y-1">
          <label className="text-sm text-white">{t("auth.company")}</label>
          <input
            type="text"
            className="w-full h-12 px-4 border border-[#f9c39d]/30 rounded-lg bg-transparent text-white focus:border-[#f9c39d] focus:ring-2 focus:ring-[#f9c39d]/20 transition-all outline-none"
          />
        </div>

        {/* Employees Field */}
        <div className="space-y-1">
          <label className="text-sm text-white">{t("auth.employees")}</label>
          <Select>
            <SelectTrigger className="w-full h-12! px-4 border border-[#f9c39d]/30 rounded-lg bg-transparent text-white focus:border-[#f9c39d] focus:ring-2 focus:ring-[#f9c39d]/20 transition-all outline-none">
              <SelectValue placeholder={t("auth.select_company_size")} />
            </SelectTrigger>
            <SelectContent className="border border-[#f9c39d]/30">
              <SelectItem value="1-10">
                {t("auth.company_sizes.1-10")}
              </SelectItem>
              <SelectItem value="11-50">
                {t("auth.company_sizes.11-50")}
              </SelectItem>
              <SelectItem value="51-200">
                {t("auth.company_sizes.51-200")}
              </SelectItem>
              <SelectItem value="201-500">
                {t("auth.company_sizes.201-500")}
              </SelectItem>
              <SelectItem value="501+">
                {t("auth.company_sizes.501+")}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Mobile and Country Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-sm text-white">{t("auth.mobile")}</label>
            <input
              type="tel"
              className="w-full h-12 px-4 border border-[#f9c39d]/30 rounded-lg bg-transparent text-white focus:border-[#f9c39d] focus:ring-2 focus:ring-[#f9c39d]/20 transition-all outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm text-white">{t("auth.country")}</label>
            <Select>
              <SelectTrigger className="w-full h-12! px-4 border border-[#f9c39d]/30 rounded-lg bg-transparent text-white focus:border-[#f9c39d] focus:ring-2 focus:ring-[#f9c39d]/20 transition-all outline-none">
                <SelectValue placeholder={t("auth.select_country")} />
              </SelectTrigger>
              <SelectContent className=" border border-[#f9c39d]/30">
                <SelectItem value="egypt">
                  {t("auth.countries.egypt")}
                </SelectItem>
                <SelectItem value="saudi">
                  {t("auth.countries.saudi")}
                </SelectItem>
                <SelectItem value="uae">{t("auth.countries.uae")}</SelectItem>
                <SelectItem value="qatar">
                  {t("auth.countries.qatar")}
                </SelectItem>
                <SelectItem value="other">
                  {t("auth.countries.other")}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Start Now Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-linear-to-r from-[#f9c39d] to-[#f9a56a] rounded-lg text-white font-medium shadow-md hover:shadow-lg transition-all"
        >
          {t("auth.start_now")}
        </motion.button>

        {/* Terms Agreement */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="terms"
            className="mt-1 h-4 w-4 rounded border-gray-300 text-[#f9c39d] focus:ring-[#f9c39d]"
          />
          <label htmlFor="terms" className="text-sm text-white">
            {t("auth.agree_terms")}.
          </label>
        </div>

        {/* Privacy Policy Note */}
        <p className="text-xs text-gray-500 dark:text-gray-500 pt-2">
          {t("auth.register_note")}{" "}
          <Link href="#" className="text-[#f9c39d] hover:underline">
            {t("auth.privacy_statement")}
          </Link>
          .
        </p>
      </motion.div>
    </motion.div>
  );
};

export default RegisterPage;
