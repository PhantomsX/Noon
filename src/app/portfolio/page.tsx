"use client";
import { useLocale, useTranslations } from "next-intl";
import React, { useState, useMemo, useRef } from "react";
import { motion } from "motion/react";

import Image from "next/image";
import Link from "next/link";
import { Aclonica, Afacad } from "next/font/google";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsClient, useMediaQuery } from "usehooks-ts";
import { useRouter } from "next/navigation";

const projects = [
  {
    id: 1,
    title: "AL DHUHAYAN BLOCK 39",
    type: "urban",
    description: "A large urban planning project.",
    image: "/images/portfolio-bg.png",
    location: "Riyadh, KSA",
    area: "656027 SQM",
    scope: "Urban Planning & Design",
    status: "Approved",
  },
  {
    id: 2,
    title: "ARCHITECTURE MASTERPIECE",
    type: "architecture",
    description: "An architectural icon in the region.",
    image: "/images/portfolio-bg.png",
    location: "Jeddah, KSA",
    area: "300000 SQM",
    scope: "Architecture Design",
    status: "Ongoing",
  },
  {
    id: 3,
    title: "LANDSCAPE HAVEN",
    type: "landscape",
    description: "Natural landscaping for city parks.",
    image: "/images/portfolio-bg.png",
    location: "Dammam, KSA",
    area: "150000 SQM",
    scope: "Landscape Design",
    status: "Completed",
  },
  {
    id: 4,
    title: "AL DHUHAYAN BLOCK 39",
    type: "Project Management",
    description: "A large urban planning project.",
    image: "/images/portfolio-bg.png",
    location: "Riyadh, KSA",
    area: "656027 SQM",
    scope: "Urban Planning & Design",
    status: "Approved",
  },
  {
    id: 5,
    title: "AL DHUHAYAN BLOCK 39",
    type: "landscape",
    description: "A large urban planning project.",
    image: "/images/portfolio-bg.png",
    location: "Riyadh, KSA",
    area: "656027 SQM",
    scope: "Urban Planning & Design",
    status: "Approved",
  },
  {
    id: 6,
    title: "AL DHUHAYAN BLOCK 39",
    type: "Workshop Drawings",
    description: "A large urban planning project.",
    image: "/images/portfolio-bg.png",
    location: "Riyadh, KSA",
    area: "656027 SQM",
    scope: "Urban Planning & Design",
    status: "Approved",
  },
];

const aclonica = Aclonica({
  subsets: ["latin"],
  variable: "--font-aclonica",
  weight: "400",
  display: "swap",
});
const afacad = Afacad({
  subsets: ["latin"],
  variable: "--font-afacad",
  weight: ["500", "400"],
  display: "swap",
});

