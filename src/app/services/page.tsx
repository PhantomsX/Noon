"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "motion/react";

type Service = {
  title: string;
  description: string;
  image: string;
};

function Page() {
  const t = useTranslations("servicess");
  const services = [
    {
      title: t("service-1"),
      description: t("service-1-description"),
      image: "/services/ENGINEERING_AND_ARCHITECTURAL_DESIGN.webp",
    },
    {
      title: t("service-2"),
      description: t("service-2-description"),
      image: "/services/URBAN_DESIGN.webp",
    },
    {
      title: t("service-3"),
      description: t("service-3-description"),
      image: "/services/MASTER_PLANNING_1.webp",
    },
    {
      title: t("service-4"),
      description: t("service-4-description"),
      image: "/services/CONSTRUCTION_SUPERVISION_1.webp",
    },
    {
      title: t("service-5"),
      description: t("service-5-description"),
      image: "/services/STRUCTURE_ENGINEERING.png",
    },
    {
      title: t("service-6"),
      description: t("service-6-description"),
      image: "/services/PERMITS.webp",
    },
    {
      title: t("service-7"),
      description: t("service-7-description"),
      image: "/services/ENGINEERING_STUDIES.png",
    },
    {
      title: t("service-8"),
      description: t("service-8-description"),
      image: "/services/LANDSCAPING.webp",
    },
    {
      title: t("service-9"),
      description: t("service-9-description"),
      image: "/services/PROJECT_MANAGEMENT.webp",
    },
    {
      title: t("service-10"),
      description: t("service-10-description"),
      image: "/services/INTERIOR_DESIGN.png",
    },
    {
      title: t("service-11"),
      description: t("service-11-description"),
      image: "/services/OR_ARCHITECT_OF_RECORD.png",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 px-6 md:px-9 pt-12 sm:px-17.5 pb-10">
        <div className="flex flex-col rtl:items-end ltr:items-start">
          <p className="ltr:font-neue-montreal rtl:font-ibm-plex-arabic text-[#C6A87D]/60 text-xs tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-[#C6A87D]/40" />
            {t("headerEyebrow")}
          </p>
          <h1 className="ltr:font-elegance rtl:font-year-of-camel text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            <span className="text-bg pe-2">{t("headerTitleMain")}</span>
            <br />
            <span className="text-[#C6A87D]/30">{t("headerTitleDim")}</span>
          </h1>
        </div>
        <p className="ltr:font-neue-montreal rtl:font-ibm-plex-arabic text-gray-400 text-sm md:text-base leading-relaxed max-w-xs rtl:text-right">
          {t("headerSubtitle")}
        </p>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-9 sm:ps-20 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(330px,1fr))] gap-x-8 gap-y-16 max-w-350 mx-auto">
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
  const t = useTranslations("servicess");
  return (
    <motion.div
      className="flex flex-col h-full w-full group cursor-pointer"
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: (id % 3) * 0.1, duration: 0.6 }}
    >
      <div className="relative w-full overflow-hidden aspect-square">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-black/10 transition-colors duration-300 group-hover:from-black/80" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="text-white/80 uppercase tracking-[0.25em] text-[10px] sm:text-xs ltr:font-neue-montreal rtl:font-ibm-plex-arabic">
            {t("fullServices", { title: service.title })}
          </div>

          <h3 className="mt-3 text-white text-xl sm:text-2xl lg:text-3xl font-semibold uppercase tracking-wider ltr:font-neue-montreal rtl:font-ibm-plex-arabic drop-shadow-sm">
            {service.title}
          </h3>
        </div>
      </div>

      <p className="mt-6 text-white/70 text-sm sm:text-base leading-relaxed ltr:font-neue-montreal rtl:font-ibm-plex-arabic">
        {service.description}
      </p>
    </motion.div>
  );
};
