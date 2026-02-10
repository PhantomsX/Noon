import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import Fade from "embla-carousel-fade";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

interface Project {
  id: string;
  title: string;
  client: string;
  designedBy: string;
  statusDate: string;
  location: string;
  scope: string;
  image: string;
  category: "urban" | "architectural" | "interior design";
}

const projects: Project[] = [
  // Urban Projects
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
  },
  // Architectural Projects
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
  },
  // Interior Projects
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
  },
];

export default function ProjectsPortfolio() {
  const t = useTranslations();
  const locale = useLocale();
  const [api, setApi] = useState<CarouselApi>();
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const onSelect = useCallback((api: CarouselApi) => {
    setActiveProjectIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;

    onSelect(api);
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    const timer = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
      clearInterval(timer);
    };
  }, [api, onSelect]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="relative w-full py-10 md:py-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Slanted lines group - Top Left */}
        <div className="absolute top-10 left-10 flex gap-1 opacity-20 rotate-45">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-px h-20 bg-[#C6A87D]" />
          ))}
        </div>

        {/* Slanted lines group - Bottom Right */}
        <div className="absolute bottom-10 right-10 flex gap-1 opacity-20 rotate-45">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-px h-20 bg-[#C6A87D]" />
          ))}
        </div>

        {/* Slanted lines group - Middle Left */}
        <div className="absolute top-1/2 left-4 flex gap-1.5 opacity-10 -translate-y-1/2 rotate-12">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-0.5 h-40 bg-[#C6A87D]" />
          ))}
        </div>
      </div>

      <div className="w-full px-4 md:px-12 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-elegance text-3xl md:text-5xl text-[#C6A87D] mb-6"
          >
            {t("home.portfolio.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed"
          >
            {t("home.portfolio.description")}
          </motion.p>
        </div>

        <div className="relative flex flex-col md:flex-row gap-8 items-stretch mt-12">
          {/* Navigation Dots (Left side) */}
          <div className="flex md:flex-col justify-start md:justify-center gap-4 md:pt-10 overflow-x-auto md:overflow-visible pb-4 md:pb-0 px-1 scrollbar-hide w-full md:w-auto">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`shrink-0 w-3 h-3 md:w-4 md:h-4 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  activeProjectIndex === idx
                    ? "border-[#C6A87D] scale-110"
                    : "border-gray-600 hover:border-[#C6A87D]"
                }`}
              >
                {activeProjectIndex === idx && (
                  <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-[#C6A87D]" />
                )}
              </button>
            ))}
          </div>

          {/* Carousel Area */}
          <Carousel
            setApi={setApi}
            plugins={[Fade()]}
            opts={{
              loop: true,
              duration: 30,
              direction: locale === "ar" ? "rtl" : "ltr",
            }}
            className="flex-1 w-full"
          >
            <CarouselContent className="ml-0">
              {projects.map((project) => (
                <CarouselItem key={project.id} className="pl-0">
                  <div className="relative w-full aspect-video md:aspect-21/9 bg-neutral-900 border border-[#C6A87D]/20 overflow-hidden group">
                    <motion.div
                      className="absolute inset-0 w-full h-full"
                      initial={{ scale: 1.1, x: "-2%", y: "-1%" }}
                      animate={{
                        scale: [1.1, 1.2, 1.1],
                        x: ["-2%", "2%", "-2%"],
                        y: ["-1%", "1%", "-1%"],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    {/* Overlay with Text */}
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-12">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
                        {/* Left: Project Title */}
                        <div className="max-w-md text-start">
                          <h3 className="text-white text-2xl md:text-4xl font-bold uppercase tracking-wider mb-2 md:mb-4">
                            {project.title}
                          </h3>
                        </div>

                        {/* Right: Project Details Table (matching the image) */}
                        <div className="w-full md:w-auto md:min-w-[350px] space-y-2 text-xs md:text-sm text-white/90">
                          <div className="flex justify-between gap-4 border-b border-white/20 pb-2">
                            <span className="text-[#C6A87D] font-medium text-start">
                              {t("home.portfolio.client")}:
                            </span>
                            <span className="text-end truncate max-w-[60%]">
                              {project.client}
                            </span>
                          </div>
                          <div className="flex justify-between gap-4 border-b border-white/20 pb-2">
                            <span className="text-[#C6A87D] font-medium text-start">
                              {t("home.portfolio.designedBy")}:
                            </span>
                            <span className="text-end truncate max-w-[60%]">
                              {project.designedBy}
                            </span>
                          </div>
                          <div className="flex justify-between gap-4 border-b border-white/20 pb-2">
                            <span className="text-[#C6A87D] font-medium text-start">
                              {t("home.portfolio.statusDate")}:
                            </span>
                            <span className="text-end truncate max-w-[60%]">
                              {project.statusDate}
                            </span>
                          </div>
                          <div className="flex justify-between gap-4 border-b border-white/20 pb-2">
                            <span className="text-[#C6A87D] font-medium text-start">
                              {t("home.portfolio.location")}:
                            </span>
                            <span className="text-end truncate max-w-[60%]">
                              {project.location}
                            </span>
                          </div>
                          <div className="flex justify-between gap-4 pb-2">
                            <span className="text-[#C6A87D] font-medium text-start">
                              {t("home.portfolio.scope")}:
                            </span>
                            <span className="text-end truncate max-w-[60%]">
                              {project.scope}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
