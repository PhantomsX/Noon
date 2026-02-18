"use client";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface Project {
  title?: string;
  client?: string;
  designedBy?: string;
  statusDate?: string;
  location?: string;
  scope?: string;
  image?: string;
  [key: string]: unknown;
}

const Page = () => {
  const [project, setProject] = useState<Project | null>(null);

  const t = useTranslations("projects");
  const tCommon = useTranslations("common");
  useEffect(() => {
    const pro = localStorage.getItem("selectedProject");
    if (pro) {
      setProject(JSON.parse(pro));
    }
  }, []);

  return (
    <main className="text-white pt-20 ltr:font-neue-montreal rtl:font-noto-kufi-arabic">
      <motion.figure
        className="h-[400px] sm:h-[600px] relative mx-10 rounded-2xl overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Image
          className="object-cover"
          src={project?.image || "/images/rectangelImage.svg"}
          alt={project?.title || ""}
          fill
        />
      </motion.figure>
      <motion.section
        className="flex flex-col md:flex-row my-10 px-5 md:px-10 justify-between items-start md:items-center gap-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <aside className="max-w-2xl">
          <h1 className="text-[23px] md:text-[32px] mb-2 font-bold uppercase tracking-wider">
            {project?.title}
          </h1>
          <p className="font-normal text-[14px] md:text-[16px] text-gray-400">
            {project?.scope}
          </p>
        </aside>
        <div className="space-y-4">
          <RowLine name={t("client")} value={project?.client} />
          <RowLine name={t("location")} value={project?.location} />
          <RowLine name={t("designedBy")} value={project?.designedBy} />
          <RowLine name={t("status")} value={project?.statusDate} />
          <RowLine name={t("scope")} value={project?.scope} />
        </div>
      </motion.section>
      {project?.image && (
        <motion.section
          className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-5 px-5 md:px-10 my-10"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          <motion.figure
            className="w-full aspect-video overflow-hidden rounded-md"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={project?.image}
              alt={tCommon("project_image")}
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </motion.figure>
          <motion.figure
            className="w-full aspect-video overflow-hidden rounded-md"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={project?.image}
              alt={`Project related image`}
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </motion.figure>
          <motion.figure
            className="w-full aspect-video overflow-hidden rounded-md"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={project?.image}
              alt={`Project related image`}
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </motion.figure>{" "}
          <motion.figure
            className="w-full aspect-video overflow-hidden rounded-md"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={project?.image}
              alt={`Project related image`}
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </motion.figure>{" "}
          <motion.figure
            className="w-full aspect-video overflow-hidden rounded-md"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={project?.image}
              alt={`Project related image`}
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </motion.figure>{" "}
          <motion.figure
            className="w-full aspect-video overflow-hidden rounded-md"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={project?.image}
              alt={`Project related image`}
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </motion.figure>{" "}
          <motion.figure
            className="w-full aspect-video overflow-hidden rounded-md"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={project?.image}
              alt={`Project related image`}
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </motion.figure>{" "}
          <motion.figure
            className="w-full aspect-video overflow-hidden rounded-md"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={project?.image}
              alt={`Project related image`}
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </motion.figure>{" "}
          <motion.figure
            className="w-full aspect-video overflow-hidden rounded-md"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={project?.image}
              alt={`Project related image`}
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </motion.figure>
        </motion.section>
      )}
    </main>
  );
};

export default Page;

const RowLine = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="flex justify-between items-center gap-20 flex-wrap">
      <p className="text-white"> {name}</p>
      <p className="text-bg p-0">{value}</p>
    </div>
  );
};
