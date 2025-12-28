"use client";
import Image from "next/image";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "The architectural drawings produced by the team were exceptionally detailed and innovative. Their expertise transformed our vision into reality.",
    name: "Ahmed Al-Mansouri",
    title: "CEO of Skyline Developers",
    image: "/images/engineer.svg",
  },
  {
    text: "The architectural drawings provided by the team were exceptionally detailed and innovative. Their expertise transformed our vision into reality.",
    name: "Ahmed Al-Mansouri",
    title: "CEO of Skyline Developers",
    image: "/images/engineer.svg",
  },
  {
    text: "The architectural drawings provided by the team were exceptionally detailed and innovative. Their expertise transformed our vision into reality.",
    name: "Ahmed Al-Mansouri",
    title: "CEO of Skyline Developers",
    image: "/images/engineer.svg",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-black py-24 px-4 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-20 font-elegance text-4xl md:text-5xl text-[#C6A87D] text-center">
          Partners Words About Noon
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col border-t border-[#C6A87D]/20 pt-10"
            >
              <p className="font-neue-montreal text-gray-300 leading-relaxed mb-12 text-base">
                &ldquo;{item.text}&rdquo;
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border border-[#C6A87D]/10 bg-white/5">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-medium font-neue-montreal">
                    {item.name}
                  </span>
                  <span className="text-[#C6A87D] text-[10px] uppercase tracking-widest font-normal">
                    {item.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="mt-16 flex justify-end items-center gap-6 font-neue-montreal text-xs tracking-widest text-gray-400 uppercase">
          <button className="hover:text-[#C6A87D] transition-colors flex items-center gap-2">
            <span className="text-[10px]">‹</span> back
          </button>
          <span className="text-gray-700 font-light">\</span>
          <button className="hover:text-[#C6A87D] transition-colors flex items-center gap-2">
            Next <span className="text-[10px]">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
