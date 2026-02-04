"use client";
import React from "react";
import ComingSoon from "@/app/components/ComingSoon";
import { useTranslations } from "next-intl";

const BlogsPage = () => {
  const t = useTranslations("comingSoonPage");

  return (
    <main className="w-full">
      <div className="py-20 md:py-32">
        <ComingSoon subtitle={t("blogSubtitle")} />
      </div>
    </main>
  );
};

export default BlogsPage;
