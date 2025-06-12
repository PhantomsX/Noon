"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
  useInView,
} from "motion/react";
import { Aclonica, Afacad } from "next/font/google";
import PageTitle from "../components/PageTitle";

const aclonica = Aclonica({
  subsets: ["latin"],
  variable: "--font-aclonica",
  weight: ["400"],
  display: "swap",
});

const afacad = Afacad({
  subsets: ["latin"],
  variable: "--font-afacad",
  weight: ["400"],
  display: "swap",
});

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// Enhanced staggered grid animation
const staggeredGrid = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 13,
    },
  },
};

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
  {
    id: 7,
    name: "DR. NIZAR EL SAYED",
    role: "CHAIRMAN & FOUNDER",
    image: "/images/ceoimage.svg",
  },
  {
    id: 8,
    name: "DR. NIZAR EL SAYED",
    role: "CHAIRMAN & FOUNDER",
    image: "/images/ceoimage.svg",
  },
  {
    id: 9,
    name: "DR. NIZAR EL SAYED",
    role: "CHAIRMAN & FOUNDER",
    image: "/images/ceoimage.svg",
  },
  {
    id: 10,
    name: "DR. NIZAR EL SAYED",
    role: "CHAIRMAN & FOUNDER",
    image: "/images/ceoimage.svg",
  },
  {
    id: 11,
    name: "DR. NIZAR EL SAYED",
    role: "CHAIRMAN & FOUNDER",
    image: "/images/ceoimage.svg",
  },
  {
    id: 12,
    name: "DR. NIZAR EL SAYED",
    role: "CHAIRMAN & FOUNDER",
    image: "/images/ceoimage.svg",
  },
];

const TeamMemberCard = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, {
    once: true,
    margin: "-10% 0px -10% 0px",
    amount: 0.05,
  });

  // Handle touch events for mobile
  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    // We don't immediately remove the hover effect on touch end
    // to make it feel more interactive on mobile
    setTimeout(() => setIsHovered(false), 1500);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative overflow-hidden rounded-lg"
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      custom={index}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 10px 25px -5px rgba(249, 195, 157, 0.3)",
        transition: { duration: 0.2, ease: "easeOut" },
      }}
    >
      <div className="relative w-full aspect-square overflow-hidden">
        <motion.div
          className="w-full h-full"
          animate={{
            scale: isHovered ? 1.05 : 1,
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

        {/* Enhanced gradient overlay with animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
          animate={{
            opacity: isHovered ? 0.9 : 0.7,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Text content with enhanced animations */}
        <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col items-center">
          <motion.h3
            className="text-[#f9c39d] font-semibold text-lg text-center"
            style={aclonica.style}
            animate={{
              scale: isHovered ? 1.08 : 1,
              y: isHovered ? -2 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {member.name}
          </motion.h3>

          <motion.p
            className="text-white/80 text-xs tracking-wider text-center mt-1"
            animate={{
              opacity: isHovered ? 1 : 0.8,
              y: isHovered ? 2 : 0,
            }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            {member.role}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden">
      <motion.div
        className="absolute w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full bg-[#f9c39d]/5 blur-[80px] sm:blur-[100px] md:blur-[120px] -top-[100px] sm:-top-[120px] md:-top-[150px] -right-[100px] sm:-right-[120px] md:-right-[150px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute w-[250px] sm:w-[300px] md:w-[400px] h-[250px] sm:h-[300px] md:h-[400px] rounded-full bg-[#f9c39d]/5 blur-[60px] sm:blur-[80px] md:blur-[100px] bottom-[10%] -left-[100px] sm:-left-[120px] md:-left-[150px]"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />
    </div>
  );
};

const TeamPage = () => {
  const { scrollYProgress } = useScroll();
  const mainRef = useRef(null);
  const isMainInView = useInView(mainRef, { once: true, amount: 0.05 });
  const controls = useAnimation();

  // Check for mobile viewport
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Parallax effect for title
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -20]);

  useEffect(() => {
    if (isMainInView) {
      controls.start("visible");
    }
  }, [isMainInView, controls]);

  // Force animations to visible state on small screens after a delay
  useEffect(() => {
    if (isMobileView) {
      const timer = setTimeout(() => {
        controls.start("visible");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isMobileView, controls]);

  return (
    <motion.div
      ref={mainRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pb-20 relative"
      style={{ willChange: "opacity, transform", ...afacad.style }}
    >
      <AnimatedBackground />

      <div className="px-4 sm:px-6 md:px-8 lg:px-20 pt-10 sm:pt-16 md:pt-20">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Aside with title in its own column with parallax effect */}
          <motion.aside
            className="md:w-1/3 lg:w-1/4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <PageTitle>
              Our Team &<br />
              Designers
            </PageTitle>
          </motion.aside>

          {/* Main content with enhanced animations */}
          <motion.div
            className="md:w-2/3 lg:w-3/4"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            <motion.p
              className="text-white text-lg leading-relaxed mb-10"
              variants={itemVariants}
            >
              For years we have worked with organizations around Saudi Arabia.
              We are proud of the work we have done, and the unique depth of
              knowledge it has allowed us to build. And Delivered By Seasoned
              Professionals With Extensive Industry Expertise, Each Specializing
              In Focused Functional Areas. Committed To Delivering High-Quality
              Service That Understand Our Clients' Needs. Contribute To The
              Sustainable And Innovative Success Of Their Projects.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
              variants={staggeredGrid}
              initial="hidden"
              animate={controls}
            >
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={member.id} member={member} index={index} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamPage;
