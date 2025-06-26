/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Slash, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import PageTitle from "../components/PageTitle";

type Service = {
  title: string;
  description: string;
  image: string;
  features: string[];
};

function Page() {
  const t = useTranslations("servicess");
  const services = [
    {
      title: t("service-1"),
      description: t("service-1-description"),
      image: "/images/ENGINEERING AND ARCHITECTURAL DESIGN.png",
      features: [
        t("service-1-features.1"),
        t("service-1-features.2"),
        t("service-1-features.3"),
        t("service-1-features.4"),
      ],
    },
    {
      title: t("service-2"),
      description: t("service-2-description"),
      image: "/images/URBAN DESIGN.png",
      features: [
        t("service-2-features.1"),
        t("service-2-features.2"),
        t("service-2-features.3"),
        t("service-2-features.4"),
        t("service-2-features.5"),
      ],
    },
    {
      title: t("service-4"),
      description: t("service-4-description"),
      image: "/images/CONSTRUCTION SUPERVISION.png",
      features: [
        t("service-4-features.1"),
        t("service-4-features.2"),
        t("service-4-features.3"),
        t("service-4-features.4"),
        t("service-4-features.5"),
      ],
    },
    {
      title: t("service-3"),
      description: t("service-3-description"),
      image: "/images/MASTER PLANNING.png",
      features: [
        t("service-3-features.1"),
        t("service-3-features.2"),
        t("service-3-features.3"),
        t("service-3-features.4"),
        t("service-3-features.5"),
      ],
    },
    {
      title: t("service-6"),
      description: t("service-6-description"),
      image: "/images/ENGINEERING REPORTS.png",
      features: [
        t("service-6-features.1"),
        t("service-6-features.2"),
        t("service-6-features.3"),
        t("service-6-features.4"),
        t("service-6-features.5"),
      ],
    },
    {
      title: t("service-5"),
      description: t("service-5-description"),
      image: "/images/PERMITS.png",
      features: [
        t("service-5-features.1"),
        t("service-5-features.2"),
        t("service-5-features.3"),
        t("service-5-features.4"),
        t("service-5-features.5"),
      ],
    },
    {
      title: t("service-8"),
      description: t("service-8-description"),
      image: "/images/ENGINEERING STUDIES.png",
      features: [
        t("service-8-features.1"),
        t("service-8-features.2"),
        t("service-8-features.3"),
        t("service-8-features.4"),
        t("service-8-features.5"),
      ],
    },
    {
      title: t("service-7"),
      description: t("service-7-description"),
      image: "/images/VALUE ENGINEERING.png",
      features: [
        t("service-7-features.1"),
        t("service-7-features.2"),
        t("service-7-features.3"),
        t("service-7-features.4"),
        t("service-7-features.5"),
      ],
    },
    {
      title: t("service-9"),
      description: t("service-9-description"),
      image: "/images/LANDSCAPING.png",
      features: [
        t("service-9-features.1"),
        t("service-9-features.2"),
        t("service-9-features.3"),
        t("service-9-features.4"),
        t("service-9-features.5"),
      ],
    },
    {
      title: t("service-11"),
      description: t("service-11-description"),
      image: "/images/PROJECT MANAGEMENT.png",
      features: [
        t("service-11-features.1"),
        t("service-11-features.2"),
        t("service-11-features.3"),
        t("service-11-features.4"),
        t("service-11-features.5"),
      ],
    },
    {
      title: t("service-10"),
      description: t("service-10-description"),
      image: "/images/INTERIOR DESIGN.png",
      features: [
        t("service-10-features.1"),
        t("service-10-features.2"),
        t("service-10-features.3"),
        t("service-10-features.4"),
        t("service-10-features.5"),
      ],
    },
    {
      title: t("service-12"),
      description: t("service-12-description"),
      image: "/images/OR ARCHITECT OF RECORD.png",
      features: [
        t("service-12-features.1"),
        t("service-12-features.2"),
        t("service-12-features.3"),
        t("service-12-features.4"),
        t("service-12-features.5"),
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="flex max-sm:flex-col gap-8 lg:gap-16 px-6 md:px-9 pt-12 sm:ps-[80px]">
        <aside className="sm:max-w-[350px] space-y-4">
          <PageTitle>{t("title-1")}</PageTitle>
        </aside>
        <div className="flex-1">
          <p className="text-xl mb-8 text-white text-center md:text-start ltr:font-neue-montreal rtl:font-noto-kufi-arabic">
            {t("breif")}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-9 sm:ps-[80px] pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {services.map((service, i) => (
            <ServiceFlipCard key={i} id={i} service={service} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Page;

const ServiceFlipCard = ({ service, id }: { service: Service; id: number }) => {
  const t = useTranslations();
  const router = useRouter();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleViewProjects = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push("/projects");
  };

  const containerVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: (id % 3) * 0.1, // Stagger animation based on position in row
      },
    },
  };

  return (
    <motion.div
      className="group perspective-1000 h-[420px] w-full max-w-[400px] mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Flip Card Container */}
      <div
        className="relative w-full h-full cursor-pointer preserve-3d transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
        onClick={handleFlip}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-2xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative w-full h-full">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Service Number - Top Left */}
            <motion.div
              className="absolute top-4 left-4 flex items-center z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="bg-gradient-to-r from-[#BE7B2C] to-[#F9C39D] rounded-full px-3 py-1 backdrop-blur-sm border border-white/20">
                <div className="flex items-center gap-1">
                  <Slash
                    size={12}
                    className="-rotate-[20deg] text-white"
                    strokeWidth={3}
                  />
                  <span className="text-white font-bold text-sm">
                    {(id + 1).toString().padStart(2, "0")}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Front Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <motion.h3
                className="text-xl lg:text-2xl font-bold text-white mb-2 ltr:font-neue-montreal rtl:font-noto-kufi-arabic line-clamp-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {service.title}
              </motion.h3>

              <motion.p
                className="text-sm text-gray-300 mb-4 line-clamp-3 ltr:font-neue-montreal rtl:font-noto-kufi-arabic"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {service.description}
              </motion.p>

              <motion.div
                className="flex items-center text-bg text-sm font-medium"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span>Click to view details</span>
                <ArrowRight
                  size={16}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="p-6 h-full flex flex-col relative">
            {/* Service Number - Top Right on Back */}
            <motion.div
              className="absolute top-4 right-4 flex items-center z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="bg-gradient-to-r from-[#BE7B2C] to-[#F9C39D] rounded-full px-3 py-1 backdrop-blur-sm border border-gray-500/30">
                <div className="flex items-center gap-1">
                  <Slash
                    size={12}
                    className="-rotate-[20deg] text-white"
                    strokeWidth={3}
                  />
                  <span className="text-white font-bold text-sm">
                    {(id + 1).toString().padStart(2, "0")}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Back Header */}
            <div className="mb-4 mt-8">
              <h3 className="text-lg font-bold text-bg mb-2 ltr:font-neue-montreal rtl:font-noto-kufi-arabic">
                {service.title}
              </h3>
              <div className="h-px bg-gradient-to-r from-[#BE7B2C] to-[#F9C39D] mb-4" />
            </div>

            {/* Features List */}
            <div className="flex-1 overflow-y-auto">
              <h4 className="text-white font-semibold mb-3 text-sm">
                Key Features:
              </h4>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="text-gray-300 text-xs flex items-start gap-2 ltr:font-neue-montreal rtl:font-noto-kufi-arabic"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-bg mt-1.5 flex-shrink-0" />
                    <span className="flex-1">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Back Actions */}
            <div className="mt-6 space-y-3">
              <motion.button
                className="w-full py-3 bg-gradient-to-r from-[#BE7B2C] to-[#F9C39D] text-white rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#BE7B2C]/25"
                onClick={handleViewProjects}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t("viewProjects")}
              </motion.button>

              <motion.button
                className="w-full py-2 border border-gray-600 text-gray-300 rounded-lg font-medium text-sm hover:border-bg hover:text-bg transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Back to Image
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
