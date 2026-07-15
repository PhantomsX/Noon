"use client";
import React from "react";
import { useTranslations } from "next-intl";
import ComingSoon from "@/app/components/ComingSoon";

const BlogsPage = () => {
  const t = useTranslations("comingSoonPage");

  return (
    <main className="w-full">
      <ComingSoon subtitle={t("blogSubtitle")} />
    </main>
  );
};

export default BlogsPage;
