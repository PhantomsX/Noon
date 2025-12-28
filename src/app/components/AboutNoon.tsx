"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function AboutNoon() {
  return (
    <section className="relative w-full bg-black py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        {/* Left: Image (Dr. Naser Al Sayed) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full md:w-1/2 h-[500px] md:h-[600px] flex-shrink-0"
        >
          <Image
            src="/images/ceoimage.svg"
            alt="Dr. Naser Al Sayed"
            fill
            className="object-contain object-center"
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col justify-center items-start text-left"
        >
          <h2 className="font-elegance text-4xl md:text-6xl text-[#C6A87D] mb-8 leading-tight">
            About Noon <br /> Consultants
          </h2>

          <div className="max-w-md">
            <p className="font-neue-montreal text-gray-300 mb-12 leading-relaxed text-base">
              Noon Consultants is one of the recognized Urban, Architecture and
              Interior Design practice in the KSA. Founded in 2011, we adapt and
              respond to the context of each project to create intelligent and
              enduring Urban Planning & Design.
            </p>

            {/* Signature and Caption */}
            <div className="flex flex-col items-start">
              <span className="font-monalisa text-4xl text-[#C6A87D]">
                Dr. Naser El Sayed
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
