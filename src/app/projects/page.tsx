"use client";
import { useTranslations } from "next-intl";
import React, { useState, useMemo, useRef } from "react";
import { motion } from "motion/react";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsClient, useMediaQuery } from "usehooks-ts";
import { useRouter } from "next/navigation";
import PageTitle from "../components/PageTitle";

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
    title: "INTERIOR DESIGN HAVEN",
    type: "interior design",
    description: "Modern interior design for residential spaces.",
    image: "/images/portfolio-bg.png",
    location: "Dammam, KSA",
    area: "15000 SQM",
    scope: "Interior Design",
    status: "Completed",
  },
  {
    id: 4,
    title: "RIYADH URBAN DEVELOPMENT",
    type: "urban",
    description: "Comprehensive urban planning for sustainable growth.",
    image: "/images/portfolio-bg.png",
    location: "Riyadh, KSA",
    area: "450000 SQM",
    scope: "Urban Planning & Design",
    status: "In Progress",
  },
  {
    id: 5,
    title: "JEDDAH ARCHITECTURAL GEM",
    type: "architecture",
    description: "Innovative architectural solutions for commercial buildings.",
    image: "/images/portfolio-bg.png",
    location: "Jeddah, KSA",
    area: "85000 SQM",
    scope: "Architecture Design",
    status: "Under Construction",
  },
  {
    id: 6,
    title: "LUXURY INTERIOR SPACES",
    type: "interior design",
    description: "High-end interior design for luxury developments.",
    image: "/images/portfolio-bg.png",
    location: "Riyadh, KSA",
    area: "25000 SQM",
    scope: "Interior Design",
    status: "Approved",
  },
];

const Page = () => {
  const [selectedType, setSelectedType] = useState("all");
  const t = useTranslations();
  const isClient = useIsClient();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const router = useRouter();

  const services = [
    {
      type: "architecture",
      title: t("servicess.service-1"),
      description: t("servicess.service-1-description"),
      image: "/images/ENGINEERING AND ARCHITECTURAL DESIGN.png",
      features: [
        t("servicess.service-1-features.1"),
        t("servicess.service-1-features.2"),
        t("servicess.service-1-features.3"),
        t("servicess.service-1-features.4"),
      ],
    },
    {
      type: "urban",
      title: t("servicess.service-2"),
      description: t("servicess.service-2-description"),
      image: "/images/URBAN DESIGN.png",
      features: [
        t("servicess.service-2-features.1"),
        t("servicess.service-2-features.2"),
        t("servicess.service-2-features.3"),
        t("servicess.service-2-features.4"),
        t("servicess.service-2-features.5"),
      ],
    },
    {
      type: "interior design",
      title: t("servicess.service-10"),
      description: t("servicess.service-10-description"),
      image: "/images/INTERIOR DESIGN.png",
      features: [
        t("servicess.service-10-features.1"),
        t("servicess.service-10-features.2"),
        t("servicess.service-10-features.3"),
        t("servicess.service-10-features.4"),
        t("servicess.service-10-features.5"),
      ],
    },
  ];

  const categories = ["all", "urban", "architecture", "interior design"];

  const handleTabClick = (type: string) => {
    setSelectedType(type);
  };

  const selectedService = useMemo(
    () => services.find((service) => service?.type === selectedType),
    [selectedType]
  );

  return (
    <motion.main
      className="px-5 md:px-[70px] ltr:font-neue-montreal rtl:font-noto-kufi-arabic pt-20 flex flex-col justify-between"
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
        <PageTitle>{t("projects.title-1")}</PageTitle>

        <p className="text-xl mb-4 text-white text-center md:text-start flex-1">
          {t("projects.breif")}
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
