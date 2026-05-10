"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { X } from "lucide-react";
import { useIsClient, useMediaQuery } from "usehooks-ts";
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
import PageTitle from "../components/PageTitle";

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
  const isClient = useIsClient();
  const isMobile = useMediaQuery("(max-width: 768px)");
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

  const categories = useMemo(() => {
    const unique = new Map<string, string>();

    for (const project of projects) {
      if (!unique.has(project.category)) {
        unique.set(project.category, project.categoryLabel);
      }
    }

    return [
      { id: "all", label: t("common.show_all") },
      ...Array.from(unique.entries()).map(([id, label]) => ({ id, label })),
    ];
  }, [projects, t]);

  useEffect(() => {
    const categoryExists = categories.some(
      (category) => category.id === selectedType,
    );
    if (!categoryExists) setSelectedType("all");
  }, [categories, selectedType]);

  return (
    <motion.main
      className="px-5 md:px-[70px] ltr:font-neue-montreal rtl:font-ibm-plex-arabic pt-20 flex flex-col justify-between"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
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
                className="uppercase cursor-pointer text-[10px] sm:text-xs md:text-base px-2 sm:px-3 py-2 flex-1 sm:flex-none min-w-[80px] sm:min-w-[100px] whitespace-normal text-center h-auto min-h-[40px] leading-tight flex items-center justify-center shrink-0"
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
                  <Empty className="border border-[#C6A87D]/20 bg-black/20 min-h-[320px]">
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
                    className="grid grid-cols-2 md:grid-cols-4 gap-3"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: 0.08 } },
                    }}
                  >
                    {filtered.map((project, index) => (
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
                        onClick={() => {
                          setActiveModalImageIndex(0);
                          setModalProject(project);
                        }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={400}
                          height={400}
                          loading={index < 4 ? "eager" : "lazy"}
                          className="w-full h-full object-cover"
                        />

                        {isClient && isMobile ? (
                          <div className="relative p-4 text-white text-center">
                            <h3 className="font-bold text-lg mb-2">
                              {project.title.toUpperCase()}
                            </h3>
                          </div>
                        ) : (
                          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center p-4 text-white text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                            <h3 className="font-bold text-lg md:text-xl mb-2">
                              {project.title.toUpperCase()}
                            </h3>
                            <p className="text-sm mb-2 text-gray-300">
                              {project.categoryLabel}
                            </p>
                          </div>
                        )}
                      </motion.button>
                    ))}
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
                <Carousel className="w-full" setApi={setModalCarouselApi}>
                  <CarouselContent className="ml-0">
                    {modalProject.images.map((image) => (
                      <CarouselItem key={image} className="pl-0 relative">
                        <div className="relative z-1 w-full aspect-square max-w-[700px] mx-auto">
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
