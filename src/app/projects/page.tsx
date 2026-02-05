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
      id: "u1",
      title: "AL DHUHAYAN BLOCK 39",
      client: "Olayan Co",
      designedBy: "Noon Consultants",
      statusDate: "05-2023 Under Construction",
      location: "Riyadh, Saudi Arabia",
      scope: "Development, Full Design Package",
      image: "/projects/Urban Projects/AL DHUHAYAN.jpg",
      category: "urban",
      type: "urban",
    },
    {
      id: "u2",
      title: "ALNIMR DOWNTOWN",
      client: "Olayan Co.",
      designedBy: "Noon Consultants",
      statusDate: "05-2023 Under Construction",
      location: "Riyadh, Saudi Arabia",
      scope: "Development, Full Design Package",
      image: "/projects/Urban Projects/ALNIMR.jpg",
      category: "urban",
      type: "urban",
    },
    {
      id: "u3",
      title: "LIVEN RESIDENTIAL COMPUND",
      client: "Yaqeen capital",
      designedBy: "Noon Consultants",
      statusDate: "07-2025in Progress",
      location: "AL KHOBAR City, Saudi Arabia",
      scope: "Development, Full Design Package",
      image: "/projects/Urban Projects/Liven Residential Compund.jpg",
      category: "urban",
      type: "urban",
    },
    {
      id: "u4",
      title: "TANGIER HILLS",
      client: "Tangier Hills Company",
      designedBy: "Noon Consultants",
      statusDate: "07-2016 Completed",
      location: "Morocco - Tangier 32,868 SQM",
      scope: "Urban Planning & Master Plan",
      image: "/projects/Urban Projects/TANGIER HILLS.png",
      category: "urban",
      type: "urban",
    },
    {
      id: "u5",
      title: "BUSINESS PAY",
      client: "Tangier Hills Company",
      designedBy: "Noon Consultants",
      statusDate: "07-2016 Completed",
      location: "Morocco - Tangier 32,868 SQM",
      scope: "Urban Planning & Master Plan",
      image: "/projects/Urban Projects/business pay.png",
      category: "urban",
      type: "urban",
    },
    {
      id: "a1",
      title: "AL WOMEN EQUESTRIAN CLUB",
      client: "Investment Company",
      designedBy: "Noon Consultants",
      statusDate: "2021 Completed",
      location: "Riyadh, Saudi Arabia",
      scope: "Full Design Package",
      image: "/projects/Architectural Projects/AL WOMEN EQUESTRIAN CLUB.png",
      category: "architectural",
      type: "architecture",
    },
    {
      id: "a2",
      title: "AL-QAHTANI COMPLEX",
      client: "Faisal Alqahtani",
      designedBy: "Noon Consultants",
      statusDate: "2025 in progress",
      location: "Riyadh, Saudi Arabia",
      scope: "Full Design Package",
      image: "/projects/Architectural Projects/Al-Qahtani Complex.png",
      category: "architectural",
      type: "architecture",
    },
    {
      id: "a3",
      title: "DR. MOHAMMED ALMALIK RESIDENCE",
      client: "Dr. Mohammed Almalik",
      designedBy: "Noon Consultants",
      statusDate: "2021 Completed",
      location: "Riyadh, Saudi Arabia",
      scope: "Full Design Package",
      image:
        "/projects/Architectural Projects/Dr. Mohammed Almalik Residence.png",
      category: "architectural",
      type: "architecture",
    },
    {
      id: "a4",
      title: "MR. WAEL ALRAIS PRIVATE VILLA",
      client: "Private villa",
      designedBy: "Noon Consultants",
      statusDate: "2024 Under Construction",
      location: "Riyadh, Saudi Arabia",
      scope: "Full Design Package",
      image:
        "/projects/Architectural Projects/M R .WA E L A L R A I S PR IVATE VI L L A.png",
      category: "architectural",
      type: "architecture",
    },
    {
      id: "a5",
      title: "V TOWER",
      client: "Alei Al-Qimma Real Estate Development Company",
      designedBy: "Noon Consultants",
      statusDate: "2024 Under Construction",
      location: "Riyadh City, Saudi Arabia 1,500 SQM",
      scope: "Full Design Package",
      image: "/projects/Architectural Projects/V Tower.jpg",
      category: "architectural",
      type: "architecture",
    },
    {
      id: "i1",
      title: "VIP RESIDENCE",
      client: "Bin Saedan Group",
      designedBy: "Noon Consultants",
      statusDate: "2020 Completed",
      location: "Riyadh City, Saudi Arabia 1,500 SQM",
      scope: "Full Design Package",
      image: "/projects/Interior projects/VIP RESIDENCE.png",
      category: "interior design",
      type: "interior design",
    },
    {
      id: "i2",
      title: "KINDERGARTEN DESIGN",
      client: "KFMC PROJECT",
      designedBy: "Noon Consultants",
      statusDate: "2020 Completed",
      location: "Riyadh City, Saudi Arabia 1,500 SQM",
      scope: "Design Concept",
      image: "/projects/Interior projects/KINDERGARTEN DESIGN.png",
      category: "interior design",
      type: "interior design",
    },
    {
      id: "i3",
      title: "AL-WALLAN HEAD QUARTER OFFICES",
      client: "Al-Wallan Holding Company",
      designedBy: "Noon Consultants",
      statusDate: "2024 Completed",
      location: "Riyadh City, Saudi Arabia 1,500 SQM",
      scope: "Interior Design",
      image: "/projects/Interior projects/AL-WALLAN HEAD QUARTER OFFICES.png",
      category: "interior design",
      type: "interior design",
    },
    {
      id: "i4",
      title: "AL-WALLAN HEAD QUARTER OFFICES 2",
      client: "Al-Wallan Holding Company",
      designedBy: "Noon Consultants",
      statusDate: "2024 Completed",
      location: "Riyadh City, Saudi Arabia 1,500 SQM",
      scope: "Interior Design",
      image: "/projects/Interior projects/AL-WALLAN HEAD QUARTER OFFICES 2.png",
      category: "interior design",
      type: "interior design",
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

  const categories = useMemo(() => {
    const types = projects.map((p) => p.type);
    return ["all", ...Array.from(new Set(types))];
  }, [projects]);

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
                            {project.location}
                          </p>
                          {serviceDetails?.features && (
                            <ul className="text-start text-xs list-disc list-outside ps-5 text-gray-300 md:hidden inline-block">
                              {serviceDetails.features.map((feature, fIdx) => (
                                <li key={fIdx}>{feature}</li>
                              ))}
                            </ul>
                          )}
                          <div className="hidden md:block">
                            <p className="text-sm mb-2 text-gray-300">
                              {project.location}
                            </p>
                            {serviceDetails?.features && (
                              <ul className="text-start text-xs list-disc list-outside ps-5 text-gray-300 inline-block">
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
                            {project.location}
                          </p>
                          {serviceDetails?.features && (
                            <ul className="text-start text-xs list-disc list-outside ps-5 text-gray-300 md:hidden inline-block">
                              {serviceDetails.features.map((feature, fIdx) => (
                                <li key={fIdx}>{feature}</li>
                              ))}
                            </ul>
                          )}
                          <div className="hidden md:block">
                            <p className="text-sm mb-2 text-gray-300">
                              {project.location}
                            </p>
                            {serviceDetails?.features && (
                              <ul className="text-start text-xs list-disc list-outside ps-5 text-gray-300 inline-block">
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
