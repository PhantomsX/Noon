"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight, Slash } from "lucide-react";

export default function Testimonials() {
  const t = useTranslations();

  const testimonials = [
    {
      text: t("clientText1"),
      name: t("testimonials.ahmed_al_mansouri"),
      title: t("testimonials.ceo_skyline"),
      image: "/images/engineer.svg",
    },
    {
      text: t("clientText1"),
      name: t("testimonials.ahmed_al_mansouri"),
      title: t("testimonials.ceo_skyline"),
      image: "/images/engineer.svg",
    },
    {
      text: t("clientText1"),
      name: t("testimonials.ahmed_al_mansouri"),
      title: t("testimonials.ceo_skyline"),
      image: "/images/engineer.svg",
    },
  ];

  return (
    <section className="w-full py-10 md:py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-10 md:mb-20 font-elegance text-3xl md:text-5xl text-[#C6A87D] text-center">
          {t("partners_words_about_noon")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-20">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col border-t border-[#C6A87D]/20 pt-6 md:pt-10"
            >
              <p className="font-neue-montreal text-gray-300 leading-relaxed mb-6 md:mb-12 text-base">
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
        <div className="mt-8 md:mt-16 flex justify-end items-center gap-6 font-neue-montreal text-xs tracking-widest text-gray-400 uppercase">
          <button className="hover:text-[#C6A87D] transition-colors flex items-center gap-2">
            <ChevronLeft className="size-3.5 rtl:rotate-180" />{" "}
            {t("common.back")}
          </button>
          <Slash className="-rotate-20" />
          <button className="hover:text-[#C6A87D] transition-colors flex items-center gap-2">
            {t("common.next")}{" "}
            <ChevronRight className="size-3.5 rtl:rotate-180" />
          </button>
        </div>
      </div>
    </section>
  );
}
