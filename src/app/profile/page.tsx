"use client";
import React from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import UploadBox from "./components/upload-component";

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
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
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
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
  visible: {
    opacity: 1,
    y: 0,
  },
};

const tabContentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
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
  { value: "general", labelKey: "tabs.general" },
  { value: "job", labelKey: "tabs.job" },
  { value: "document", labelKey: "tabs.document" },
  { value: "salary", labelKey: "tabs.salary" },
  { value: "cv", labelKey: "tabs.cv" },
  { value: "bank", labelKey: "tabs.bank" },
  { value: "medical", labelKey: "tabs.medical" },
];

// Section Components
const PersonalDetails = () => {
  const t = useTranslations("profile");

  return (
    <div className="flex flex-col h-full">
      <motion.h3
        variants={titleVariants}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
          duration: 0.25,
        }}
        className="text-xl sm:text-2xl ltr:font-elegance rtl:font-font-noto-kufi-arabic font-bold mb-2 text-bg"
      >
        {t("sections.personalDetails")}
      </motion.h3>
      <motion.div
        variants={cardVariants}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          duration: 0.4,
        }}
        whileHover="hover"
        className="border border-[#f9c39d] grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 rounded-2xl p-4 sm:p-6 bg-black/20 backdrop-blur-sm flex-1"
      >
        <div className="space-y-3 text-white *:border-[#f9c39d] *:border-b *:pb-1 text-sm md:text-base">
          {[
            {
              label: t("fields.fullNameArabic") + ":",
              value: t("values.fullNameArabic"),
            },
            {
              label: t("fields.fullNameEnglish") + ":",
              value: t("values.fullNameEnglish"),
            },
            { label: t("fields.identityNo") + ":", value: "29703131500971" },
            { label: t("fields.identityEnd") + ":", value: "12-10-2024" },
            {
              label: t("fields.maritalStatus") + ":",
              value: t("values.married"),
            },
          ].map((item, index) => (
            <motion.p
              key={index}
              variants={itemVariants}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                duration: 0.3,
              }}
              custom={index}
              className={index === 4 ? "border-none" : ""}
            >
              <span className="text-[#f9c39d]">{item.label}</span> {item.value}
            </motion.p>
          ))}
        </div>
        <div className="space-y-3 text-white *:border-[#f9c39d] *:border-b *:pb-1 text-sm md:text-base">
          {[
            {
              label: t("fields.educationalQualification") + ":",
              value: t("values.bachelor"),
            },
            {
              label: t("fields.presentAddress") + ":",
              value: t("values.egypt") + " - " + t("values.alexandria"),
            },
            {
              label: t("fields.identityNo") + ":",
              value: "29703131500971",
            },
            { label: t("fields.identityEnd") + ":", value: "2023-08-12" },
          ].map((item, index) => (
            <motion.p
              key={index}
              variants={itemVariants}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                duration: 0.3,
              }}
              custom={index}
              className={index === 3 ? "border-none" : ""}
            >
              <span className="text-[#f9c39d]">{item.label}</span> {item.value}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const JobDescription = () => {
  const t = useTranslations("profile");

  return (
    <div className="flex flex-col h-full">
      <motion.h3
        variants={titleVariants}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
          duration: 0.25,
        }}
        className="text-xl sm:text-2xl ltr:font-elegance rtl:font-font-noto-kufi-arabic font-bold mb-2 text-bg"
      >
        {t("sections.jobDescription")}
      </motion.h3>
      <motion.div
        variants={cardVariants}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          duration: 0.4,
        }}
        whileHover="hover"
        className="border border-[#f9c39d] rounded-2xl p-4 sm:p-6 bg-black/20 backdrop-blur-sm flex-1"
      >
        <div className="space-y-4 text-white">
          <motion.p
            variants={itemVariants}
            className="font-semibold text-base sm:text-lg"
          >
            {t("jobResponsibilities.title")}
          </motion.p>
          <motion.ul
            variants={containerVariants}
            transition={{
              when: "beforeChildren",
              staggerChildren: 0.05,
              duration: 0.3,
              ease: "easeOut",
            }}
            className="space-y-2 list-disc list-inside ml-2 sm:ml-4 text-sm md:text-base"
          >
            {[
              t("jobResponsibilities.responsibility1"),
              t("jobResponsibilities.responsibility2"),
              t("jobResponsibilities.responsibility3"),
              t("jobResponsibilities.responsibility4"),
              t("jobResponsibilities.responsibility5"),
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
};

const EmployeeDocument = () => {
  const t = useTranslations("profile");
  return (
    <div className="flex flex-col h-full">
      <motion.h3
        variants={titleVariants}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
          duration: 0.25,
        }}
        className="text-xl font-bold ltr:font-elegance rtl:font-font-noto-kufi-arabic mb-2 text-bg"
      >
        {t("tabs.document")}
      </motion.h3>
      <motion.div
        variants={cardVariants}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          duration: 0.4,
        }}
        className="bg-black/20 backdrop-blur-sm flex-1 rounded-2xl p-2 sm:p-4"
      >
        <div className="grid h-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
          <UploadBox label={t("documents.idCardPhoto")} />
          <UploadBox label={t("documents.passportPhoto")} />
          <UploadBox label={t("documents.resumeCv")} />
          <UploadBox label={t("documents.contractPaper")} />
        </div>
      </motion.div>
    </div>
  );
};

