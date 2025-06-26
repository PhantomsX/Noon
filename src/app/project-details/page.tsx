"use client";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

const Page = () => {
  const [project, setProject] = useState<any>(null);

  const t = useTranslations("projects");
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
          src={"/images/rectangelImage.svg"}
          alt={project?.title || "Project image"}
          fill
        />
      </motion.figure>
      <motion.section
        className="flex flex-col md:flex-row my-10 px-5 md:px-10 justify-between items-start md:items-center gap-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <aside className="">
          <h1 className="text-[23px] md:text-[32px] mb-2 ">{project?.title}</h1>
          <p className="font-normal text-[14px] md:text-[16px] mb-3 ">
            {project?.description}
          </p>
        </aside>
        <div>
          <RowLine name={t("location")} value={project?.location} />
          <RowLine name={t("area")} value={project?.area} />
          <RowLine name={t("scope")} value={project?.scope} />
          <RowLine name={t("status")} value={project?.status} />
        </div>
      </motion.section>
      {project?.image && (
        <motion.section
          className="grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-5 px-5 md:px-10 my-10"
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