const Page = () => {
  const [selectedType, setSelectedType] = useState("all");
  const t = useTranslations("projects");
  const tServices = useTranslations("servicess");
  const isClient = useIsClient();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const router = useRouter();

  const services = [
    {
      type: "architecture",
      title: tServices("service-1"),
      description: tServices("service-1-description"),
      image: "/images/ENGINEERING AND ARCHITECTURAL DESIGN.png",
      features: [
        tServices("service-1-features.1"),
        tServices("service-1-features.2"),
        tServices("service-1-features.3"),
        tServices("service-1-features.4"),
      ],
    },
    {
      type: "urban",
      title: tServices("service-2"),
      description: tServices("service-2-description"),
      image: "/images/URBAN DESIGN.png",
      features: [
        tServices("service-2-features.1"),
        tServices("service-2-features.2"),
        tServices("service-2-features.3"),
        tServices("service-2-features.4"),
        tServices("service-2-features.5"),
      ],
    },
    {
      title: tServices("service-4"),
      description: tServices("service-4-description"),
      image: "/images/CONSTRUCTION SUPERVISION.png",
      features: [
        tServices("service-4-features.1"),
        tServices("service-4-features.2"),
        tServices("service-4-features.3"),
        tServices("service-4-features.4"),
        tServices("service-4-features.5"),
      ],
    },
    {
      title: tServices("service-3"),
      description: tServices("service-3-description"),
      image: "/images/MASTER PLANNING.png",
      features: [
        tServices("service-3-features.1"),
        tServices("service-3-features.2"),
        tServices("service-3-features.3"),
        tServices("service-3-features.4"),
        tServices("service-3-features.5"),
      ],
    },
    {
      title: tServices("service-6"),
      description: tServices("service-6-description"),
      image: "/images/ENGINEERING REPORTS.png",
      features: [
        tServices("service-6-features.1"),
        tServices("service-6-features.2"),
        tServices("service-6-features.3"),
        tServices("service-6-features.4"),
        tServices("service-6-features.5"),
      ],
    },
    {
      title: tServices("service-5"),
      description: tServices("service-5-description"),
      image: "/images/PERMITS.png",
      features: [
        tServices("service-5-features.1"),
        tServices("service-5-features.2"),
        tServices("service-5-features.3"),
        tServices("service-5-features.4"),
        tServices("service-5-features.5"),
      ],
    },
    {
      title: tServices("service-8"),
      description: tServices("service-8-description"),
      image: "/images/ENGINEERING STUDIES.png",
      features: [
        tServices("service-8-features.1"),
        tServices("service-8-features.2"),
        tServices("service-8-features.3"),
        tServices("service-8-features.4"),
        tServices("service-8-features.5"),
      ],
    },
    {
      title: tServices("service-7"),
      description: tServices("service-7-description"),
      image: "/images/VALUE ENGINEERING.png",
      features: [
        tServices("service-7-features.1"),
        tServices("service-7-features.2"),
        tServices("service-7-features.3"),
        tServices("service-7-features.4"),
        tServices("service-7-features.5"),
      ],
    },
    {
      type: "landscape",
      title: tServices("service-9"),
      description: tServices("service-9-description"),
      image: "/images/LANDSCAPING.png",
      features: [
        tServices("service-9-features.1"),
        tServices("service-9-features.2"),
        tServices("service-9-features.3"),
        tServices("service-9-features.4"),
        tServices("service-9-features.5"),
      ],
    },
    {
      type: "Project Management",
      title: tServices("service-11"),
      description: tServices("service-11-description"),
      image: "/images/PROJECT MANAGEMENT.png",
      features: [
        tServices("service-11-features.1"),
        tServices("service-11-features.2"),
        tServices("service-11-features.3"),
        tServices("service-11-features.4"),
        tServices("service-11-features.5"),
      ],
    },
    {
      title: tServices("service-10"),
      description: tServices("service-10-description"),
      image: "/images/INTERIOR DESIGN.png",
      features: [
        tServices("service-10-features.1"),
        tServices("service-10-features.2"),
        tServices("service-10-features.3"),
        tServices("service-10-features.4"),
        tServices("service-10-features.5"),
      ],
    },
    {
      title: tServices("service-12"),
      description: tServices("service-12-description"),
      image: "/images/OR ARCHITECT OF RECORD.png",
      features: [
        tServices("service-12-features.1"),
        tServices("service-12-features.2"),
        tServices("service-12-features.3"),
        tServices("service-12-features.4"),
        tServices("service-12-features.5"),
      ],
    },
  ];

  const categories = [
    "all",
    "urban",
    "architecture",
    "landscape",
    "Project Management",
    "Workshop Drawings",
  ];

  const handleTabClick = (type: string) => {
    setSelectedType(type);
  };

  const selectedService = useMemo(
    () => services.find((service) => service?.type === selectedType),
    [selectedType]
  );

  return (
    <motion.main
      style={afacad.style}
      className="px-5 md:px-[70px] pt-20 flex flex-col justify-between"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Header Section */}
      <motion.section
        className="mb-10 flex flex-col md:flex-row gap-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      >
        <div
          style={aclonica.style}
          className="mb-5 text-[31px] md:text-5xl text-bg"
        >
          <h1 className="md:mb-3">{t("title-1")}</h1>
          <h2>{t("title-2")}</h2>
        </div>

        <p className="text-xl mb-4 text-white text-center md:text-start flex-1">
          {t("breif")}
        </p>
      </motion.section>
      <motion.section
        className="relative p-5 z-[1]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <Image
          src={"/images/portofolio-frame.jpg"}
          alt="projects"
          fill
          className="z-[-1] rounded-2xl object-cover"
        />
        <Image
          src={"/images/portfolio-bg.png"}
          alt="projects"
          width={2000}
          height={2000}
          className="rounded-2xl object-cover max-sm:h-[400px]"
        />
        {selectedType !== "all" && selectedService && (
          <motion.div
            key={selectedType}
            className="absolute inset-0 flex items-end p-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
              <h2 className="text-3xl md:text-5xl max-w-full md:max-w-[13ch] mb-4 md:mb-0 break-words">
                {selectedService?.title}
              </h2>
              {selectedService?.features && (
                <ul className="text-sm md:text-base list-none p-0 m-0">
                  {selectedService?.features.map((feature, index) => (
                    <li
                      key={index}
                      className="my-1 md:my-3 border-b border-bg last:border-b-0"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </motion.section>
      <motion.section
        className="mt-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
      >
        <Tabs value={selectedType} onValueChange={handleTabClick}>
          <TabsList className="overflow-x-auto whitespace-nowrap">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="uppercase cursor-pointer text-xs md:text-base px-4 py-2 min-w-[120px]"
              >
                {cat === "all" ? "SHOW ALL" : cat.toUpperCase()}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((cat) => (
            <TabsContent key={cat} value={cat} className="pt-8">
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.08 } },
                }}
              >
                {(cat === "all"
                  ? projects
                  : projects.filter((p) => p.type === cat)
                ).map((project) => {
                  const serviceDetails = services.find(
                    (service) => service.title === project.type
                  );
                  return (
                    <motion.button
                      key={project.id}
                      className="rounded-xl cursor-pointer overflow-hidden bg-[#181818] relative group flex flex-col md:block"
                      variants={{
                        hidden: { opacity: 0, y: 30, scale: 0.98 },
                        visible: { opacity: 1, y: 0, scale: 1 },
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0 4px 32px #00000033",
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      onClick={() => {
                        router.push(`/project-details`);
                        localStorage.setItem(
                          "selectedProject",
                          JSON.stringify(project)
                        );
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                      {isClient && isMobile ? (
                        <div className="relative p-4 text-white text-center md:absolute md:inset-0 md:bg-black/60 md:flex md:flex-col md:justify-center md:items-center md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                          <h3 className="font-bold text-lg md:text-xl mb-2">
                            {project.title}
                          </h3>
                          <p className="text-sm mb-2 text-gray-300 md:hidden">
                            {project.description}
                          </p>
                          {serviceDetails?.features && (
                            <ul className="text-left text-xs list-disc list-inside text-gray-300 md:hidden">
                              {serviceDetails.features.map((feature, fIdx) => (
                                <li key={fIdx}>{feature}</li>
                              ))}
                            </ul>
                          )}
                          <div className="hidden md:block">
                            <p className="text-sm mb-2 text-gray-300">
                              {project.description}
                            </p>
                            {serviceDetails?.features && (
                              <ul className="text-left text-xs list-disc list-inside text-gray-300">
                                {serviceDetails.features.map(
                                  (feature, fIdx) => (
                                    <li key={fIdx}>{feature}</li>
                                  )
                                )}
                              </ul>
                            )}
                          </div>
                        </div>
                      ) : (
                        <motion.div
                          className="relative p-4 text-white text-center md:absolute md:inset-0 md:bg-black/60 md:flex md:flex-col md:justify-center md:items-center md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="font-bold text-lg md:text-xl mb-2">
                            {project.title}
                          </h3>
                          <p className="text-sm mb-2 text-gray-300 md:hidden">
                            {project.description}
                          </p>
                          {serviceDetails?.features && (
                            <ul className="text-left text-xs list-disc list-inside text-gray-300 md:hidden">
                              {serviceDetails.features.map((feature, fIdx) => (
                                <li key={fIdx}>{feature}</li>
                              ))}
                            </ul>
                          )}
                          <div className="hidden md:block">
                            <p className="text-sm mb-2 text-gray-300">
                              {project.description}
                            </p>
                            {serviceDetails?.features && (
                              <ul className="text-left text-xs list-disc list-inside text-gray-300">
                                {serviceDetails.features.map(
                                  (feature, fIdx) => (
                                    <li key={fIdx}>{feature}</li>
                                  )
                                )}
                              </ul>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </motion.button>
                  );
                })}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.section>
    </motion.main>
  );
};

export default Page;
