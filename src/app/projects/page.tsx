"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

type Project = {
  id: string;
  title: string;
  client: string;
  designedBy: string;
  statusDate: string;
  location: string;
  scope: string;
  image: string;
  images: string[];
  category: string;
  categoryLabel: string;
  type: string;
};

const Page = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [projects, setProjects] = useState<Project[]>([]);
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [selectedType, setSelectedType] = useState("all");
  const [modalCarouselApi, setModalCarouselApi] = useState<CarouselApi>();
  const [activeModalImageIndex, setActiveModalImageIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const loadProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) return;

        const payload = (await response.json()) as { projects?: Project[] };
        if (!isMounted) return;

        setProjects(payload.projects ?? []);
      } catch {
        if (isMounted) setProjects([]);
      }
    };

    void loadProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!modalCarouselApi) return;

    const onSelect = () => {
      setActiveModalImageIndex(modalCarouselApi.selectedScrollSnap());
    };

    onSelect();
    modalCarouselApi.on("select", onSelect);
    modalCarouselApi.on("reInit", onSelect);

    return () => {
      modalCarouselApi.off("select", onSelect);
      modalCarouselApi.off("reInit", onSelect);
    };
  }, [modalCarouselApi]);

  const CATEGORY_ORDER = [
    "residential",
    "commercial",
    "hospitality",
    "industrial",
    "offices",
    "mixed-use",
    "religios",
    "healthcare",
  ];

  const categories = useMemo(() => {
    const labels: Record<string, string> = {
      residential: t("projects.categories.residential"),
      commercial: t("projects.categories.commercial"),
      hospitality: t("projects.categories.hospitality"),
      industrial: t("projects.categories.industrial"),
      offices: t("projects.categories.offices"),
      "mixed-use": t("projects.categories.mixed-use"),
      religios: t("projects.categories.religios"),
      healthcare: t("projects.categories.healthcare"),
    };

    const unique = new Set<string>();
    for (const project of projects) unique.add(project.category);

    const sorted = Array.from(unique)
      .map((id) => ({ id, label: labels[id] ?? id }))
      .sort((a, b) => {
        const ai = CATEGORY_ORDER.indexOf(a.id);
        const bi = CATEGORY_ORDER.indexOf(b.id);
        const aOrder = ai === -1 ? CATEGORY_ORDER.length : ai;
        const bOrder = bi === -1 ? CATEGORY_ORDER.length : bi;
        return aOrder - bOrder;
      });

    return [{ id: "all", label: t("common.show_all") }, ...sorted];
  }, [projects, t]);

  useEffect(() => {
    const categoryExists = categories.some(
      (category) => category.id === selectedType,
    );
    if (!categoryExists) setSelectedType("all");
  }, [categories, selectedType]);

  return (
    <motion.main
      className="px-5 md:px-17.5 ltr:font-neue-montreal rtl:font-ibm-plex-arabic pt-20 flex flex-col justify-between"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.section
        className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      >
        {/* Left — eyebrow + two-tone title + subtitle */}
        <div className="flex flex-col ">
          <p className="rtl:font-ibm-plex-arabic ltr:font-neue-montreal text-[#C6A87D]/60 text-xs tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-[#C6A87D]/40" />
            {t("projects.eyebrow")}
          </p>
          <h1 className="rtl:font-year-of-camel ltr:font-elegance text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            <span className="text-bg pe-2">{t("projects.titleMain")}</span>
            <br />
            <span className="text-[#C6A87D]/30">{t("projects.titleDim")}</span>
          </h1>
          <p className="rtl:font-ibm-plex-arabic ltr:font-neue-montreal text-gray-300 text-sm md:text-base leading-relaxed mt-5 max-w-md">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Right — link + counter */}
        <div className="flex flex-col  gap-3 shrink-0">
          <p className="rtl:font-ibm-plex-arabic ltr:font-neue-montreal text-[#C6A87D] text-xs">
            {t("projects.counter")}
          </p>
        </div>
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
          onValueChange={setSelectedType}
        >
          <TabsList className="w-full justify-between flex-wrap">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="uppercase cursor-pointer text-[10px] sm:text-xs md:text-base px-2 sm:px-3 py-2 flex-1 sm:flex-none min-w-20 sm:min-w-25 whitespace-normal text-center h-auto min-h-10 leading-tight flex items-center justify-center shrink-0"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => {
            const filtered =
              cat.id === "all"
                ? projects
                : projects.filter((project) => project.category === cat.id);

            return (
              <TabsContent key={cat.id} value={cat.id} className="pt-8">
                {filtered.length === 0 ? (
                  <Empty className="border border-[#C6A87D]/20 bg-black/20 min-h-80">
                    <EmptyHeader>
                      <EmptyMedia>
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
                    className="flex flex-col gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {Array.from(
                      { length: Math.ceil(filtered.length / 5) },
                      (_, gi) => {
                        const group = filtered.slice(gi * 5, gi * 5 + 5);
                        const isEvenGroup = gi % 2 === 0;
                        const featuredProject = isEvenGroup
                          ? group[0]
                          : group[group.length - 1];
                        const smallProjects = isEvenGroup
                          ? group.slice(1)
                          : group.slice(0, -1);

                        const renderCard = (
                          project: Project,
                          colClass: string,
                          cardIndex: number,
                        ) => {
                          const metaParts = [
                            project.location,
                            project.statusDate,
                          ].filter(Boolean);
                          return (
                            <motion.button
                              key={project.id}
                              className={`relative overflow-hidden rounded-xl cursor-pointer group focus:outline-none bg-[#181818] ${colClass}`}
                              initial={{ opacity: 0, y: 16 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.45,
                                delay: (gi * 5 + cardIndex) * 0.04,
                                ease: "easeOut",
                              }}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => {
                                setActiveModalImageIndex(0);
                                setModalProject(project);
                              }}
                            >
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                loading={
                                  gi === 0 && cardIndex < 5 ? "eager" : "lazy"
                                }
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-black/10" />
                              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <svg
                                  className="w-12 h-12 md:w-16 md:h-16 text-white/8"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={0.8}
                                >
                                  <path
                                    d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="absolute top-3 ltr:left-4 rtl:right-4">
                                <p className="ltr:font-neue-montreal rtl:font-ibm-plex-arabic text-[9px] md:text-[10px] tracking-[0.18em] uppercase text-white/55">
                                  {project.categoryLabel}
                                  {project.location && (
                                    <span className="text-white/35">
                                      {" "}
                                      · {project.location.split(",")[0]}
                                    </span>
                                  )}
                                </p>
                              </div>
                              <div className="absolute bottom-0 inset-x-0 p-3 md:p-4 ltr:text-left rtl:text-right">
                                <h3 className="ltr:font-neue-montreal rtl:font-ibm-plex-arabic text-white font-bold text-sm md:text-base lg:text-lg leading-tight mb-1 uppercase">
                                  {project.title}
                                </h3>
                                {metaParts.length > 0 && (
                                  <p className="ltr:font-neue-montreal rtl:font-ibm-plex-arabic text-white/45 text-[10px] md:text-xs">
                                    {metaParts.join(" · ")}
                                  </p>
                                )}
                              </div>
                            </motion.button>
                          );
                        };

                        return (
                          <div
                            key={gi}
                            className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3 auto-rows-[140px] md:auto-rows-[220px]"
                          >
                            {isEvenGroup ? (
                              <>
                                {renderCard(
                                  featuredProject,
                                  "col-span-2 md:col-span-3 md:row-span-2",
                                  0,
                                )}
                                {smallProjects.map((p, i) =>
                                  renderCard(p, "col-span-1 row-span-1", i + 1),
                                )}
                              </>
                            ) : (
                              <>
                                {/* Featured first in DOM with explicit right placement so small cards auto-fill cols 1–2 */}
                                {renderCard(
                                  featuredProject,
                                  "col-span-2 md:[grid-column:3/6] md:[grid-row:1/3]",
                                  4,
                                )}
                                {smallProjects.map((p, i) =>
                                  renderCard(p, "col-span-1 row-span-1", i),
                                )}
                              </>
                            )}
                          </div>
                        );
                      },
                    )}
                  </motion.div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </motion.section>

      <AnimatePresence>
        {modalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setModalProject(null)}
          >
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
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl rounded-2xl bg-[#181818] border border-[#C6A87D]/20 overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative">
                <Carousel
                  opts={{
                    direction: locale === "ar" ? "rtl" : "ltr",
                  }}
                  className="w-full"
                  setApi={setModalCarouselApi}
                >
                  <CarouselContent className="ml-0">
                    {modalProject.images.map((image) => (
                      <CarouselItem key={image} className="pl-0 relative">
                        <div className="relative z-1 w-full aspect-square max-w-175 mx-auto">
                          <Image
                            src={image}
                            alt={modalProject.title}
                            fill
                            sizes="(max-width: 768px) 90vw, 700px"
                            className="object-cover"
                          />
                        </div>
                        <Image
                          src={image}
                          alt={modalProject.title}
                          fill
                          className="object-cover blur-md!"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
                <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-black/45 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 z-10 pointer-events-none">
                  <p className="text-[#E8C08D] text-xs md:text-sm uppercase tracking-[0.2em] mb-2">
                    {modalProject.categoryLabel}
                  </p>
                  <h2 className="text-white text-2xl md:text-4xl font-bold uppercase tracking-wider leading-tight">
                    {modalProject.title}
                  </h2>
                </div>
                {modalProject.images.length > 1 && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                    {modalProject.images.map((_, index) => (
                      <button
                        key={`${modalProject.id}-dot-${index}`}
                        className={`size-2 rounded-full transition-colors pointer-events-auto ${
                          activeModalImageIndex === index
                            ? "bg-[#C6A87D]"
                            : "bg-white/40 hover:bg-white/60"
                        }`}
                        onClick={() => modalCarouselApi?.scrollTo(index)}
                        aria-label={`Show image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
};

export default Page;
