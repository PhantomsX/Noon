/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Afacad } from "next/font/google";
import Image from "next/image";
import { Slash } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import PageTitle from "../components/PageTitle";

const afacad = Afacad({
  subsets: ["latin"],
  variable: "--font-afacad",
  weight: ["500", "400"],
  display: "swap",
});

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
    <main>
      <section className="flex max-sm:flex-col gap-16 px-9 pt-12 sm:ps-[80px]">
        {/* Header Section */}
        <aside className="sm:max-w-[350px] space-y-4">
          <PageTitle>
            {t("title-1")}
            <br />
            {t("title-2")}
          </PageTitle>
        </aside>
        <aside className="flex-1 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6">
          <p
            style={afacad.style}
            className="text-xl col-span-full mb-4 text-white text-center md:text-start"
          >
            {t("breif")}
          </p>
          {services.map((service, i) => (
            <Service key={i} id={i} service={service} />
          ))}
        </aside>
      </section>
    </main>
  );
}

export default Page;

const Service = ({ service, id }: { service: Service; id: number }) => {
  const t = useTranslations();
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      className="text-white flex flex-col group"
      variants={item}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div
        className="flex items-center mb-2"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Slash size={16} className="-rotate-[20deg]" strokeWidth={3} />
        <span>{(id + 1).toString().padStart(2, "0")}</span>
      </motion.div>

      <motion.div
        className="relative text-center mx-auto"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="relative overflow-hidden  shadow-lg">
          <motion.div
            initial={false}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image
              src={service.image}
              alt={service.title}
              width={295}
              height={357}
              className="object-cover w-[295px] h-[357px]"
            />
          </motion.div>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 bg-black/60 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  className="px-6 py-3 cursor-pointer bg-white text-black rounded-md font-medium shadow-lg"
                  whileHover={{ scale: 1.05, backgroundColor: "#f8f9fa" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{
                    y: { type: "spring", stiffness: 300, damping: 20 },
                    opacity: { duration: 0.2 },
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push("/portfolio");
                  }}
                >
                  {t("viewProjects")}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <h3
          style={afacad.style}
          className="text-xl font-medium my-2 border-b border-bg h-16"
        >
          {service.title}
        </h3>
        <p
          style={afacad.style}
          className="text-xs mb-2 text-white text-justify"
        >
          {service.description}
        </p>
        <ul>
          {service.features.map((feature, i) => (
            <motion.li
              key={i}
              style={afacad.style}
              className="text-xs mb-px"
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <span className="me-1">•</span>
              {feature}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};
