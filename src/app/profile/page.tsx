"use client";
import React from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "motion/react";
import UploadBox from "./components/upload-component";

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
      duration: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      duration: 0.4,
    },
  },
  hover: {
    y: -5,
    boxShadow:
      "0 10px 15px -3px rgba(249, 195, 157, 0.2), 0 4px 6px -4px rgba(249, 195, 157, 0.1)",
    borderColor: "#f9c39d",
    transition: { duration: 0.2 },
  },
};

const tabItemVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.03,
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const tabContentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.15,
    },
  },
};

const tabSections = [
  { value: "general", label: "GENERAL INFORMATION" },
  { value: "job", label: "JOB DESCRIPTION" },
  { value: "document", label: "EMPLOYEE DOCUMENT" },
  { value: "salary", label: "SALARY DETAILS" },
  { value: "cv", label: "PERSONAL CV" },
  { value: "bank", label: "BANK INFORMATION" },
  { value: "medical", label: "MEDICAL INSURANCE" },
];

// Section Components
const PersonalDetails = () => (
  <div className="flex flex-col h-full">
    <motion.h3
      variants={titleVariants}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        duration: 0.25,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        duration: 0.25,
      }}
      className="text-xl sm:text-2xl ltr:font-elegance rtl:font-amiri font-bold mb-2 text-bg"
    >
      PERSONAL DETAILS
    </motion.h3>
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="border border-[#f9c39d] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 rounded-2xl p-4 sm:p-6 bg-black/20 backdrop-blur-sm flex-1"
    >
      <div className="space-y-3 text-white *:border-[#f9c39d] *:border-b *:pb-1 text-sm md:text-base">
        <motion.p variants={itemVariants} custom={0}>
          <span className="text-bg">Full Name (Arabic):</span> على على عبد
          الحميد ابوزامل
        </motion.p>
        <motion.p variants={itemVariants} custom={1}>
          <span className="text-bg">Full Name (English):</span> Ali Ali Abdel
          Hameed Abozamel
        </motion.p>
        <motion.p variants={itemVariants} custom={2}>
          <span className="text-bg">Identity NO:</span> 29703131500971
        </motion.p>
        <motion.p variants={itemVariants} custom={3}>
          <span className="text-bg">Identity End:</span> 12-10-2024
        </motion.p>
        <motion.p variants={itemVariants} custom={4} className="border-none">
          <span className="text-bg">Marital Status:</span> Married
        </motion.p>
      </div>
      <div className="space-y-3 text-white *:border-[#f9c39d] *:border-b *:pb-1 text-sm md:text-base">
        <motion.p variants={itemVariants} custom={0}>
          <span className="text-bg">Educational Qualification:</span> Bachelor
        </motion.p>
        <motion.p variants={itemVariants} custom={1}>
          <span className="text-bg">Present Address:</span> مصر - الاسكندرية
        </motion.p>
        <motion.p variants={itemVariants} custom={2}>
          <span className="text-bg">Identity NO:</span> 29703131500971
        </motion.p>
        <motion.p variants={itemVariants} custom={3} className="border-none">
          <span className="text-bg">Identity End:</span> 2023-08-12
        </motion.p>
      </div>
    </motion.div>
  </div>
);

