"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const TeamPage = () => {
  const router = useRouter();
  const t = useTranslations();

  useEffect(() => {
    router.push("/about#team");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-white text-lg">{t("redirect_to_about")}</p>
    </div>
  );
};

export default TeamPage;
