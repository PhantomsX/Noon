"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "motion/react";
import CountUp from "@/components/CountUp";
import PageTitle from "../components/PageTitle";

// Job positions data
const positions = [
  "architect",
  "urbanPlanner",
  "interiorDesigner",
  "projectManager",
];

// Benefits icons (using simple SVG icons)
const BenefitIcon = ({ type }: { type: string }) => {
  const icons = {
    growth: (
      <svg
        className="w-8 h-8 text-[#f9c39d]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    projects: (
      <svg
        className="w-8 h-8 text-[#f9c39d]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    culture: (
      <svg
        className="w-8 h-8 text-[#f9c39d]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    impact: (
      <svg
        className="w-8 h-8 text-[#f9c39d]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  };
  return icons[type as keyof typeof icons] || null;
};

// Application process step icon
const StepIcon = ({ step }: { step: number }) => (
  <div className="w-12 h-12 rounded-full bg-linear-to-r from-[#BE7B2C] to-[#F9C39D] flex items-center justify-center text-white font-bold text-lg">
    {step}
  </div>
);

// Animated counter component using react-bits Counter
const AnimatedCounter = ({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) => {
  const [val, setVal] = useState(0);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      setVal(target);
    }
  }, [isInView, target]);

  return (
    <div className="flex items-center justify-center gap-1">
      <CountUp
        to={target}
        duration={2}
        className="text-4xl font-bold text-[#f9c39d]"
      />
      <span className="text-4xl font-bold text-[#f9c39d] mb-1">{suffix}</span>
    </div>
  );
};

// Job position card component
const JobCard = ({ position, index }: { position: string; index: number }) => {
  const t = useTranslations();
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const positionData = t.raw("careers.positions." + position);

  return (
    <motion.div
      ref={cardRef}
      className="bg-black/40 backdrop-blur-md rounded-2xl border border-[#BE7B2C]/20 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 40px -12px rgba(249, 195, 157, 0.3)",
      }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-[#f9c39d] mb-2">
              {positionData.title}
            </h3>
            <p className="text-gray-400 text-sm mb-1">
              {positionData.department}
            </p>
            <div className="flex gap-4 text-sm text-gray-300">
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {positionData.type}
              </span>
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {positionData.location}
              </span>
            </div>
          </div>
          <motion.button
            className="text-[#f9c39d] hover:text-[#BE7B2C] transition-colors"
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </motion.svg>
          </motion.button>
        </div>

        <p className="text-gray-300 mb-4">{positionData.description}</p>

        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="border-t border-[#BE7B2C]/20 pt-4 mt-4">
            <h4 className="text-[#f9c39d] font-semibold mb-3">
              {t("common.requirements")}:
            </h4>
            <ul className="space-y-2">
              {positionData.requirements.map(
                (req: string, reqIndex: number) => (
                  <motion.li
                    key={reqIndex}
                    className="flex items-start gap-2 text-gray-300 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ delay: reqIndex * 0.1 }}
                  >
                    <svg
                      className="w-4 h-4 text-[#f9c39d] mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {req}
                  </motion.li>
                ),
              )}
            </ul>
            <motion.button
              className="mt-6 px-6 py-3 bg-linear-to-r from-[#BE7B2C] to-[#F9C39D] text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("careers.applyNow")}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const CareersPage = () => {
  const t = useTranslations();
  const benefitsRef = useRef(null);
  const statsRef = useRef(null);
  const processRef = useRef(null);

  const benefitsInView = useInView(benefitsRef, {
    once: true,
    margin: "-100px",
  });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });

  const benefits = ["growth", "projects", "culture", "impact"];
  const steps = ["apply", "review", "interview", "offer"];

  return (
    <main className="ltr:font-neue-montreal rtl:font-noto-kufi-arabic">
      {/* Hero Section */}
      <section className="relative px-5 md:px-[70px] pt-20 pb-16">
        <div className="relative z-10">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <PageTitle>{t("careers.title")}</PageTitle>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[#f9c39d] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("careers.subtitle")}
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t("careers.description")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="px-5 md:px-[70px] py-16">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <AnimatedCounter target={50} suffix="+" />
            <p className="text-gray-400 mt-2">{t("common.team_members")}</p>
          </div>
          <div className="text-center">
            <AnimatedCounter target={200} suffix="+" />
            <p className="text-gray-400 mt-2">
              {t("common.projects_completed")}
            </p>
          </div>
          <div className="text-center">
            <AnimatedCounter target={12} suffix="+" />
            <p className="text-gray-400 mt-2">{t("common.years_experience")}</p>
          </div>
          <div className="text-center">
            <AnimatedCounter target={95} suffix="%" />
            <p className="text-gray-400 mt-2">
              {t("common.client_satisfaction")}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Why Join Us Section */}
      <section ref={benefitsRef} className="px-5 md:px-[70px] py-16">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={
            benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#f9c39d]"
            initial={{ opacity: 0, y: 20 }}
            animate={
              benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("careers.whyJoinUs")}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const benefitData = t.raw("careers.benefits." + benefit);
              return (
                <motion.div
                  key={benefit}
                  className="text-center p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-[#BE7B2C]/20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    benefitsInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px -12px rgba(249, 195, 157, 0.3)",
                  }}
                >
                  <motion.div
                    className="flex justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BenefitIcon type={benefit} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#f9c39d] mb-3">
                    {benefitData.title}
                  </h3>
                  <p className="text-gray-300">{benefitData.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Open Positions Section */}
      <section className="px-5 md:px-[70px] py-16">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#f9c39d]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("careers.openPositions")}
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <JobCard key={position} position={position} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Application Process Section */}
      <section ref={processRef} className="px-5 md:px-[70px] py-16">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#f9c39d]"
            initial={{ opacity: 0, y: 20 }}
            animate={
              processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("careers.applicationProcess")}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* The "Stick" - Continuous connecting line */}
            <div className="hidden md:block absolute top-6 h-0.5 left-[12.5%] right-[12.5%] bg-linear-to-r from-[#BE7B2C] via-[#F9C39D] to-[#BE7B2C] opacity-30 z-0" />

            {steps.map((step, index) => {
              const stepData = t.raw("careers.steps." + step);
              return (
                <motion.div
                  key={step}
                  className="text-center relative z-10"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                >
                  <motion.div
                    className="flex justify-center mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <StepIcon step={index + 1} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#f9c39d] mb-3">
                    {stepData.title}
                  </h3>
                  <p className="text-gray-300">{stepData.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="px-5 md:px-[70px] py-16">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-linear-to-r from-[#BE7B2C]/20 to-[#F9C39D]/20 rounded-3xl p-12 backdrop-blur-md border border-[#BE7B2C]/30"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-[#f9c39d]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("careers.howToApply")}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t("careers.applyText")}
          </motion.p>
          <motion.button
            className="px-8 py-4 bg-linear-to-r from-[#BE7B2C] to-[#F9C39D] text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.open("mailto:careers@noonconsultants.com", "_blank")
            }
          >
            {t("careers.applyNow")}
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
};

export default CareersPage;
