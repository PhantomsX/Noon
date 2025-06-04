"use client";

import React from "react";
import Link from "next/link";
import { Eye } from "lucide-react";
import { motion } from "framer-motion";

const LoginPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md bg-black rounded-3xl p-8 shadow-xl border border-[#f9c39d]/20"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-3xl font-bold text-center mb-6 text-white"
      >
        Sign in
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center text-white mb-6"
      >
        New user?{" "}
        <Link href="/register" className="text-[#f9c39d] hover:underline">
          Create an account
        </Link>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="space-y-4"
      >
        <div className="space-y-1">
          <label className="text-sm text-white">Email address</label>
          <input
            type="email"
            defaultValue="ali.abozamel@noon.sa"
            className="w-full h-12 px-4 border border-[#f9c39d]/30 rounded-lg bg-transparent text-white focus:border-[#f9c39d] focus:ring-2 focus:ring-[#f9c39d]/20 transition-all outline-none"
          />
        </div>

        <div className="space-y-1 relative">
          <label className="text-sm text-white">Password</label>
          <div className="relative">
            <input
              type="password"
              className="w-full h-12 px-4 border border-[#f9c39d]/30 rounded-lg bg-transparent text-white focus:border-[#f9c39d] focus:ring-2 focus:ring-[#f9c39d]/20 transition-all outline-none pr-10"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white">
              <Eye size={20} />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center pt-2">
          <button className="text-sm text-white hover:text-[#f9c39d] transition-colors">
            Can't sign in?
          </button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-gradient-to-r from-[#f9c39d] to-[#f9a56a] rounded-lg text-white font-medium shadow-md hover:shadow-lg transition-all"
          >
            Sign in
          </motion.button>
        </div>

        <div className="relative flex items-center py-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-white">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-300 rounded-lg text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="24px"
              height="24px"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            <span>Google</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-300 rounded-lg text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="24px"
              height="24px"
            >
              <linearGradient
                id="Ld6sqrtcxMyckEl6xeDdMa"
                x1="9.993"
                x2="40.615"
                y1="9.993"
                y2="40.615"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#2aa4f4" />
                <stop offset="1" stopColor="#007ad9" />
              </linearGradient>
              <path
                fill="url(#Ld6sqrtcxMyckEl6xeDdMa)"
                d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
              />
              <path
                fill="#fff"
                d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
              />
            </svg>
            <span>Facebook</span>
          </motion.button>
        </div>

        <p className="text-xs text-center text-white mt-6">
          Protected by reCAPTCHA and subject to the{" "}
          <a href="#" className="text-[#f9c39d] hover:underline">
            Cuboid Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#f9c39d] hover:underline">
            Terms of Service
          </a>
          .
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;
