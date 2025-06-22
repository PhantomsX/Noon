import Image from "next/image";
import React from "react";
import clientsImageLg from "@/public/logos/clients-lg.svg";
import clientsImageSm from "@/public/logos/clients.svg";
import { useTranslations } from "next-intl";
import { Afacad } from "next/font/google";
import PageTitle from "../components/PageTitle";

const afacad = Afacad({
  subsets: ["latin"],
  variable: "--font-afacad",
  weight: "500",
  display: "swap",
});
const ClientsPage = () => {
  const t = useTranslations();
  return (
    <main className="flex-1 flex-col flex">
      <div className="flex max-sm:flex-col max-sm:gap-16 px-9 pt-12 sm:ps-[88px] sm:pt-28">
        <div className="sm:max-w-[350px] space-y-4">
          <PageTitle>{t("partners")}</PageTitle>
          <p style={afacad.style} className=" text-white">
            {t("clientsSubtitle")}
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center px-3">
          <Image src={clientsImageLg} alt="clients" />
        </div>
      </div>
    </main>
  );
};

export default ClientsPage;
