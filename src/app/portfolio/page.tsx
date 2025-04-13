"use client";
import projectImg from "@/public/images/projects.svg";
import { useLocale, useTranslations } from "next-intl";
import React, { useState, useMemo, useRef } from "react";
import Footer from "../components/Footer";
import logoEn from "@/public/icons/big-logo-en.svg";
import logoAr from "@/public/icons/big-logo-ar.svg";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "AL DHUHAYAN BLOCK 39",
    type: "urban",
    description: "A large urban planning project.",
    image: projectImg,
    location: "Riyadh, KSA",
    area: "656027 SQM",
    scope: "Urban Planning & Design",
    status: "Approved",
    related: [{ thumb: "/images/thumb1.jpg" }, { thumb: "/images/thumb2.jpg" }],
  },
  {
    id: 2,
    title: "ARCHITECTURE MASTERPIECE",
    type: "architecture",
    description: "An architectural icon in the region.",
    image: projectImg,
    location: "Jeddah, KSA",
    area: "300000 SQM",
    scope: "Architecture Design",
    status: "Ongoing",
    related: [{ thumb: "/images/thumb3.jpg" }],
  },
  {
    id: 3,
    title: "LANDSCAPE HAVEN",
    type: "landscape",
    description: "Natural landscaping for city parks.",
    image: projectImg,
    location: "Dammam, KSA",
    area: "150000 SQM",
    scope: "Landscape Design",
    status: "Completed",
    related: [{ thumb: "/images/thumb4.jpg" }],
  },
  {
    id: 4,
    title: "AL DHUHAYAN BLOCK 39",
    type: "Project Management",
    description: "A large urban planning project.",
    image: projectImg,
    location: "Riyadh, KSA",
    area: "656027 SQM",
    scope: "Urban Planning & Design",
    status: "Approved",
    related: [{ thumb: "/images/thumb1.jpg" }, { thumb: "/images/thumb2.jpg" }],
  },
  {
    id: 5,
    title: "AL DHUHAYAN BLOCK 39",
    type: "landscape",
    description: "A large urban planning project.",
    image: projectImg,
    location: "Riyadh, KSA",
    area: "656027 SQM",
    scope: "Urban Planning & Design",
    status: "Approved",
    related: [{ thumb: "/images/thumb1.jpg" }, { thumb: "/images/thumb2.jpg" }],
  },
  {
    id: 6,
    title: "AL DHUHAYAN BLOCK 39",
    type: "Workshop Drawings",
    description: "A large urban planning project.",
    image: projectImg,
    location: "Riyadh, KSA",
    area: "656027 SQM",
    scope: "Urban Planning & Design",
    status: "Approved",
    related: [{ thumb: "/images/thumb1.jpg" }, { thumb: "/images/thumb2.jpg" }],
  },
  // Add more projects...
];

const categories = [
  "all",
  "urban",
  "architecture",
  "landscape",
  "Project Management",
  "Workshop Drawings",
];

