"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import ceo from "@/public/images/ceoimage.svg";
import suadiarabia from "@/public/suadiarabia.svg";
import Image from "next/image";
import aboutBg from "@/public/images/background-about.png";
import { motion, useInView } from "motion/react";
import PageTitle from "../components/PageTitle";
import Sidebar from "../components/Sidebar";

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "DR. NIZAR EL SAYED",
    role: "CHAIRMAN & FOUNDER",
    image: "/images/ceoimage.svg",
  },
  {
    id: 2,
    name: "DR. NIZAR EL SAYED",
    role: "CHAIRMAN & FOUNDER",
    image: "/images/ceoimage.svg",
  },
  {
    id: 3,
    name: "DR. NIZAR EL SAYED",
    role: "CHAIRMAN & FOUNDER",
    image: "/images/ceoimage.svg",
  },
  {
    id: 4,
    name: "DR. NIZAR EL SAYED",
    role: "CHAIRMAN & FOUNDER",
    image: "/images/ceoimage.svg",
  },
  {
    id: 5,
    name: "DR. NIZAR EL SAYED",
    role: "CHAIRMAN & FOUNDER",
    image: "/images/ceoimage.svg",
  },
  {
    id: 6,
    name: "DR. NIZAR EL SAYED",
    role: "CHAIRMAN & FOUNDER",
    image: "/images/ceoimage.svg",
  },
];

