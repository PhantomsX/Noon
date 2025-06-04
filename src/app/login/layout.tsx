"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center relative p-4">
      {children}
    </div>
  );
}
