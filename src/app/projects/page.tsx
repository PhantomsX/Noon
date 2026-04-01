"use client";
import { useLocale, useTranslations } from "next-intl";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty";
import { useIsClient, useMediaQuery } from "usehooks-ts";
import PageTitle from "../components/PageTitle";

/* ── shared project data ─────────────────────────────────────────────────── */
const ALL_PROJECTS = [
  {
    id: "u5",
    title: "BUSINESS PAY",
    client: "Tangier Hills Company",
    designedBy: "Noon Consultants",
    statusDate: "07-2016 Completed",
    location: "Morocco - Tangier 32,868 SQM",
    scope: "Urban Planning & Master Plan",
    image: "/projects/Urban Projects/business-pay.png",
    category: "urban",
    type: "urban",
  },
  {
    id: "u1",
    title: "AL DHUHAYAN BLOCK 39",
    client: "Olayan Co",
    designedBy: "Noon Consultants",
    statusDate: "05-2023 Under Construction",
    location: "Riyadh, Saudi Arabia",
    scope: "Development, Full Design Package",
    image: "/projects/Urban Projects/al-dhuhayan.jpg",
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
    image: "/projects/Urban Projects/alnimr.jpg",
    category: "urban",
    type: "urban",
  },
  {
    id: "u3",
    title: "LIVEN RESIDENTIAL COMPUND",
    client: "Yaqeen capital",
    designedBy: "Noon Consultants",
    statusDate: "07-2025 in Progress",
    location: "AL KHOBAR City, Saudi Arabia",
    scope: "Development, Full Design Package",
    image: "/projects/Urban Projects/liven-residential-compund.jpg",
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
    image: "/projects/Urban Projects/tangier-hills.png",
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
    image: "/projects/Architectural Projects/al-women-equestrian-club.png",
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
    image: "/projects/Architectural Projects/al-qahtani-complex.png",
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
    image: "/projects/Architectural Projects/dr-mohammed-almalik-residence.png",
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
    image: "/projects/Architectural Projects/mr-waelalrais-private-villa.png",
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
    image: "/projects/Architectural Projects/v-tower.jpg",
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
    image: "/projects/Interior projects/vip-residence.png",
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
    image: "/projects/Interior projects/kindergarten-design.png",
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
    image: "/projects/Interior projects/al-wallan-hq-offices.png",
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
    image: "/projects/Interior projects/al-wallan-hq-offices-2.png",
    category: "interior design",
    type: "interior design",
  },
];

/* ── detail row used in the hero ─────────────────────────────────────────── */
const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between gap-4 border-b border-white/20 pb-2 last:border-b-0 last:pb-0">
    <span className="text-[#C6A87D] font-medium text-start shrink-0">
      {label}:
    </span>
    <span className="text-end text-white/90 truncate max-w-[60%]">{value}</span>
  </div>
);