const JobDescription = () => (
  <div className="flex flex-col h-full">
    <motion.h3
      variants={titleVariants}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        duration: 0.25,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        duration: 0.25,
      }}
      className="text-xl sm:text-2xl ltr:font-elegance rtl:font-amiri font-bold mb-2 text-bg"
    >
      JOB DESCRIPTION
    </motion.h3>
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="border border-[#f9c39d] rounded-2xl p-4 sm:p-6 bg-black/20 backdrop-blur-sm flex-1"
    >
      <div className="space-y-4 text-white">
        <motion.p
          variants={itemVariants}
          className="font-semibold text-base sm:text-lg"
        >
          Brand Design & Creative Direction:
        </motion.p>
        <motion.ul
          variants={containerVariants}
          className="space-y-2 list-disc list-inside ml-2 sm:ml-4 text-sm md:text-base"
        >
          {[
            "Develop And Lead Brand Identity Systems, Including Logos, Typography, Color Palettes, And Visual Languages.",
            "Translate Brand Strategy Into Compelling Visual Narratives Across Digital And Print.",
            "Create Mood Boards, Concept Presentations, And Brand Guidelines Tailored To Client Needs.",
            "Collaborate With Cross-Functional Teams (Marketing, Development, Production) To Ensure Brand Consistency.",
            "Supervise Junior Designers And Provide Mentorship, Feedback, And Creative Direction.",
          ].map((item, index) => (
            <motion.li key={index} variants={itemVariants} custom={index}>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  </div>
);

const EmployeeDocument = () => (
  <div className="flex flex-col h-full">
    <motion.h3
      variants={titleVariants}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        duration: 0.25,
      }}
      className="text-xl font-bold ltr:font-elegance rtl:font-amiri mb-2 text-bg"
    >
      EMPLOYEE DOCUMENT
    </motion.h3>
    <motion.div
      variants={cardVariants}
      className="bg-black/20 backdrop-blur-sm flex-1 rounded-2xl p-2 sm:p-4"
    >
      <div className="grid h-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
        <UploadBox label="ID CARD PHOTO" />
        <UploadBox label="PASSPORT PHOTO" />
        <UploadBox label="RESUME & CV" />
        <UploadBox label="CONTRACT PAPER" />
      </div>
    </motion.div>
  </div>
);

const SalaryDetails = () => (
  <div className="flex flex-col h-full">
    <motion.h3
      variants={titleVariants}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        duration: 0.25,
      }}
      className="text-xl font-bold mb-2 ltr:font-elegance rtl:font-amiri text-bg"
    >
      SALARY DETAILS
    </motion.h3>
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="border border-[#f9c39d] rounded-2xl p-4 sm:p-6 bg-black/20 backdrop-blur-sm flex-1"
    >
      <div className="space-y-3 text-white text-sm md:text-base">
        <motion.p
          variants={itemVariants}
          custom={0}
          className="border-b border-[#f9c39d] pb-1"
        >
          <span className="text-bg">Basic Salary:</span> 0000 SAR
        </motion.p>
        <motion.p
          variants={itemVariants}
          custom={1}
          className="border-b border-[#f9c39d] pb-1"
        >
          <span className="text-bg">Department:</span> Marketing & Communication
        </motion.p>
        <motion.p
          variants={itemVariants}
          custom={2}
          className="border-b border-[#f9c39d] pb-1"
        >
          <span className="text-bg">Job Time:</span> Full Time
        </motion.p>
        <motion.p
          variants={itemVariants}
          custom={3}
          className="border-b border-[#f9c39d] pb-1"
        >
          <span className="text-bg">Job Place:</span> Online & Remotely
        </motion.p>
        <motion.p variants={itemVariants} custom={4}>
          <span className="text-bg">Number of days of annual leave:</span> 21.00
        </motion.p>
      </div>
    </motion.div>
  </div>
);

const BankInformation = () => (
  <div className="flex flex-col h-full">
    <motion.h3
      variants={titleVariants}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        duration: 0.25,
      }}
      className="text-xl font-bold ltr:font-elegance rtl:font-amiri mb-2 text-bg"
    >
      BANK INFORMATION
    </motion.h3>
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="border border-[#f9c39d] rounded-2xl p-4 sm:p-6 bg-black/20 backdrop-blur-sm flex-1"
    >
      <div className="space-y-3 text-white text-sm md:text-base">
        <motion.p
          variants={itemVariants}
          custom={0}
          className="border-b border-[#f9c39d] pb-1"
        >
          <span className="text-bg">Bank Name:</span> 00000000
        </motion.p>
        <motion.p
          variants={itemVariants}
          custom={1}
          className="border-b border-[#f9c39d] pb-1"
        >
          <span className="text-bg">Branch Name:</span> 00000000
        </motion.p>
        <motion.p
          variants={itemVariants}
          custom={2}
          className="border-b border-[#f9c39d] pb-1"
        >
          <span className="text-bg">Branch Name:</span> 00000000
        </motion.p>
        <motion.p
          variants={itemVariants}
          custom={3}
          className="border-b border-[#f9c39d] pb-1"
        >
          <span className="text-bg">Account Number:</span> 00000000
        </motion.p>
        <motion.p variants={itemVariants} custom={4}>
          <span className="text-bg">Phone Number:</span> 00000000
        </motion.p>
      </div>
    </motion.div>
  </div>
);

