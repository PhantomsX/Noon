/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
function Page() {
  const t = useTranslations("services");
  const [selected, setSelected] = useState<any>(null);
  const services = [
    {
      id: 1,
      title: t("service-1"),
      image: "/images/s.png",
      mainImage: "/images/urban.svg",
      mobileImage: "/images/urbanMobile.svg",
      features: [
        "Feasibility Studies",
        "Site Appraisals",
        "Asset Appraisals",
        "Environmental Impact Assessment",
        "Social Impact Assessment",
      ],
    },
    {
      id: 2,
      title: t("service-2"),
      image: "/images/s.png",
      mainImage: "/images/urban.svg",
      mobileImage: "/images/urbanMobile.svg",
      features: [
        "Feasibility Studies",
        "Site Appraisals",
        "Asset Appraisals",
        "Environmental Impact Assessment",
        "Social Impact Assessment",
      ],
    },
    {
      id: 3,
      title: t("service-3"),
      image: "/images/reports.png",
      mainImage: "/images/urban.svg",
      mobileImage: "/images/urbanMobile.svg",
      features: [
        "Feasibility Studies",
        "Site Appraisals",
        "Asset Appraisals",
        "Environmental Impact Assessment",
        "Social Impact Assessment",
      ],
    },
    {
      id: 4,
      title: t("service-4"),
      image: "/images/s.png",
      mainImage: "/images/urban.svg",
      mobileImage: "/images/urbanMobile.svg",
      features: [
        "Feasibility Studies",
        "Site Appraisals",
        "Asset Appraisals",
        "Environmental Impact Assessment",
        "Social Impact Assessment",
      ],
    },
    {
      id: 5,
      title: t("service-5"),
      image: "/images/landScape.png",
      mainImage: "/images/urban.svg",
      mobileImage: "/images/urbanMobile.svg",
    },
    {
      id: 6,
      title: t("service-6"),
      image: "/images/reports.png",
      mainImage: "/images/urban.svg",
      mobileImage: "/images/urbanMobile.svg",
    },
    {
      id: 7,
      title: t("service-7"),
      image: "/images/s.png",
      mainImage: "/images/urban.svg",
      mobileImage: "/images/urbanMobile.svg",
    },
    {
      id: 8,
      title: t("service-8"),
      image: "/images/landScape.png",
      mainImage: "/images/urban.svg",
      mobileImage: "/images/urbanMobile.svg",
    },
    {
      id: 9,
      title: t("service-9"),
      image: "/images/landScape.png",
      mainImage: "/images/urban.svg",
      mobileImage: "/images/urbanMobile.svg",
    },
    {
      id: 10,
      title: t("service-10"),
      image: "/images/reports.png",
      mainImage: "/images/urban.svg",
      mobileImage: "/images/urbanMobile.svg",
    },
    {
      id: 11,
      title: t("service-11"),
      image: "/images/s.png",
      mainImage: "/images/urban.svg",
      mobileImage: "/images/urbanMobile.svg",
    },
    {
      id: 12,
      title: t("service-12"),
      image: "/images/s.png",
      mainImage: "/images/urban.svg",
      mobileImage: "/images/urbanMobile.svg",
    },
  ];
  return (
    <main className="min-h-fit h-[89vh]  md:px-[88px]   main-grident-bg ">
      <section className="mx-auto px-5 py-16  md:flex gap-x-5">
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

        {/* Services Grid */}
        {selected ? (
          <aside className="w-full md:w-[70%] h-[100vh] md:h-[78vh] mx-auto relative">
               <h3
              className="font-elegance gradient-gold-text mt-[-30px] ms-5 cursor-pointer "
              onClick={() => {
                setSelected(null);
              }}
            >
              {t("allServices")}
             
            </h3>
            <div className="w-full h-full absolute inset-0 z-1 ">
              <img
                src={selected.mainImage}
                alt={selected.mainImage}
                className="hidden md:block object-fit"
              />
              <img
                src={selected.mobileImage}
                alt={selected.mobileImage}
                className=" md:hidden block  object-cover "
              />
            </div>
            <div className="z-2 absolute flex  flex-col md:flex-row justify-between inset-x-0 mx-auto   bottom-0 gap-x-7">
              <p className="text-[24px] md:text-[40px] h-fit md:my-auto text-white md:w-1/2 md:leading-[45px] text-center">
                {selected.title}
              </p>
              <div className="md:w-1/4 w-[80%] mx-auto">
                {selected?.features.map((item, index) => {
                  return (
                    <div key={index}>
                      <p className="text-white my-1  text-center md:text-start">
                        {item}
                      </p>
                      {index != selected.features.length - 1 && (
                        <div className="h-[1px] gradient-gold-line w-full"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        ) : (
          <aside className="w-full md:w-[70%] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="  text-white flex flex-col justify-center items-center "
              >
                {/* Image - appears on hover */}
                <div
                  className="text-center mx-auto"
                  onClick={() => {
                    setSelected(service);
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover h-[145px] w-[145px]"
                  />
                </div>

                {/* Content */}
                <div className="text-center " dir="ltr">
                  <h3 className="text-[14px] md:text-[18px] mb-2 text-center my-2  h-[40px] md:h-[50px]">
                    {service.title}
                  </h3>
                  <p className="text-[10px] md:text-[12px] border-[1px]  mx-auto text-center border-[#BE7B2C] py-1 px-3 w-fit cursor-pointer">
                    {t("service-btn")}
                    <img
                      src="/icons/arrow.svg"
                      alt={"arrow"}
                      className=" inline-block mx-1"
                    />
                  </p>
                </div>
              </div>
            ))}
          </aside>
        )}
      </section>
    </main>
  );
}

export default Page;
