"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Enhanced animation variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

const buttonVariants = {
  idle: { scale: 1 },
  hover: {
    scale: 1.02,
    boxShadow:
      "0 10px 15px -3px rgba(249, 195, 157, 0.3), 0 4px 6px -4px rgba(249, 195, 157, 0.2)",
  },
  tap: {
    scale: 0.98,
    boxShadow:
      "0 5px 10px -3px rgba(249, 195, 157, 0.3), 0 2px 3px -2px rgba(249, 195, 157, 0.2)",
  },
};

// Custom Input component with animation
const AnimatedInput = ({
  label,
  type = "text",
  defaultValue = "",
  ...props
}) => (
  <motion.div variants={itemVariants} className="space-y-1">
    <label className="text-sm text-gray-600 dark:text-gray-400">{label}</label>
    <motion.input
      type={type}
      defaultValue={defaultValue}
      className="w-full h-12 px-4 border border-[#f9c39d]/30 dark:border-gray-700 rounded-lg bg-transparent text-black dark:text-white focus:border-[#f9c39d] focus:ring-2 focus:ring-[#f9c39d]/20 transition-all outline-none"
      whileFocus={{ scale: 1.01, borderColor: "#f9c39d" }}
      {...props}
    />
  </motion.div>
);

// Custom Select component with animation
const AnimatedSelect = ({ label, placeholder, options }) => (
  <motion.div variants={itemVariants} className="space-y-1">
    <label className="text-sm text-gray-600 dark:text-gray-400">{label}</label>
    <Select>
      <SelectTrigger className="w-full h-12 px-4 border border-[#f9c39d]/30 dark:border-gray-700 rounded-lg bg-transparent text-black dark:text-white focus:border-[#f9c39d] focus:ring-2 focus:ring-[#f9c39d]/20 transition-all outline-none">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-white dark:bg-gray-900 border border-[#f9c39d]/30 dark:border-gray-700">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </motion.div>
);

const RegisterPage = () => {
  const jobOptions = [
    { value: "designer", label: "Designer" },
    { value: "developer", label: "Developer" },
    { value: "manager", label: "Manager" },
    { value: "other", label: "Other" },
  ];

  const employeeOptions = [
    { value: "1-10", label: "1-10 employees" },
    { value: "11-50", label: "11-50 employees" },
    { value: "51-200", label: "51-200 employees" },
    { value: "201-500", label: "201-500 employees" },
    { value: "501+", label: "501+ employees" },
  ];

  const countryOptions = [
    { value: "egypt", label: "Egypt" },
    { value: "saudi", label: "Saudi Arabia" },
    { value: "uae", label: "United Arab Emirates" },
    { value: "qatar", label: "Qatar" },
    { value: "other", label: "Other" },
  ];

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-xl bg-white dark:bg-black rounded-3xl p-8 shadow-xl border border-[#f9c39d]/20"
    >
      <motion.div variants={contentVariants} initial="hidden" animate="visible">
        <motion.h1
          variants={itemVariants}
          className="text-3xl font-bold text-center mb-4 text-black dark:text-white"
        >
          Sign up now to start your free trial.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-center text-gray-600 dark:text-gray-400 mb-8"
        >
          Already have an account?{" "}
          <Link href="/auth/login" className="text-[#f9c39d] hover:underline">
            Sign in
          </Link>
        </motion.p>

        <motion.div variants={itemVariants} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <AnimatedInput label="First Name" defaultValue="Ali" />
            <AnimatedInput label="Last Name" defaultValue="Abozamel" />
          </div>

          {/* Email Field */}
          <AnimatedInput label="Email" type="email" />

          {/* Job Title Field */}
          <AnimatedSelect
            label="Job Title"
            placeholder="Select your job title"
            options={jobOptions}
          />

          {/* Company Field */}
          <AnimatedInput label="Company" />

          {/* Employees Field */}
          <AnimatedSelect
            label="Employees"
            placeholder="Select company size"
            options={employeeOptions}
          />

          {/* Mobile and Country Fields */}
          <div className="grid grid-cols-2 gap-4">
            <AnimatedInput label="Mobile" type="tel" />
            <AnimatedSelect
              label="Country"
              placeholder="Select country"
              options={countryOptions}
            />
          </div>

          {/* Start Now Button */}
          <motion.button
            variants={buttonVariants}
            initial="idle"
            whileHover="hover"
            whileTap="tap"
            className="w-full py-3 bg-gradient-to-r from-[#f9c39d] to-[#f9a56a] rounded-lg text-white font-medium shadow-md transition-all"
          >
            Start Now
          </motion.button>

          {/* Terms Agreement */}
          <motion.div
            variants={itemVariants}
            className="flex items-start gap-2"
          >
            <motion.input
              type="checkbox"
              id="terms"
              className="mt-1 h-4 w-4 rounded border-gray-300 text-[#f9c39d] focus:ring-[#f9c39d]"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
            <label
              htmlFor="terms"
              className="text-sm text-gray-600 dark:text-gray-400"
            >
              I agree to the{" "}
              <Link href="#" className="text-[#f9c39d] hover:underline">
                Firm Agreement
              </Link>
              .
            </label>
          </motion.div>

          {/* Privacy Policy Note */}
          <motion.p
            variants={itemVariants}
            className="text-xs text-gray-500 dark:text-gray-500 pt-2"
          >
            By registering, you agree to the processing of your personal data by
            Salesforce as described in the{" "}
            <Link href="#" className="text-[#f9c39d] hover:underline">
              Privacy Statement
            </Link>
            .
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RegisterPage;
