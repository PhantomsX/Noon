"use client";
import { useLocale, useTranslations } from "next-intl";
import React, { useState, useMemo } from "react";
import { motion } from "motion/react";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsClient, useMediaQuery } from "usehooks-ts";
import { useRouter } from "next/navigation";
import PageTitle from "../components/PageTitle";

const Page = () => {
  const t = useTranslations();
  const locale = useLocale();
  const projects = [
    {
      id: 1,
      title: t("projects.project_1_title"),
      type: "urban",
      description: t("projects.project_1_description"),
      image: "/images/portfolio-bg.png",
      location: t("projects.project_1_location"),
      area: t("projects.project_1_area"),
      scope: t("projects.project_1_scope"),
      status: t("projects.project_1_status"),
    },
    {
      id: 2,
      title: t("projects.project_2_title"),
      type: "architecture",
      description: t("projects.project_2_description"),
      image: "/images/portfolio-bg.png",
      location: t("projects.project_2_location"),
      area: t("projects.project_2_area"),
      scope: t("projects.project_2_scope"),
      status: t("projects.project_2_status"),
    },
    {
      id: 3,
      title: t("projects.project_3_title"),
      type: "interior design",
      description: t("projects.project_3_description"),
      image: "/images/portfolio-bg.png",
      location: t("projects.project_3_location"),
      area: t("projects.project_3_area"),
      scope: t("projects.project_3_scope"),
      status: t("projects.project_3_status"),
    },
    {
      id: 4,
      title: t("projects.project_4_title"),
      type: "urban",
      description: t("projects.project_4_description"),
      image: "/images/portfolio-bg.png",
      location: t("projects.project_4_location"),
      area: t("projects.project_4_area"),
      scope: t("projects.project_4_scope"),
      status: t("projects.project_4_status"),
    },
    {
      id: 5,
      title: t("projects.project_5_title"),
      type: "architecture",
      description: t("projects.project_5_description"),
      image: "/images/portfolio-bg.png",
      location: t("projects.project_5_location"),
      area: t("projects.project_5_area"),
      scope: t("projects.project_5_scope"),
      status: t("projects.project_5_status"),
    },
    {
      id: 6,
      title: t("projects.project_6_title"),
      type: "interior design",
      description: t("projects.project_6_description"),
      image: "/images/portfolio-bg.png",
      location: t("projects.project_6_location"),
      area: t("projects.project_6_area"),
      scope: t("projects.project_6_scope"),
      status: t("projects.project_6_status"),
    },
  ];
  const [selectedType, setSelectedType] = useState("all");
  const isClient = useIsClient();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const router = useRouter();

  const services = useMemo(
    () => [
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
    ],
    [t],
  );

  const categories = ["all", "urban", "architecture", "interior design"];

  const handleTabClick = (type: string) => {
    setSelectedType(type);
  };

  const selectedService = useMemo(
    () => services.find((service) => service?.type === selectedType),
    [selectedType, services],
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
        className="relative p-5 z-1"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <Image
          src={"/images/portofolio-frame.jpg"}
          alt={t("alt.projects")}
          fill
          className="z-[-1] rounded-2xl object-cover"
        />
        <Image
          src={"/images/portfolio-bg.png"}
          alt={t("alt.projects")}
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
              <h2 className="text-3xl md:text-5xl max-w-full md:max-w-[13ch] mb-4 md:mb-0 wrap-break-word">
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
        <Tabs
          dir={locale === "ar" ? "rtl" : "ltr"}
          value={selectedType}
          onValueChange={handleTabClick}
        >
          <TabsList className="overflow-x-auto whitespace-nowrap">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="uppercase cursor-pointer text-xs md:text-base px-4 py-2 min-w-[120px]"
              >
                {cat === "all"
                  ? t("common.show_all")
                  : t(`projects.${cat}`).toUpperCase()}
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
                    (service) => service.type === project.type,
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
                          JSON.stringify(project),
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
                                  ),
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
                                  ),
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
