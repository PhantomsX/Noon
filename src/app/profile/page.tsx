"use client";
import React from "react";
import Image from "next/image";
import { Aclonica, Afacad } from "next/font/google";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "motion/react";
import UploadBox from "./components/upload-component";

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
  hover: {
    y: -5,
    boxShadow:
      "0 10px 15px -3px rgba(249, 195, 157, 0.2), 0 4px 6px -4px rgba(249, 195, 157, 0.1)",
    borderColor: "#f9c39d",
    transition: { duration: 0.3 },
  },
};

const tabItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.05,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const aclonica = Aclonica({
  subsets: ["latin"],
  variable: "--font-aclonica",
  weight: ["400"],
  display: "swap",
});
const afacad = Afacad({
  subsets: ["latin"],
  variable: "--font-afacad",
  weight: ["500", "400"],
  display: "swap",
});

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
      variants={itemVariants}
      className="text-2xl font-bold mb-2 text-bg"
      style={aclonica.style}
    >
      PERSONAL DETAILS
    </motion.h3>
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="border border-[#f9c39d] grid grid-cols-2 gap-8 rounded-2xl p-6 bg-black/20 backdrop-blur-sm flex-1"
    >
      <div className="space-y-3 text-white *:border-[#f9c39d] *:border-b *:pb-1">
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
      <div className="space-y-3 text-white *:border-[#f9c39d] *:border-b *:pb-1">
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
      variants={itemVariants}
      className="text-2xl font-bold mb-2 text-bg"
      style={aclonica.style}
    >
      JOB DESCRIPTION
    </motion.h3>
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="border border-[#f9c39d] rounded-2xl p-6 bg-black/20 backdrop-blur-sm flex-1"
    >
      <div className="space-y-4 text-white">
        <motion.p variants={itemVariants} className="font-semibold text-lg">
          Brand Design & Creative Direction:
        </motion.p>
        <motion.ul
          variants={containerVariants}
          className="space-y-2 list-disc list-inside ml-4 text-sm"
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
      variants={itemVariants}
      className="text-xl font-bold mb-2 text-bg"
      style={aclonica.style}
    >
      EMPLOYEE DOCUMENT
    </motion.h3>
    <motion.div
      variants={cardVariants}
      className="bg-black/20 backdrop-blur-sm flex-1 rounded-2xl p-2"
    >
      <div className="grid h-full grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4">
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
      variants={itemVariants}
      className="text-xl font-bold mb-2 text-bg"
      style={aclonica.style}
    >
      SALARY DETAILS
    </motion.h3>
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="border border-[#f9c39d] rounded-2xl p-6 bg-black/20 backdrop-blur-sm flex-1"
    >
      <div className="space-y-3 text-white">
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
      variants={itemVariants}
      className="text-xl font-bold mb-2 text-bg"
      style={aclonica.style}
    >
      BANK INFORMATION
    </motion.h3>
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="border border-[#f9c39d] rounded-2xl p-6 bg-black/20 backdrop-blur-sm flex-1"
    >
      <div className="space-y-3 text-white">
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
      variants={itemVariants}
      className="text-xl font-bold mb-2 text-bg"
      style={aclonica.style}
    >
      MEDICAL INSURANCE
    </motion.h3>
    <div className="bg-black/20 backdrop-blur-sm flex-1 gap-4 grid grid-cols-4">
      <UploadBox label="INSURANCE TYPE PHOTO" />
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="space-y-3 col-span-3 border border-[#f9c39d] rounded-2xl p-6 text-white flex-1"
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
      style={afacad.style}
      className="p-8"
    >
      {/* Profile Title */}
      <motion.h1
        variants={itemVariants}
        className="text-4xl font-bold mb-8 text-bg"
        style={aclonica.style}
      >
        Profile
      </motion.h1>

      {/* Main Profile Container */}
      <motion.div
        variants={cardVariants}
        className="border border-[#f9c39d] rounded-2xl p-8 mb-12"
      >
        {/* Profile Header */}
        <motion.section
          variants={containerVariants}
          className="grid grid-cols-7 gap-4 mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="relative rounded-2xl overflow-hidden border-2 border-[#f9c39d]"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <Image
              src="/images/ceoimage.svg"
              alt="Profile Picture"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="col-span-4">
            <div className="flex justify-between items-center">
              <motion.h1
                className="text-4xl font-bold text-bg"
                style={aclonica.style}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                ALI ALI ABOZAMEL
              </motion.h1>
              <motion.p
                className="text-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                SENIOR BRAND DESIGNER
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-12 mt-6 text-white"
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
            className="col-span-2 border border-[#f9c39d] rounded-2xl p-6 bg-black/20 backdrop-blur-sm flex flex-col justify-between"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold mb-6 text-bg"
              style={aclonica.style}
            >
              NOTES TO EMPLOYEES
            </motion.h3>
            <motion.p variants={itemVariants} className="text-white">
              We're Excited To Have You On Our Employee Platform. Here, We Share
              Updates, Celebrate Wins, And Grow Together As One Team Shaping The
              Future. Thank You For Being Part Of Noon's Journey Toward
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
          <TabsList className="mb-8">
            {tabSections.map((tab, index) => (
              <motion.div
                key={tab.value}
                custom={index}
                variants={tabItemVariants}
              >
                <TabsTrigger
                  value={tab.value}
                  className="transition-all duration-300 cursor-pointer"
                >
                  {tab.label}
                </TabsTrigger>
              </motion.div>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* General Information */}
              <TabsContent value="general" asChild>
                <motion.section
                  variants={containerVariants}
                  className="grid grid-cols-2 gap-8"
                >
                  <PersonalDetails />
                  <JobDescription />
                  <EmployeeDocument />
                  <SalaryDetails />
                  <BankInformation />
                  <MedicalInsurance />
                </motion.section>
              </TabsContent>

              {/* Individual tabs */}
              <TabsContent value="job">
                <JobDescription />
              </TabsContent>
              <TabsContent value="document">
                <EmployeeDocument />
              </TabsContent>
              <TabsContent value="salary">
                <SalaryDetails />
              </TabsContent>
              <TabsContent value="cv">
                <motion.div variants={containerVariants}>
                  <motion.h3
                    variants={itemVariants}
                    className="text-xl font-bold mb-2 text-bg"
                    style={aclonica.style}
                  >
                    PERSONAL CV
                  </motion.h3>
                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    className="border border-[#f9c39d] rounded-2xl p-6 bg-black/20 backdrop-blur-sm flex items-center justify-center min-h-[200px]"
                  >
                    <motion.span
                      className="text-bg text-lg"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Personal CV Section (Coming Soon)
                    </motion.span>
                  </motion.div>
                </motion.div>
              </TabsContent>
              <TabsContent value="bank">
                <BankInformation />
              </TabsContent>
              <TabsContent value="medical">
                <MedicalInsurance />
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </motion.div>
    </motion.main>
  );
};

export default ProfilePage;
