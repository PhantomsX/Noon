"use client";
import Image from "next/image";
import mainBackground from "@/public/images/background-home.png";
import clientsLg from "@/public/logos/clients-lg.svg";
import clientsSm from "@/public/logos/clients.svg";
import logoEn from "@/public/icons/big-logo-en.svg";
import logoAr from "@/public/icons/big-logo-ar.svg";
import { useLocale, useTranslations } from "next-intl";
import { useIsClient, useMediaQuery } from "usehooks-ts";
import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";

const AnimatedSection = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.05, // Lowered threshold to trigger animations more easily on smaller screens
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 },
      }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isClient = useIsClient();
  const mainControls = useAnimation();
  const mainRef = useRef(null);
  const isMainInView = useInView(mainRef, { once: true, amount: 0.05 });

  useEffect(() => {
    if (isMainInView) {
      mainControls.start("visible");
    }
  }, [isMainInView, mainControls]);

  // Force animations to visible state on small screens after a delay
  useEffect(() => {
    if (isMobile && isClient) {
      const timer = setTimeout(() => {
        mainControls.start("visible");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isMobile, isClient, mainControls]);

  return (
    <>
      <motion.main
        ref={mainRef}
        initial="hidden"
        animate={mainControls}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        transition={{ duration: 0.8 }}
        className="relative z-[1] flex-1 overflow-hidden"
        style={{ willChange: "opacity, transform" }}
      >
        <Image
          src={"/parallel-lines.svg"}
          width={1920}
          height={1080}
          alt="parallel-lines"
          className="bottom-0 absolute z-[-1]"
        />

        <motion.section
          className="relative min-h-screen flex flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="mt-2.5 text-center ltr:font-elegance rtl:font-amiri text-xl md:text-4xl text-bg">
            {t("mainText")}
          </p>
          <div className="px-10 md:px-20 pt-10">
            <Image
              priority
              src={mainBackground}
              alt="main-bg"
              className="object-fit rounded-2xl object-cover object-center select-none h-[590px] lg:h-[800px]"
            />
          </div>
        </motion.section>

        <AnimatedSection delay={0.5} className="relative mt-10">
          <div className="">
            <h2 className="capitalize text-[40px] text-bg ltr:font-elegance rtl:font-amiri text-center">
              {t("partners_of_success")}
            </h2>

            <Image
              src={isClient && isMobile ? clientsSm : clientsLg}
              alt="clients"
              className="w-full max-w-[1200px] mx-auto p-2"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6} className="container mx-auto py-20">
          <div className="flex flex-col items-center">
            <Image
              src={locale === "ar" ? logoAr : logoEn}
              draggable={false}
              priority
              alt="logo"
              className="select-none pointer-events-none scale-75 mx-auto -mb-5"
            />
            <span className="uppercase text-center tracking-[.5rem] text-bg ltr:font-neue-montreal rtl:font-noto-kufi-arabic">
              {t("founded in 2011")}
            </span>
          </div>
        </AnimatedSection>
      </motion.main>
    </>
  );
}
