"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import PageTitle from "@/app/components/PageTitle";
import CountUp from "@/components/CountUp";

/* ── Animated stats strip ─────────────────────────────────────────────────── */
const TeamStats = () => {
  const t = useTranslations();
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  const stats = [
    { target: 15, suffix: "+", label: t("common.years_experience") },
    { target: 400, suffix: "+", label: t("common.projects_completed") },
    { target: 20, suffix: "+", label: t("common.team_members") },
    { target: 95, suffix: "%", label: t("common.client_satisfaction") },
  ];

  return (
    <motion.div
      ref={statsRef}
      initial={{ opacity: 0, y: 20 }}
      animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-white/5 border border-[#C6A87D]/20 hover:border-[#BE7B2C]/50 hover:bg-white/10 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center justify-center gap-0.5">
            <CountUp
              to={stat.target}
              duration={2}
              className="text-4xl sm:text-5xl font-bold bg-[linear-gradient(270deg,#BE7B2C_0%,#F9C39D_100%)] bg-clip-text text-transparent"
            />
            <span className="text-4xl sm:text-5xl font-bold bg-[linear-gradient(270deg,#BE7B2C_0%,#F9C39D_100%)] bg-clip-text text-transparent">
              {stat.suffix}
            </span>
          </div>
          <p className="text-sm text-gray-400 uppercase tracking-widest mt-2 font-medium">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

/* ── Team Member Card ─────────────────────────────────────────────────────── */
const TeamMemberCard = ({ member, index }: { member: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      whileHover={{
        y: -8,
        rotateX: 5,
        rotateY: 5,
        scale: 1.02,
      }}
      style={{ perspective: 1000 }}
      className="group relative bg-white/5 border border-[#C6A87D]/20 rounded-2xl p-6 hover:border-[#BE7B2C]/50 hover:bg-white/10 transition-all duration-300 transform-style-3d"
    >
      <div className="flex flex-col h-full">
        {member.image ? (
          <div className="aspect-square w-full rounded-lg overflow-hidden mb-4 relative">
            <Image
              src={member.image}
              alt={member.name}
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-lg font-bold text-white group-hover:text-[#F9C39D] transition-colors">
                {member.name}
              </h3>
              <p className="text-sm text-[#C6A87D] font-medium">
                {member.role}
              </p>
            </div>
          </div>
        ) : (
          <div className="aspect-square w-full rounded-lg bg-linear-to-br from-[#BE7B2C] to-[#F9C39D] flex items-center justify-center text-white text-5xl font-bold mb-4 relative">
            {member.name.charAt(0)}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-lg font-bold text-white group-hover:text-[#F9C39D] transition-colors">
                {member.name}
              </h3>
              <p className="text-sm text-[#C6A87D] font-medium">
                {member.role}
              </p>
            </div>
          </div>
        )}
        <p className="text-gray-300 text-sm leading-relaxed grow">
          {member.description}
        </p>
      </div>
    </motion.div>
  );
};

/* ── Main component ───────────────────────────────────────────────────────── */
const AboutTeam = () => {
  const t = useTranslations();
  const teamMembers = t.raw("team.members") as Array<{
    name: string;
    role: string;
    description: string;
    image: string;
  }>;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="my-16 sm:my-20 lg:my-24"
      id="team"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.7 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center mb-12 sm:mb-16 lg:mb-20"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 2.8 }}
          className="lg:col-span-1 text-center lg:text-start"
        >
          <PageTitle>{t("our_team")}</PageTitle>
        </motion.div>

        {/* Description + Stats */}
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

          <TeamStats />
        </motion.div>
      </motion.div>

      {/* Team Members Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} index={index} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default AboutTeam;
