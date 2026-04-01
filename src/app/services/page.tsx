/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
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
      image: "/services/ENGINEERING_AND_ARCHITECTURAL_DESIGN.jpg",
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
      image: "/services/URBAN_DESIGN.jpg",
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
      image: "/services/CONSTRUCTION_SUPERVISION.jpg",
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
      image: "/services/MASTER_PLANNING.jpg",
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
      image: "/services/ENGINEERING_REPORTS.png",
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
      image: "/services/PERMITS.png",
      features: [
        t("service-5-features.1"),
        t("service-5-features.2"),
        t("service-5-features.3"),
        t("service-5-features.4"),
        t("service-5-features.5"),
      ],
    },
    {
      title: t("service-11"),
      description: t("service-11-description"),
      image: "/services/PROJECT_MANAGEMENT.png",
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
      image: "/services/INTERIOR_DESIGN.jpg",
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
      image: "/services/OR_ARCHITECT_OF_RECORD.jpg",
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
        <aside className="sm:max-w-[350px]">
          <PageTitle>{t("title-1")}</PageTitle>
        </aside>
        <div className="flex-1">
          <p className="text-xl mb-8 text-white text-center md:text-start ltr:font-neue-montreal rtl:font-ibm-plex-arabic">
            {t("breif")}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-9 sm:ps-[80px] pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(330px,1fr))] gap-x-8 gap-y-16 max-w-[1400px] mx-auto">
          {services.map((service, i) => (
            <ServiceCard key={i} id={i} service={service} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Page;

const ServiceCard = ({ service, id }: { service: Service; id: number }) => {
  return (
    <motion.div
      className="flex flex-col h-full w-full group cursor-pointer"
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: (id % 3) * 0.1, duration: 0.6 }}
    >
      <div className="text-white text-xl md:text-2xl font-medium tracking-widest mb-4 ltr:font-neue-montreal rtl:font-ibm-plex-arabic">
        / {(id + 1).toString().padStart(2, "0")}
      </div>

      <div className="relative w-full aspect-4/5 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Blurred Layer with Features on Hover */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-center p-6 md:p-8">
          <ul className="space-y-4">
            {service.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-white text-sm md:text-base ltr:font-neue-montreal rtl:font-ibm-plex-arabic transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#C6A87D] mt-2 shrink-0 shadow-sm" />
                <span className="flex-1 drop-shadow-md font-medium">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col flex-1 justify-between gap-4 mt-6">
        <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-wider ltr:font-neue-montreal rtl:font-ibm-plex-arabic line-clamp-2">
          {service.title}
        </h3>
        <div className="h-px w-full bg-[#C6A87D]/50 transition-colors duration-300 group-hover:bg-[#C6A87D]" />
      </div>
    </motion.div>
  );
};