const SalaryDetails = () => {
  const t = useTranslations("profile");
  return (
    <div className="flex flex-col h-full">
      <motion.h3
        variants={titleVariants}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
          duration: 0.25,
        }}
        className="text-xl font-bold mb-2 ltr:font-elegance rtl:font-font-noto-kufi-arabic text-bg"
      >
        {t("tabs.salary")}
      </motion.h3>
      <motion.div
        variants={cardVariants}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          duration: 0.4,
        }}
        whileHover="hover"
        className="border border-[#f9c39d] rounded-2xl p-4 sm:p-6 bg-black/20 backdrop-blur-sm flex-1"
      >
        <div className="space-y-3 text-white text-sm md:text-base">
          {[
            { label: t("fields.basicSalary"), value: "0000 SAR" },
            {
              label: t("fields.department"),
              value: t("fields.marketingCommunication"),
            },
            { label: t("fields.jobTime"), value: t("fields.fullTime") },
            { label: t("fields.jobPlace"), value: t("fields.onlineRemotely") },
            { label: t("fields.annualLeaveDays"), value: "21.00" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={index}
              className={`flex justify-between items-center ${
                index !== 4 ? "border-b border-[#f9c39d]" : ""
              } pb-2`}
            >
              <span className="text-[#f9c39d]">{item.label}</span>
              <span>{item.value}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const BankInformation = () => {
  const t = useTranslations("profile");

  return (
    <div className="flex flex-col h-full">
      <motion.h3
        variants={titleVariants}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
          duration: 0.25,
        }}
        className="text-xl font-bold ltr:font-elegance rtl:font-font-noto-kufi-arabic mb-2 text-bg"
      >
        {t("sections.bankInformation")}
      </motion.h3>
      <motion.div
        variants={cardVariants}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          duration: 0.4,
        }}
        whileHover="hover"
        className="border border-[#f9c39d] rounded-2xl p-4 sm:p-6 bg-black/20 backdrop-blur-sm flex-1"
      >
        <div className="space-y-3 text-white text-sm md:text-base">
          {[
            { label: t("fields.bankName"), value: "00000000" },
            { label: t("fields.branchName"), value: "00000000" },
            { label: t("fields.branchName"), value: "00000000" },
            { label: t("fields.accountNumber"), value: "00000000" },
            { label: t("fields.phoneNumber"), value: "00000000" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={index}
              className={`flex justify-between items-center ${
                index !== 4 ? "border-b border-[#f9c39d]" : ""
              } pb-2`}
            >
              <span className="text-[#f9c39d]">{item.label}</span>
              <span>{item.value}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const MedicalInsurance = () => {
  const t = useTranslations("profile");
  return (
    <div className="flex flex-col h-full">
      <motion.h3
        variants={titleVariants}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
          duration: 0.25,
        }}
        className="text-xl font-bold ltr:font-elegance rtl:font-font-noto-kufi-arabic mb-2 text-bg"
      >
        {t("tabs.medical")}
      </motion.h3>
      <div className="flex-1 gap-4 grid grid-cols-1 md:grid-cols-4">
        <UploadBox label={t("documents.insuranceTypePhoto")} />
        <motion.div
          variants={cardVariants}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            duration: 0.4,
          }}
          whileHover="hover"
          className="space-y-3 md:col-span-3 border border-[#f9c39d] rounded-2xl p-4 sm:p-6 text-white flex-1 text-sm md:text-base"
        >
          {[
            { label: t("fields.firstName"), value: "00000000" },
            { label: t("fields.identityNo"), value: "00000000" },
            { label: t("fields.relativeRelation"), value: "00000000" },
            { label: t("fields.dateOfBirth"), value: "00000000" },
            { label: t("fields.insuranceNo"), value: "00000000" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={index}
              className={`flex justify-between items-center ${
                index !== 4 ? "border-b border-[#f9c39d]" : ""
              } pb-2`}
            >
              <span className="text-[#f9c39d]">{item.label}</span>
              <span>{item.value}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const ProfilePage = () => {
  const [activeTab, setActiveTab] = React.useState("general");
  const t = useTranslations("profile");
  const locale = useLocale();

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
        className="text-3xl md:text-4xl ltr:font-elegance rtl:font-font-noto-kufi-arabic font-bold mb-6 md:mb-8 text-bg"
      >
        {t("title")}
      </motion.h1>

      {/* Main Profile Container */}
      <motion.div
        variants={cardVariants}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          duration: 0.4,
        }}
        className="border border-[#f9c39d] rounded-2xl p-4 sm:p-6 md:p-8 mb-8 md:mb-12"
      >
        {/* Profile Header */}
        <motion.section
          variants={containerVariants}
          transition={{
            when: "beforeChildren",
            staggerChildren: 0.05,
            duration: 0.3,
            ease: "easeOut",
          }}
          className="grid grid-cols-1 md:grid-cols-7 gap-6 mb-8 md:mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="relative rounded-2xl overflow-hidden border-2 border-[#f9c39d] h-[250px] md:h-auto"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <Image
              src="/images/ceoimage.svg"
              alt={t("alt.profile_picture")}
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="md:col-span-4">
            <div className="flex flex-col md:flex-row ltr:md:justify-between rtl:md:justify-start md:items-center gap-2">
              <motion.h1
                className="text-2xl ltr:font-elegance rtl:font-font-noto-kufi-arabic sm:text-3xl md:text-4xl font-bold text-bg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {t("header.fullName")}
              </motion.h1>
              <motion.p
                className="text-base md:text-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {t("header.jobTitle")}
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              transition={{
                when: "beforeChildren",
                staggerChildren: 0.05,
                duration: 0.3,
                ease: "easeOut",
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 mt-6 text-white"
            >
              {/* Left column */}
              <div className="space-y-2 *:border-[#f9c39d] *:border-b *:pb-1 text-sm md:text-base">
                {[
                  { label: t("fields.employeeId") + ":", value: "100" },
                  {
                    label: t("fields.sectionDepartment") + ":",
                    value: t("fields.marketingCommunication"),
                  },
                  { label: t("fields.joiningDate") + ":", value: "2024-09-04" },
                  {
                    label: t("fields.phoneNumber") + ":",
                    value: "01019367798",
                  },
                  { label: t("fields.dateOfBirth") + ":", value: "1997-03-13" },
                ].map((item, index) => (
                  <motion.p key={index} variants={itemVariants} custom={index}>
                    <span className="text-[#f9c39d]">{item.label}</span>{" "}
                    {item.value}
                  </motion.p>
                ))}
              </div>

              {/* Right column */}
              <div className="space-y-2 *:border-[#f9c39d] *:border-b *:pb-1 text-sm md:text-base">
                {[
                  { label: t("fields.gender") + ":", value: t("fields.male") },
                  {
                    label: t("fields.directManager") + ":",
                    value: "Nizar al sayed",
                  },
                  {
                    label: t("fields.email") + ":",
                    value: "a.abozamel@noon.sa",
                  },
                  {
                    label: t("fields.presentAddress") + ":",
                    value: t("fields.kafrAlsheikhEgypt"),
                  },
                  {
                    label: t("fields.nationality") + ":",
                    value: t("fields.egyptian"),
                  },
                ].map((item, index) => (
                  <motion.p key={index} variants={itemVariants} custom={index}>
                    <span className="text-[#f9c39d]">{item.label}</span>{" "}
                    {item.value}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Notes to Employees */}
          <motion.div
            variants={cardVariants}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              duration: 0.4,
            }}
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
              className="text-xl ltr:font-elegance rtl:font-font-noto-kufi-arabic sm:text-2xl font-bold mb-4 md:mb-6 text-bg"
            >
              {t("welcome.title")}
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-white text-sm md:text-base leading-relaxed"
            >
              {t("welcome.description")}
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Tabs Navigation & Content */}
        <Tabs
          dir={locale === "ar" ? "rtl" : "ltr"}
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
                transition={{
                  delay: index * 0.03,
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="shrink-0"
              >
                <TabsTrigger
                  value={tab.value}
                  className="transition-all duration-300 cursor-pointer text-xs sm:text-sm md:text-base px-2 sm:px-3"
                >
                  {t(tab.labelKey)}
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
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                    when: "beforeChildren",
                    staggerChildren: 0.05,
                  }}
                  className="w-full pb-8"
                >
                  <motion.section
                    variants={containerVariants}
                    transition={{
                      when: "beforeChildren",
                      staggerChildren: 0.05,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8"
                  >
                    <PersonalDetails />
                    <JobDescription />
                  </motion.section>
                  <motion.section
                    variants={containerVariants}
                    transition={{
                      when: "beforeChildren",
                      staggerChildren: 0.05,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8"
                  >
                    <EmployeeDocument />
                    <SalaryDetails />
                  </motion.section>
                  <motion.section
                    variants={containerVariants}
                    transition={{
                      when: "beforeChildren",
                      staggerChildren: 0.05,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
                  >
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
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                    when: "beforeChildren",
                    staggerChildren: 0.05,
                  }}
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
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                    when: "beforeChildren",
                    staggerChildren: 0.05,
                  }}
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
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                    when: "beforeChildren",
                    staggerChildren: 0.05,
                  }}
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
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                    when: "beforeChildren",
                    staggerChildren: 0.05,
                  }}
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
                      className="text-xl font-bold mb-2 ltr:font-elegance rtl:font-font-noto-kufi-arabic text-bg"
                    >
                      {t("sections.personalCv")}
                    </motion.h3>
                    <motion.div
                      variants={cardVariants}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                        duration: 0.4,
                      }}
                      whileHover="hover"
                      className="border border-[#f9c39d] rounded-2xl p-4 sm:p-6 bg-black/20 backdrop-blur-sm flex items-center justify-center min-h-[200px]"
                    >
                      <motion.span
                        className="text-bg text-base md:text-lg text-center px-4"
                        variants={itemVariants}
                      >
                        {t("sections.personalCv")} ({t("comingSoon")})
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
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                    when: "beforeChildren",
                    staggerChildren: 0.05,
                  }}
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
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                    when: "beforeChildren",
                    staggerChildren: 0.05,
                  }}
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