const Page = () => {
  const locale = useLocale();
  const [selectedType, setSelectedType] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = useTranslations("projects");
  const carouselRef = useRef<any>(null);
  const filteredProjects = useMemo(() => {
    return selectedType === "all"
      ? projects
      : projects.filter((p) => p.type === selectedType);
  }, [selectedType]);

  const selectedProject = filteredProjects[currentIndex];

  const handlePrev = () => {
    const newIndex =
      currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);

    const target = document.getElementById("project" + newIndex);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  };

  const handleNext = () => {
    const newIndex =
      currentIndex === filteredProjects.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);

    const target = document.getElementById("project" + newIndex);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  };

  const handleTabClick = (type: string) => {
    setSelectedType(type);
    setCurrentIndex(0);
  };

  return (
    <main className=" md:px-[88px]  min-h-[100vh] main-bg-gradient  flex flex-col justify-between">
      <section className="mx-auto px-5 py-16  md:flex gap-x-5 ">
        {/* Header Section */}
        <aside className="mb-10 w-full md:w-[25%] py-5 mx-auto md:mx-0">
          <div className="mb-5 text-[31px] md:text-5xl font-elegance gradient-gold-text">
            <h1 className=" text-center md:w-fit py-2 font-bold md:mb-3 ">
              {t("title-1")}
            </h1>
            <h2 className=" text-center  md:w-fit py-2 font-bold  ">
              {t("title-2")}
            </h2>
          </div>

          <p className="text-[15px]  mb-4 text-white text-center md:text-start">
            {t("breif")}
          </p>
        </aside>

        <aside className="md:w-[50%] flex flex-col ">
          <section className=" bg-white  flex flex-col pt-4 ">
            <figure className="relative w-[95%]  mx-auto h-full">
              <img src={"/images/projects.svg"} alt="squarprojectses" />
            </figure>

            <div className="flex justify-between items-center p-3">
              <p className="text-[11px] "> {t("copy rights")} </p>
              <Image
                src={locale === "ar" ? logoAr : logoEn}
                draggable={false}
                alt="logo"
                className="w-44 sm:w-28"
              />
            </div>
          </section>
          <div className="flex w-full gap-3 md:gap-3 flex-wrap  pb-4 mt-12 justify-center ">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleTabClick(cat)}
                className={`text-sm uppercase ${
                  selectedType === cat
                    ? "text-[#F9C39D] font-semibold"
                    : "text-white hover:text-[#F9C39D]"
                } transition-colors`}
              >
                {t(cat)}
              </button>
            ))}
          </div>

          <div
            className="carousel carousel-center max-w-full space-x-4 p-4 overflow-x-auto scroll-smooth"
            ref={carouselRef}
          >
            {filteredProjects.map((project, index) => {
              return (
                <div
                  id={"project" + index}
                  className="carousel-item"
                  key={project.id}
                >
                  <img
                    key={index}
                    className={
                      "cursor-pointer w-[250px] object-cover h-[200px] " +
                      (selectedProject.id == project.id
                        ? " border-[1px] border-[#eea95a]"
                        : "")
                    }
                    onClick={() => {
                      setCurrentIndex(index);
                    }}
                    src={"/images/projects.svg"}
                    alt="squarprojectses"
                  />
                </div>
              );
            })}
          </div>
        </aside>
        <aside className=" md:w-[25%] md:border-s-[1px]  border-bg text-white  px-5">
          <p className="font-bold text-[23px] min-h-[80px] ">
            {selectedProject.title}
          </p>
          <p className="font-normal text-[14px]  ">
            {selectedProject.description}
          </p>
          <section className="mt-5 ">
            <RowLine name={t("location")} value={selectedProject.location} />
            <RowLine name={t("area")} value={selectedProject.area} />
            <RowLine name={t("scope")} value={selectedProject.scope} />
            <RowLine name={t("status")} value={selectedProject.status} />
          </section>
          <div className=" flex justify-center items-center mt-[80px]">
            <Link
              className=" gradient-gold-text text-[24px] text-center mx-auto hover:font-semibold"
              onClick={() => {
                localStorage.setItem(
                  "selectedProject",
                  JSON.stringify(selectedProject)
                );
              }}
              href="/project-details"
              scroll={true}
            >
              {t("Details")}
            </Link>
          </div>
          <div className="flex justify-between md:mt-[20vh] mt-[40px]">
            {currentIndex > 0 ? (
              <Link
                href={"#project" + (currentIndex - 1)}
                className=" text-white "
                onClick={(e) => {
                  e.preventDefault();
                  handlePrev();
                }}
              >
                {" "}
                <span className="text-[#eea95a]  me-1">❮</span> {t("Prev")}
              </Link>
            ) : (
              <div></div>
            )}
            {currentIndex != filteredProjects.length - 1 ? (
              <Link
                href={"#project" + (currentIndex + 1)}
                className="text-white "
                onClick={(e) => {
                  e.preventDefault();
                  handleNext();
                }}
              >
                {" "}
                {t("Next")}
                <span className="text-[#eea95a] ms-1">❯</span>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </aside>
      </section>

      <Footer />
    </main>
  );
};

export default Page;

const RowLine = ({ name, value }: any) => {
  return (
    <>
      <div className="h-[1px] gradient-gold-line w-full"></div>
      <div className=" flex justify-between my-[8px] text-[14px]">
        <p className="text-white  md:text-start"> {name}</p>
        <p className="text-white md:text-start">{value}</p>
      </div>
    </>
  );
};
