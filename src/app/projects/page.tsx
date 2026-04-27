"use client";
import { useLocale, useTranslations } from "next-intl";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { X } from "lucide-react";
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

  /* modal state */
  const [modalProject, setModalProject] = useState<(typeof projects)[0] | null>(
    null,
  );
  const [selectedType, setSelectedType] = useState("all");

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
          onValueChange={setSelectedType}
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
                    className="grid grid-cols-2 md:grid-cols-4 gap-3"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: 0.08 } },
                    }}
                  >
                    {filtered.map((project) => {
                      const serviceDetails = services.find(
                        (s) => s.type === project.type,
                      );

                      return (
                        <motion.button
                          key={project.id}
                          className="rounded-xl cursor-pointer overflow-hidden aspect-square bg-[#181818] relative group flex flex-col md:block focus:outline-none"
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
                          onClick={() => setModalProject(project)}
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover"
                          />

                          {/* Info overlay — hover-only */}
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
                            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center p-4 text-white text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
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

      {/* ── Project Modal ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setModalProject(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1 }}
              onClick={() => setModalProject(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-10 size-12 rounded-full bg-[#BE7B2C] hover:bg-[#F9C39D] transition-colors duration-300 flex items-center justify-center text-white"
              aria-label="Close"
            >
              <X className="size-6" />
            </motion.button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#181818] border border-[#C6A87D]/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Project Image */}
              <div className="relative w-full h-[300px] md:h-[400px]">
                <Image
                  src={modalProject.image}
                  alt={modalProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#181818] to-transparent" />
              </div>

              {/* Project Details */}
              <div className="p-6 md:p-10">
                <p className="text-[#C6A87D] text-xs uppercase tracking-widest mb-2 font-medium">
                  {t(`projects.${modalProject.type}`) ?? modalProject.type}
                </p>
                <h2 className="text-white text-2xl md:text-4xl font-bold uppercase tracking-wider leading-tight mb-6">
                  {modalProject.title}
                </h2>

                <div className="space-y-3 text-sm md:text-base bg-black/40 rounded-xl p-4 md:p-6 border border-white/10">
                  <DetailRow
                    label={t("home.portfolio.client")}
                    value={modalProject.client}
                  />
                  <DetailRow
                    label={t("home.portfolio.designedBy")}
                    value={modalProject.designedBy}
                  />
                  <DetailRow
                    label={t("home.portfolio.statusDate")}
                    value={modalProject.statusDate}
                  />
                  <DetailRow
                    label={t("home.portfolio.location")}
                    value={modalProject.location}
                  />
                  <DetailRow
                    label={t("home.portfolio.scope")}
                    value={modalProject.scope}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
};

export default Page;