/* ── page ─────────────────────────────────────────────────────────────────── */
const Page = () => {
  const t = useTranslations();
  const locale = useLocale();
  const isClient = useIsClient();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const projects = ALL_PROJECTS;

  /* selected project — defaults to first */
  const [selectedId, setSelectedId] = useState<string>(projects[0].id);
  const [selectedType, setSelectedType] = useState("all");

  const selectedProject = useMemo(
    () => projects.find((p) => p.id === selectedId) ?? projects[0],
    [selectedId, projects],
  );

  const services = useMemo(
    () => [
      {
        type: "architecture",
        title: t("servicess.service-1"),
        description: t("servicess.service-1-description"),
        image: "/services/ENGINEERING_AND_ARCHITECTURAL_DESIGN.jpg",
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
        image: "/services/URBAN_DESIGN.jpg",
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
        image: "/services/INTERIOR_DESIGN.jpg",
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
    return [
      "all",
      "Residdential",
      "Commerical",
      "Industrial",
      "Hospitality",
      "offices",
      "Master plananing",
      "Healthcare",
      "Development",
    ];
  }, [projects]);

  return (
    <motion.main
      className="px-5 md:px-[70px] ltr:font-neue-montreal rtl:font-ibm-plex-arabic pt-20 flex flex-col justify-between"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* ── Page header ──────────────────────────────────────────────────── */}
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

      {/* ── Dynamic Hero ─────────────────────────────────────────────────── */}
      <motion.section
        className="relative rounded-2xl overflow-hidden z-1"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        style={{ minHeight: isMobile ? 420 : 720 }}
      >
        {/* Background image — cross-fades on project change */}
        <AnimatePresence mode="sync">
          <motion.div
            key={selectedProject.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/20" />

        {/* Project details panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProject.id + "-info"}
            className="absolute inset-0 flex flex-col justify-end p-6 md:p-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
              {/* Title */}
              <div className="max-w-md">
                <p className="text-[#C6A87D] text-xs uppercase tracking-widest mb-2 font-medium">
                  {t(`projects.${selectedProject.type}`) ??
                    selectedProject.type}
                </p>
                <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider leading-tight">
                  {selectedProject.title}
                </h2>
              </div>

              {/* Detail table */}
              <div className="w-full md:w-auto md:min-w-[340px] space-y-2 text-xs md:text-sm bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <DetailRow
                  label={t("home.portfolio.client")}
                  value={selectedProject.client}
                />
                <DetailRow
                  label={t("home.portfolio.designedBy")}
                  value={selectedProject.designedBy}
                />
                <DetailRow
                  label={t("home.portfolio.statusDate")}
                  value={selectedProject.statusDate}
                />
                <DetailRow
                  label={t("home.portfolio.location")}
                  value={selectedProject.location}
                />
                <DetailRow
                  label={t("home.portfolio.scope")}
                  value={selectedProject.scope}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.section>

      {/* ── Project grid with tabs ────────────────────────────────────────── */}
      <motion.section
        className="mt-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
      >
        <Tabs
          dir={locale === "ar" ? "rtl" : "ltr"}
          value={selectedType}
          onValueChange={(type) => {
            setSelectedType(type);
            // Auto-select first project of the new tab
            const first =
              type === "all"
                ? projects[0]
                : projects.find((p) => p.type === type);
            if (first) setSelectedId(first.id);
          }}
        >
          <TabsList className="w-full justify-between flex-wrap">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="uppercase cursor-pointer text-[10px] sm:text-xs md:text-base px-2 sm:px-3 py-2 flex-1 sm:flex-none min-w-[80px] sm:min-w-[100px] whitespace-normal text-center h-auto min-h-[40px] leading-tight flex items-center justify-center shrink-0"
              >
                {cat === "all"
                  ? t("common.show_all")
                  : t(`projects.${cat}`).toUpperCase()}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => {
            const filtered =
              cat === "all" ? projects : projects.filter((p) => p.type === cat);

            return (
              <TabsContent key={cat} value={cat} className="pt-8">
                {filtered.length === 0 ? (
                  <Empty className="border border-[#C6A87D]/20 bg-black/20 min-h-[320px]">
                    <EmptyHeader>
                      <EmptyMedia>
                        {/* Architectural compass / blueprint icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-16 h-16 text-[#C6A87D]/40"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3M3.75 3h16.5M3.75 3H3m17.25 0H21M9 16.5v4.5m6-4.5v4.5M9 21h6"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 7.5h6M9 10.5h3"
                          />
                        </svg>
                      </EmptyMedia>
                      <EmptyTitle className="text-[#C6A87D] rtl:font-ibm-plex-arabic ltr:font-neue-montreal text-xl">
                        {t("projects.emptyTitle")}
                      </EmptyTitle>
                      <EmptyDescription className="text-white/40 rtl:font-ibm-plex-arabic ltr:font-neue-montreal">
                        {t("projects.emptyDescription")}
                      </EmptyDescription>
                    </EmptyHeader>
                  </Empty>
                ) : (
                  <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: 0.08 } },
                    }}
                  >
                    {filtered.map((project) => {
                      const isSelected = project.id === selectedId;
                      const serviceDetails = services.find(
                        (s) => s.type === project.type,
                      );

                      return (
                        <motion.button
                          key={project.id}
                          className="rounded-xl cursor-pointer overflow-hidden bg-[#181818] relative group flex flex-col md:block focus:outline-none"
                          variants={{
                            hidden: { opacity: 0, y: 30, scale: 0.98 },
                            visible: { opacity: 1, y: 0, scale: 1 },
                          }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          whileHover={{
                            scale: 1.03,
                            boxShadow: "0 4px 32px #00000033",
                          }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedId(project.id)}
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover"
                          />

                          {/* Info overlay — always visible when selected, hover-only otherwise */}
                          {isClient && isMobile ? (
                            <div className="relative p-4 text-white text-center">
                              <h3 className="font-bold text-lg mb-2">
                                {project.title}
                              </h3>
                              <p className="text-sm text-gray-300">
                                {project.location}
                              </p>
                            </div>
                          ) : (
                            <div
                              className={[
                                "absolute inset-0 bg-black/40 flex flex-col justify-center items-center p-4 text-white text-center transition-opacity duration-300",
                                isSelected
                                  ? "opacity-100"
                                  : "opacity-0 group-hover:opacity-100",
                              ].join(" ")}
                            >
                              <h3 className="font-bold text-lg md:text-xl mb-2">
                                {project.title}
                              </h3>
                              <p className="text-sm mb-2 text-gray-300">
                                {project.location}
                              </p>
                              {serviceDetails?.features && (
                                <ul className="text-start text-xs list-disc list-outside ps-5 text-gray-300 inline-block">
                                  {serviceDetails.features.map((f, fi) => (
                                    <li key={fi}>{f}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          )}

                          {/* Gold border + check badge — rendered ABOVE the overlay */}
                          <AnimatePresence>
                            {isSelected && (
                              <motion.div
                                className="absolute inset-0 border-2 border-[#C6A87D] rounded-xl pointer-events-none"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                              >
                                {/* Gold corner accents */}
                                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#C6A87D] rounded-tl" />
                                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#C6A87D] rounded-br" />

                                {/* Check badge */}
                                <motion.div
                                  className="absolute top-2 right-2 w-7 h-7 rounded-full bg-[#C6A87D] flex items-center justify-center shadow-lg"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  exit={{ scale: 0 }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                  }}
                                >
                                  <svg
                                    className="w-4 h-4 text-black"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </motion.div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.button>
                      );
                    })}
                  </motion.div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </motion.section>
    </motion.main>
  );
};

export default Page;