const MedicalInsurance = () => (
  <div className="flex flex-col h-full">
    <motion.h3
      variants={titleVariants}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        duration: 0.25,
      }}
      className="text-xl font-bold ltr:font-elegance rtl:font-amiri mb-2 text-bg"
    >
      MEDICAL INSURANCE
    </motion.h3>
    <div className="flex-1 gap-4 grid grid-cols-1 md:grid-cols-4">
      <UploadBox label="INSURANCE TYPE PHOTO" />
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="space-y-3 md:col-span-3 border border-[#f9c39d] rounded-2xl p-4 sm:p-6 text-white flex-1 text-sm md:text-base"
      >
        <motion.p
          variants={itemVariants}
          custom={0}
          className="border-b border-[#f9c39d] pb-1"
        >
          <span className="text-bg">First Name:</span> 00000000
        </motion.p>
        <motion.p
          variants={itemVariants}
          custom={1}
          className="border-b border-[#f9c39d] pb-1"
        >
          <span className="text-bg">Identity NO:</span> 00000000
        </motion.p>
        <motion.p
          variants={itemVariants}
          custom={2}
          className="border-b border-[#f9c39d] pb-1"
        >
          <span className="text-bg">relative relation:</span> 00000000
        </motion.p>
        <motion.p
          variants={itemVariants}
          custom={3}
          className="border-b border-[#f9c39d] pb-1"
        >
          <span className="text-bg">Date Of Birth:</span> 00000000
        </motion.p>
        <motion.p variants={itemVariants} custom={4}>
          <span className="text-bg">Insurance NO:</span> 00000000
        </motion.p>
      </motion.div>
    </div>
  </div>
);

