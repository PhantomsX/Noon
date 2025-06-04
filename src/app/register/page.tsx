"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RegisterPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-xl bg-black rounded-3xl p-8 shadow-xl border border-[#f9c39d]/20"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-3xl font-bold text-center mb-4 text-white"
      >
        Sign up now to start your free trial.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center text-white mb-8"
      >
        Already have an account?{" "}
        <Link href="/login" className="text-[#f9c39d] hover:underline">
          Sign in
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
            <label className="text-sm text-white">First Name</label>
            <input
              type="text"
              defaultValue="Ali"
              className="w-full h-12 px-4 border border-[#f9c39d]/30 rounded-lg bg-transparent text-white focus:border-[#f9c39d] focus:ring-2 focus:ring-[#f9c39d]/20 transition-all outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm text-white">Last Name</label>
            <input
              type="text"
              defaultValue="Abozamel"
              className="w-full h-12 px-4 border border-[#f9c39d]/30 rounded-lg bg-transparent text-white focus:border-[#f9c39d] focus:ring-2 focus:ring-[#f9c39d]/20 transition-all outline-none"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="space-y-1">
          <label className="text-sm text-white">Email</label>
          <input
            type="email"
            className="w-full h-12 px-4 border border-[#f9c39d]/30 rounded-lg bg-transparent text-white focus:border-[#f9c39d] focus:ring-2 focus:ring-[#f9c39d]/20 transition-all outline-none"
          />
        </div>

        {/* Job Title Field */}
        <div className="space-y-1">
          <label className="text-sm text-white">Job Title</label>
          <div className="relative">
            <Select>
              <SelectTrigger className="w-full !h-12 px-4 border border-[#f9c39d]/30  rounded-lg bg-transparent text-white focus:border-[#f9c39d] focus:ring-2 focus:ring-[#f9c39d]/20 transition-all outline-none">
                <SelectValue placeholder="Select your job title" />
              </SelectTrigger>
              <SelectContent className="border border-[#f9c39d]/30">
                <SelectItem value="designer">Designer</SelectItem>
                <SelectItem value="developer">Developer</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Company Field */}
        <div className="space-y-1">
          <label className="text-sm text-white">Company</label>
          <input
            type="text"
            className="w-full h-12 px-4 border border-[#f9c39d]/30 rounded-lg bg-transparent text-white focus:border-[#f9c39d] focus:ring-2 focus:ring-[#f9c39d]/20 transition-all outline-none"
          />
        </div>

        {/* Employees Field */}
        <div className="space-y-1">
          <label className="text-sm text-white">Employees</label>
          <Select>
            <SelectTrigger className="w-full !h-12 px-4 border border-[#f9c39d]/30 rounded-lg bg-transparent text-white focus:border-[#f9c39d] focus:ring-2 focus:ring-[#f9c39d]/20 transition-all outline-none">
              <SelectValue placeholder="Select company size" />
            </SelectTrigger>
            <SelectContent className="border border-[#f9c39d]/30">
              <SelectItem value="1-10">1-10 employees</SelectItem>
              <SelectItem value="11-50">11-50 employees</SelectItem>
              <SelectItem value="51-200">51-200 employees</SelectItem>
              <SelectItem value="201-500">201-500 employees</SelectItem>
              <SelectItem value="501+">501+ employees</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Mobile and Country Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-sm text-white">Mobile</label>
            <input
              type="tel"
              className="w-full h-12 px-4 border border-[#f9c39d]/30 rounded-lg bg-transparent text-white focus:border-[#f9c39d] focus:ring-2 focus:ring-[#f9c39d]/20 transition-all outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm text-white">Country</label>
            <Select>
              <SelectTrigger className="w-full !h-12 px-4 border border-[#f9c39d]/30 rounded-lg bg-transparent text-white focus:border-[#f9c39d] focus:ring-2 focus:ring-[#f9c39d]/20 transition-all outline-none">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent className=" border border-[#f9c39d]/30">
                <SelectItem value="egypt">Egypt</SelectItem>
                <SelectItem value="saudi">Saudi Arabia</SelectItem>
                <SelectItem value="uae">United Arab Emirates</SelectItem>
                <SelectItem value="qatar">Qatar</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Start Now Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-gradient-to-r from-[#f9c39d] to-[#f9a56a] rounded-lg text-white font-medium shadow-md hover:shadow-lg transition-all"
        >
          Start Now
        </motion.button>

        {/* Terms Agreement */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="terms"
            className="mt-1 h-4 w-4 rounded border-gray-300 text-[#f9c39d] focus:ring-[#f9c39d]"
          />
          <label htmlFor="terms" className="text-sm text-white">
            I agree to the{" "}
            <Link href="#" className="text-[#f9c39d] hover:underline">
              Firm Agreement
            </Link>
            .
          </label>
        </div>

        {/* Privacy Policy Note */}
        <p className="text-xs text-gray-500 dark:text-gray-500 pt-2">
          By registering, you agree to the processing of your personal data by
          Salesforce as described in the{" "}
          <Link href="#" className="text-[#f9c39d] hover:underline">
            Privacy Statement
          </Link>
          .
        </p>
      </motion.div>
    </motion.div>
  );
};

export default RegisterPage;
