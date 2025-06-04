"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

const gradientVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-black relative p-4 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Design Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-[#f9c39d]/20 to-transparent rounded-full blur-3xl"
          variants={gradientVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-tl from-[#f9c39d]/20 to-transparent rounded-full blur-3xl"
          variants={gradientVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-40 h-40 bg-gradient-to-tr from-[#f9c39d]/10 to-transparent rounded-full blur-3xl"
          variants={gradientVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        />
      </div>

      {/* Logo */}
      <motion.div
        variants={itemVariants}
        className="absolute top-6 left-6 z-10"
      >
        <div className="flex items-center gap-2">
          <motion.div
            className="w-8 h-8 bg-gradient-to-br from-[#f9c39d] to-[#f9a56a] rounded-full"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
          <motion.span
            className="text-white text-xl font-bold"
            whileHover={{ scale: 1.05, x: 3 }}
          >
            Noon
          </motion.span>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div variants={itemVariants}>{children}</motion.div>
    </motion.div>
  );
}