const ProfilePage = () => {
  const [activeTab, setActiveTab] = React.useState("general");

  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-4 sm:p-6 md:p-8 ltr:font-neue-montreal rtl:font-noto-kufi-arabic"
    >
      {/* Profile Title */}
      <motion.h1
        variants={titleVariants}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        duration: 0.25,
      }}
        className="text-3xl md:text-4xl ltr:font-elegance rtl:font-amiri font-bold mb-6 md:mb-8 text-bg"
      >
        Profile
      </motion.h1>

      {/* Main Profile Container */}
      <motion.div
        variants={cardVariants}
        className="border border-[#f9c39d] rounded-2xl p-4 sm:p-6 md:p-8 mb-8 md:mb-12"
      >
        {/* Profile Header */}
        <motion.section
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-7 gap-6 mb-8 md:mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="relative rounded-2xl overflow-hidden border-2 border-[#f9c39d] h-[250px] md:h-auto"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <Image
              src="/images/ceoimage.svg"
              alt="Profile Picture"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="md:col-span-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <motion.h1
                className="text-2xl ltr:font-elegance rtl:font-amiri sm:text-3xl md:text-4xl font-bold text-bg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                ALI ALI ABOZAMEL
              </motion.h1>
              <motion.p
                className="text-base md:text-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                SENIOR BRAND DESIGNER
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 mt-6 text-white"
            >
              {/* Left column */}
              <div className="space-y-2 *:border-[#f9c39d] *:border-b *:pb-1">
                {[
                  { label: "Employee ID:", value: "100" },
                  {
                    label: "Section:Department:",
                    value: "Marketing & Communication",
                  },
                  { label: "Joining Date:", value: "2024-09-04" },
                  { label: "Phone:", value: "01019367798" },
                  { label: "Date Of Birth:", value: "1997-03-13" },
                ].map((item, index) => (
                  <motion.p key={index} variants={itemVariants} custom={index}>
                    <span>{item.label}</span> {item.value}
                  </motion.p>
                ))}
              </div>

              {/* Right column */}
              <div className="space-y-2 *:border-[#f9c39d] *:border-b *:pb-1">
                {[
                  { label: "Gender:", value: "Male" },
                  { label: "Direct Manager:", value: "Nizar al sayed" },
                  { label: "Email:", value: "a.abozamel@noon.sa" },
                  { label: "Present Address:", value: "Kafr Alsheikh, Egypt" },
                  { label: "Nationality:", value: "Egyptian" },
                ].map((item, index) => (
                  <motion.p key={index} variants={itemVariants} custom={index}>
                    <span>{item.label}</span> {item.value}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Notes to Employees */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="md:col-span-2 border border-[#f9c39d] rounded-2xl p-4 sm:p-6 bg-black/20 backdrop-blur-sm flex flex-col justify-between"
          >
            <motion.h3
              variants={titleVariants}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        duration: 0.25,
      }}
              className="text-xl ltr:font-elegance rtl:font-amiri sm:text-2xl font-bold mb-4 md:mb-6 text-bg"
            >
              NOTES TO EMPLOYEES
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-white text-sm md:text-base"
            >
              We&apos;re Excited To Have You On Our Employee Platform. Here, We Share
              Updates, Celebrate Wins, And Grow Together As One Team Shaping The
              Future. Thank You For Being Part Of noon&apos;s Journey Toward
              Excellence. Together, We Engineer The Difference.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Tabs Navigation & Content */}
        <Tabs
          defaultValue="general"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="mb-6 md:mb-8 flex flex-wrap">
            {tabSections.map((tab, index) => (
              <motion.div
                key={tab.value}
                custom={index}
                variants={tabItemVariants}
                className="flex-shrink-0"
              >
                <TabsTrigger
                  value={tab.value}
                  className="transition-all duration-300 cursor-pointer text-xs sm:text-sm md:text-base px-2 sm:px-3"
                >
                  {tab.label}
                </TabsTrigger>
              </motion.div>
            ))}
          </TabsList>

          <div className="w-full overflow-y-auto overflow-x-hidden">
            <AnimatePresence mode="wait" initial={false}>
              {activeTab === "general" && (
                <motion.div
                  key="general"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={tabContentVariants}
                  className="w-full pb-8"
                >
                  <motion.section
                    variants={containerVariants}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
                  >
                    <PersonalDetails />
                    <JobDescription />
                    <EmployeeDocument />
                    <SalaryDetails />
                    <BankInformation />
                    <MedicalInsurance />
                  </motion.section>
                </motion.div>
              )}

              {activeTab === "job" && (
                <motion.div
                  key="job"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={tabContentVariants}
                  className="w-full pb-8"
                >
                  <motion.div variants={containerVariants}>
                    <JobDescription />
                  </motion.div>
                </motion.div>
              )}

              {activeTab === "document" && (
                <motion.div
                  key="document"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={tabContentVariants}
                  className="w-full pb-8"
                >
                  <motion.div variants={containerVariants}>
                    <EmployeeDocument />
                  </motion.div>
                </motion.div>
              )}

              {activeTab === "salary" && (
                <motion.div
                  key="salary"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={tabContentVariants}
                  className="w-full pb-8"
                >
                  <motion.div variants={containerVariants}>
                    <SalaryDetails />
                  </motion.div>
                </motion.div>
              )}

              {activeTab === "cv" && (
                <motion.div
                  key="cv"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={tabContentVariants}
                  className="w-full pb-8"
                >
                  <motion.div variants={containerVariants}>
                    <motion.h3
                      variants={titleVariants}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        duration: 0.25,
      }}
                      className="text-xl font-bold mb-2 ltr:font-elegance rtl:font-amiri text-bg"
                    >
                      PERSONAL CV
                    </motion.h3>
                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      className="border border-[#f9c39d] rounded-2xl p-4 sm:p-6 bg-black/20 backdrop-blur-sm flex items-center justify-center min-h-[200px]"
                    >
                      <motion.span
                        className="text-bg text-base md:text-lg text-center px-4"
                        variants={itemVariants}
                      >
                        Personal CV Section (Coming Soon)
                      </motion.span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}

              {activeTab === "bank" && (
                <motion.div
                  key="bank"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={tabContentVariants}
                  className="w-full pb-8"
                >
                  <motion.div variants={containerVariants}>
                    <BankInformation />
                  </motion.div>
                </motion.div>
              )}

              {activeTab === "medical" && (
                <motion.div
                  key="medical"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={tabContentVariants}
                  className="w-full pb-8"
                >
                  <motion.div variants={containerVariants}>
                    <MedicalInsurance />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Tabs>
      </motion.div>
    </motion.main>
  );
};

export default ProfilePage;