// Team member card component
const TeamMemberCard = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, {
    once: true,
    margin: "-10% 0px -10% 0px",
    amount: 0.05,
  });

  return (
    <motion.div
      ref={cardRef}
      className="group relative overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        scale: 1.02,
        borderColor: "rgba(249, 195, 157, 0.3)",
        boxShadow: "0 20px 40px -10px rgba(249, 195, 157, 0.2)",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-xl">
        <motion.div
          className="w-full h-full"
          animate={{
            scale: isHovered ? 1.03 : 1,
          }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          animate={{
            opacity: isHovered ? 0.8 : 0.6,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <motion.h3
          className="text-[#f9c39d] ltr:font-elegance rtl:font-amiri font-semibold text-lg sm:text-xl mb-2"
          animate={{
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {member.name}
        </motion.h3>

        <motion.p
          className="text-gray-300 text-sm tracking-wide uppercase"
          animate={{
            color: isHovered ? "#f9c39d" : "#d1d5db",
          }}
          transition={{ duration: 0.3 }}
        >
          {member.role}
        </motion.p>

        {/* Decorative line */}
        <motion.div
          className="w-12 h-0.5 bg-gradient-to-r from-[#be7b2c] to-[#f9c39d] mx-auto mt-3"
          animate={{
            scaleX: isHovered ? 1.5 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

const AboutPage = () => {
  const t = useTranslations();
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 ltr:font-neue-montreal rtl:font-noto-kufi-arabic">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-20 mb-16 sm:mb-20 lg:mb-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[600px] lg:min-h-[700px]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center text-white space-y-6 lg:space-y-8 lg:pr-8"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-6 lg:mb-8"
            >
              <PageTitle>{t("about")}</PageTitle>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-justify text-base sm:text-lg lg:text-xl leading-relaxed mb-8 lg:mb-10"
            >
              {t("aboutText1")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="space-y-4 lg:space-y-5"
            >
              <div className="flex items-center gap-4 sm:gap-6 before:content-['/01'] before:text-bg before:text-3xl sm:before:text-4xl lg:before:text-5xl before:font-bold after:w-full after:block after:h-0.5 after:bg-linearGradient after:content-['']" />
              <p className="text-justify text-base sm:text-lg leading-relaxed pl-12 sm:pl-16 lg:pl-20">
                {t("aboutText2")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="space-y-4 lg:space-y-5"
            >
              <div className="flex items-center gap-4 sm:gap-6 before:content-['/02'] before:text-bg before:text-3xl sm:before:text-4xl lg:before:text-5xl before:font-bold after:w-full after:block after:h-0.5 after:bg-linearGradient after:content-['']" />
              <p className="text-justify text-base sm:text-lg leading-relaxed pl-12 sm:pl-16 lg:pl-20">
                {t("aboutText3")}
              </p>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="relative group"
            >
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#BE7B2C]/20 to-[#F9C39D]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />

              {/* Main image container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <Image
                  src={aboutBg}
                  alt="About Noon Consultants - Modern Architecture"
                  className="h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[650px] w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-16 h-16 border-2 border-[#F9C39D]/60 rounded-full group-hover:scale-110 group-hover:border-[#F9C39D]/80 transition-all duration-500" />
                <div className="absolute bottom-6 left-6 w-20 h-20 border-2 border-[#BE7B2C]/60 rounded-full group-hover:scale-110 group-hover:border-[#BE7B2C]/80 transition-all duration-500" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="flex-1 my-16 sm:my-20 lg:my-24"
      >
        {/* Unified Grid - CEO + Mission/Vision/Future */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 *:[&_svg]:shrink-0 text-white mb-16 sm:mb-20 lg:mb-24"
        >
          {/* CEO Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="flex flex-col items-center gap-4 lg:gap-6 p-6 sm:p-8 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-gray-800/50"
          >
            {/* CEO Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.9 }}
              className="flex-shrink-0"
            >
              <div className="relative w-[180px] sm:w-[200px] lg:w-[220px] xl:w-[240px] aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={ceo}
                  alt="CEO Dr. Nizar El Sayed"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* CEO Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="text-white text-center space-y-3 flex-1"
            >
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.1 }}
                className="text-bg capitalize text-xl sm:text-2xl lg:text-3xl ltr:font-elegance rtl:font-amiri italic font-medium"
              >
                {t("Notes From The CEO")}
              </motion.h3>

              <div className="space-y-3">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 2.2 }}
                  className="italic text-sm lg:text-base leading-relaxed text-gray-200"
                >
                  {t("aboutText4")}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 2.3 }}
                  className="italic text-sm lg:text-base leading-relaxed text-gray-200"
                >
                  {t("aboutText5")}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.4 }}
                className="pt-2"
              >
                <motion.p
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, delay: 2.5 }}
                  className="text-lg sm:text-xl lg:text-2xl font-monalisa text-[#f9c39d]"
                >
                  Dr.nizar el sayed
                </motion.p>
                <motion.p
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, delay: 2.6 }}
                  className="uppercase text-xs lg:text-sm tracking-wider text-gray-300"
                >
                  {t("CHAIRMAN")} & FOUNDER
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
          {/* Right Side Grid - Mission/Vision/Future */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
          >
            {/* Mission Section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.3 }}
              className="sm:col-span-2 flex flex-col gap-4 sm:gap-6 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-gray-800/50"
            >
              <motion.svg
                initial={{ rotate: -10 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5, delay: 2.3 }}
                width="53"
                height="45"
                viewBox="0 0 53 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M52.2999 42.4904C51.916 41.9012 51.5476 41.3011 51.1471 40.7234C47.4372 35.382 43.7126 30.0508 40.0181 24.699C39.409 23.8171 38.3955 23.8653 37.7864 24.5058C36.8962 25.4423 35.9648 26.3403 35.0508 27.2542C34.9687 27.3358 34.8827 27.4128 34.7787 27.511C34.6811 27.4192 34.5964 27.3422 34.5155 27.2613C30.6035 23.3473 26.6927 19.432 22.7781 15.5213C22.6227 15.3659 22.5509 15.2106 22.5534 14.9892C22.5637 14.0174 22.5579 13.045 22.5579 12.0726C22.5579 11.977 22.5579 11.882 22.5579 11.7465C22.7222 11.7376 22.866 11.7228 23.0098 11.7228C26.8448 11.7215 30.6805 11.7215 34.5155 11.7228C34.9077 11.7228 35.2858 11.6715 35.6022 11.4179C35.9315 11.1535 36.0861 10.7947 36.0868 10.3794C36.0906 7.67659 36.0945 4.97377 36.0855 2.27094C36.0829 1.55143 35.5098 1.00329 34.7851 1.00265C30.2768 0.998802 25.7684 0.999444 21.2601 1.00265C20.572 1.00265 20.0663 1.4558 19.9738 2.14001C19.9494 2.31908 19.9398 2.50137 19.9398 2.68237C19.9379 6.80624 19.9366 10.9295 19.9424 15.0533C19.9424 15.3114 19.8801 15.5213 19.7306 15.7337C13.6106 24.4462 7.49631 33.1618 1.3795 41.8762C1.17411 42.1682 0.995033 42.4615 1.00017 42.8396C1.01044 43.5347 1.56371 44.1002 2.26076 44.1105C2.37822 44.1124 2.49567 44.1105 2.61313 44.1105C18.6484 44.1105 34.6837 44.1066 50.719 44.122C51.4738 44.1227 51.9937 43.8826 52.3011 43.1971C52.3011 42.9622 52.3011 42.7273 52.3011 42.4917L52.2999 42.4904ZM21.4174 17.8492C21.5393 17.968 21.6381 18.0611 21.7338 18.1567C25.7158 22.1349 29.6978 26.1137 33.6805 30.0919C33.771 30.1824 33.8609 30.2748 33.9597 30.3557C34.4353 30.742 35.0662 30.7555 35.5585 30.389C35.6689 30.3062 35.7697 30.2087 35.8679 30.1111C36.7152 29.2664 37.5605 28.4198 38.4064 27.5739C38.4867 27.4937 38.5701 27.4173 38.6683 27.3242C41.9584 32.0578 45.2273 36.7613 48.5213 41.5001H4.81274C10.3577 33.6015 15.8763 25.742 21.4174 17.8492ZM22.5874 9.09186V3.60856H33.461V9.09122L22.5874 9.09186Z"
                  fill="url(#paint0_linear_2_588)"
                  stroke="url(#paint1_linear_2_588)"
                  strokeWidth="1.40033"
                  strokeLinejoin="bevel"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_588"
                    x1="1.00006"
                    y1="22.561"
                    x2="52.3011"
                    y2="22.561"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2_588"
                    x1="1.00006"
                    y1="22.561"
                    x2="52.3011"
                    y2="22.561"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                </defs>
              </motion.svg>
              <motion.div className="space-y-3 flex-1">
                <motion.h4
                  initial={{ y: -5 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 2.4 }}
                  className="text-lg sm:text-xl lg:text-2xl font-medium"
                >
                  {t("OUR MISSION")}
                </motion.h4>
                <motion.p
                  initial={{ y: 5 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 2.5 }}
                  className="text-sm sm:text-base text-justify leading-relaxed"
                >
                  {t("OUR MISSION TEXT")}
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Vision Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
              className="flex flex-col gap-4 sm:gap-6 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-gray-800/50"
            >
              <motion.svg
                initial={{ rotate: 10 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5, delay: 2.5 }}
                width="52"
                height="45"
                viewBox="0 0 52 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.3788 11.2484L46.5939 6.21059L49.1132 7.81838L45.898 12.8562L43.3788 11.2484Z"
                  fill="url(#paint0_linear_2_593)"
                />
                <path
                  d="M34.2374 7.1983L36.1538 1.54469L38.9839 2.50398L37.0675 8.1576L34.2374 7.1983Z"
                  fill="url(#paint1_linear_2_593)"
                />
                <path
                  d="M24.3049 0H27.2934V5.9769H24.3049V0Z"
                  fill="url(#paint2_linear_2_593)"
                />
                <path
                  d="M12.624 2.48848L15.4541 1.52919L17.3705 7.1828L14.5404 8.1421L12.624 2.48848Z"
                  fill="url(#paint3_linear_2_593)"
                />
                <path
                  d="M2.48389 7.82393L5.00315 6.21614L8.21829 11.254L5.69903 12.8618L2.48389 7.82393Z"
                  fill="url(#paint4_linear_2_593)"
                />
                <path
                  d="M50.5153 24.8466L51.301 23.8744L50.4828 22.9293C50.3723 22.8017 47.7259 19.7677 43.3887 16.7094C37.5903 12.6206 31.5079 10.4594 25.7992 10.4594C20.0899 10.4594 14.0124 12.6209 8.22351 16.7102C3.89344 19.7688 1.25424 22.8033 1.14397 22.9309L0.301025 23.9074L1.14397 24.8839C1.25424 25.0115 3.89344 28.0459 8.22351 31.1047C14.0123 35.194 20.0899 37.3555 25.7992 37.3555C28.6525 37.3555 31.595 36.8267 34.5664 35.7852C34.763 36.1373 35.0096 36.4687 35.3084 36.7676L42.7044 44.1637L49.0438 37.8242L42.8223 31.6026C47.6282 28.3839 50.3884 25.0036 50.5153 24.8466ZM31.0821 26.2019C28.1691 29.1149 23.4292 29.1149 20.5163 26.2019C19.1052 24.7907 18.3281 22.9146 18.3281 20.919C18.3281 18.9234 19.1052 17.0473 20.5163 15.6361C21.9728 14.1796 23.886 13.4513 25.7992 13.4513C27.7124 13.4513 29.6256 14.1796 31.0821 15.6361C32.4932 17.0473 33.2703 18.9234 33.2703 20.919C33.2703 22.9146 32.4932 24.7907 31.0821 26.2019ZM10.0097 28.7075C7.39063 26.8647 5.40789 25.0017 4.32687 23.9074C5.40809 22.8129 7.39092 20.9499 10.0097 19.1073C11.8709 17.7977 14.26 16.3611 16.9974 15.2627C15.9185 16.9344 15.3396 18.8821 15.3396 20.9189C15.3396 23.7128 16.4276 26.3393 18.4032 28.3149C20.4423 30.3539 23.1206 31.3735 25.7992 31.3735C28.0065 31.3735 30.2134 30.6804 32.0629 29.2956L34.4336 31.6664C34.2627 32.0252 34.142 32.402 34.0718 32.7865C31.2493 33.8344 28.4705 34.3669 25.7992 34.3669C19.3969 34.367 13.679 31.2893 10.0097 28.7075ZM42.7044 39.9373L37.4216 34.6544C36.8389 34.0719 36.8389 33.1238 37.4216 32.5412C38.0055 31.9573 38.9507 31.9572 39.5347 32.5412L44.8176 37.8241L42.7044 39.9373ZM40.4598 29.5758C39.2071 28.9571 37.7514 28.9739 36.5448 29.5514L34.1769 27.1837C35.5277 25.3851 36.2587 23.2083 36.2587 20.919C36.2587 18.8811 35.6792 16.9325 34.5992 15.2603C37.3427 16.3592 39.7382 17.7973 41.6046 19.1082C44.2481 20.9649 46.2459 22.8423 47.3242 23.9332C46.1324 25.1907 43.7554 27.4753 40.4598 29.5758Z"
                  fill="url(#paint5_linear_2_593)"
                />
                <path
                  d="M25.7993 16.4364C23.3276 16.4364 21.3167 18.4474 21.3167 20.9191C21.3167 23.3909 23.3276 25.4018 25.7993 25.4018C28.2711 25.4018 30.282 23.3909 30.282 20.9191C30.282 18.4474 28.2711 16.4364 25.7993 16.4364ZM25.7993 22.4133C24.9754 22.4133 24.3051 21.743 24.3051 20.9191C24.3051 20.0952 24.9754 19.4249 25.7993 19.4249C26.6232 19.4249 27.2936 20.0952 27.2936 20.9191C27.2936 21.743 26.6232 22.4133 25.7993 22.4133Z"
                  fill="url(#paint6_linear_2_593)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_593"
                    x1="47.8536"
                    y1="7.01448"
                    x2="44.6384"
                    y2="12.0523"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2_593"
                    x1="37.5688"
                    y1="2.02433"
                    x2="35.6525"
                    y2="7.67795"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_2_593"
                    x1="27.2934"
                    y1="2.98845"
                    x2="24.3049"
                    y2="2.98845"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_2_593"
                    x1="16.4123"
                    y1="4.356"
                    x2="13.5822"
                    y2="5.31529"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_2_593"
                    x1="6.61072"
                    y1="8.73507"
                    x2="4.09146"
                    y2="10.3429"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_2_593"
                    x1="51.301"
                    y1="27.3115"
                    x2="0.301025"
                    y2="27.3115"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_2_593"
                    x1="30.282"
                    y1="20.9191"
                    x2="21.3167"
                    y2="20.9191"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                </defs>
              </motion.svg>
              <motion.div className="space-y-3 flex-1">
                <motion.h4
                  initial={{ y: -5 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 2.6 }}
                  className="text-lg sm:text-xl lg:text-2xl font-medium"
                >
                  {t("OUR VISION")}
                </motion.h4>
                <motion.p
                  initial={{ y: 5 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 2.7 }}
                  className="text-sm sm:text-base text-justify leading-relaxed"
                >
                  {t("OUR VISION TEXT")}
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Future Reach Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2.5 }}
              className="flex flex-col gap-4 sm:gap-6 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-gray-800/50"
            >
              <motion.svg
                initial={{ rotate: 10 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5, delay: 2.6 }}
                width="52"
                height="51"
                viewBox="0 0 52 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M33.4612 17.8278C35.7014 20.0681 39.3335 20.0681 41.5739 17.8278C43.814 15.5876 43.814 11.9554 41.5739 9.71514C39.3335 7.47488 35.7014 7.47488 33.4612 9.71514C31.2208 11.9554 31.2208 15.5876 33.4612 17.8278ZM35.4894 15.7997C36.6095 16.9198 38.4256 16.9198 39.5457 15.7997C40.6658 14.6795 40.6658 12.8634 39.5457 11.7433C38.4256 10.6232 36.6095 10.6232 35.4894 11.7433C34.3691 12.8634 34.3691 14.6795 35.4894 15.7997Z"
                  fill="url(#paint0_linear_2_605)"
                />
                <path
                  d="M27.5463 33.161C27.8464 33.8942 28.6535 34.3035 29.405 34.0531C30.1565 33.8027 30.5666 32.9875 30.2726 32.2521C28.1395 26.9162 24.3726 23.1496 19.0368 21.0162C18.3013 20.7222 17.4864 21.1327 17.236 21.8839C16.9855 22.6354 17.3948 23.4425 18.1279 23.7425C22.5977 25.5713 25.7175 28.6911 27.5463 33.161Z"
                  fill="url(#paint1_linear_2_605)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M37.6929 0.88831C41.5806 0.0206014 45.2425 -0.051335 47.4967 0.0214329C49.5716 0.0884069 51.2007 1.71767 51.2676 3.79252C51.3404 6.04649 51.2684 9.70855 50.4008 13.5962C49.5351 17.4747 47.8518 21.6908 44.6164 24.9262L44.5524 24.9901C41.9374 27.6051 39.8834 29.6591 38.1851 31.1297L38.8669 37.266C38.9633 38.132 38.6607 38.9947 38.0446 39.6108L31.957 45.6982C30.501 47.1544 28.0306 46.6473 27.2656 44.7353L24.4458 37.6857L15.3959 39.1938C13.4547 39.5173 11.7716 37.8345 12.0952 35.893L13.6035 26.843L6.55376 24.0232C4.64189 23.2586 4.13478 20.7881 5.59083 19.3319L11.6782 13.2446C12.2944 12.6284 13.1571 12.3258 14.0232 12.422L20.1592 13.1038C21.6301 11.4055 23.6837 9.35168 26.299 6.73642L26.3627 6.67266C29.5981 3.43725 33.8145 1.75401 37.6929 0.88831ZM38.3176 3.68771C34.7383 4.48664 31.1019 5.98987 28.3909 8.70084C25.3838 11.708 23.2587 13.8354 21.8681 15.525L21.3745 16.1247L13.7064 15.2728L7.61901 21.36L14.6687 24.1801C15.9202 24.6806 16.6543 25.9851 16.4327 27.3146L14.9244 36.3645L23.9743 34.8564C25.304 34.6347 26.6085 35.3687 27.109 36.6204L29.9288 43.67L36.0161 37.5827L35.1643 29.9147L35.764 29.421C37.4537 28.0302 39.5811 25.9051 42.5882 22.898C45.2993 20.1872 46.8025 16.5507 47.6014 12.9713C48.3982 9.40098 48.469 5.99956 48.401 3.88505C48.3827 3.32169 47.9673 2.90639 47.404 2.88821C45.2895 2.81994 41.8881 2.89079 38.3176 3.68771Z"
                  fill="url(#paint2_linear_2_605)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.9183 50.4466C14.3583 49.8868 14.3583 48.9787 14.9183 48.4185L21.0027 42.334C21.5629 41.7742 22.471 41.7742 23.0309 42.334C23.5911 42.8942 23.5911 43.8023 23.0309 44.3622L16.9465 50.4466C16.3864 51.0068 15.4784 51.0068 14.9183 50.4466Z"
                  fill="url(#paint3_linear_2_605)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.72113 36.2497C0.161072 35.6898 0.161072 34.7817 0.72113 34.2216L6.80564 28.1371C7.36573 27.5772 8.27377 27.5772 8.83382 28.1371C9.39388 28.6973 9.39388 29.6054 8.83382 30.1653L2.74931 36.2497C2.18925 36.8099 1.28119 36.8099 0.72113 36.2497Z"
                  fill="url(#paint4_linear_2_605)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.75769 47.3992C3.19763 46.8393 3.19763 45.9312 3.75769 45.371L9.8422 39.2866C10.4023 38.7267 11.3103 38.7267 11.8704 39.2866C12.4304 39.8468 12.4304 40.7548 11.8704 41.3147L5.78587 47.3992C5.22578 47.9594 4.31775 47.9594 3.75769 47.3992Z"
                  fill="url(#paint5_linear_2_605)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_605"
                    x1="43.2539"
                    y1="13.7715"
                    x2="31.7809"
                    y2="13.7715"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2_605"
                    x1="30.3683"
                    y1="27.5237"
                    x2="17.1622"
                    y2="27.5237"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_2_605"
                    x1="51.289"
                    y1="23.2696"
                    x2="4.74988"
                    y2="23.2696"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_2_605"
                    x1="23.451"
                    y1="46.3904"
                    x2="14.4983"
                    y2="46.3904"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_2_605"
                    x1="9.25387"
                    y1="32.1935"
                    x2="0.301086"
                    y2="32.1935"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_2_605"
                    x1="12.2904"
                    y1="43.343"
                    x2="3.33765"
                    y2="43.343"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BE7B2C" />
                    <stop offset="1" stopColor="#F9C39D" />
                  </linearGradient>
                </defs>
              </motion.svg>
              <motion.div className="space-y-3 flex-1">
                <motion.h4
                  initial={{ y: -5 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 2.7 }}
                  className="text-lg sm:text-xl lg:text-2xl font-medium"
                >
                  {t("FUTURE REACH")}
                </motion.h4>
                <motion.p
                  initial={{ y: 5 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 2.8 }}
                  className="text-sm sm:text-base text-justify leading-relaxed"
                >
                  {t("FUTURE REACH TEXT")}
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        className="my-16 sm:my-20 lg:my-24"
      >
        {/* Team Header - Grid Layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.7 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center mb-12 sm:mb-16 lg:mb-20"
        >
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 2.8 }}
            className="lg:col-span-1 text-center lg:text-left"
          >
            <PageTitle>{t("our_team")}</PageTitle>
          </motion.div>

          {/* Description Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 3.0 }}
            className="lg:col-span-2"
          >
            <motion.p
              className="text-white text-base sm:text-lg lg:text-xl leading-relaxed text-center lg:text-left"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {t("team_text")}
            </motion.p>

            {/* Optional: Add some team stats or highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.2 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-[#f9c39d]">
                  15+
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">
                  Years Experience
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-[#f9c39d]">
                  50+
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">
                  Projects Completed
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-[#f9c39d]">
                  20+
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">
                  Team Members
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.3 }}
          className="max-w-7xl mx-auto px-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3.2 }}
        className="my-16 sm:my-20 lg:my-24 relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 3.4 }}
            className="space-y-8 lg:space-y-12"
          >
            {/* Head Quarters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.5 }}
              className="relative p-6 lg:p-8 rounded-2xl bg-white/5 border border-gray-800/50 hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Background decoration */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#BE7B2C]/20 to-[#F9C39D]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 3.6 }}
                  className="flex items-center gap-4 mb-6"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#BE7B2C] to-[#F9C39D] flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <motion.h2
                    className="text-bg capitalize ltr:font-elegance rtl:font-amiri font-medium text-2xl sm:text-3xl lg:text-4xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    {t("headquarters")}
                  </motion.h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 3.7 }}
                  className="space-y-4"
                >
                  <motion.div
                    initial={{ x: -10 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 3.8 }}
                    className="flex items-start gap-3 hover:translate-x-1 transition-transform"
                  >
                    <svg
                      className="w-5 h-5 text-[#F9C39D] mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="text-white text-base lg:text-lg">
                      <div className="font-medium">{t("address1")}</div>
                      <div className="text-gray-400 text-sm">12253</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: -10 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 3.9 }}
                    className="flex items-center gap-3 hover:translate-x-1 transition-transform"
                  >
                    <svg
                      className="w-5 h-5 text-[#F9C39D] flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <a
                      href="tel:00966114110000"
                      className="text-white text-base lg:text-lg hover:text-bg transition-colors"
                    >
                      +966 11 411 0000
                    </a>
                  </motion.div>

                  <motion.div
                    initial={{ x: -10 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 4.0 }}
                    className="flex items-center gap-3 hover:translate-x-1 transition-transform"
                  >
                    <svg
                      className="w-5 h-5 text-[#F9C39D] flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a
                      href="mailto:info@noon.sa"
                      className="text-white text-base lg:text-lg hover:text-bg transition-colors"
                    >
                      info@noon.sa
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Branch Office */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 4.1 }}
              className="relative p-6 lg:p-8 rounded-2xl bg-white/5 border border-gray-800/50 hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Background decoration */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#F9C39D]/20 to-[#BE7B2C]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 4.2 }}
                  className="flex items-center gap-4 mb-6"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F9C39D] to-[#BE7B2C] flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z"
                        clipRule="evenodd"
                      />
                      <path d="M9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" />
                    </svg>
                  </div>
                  <motion.h2
                    className="text-bg capitalize ltr:font-elegance rtl:font-amiri font-medium text-2xl sm:text-3xl lg:text-4xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    {t("branchOffice")}
                  </motion.h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 4.3 }}
                  className="space-y-4"
                >
                  <motion.div
                    initial={{ x: -10 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 4.4 }}
                    className="flex items-start gap-3 hover:translate-x-1 transition-transform"
                  >
                    <svg
                      className="w-5 h-5 text-[#F9C39D] mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="text-white text-base lg:text-lg">
                      <div className="font-medium">{t("address2")}</div>
                      <div className="text-gray-400 text-sm">42317</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: -10 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 4.5 }}
                    className="flex items-center gap-3 hover:translate-x-1 transition-transform"
                  >
                    <svg
                      className="w-5 h-5 text-[#F9C39D] flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <a
                      href="tel:00966124199999"
                      className="text-white text-base lg:text-lg hover:text-bg transition-colors"
                    >
                      +966 12 419 9999
                    </a>
                  </motion.div>

                  <motion.div
                    initial={{ x: -10 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 4.6 }}
                    className="flex items-center gap-3 hover:translate-x-1 transition-transform"
                  >
                    <svg
                      className="w-5 h-5 text-[#F9C39D] flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a
                      href="mailto:info@noon.sa"
                      className="text-white text-base lg:text-lg hover:text-bg transition-colors"
                    >
                      info@noon.sa
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* New Branch Coming Soon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 4.7 }}
              className="relative p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-[#BE7B2C]/10 to-[#F9C39D]/10 border border-[#F9C39D]/30 hover:border-[#F9C39D]/50 transition-all duration-300 group overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#BE7B2C]/30 to-[#F9C39D]/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Animated background elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border border-[#F9C39D]/20 rounded-full animate-pulse" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border border-[#BE7B2C]/20 rounded-full animate-pulse delay-1000" />

              <div className="relative text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 4.8 }}
                  className="flex items-center justify-center gap-4 mb-6"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#BE7B2C] to-[#F9C39D] flex items-center justify-center animate-pulse">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </motion.div>

                <motion.h2
                  className="text-bg capitalize ltr:font-elegance rtl:font-amiri font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 leading-tight"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 4.9 }}
                >
                  <span className="block">{t("new_branch")}</span>
                  <span className="block text-[#F9C39D]">
                    {t("coming_soon")}
                  </span>
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 5.0 }}
                  className="text-white/80 text-base lg:text-lg"
                >
                  <p>Stay tuned for our expansion</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Saudi Arabia Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 3.6 }}
            className="relative h-[500px] lg:h-[700px] xl:h-[800px] group"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#BE7B2C]/10 to-[#F9C39D]/10 rounded-3xl" />

            {/* Map container with enhanced styling */}
            <div className="relative h-full rounded-3xl overflow-hidden border border-gray-800/30 bg-black/20 backdrop-blur-sm group-hover:border-[#F9C39D]/30 transition-all duration-300">
              {/* Decorative elements */}
              <div className="absolute top-6 left-6 w-3 h-3 bg-[#F9C39D] rounded-full animate-pulse" />
              <div className="absolute top-6 right-6 w-2 h-2 bg-[#BE7B2C] rounded-full animate-pulse delay-500" />
              <div className="absolute bottom-6 left-6 w-2 h-2 bg-[#F9C39D] rounded-full animate-pulse delay-1000" />

              <Image
                src={suadiarabia}
                alt="Saudi Arabia Map"
                fill
                className="object-contain p-6 lg:p-8 xl:p-12 group-hover:scale-105 transition-transform duration-700"
                priority
              />

              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Map title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 5.0 }}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center"
            >
              <h3 className="text-bg font-elegance text-xl lg:text-2xl xl:text-3xl">
                Our Presence in Saudi Arabia
              </h3>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default AboutPage;
