import Image from "next/image";
import React from "react";
import clientsImage from "@/public/clients.svg";
import Footer from "../components/Footer";
import { useTranslations } from "next-intl";

const ClientsPage = () => {
  const t = useTranslations();
  return (
    <main className="flex-1 main-bg-gradient flex-col flex">
      <div className="flex max-sm:flex-col max-sm:gap-16 px-9 pt-12 sm:ps-[88px] sm:pt-28">
        <div className="sm:max-w-[350px] space-y-4">
          <h2 className="text-bg capitalize text-4xl pb-2">
          {t('partners')}
        
           
          </h2>
          <p className=" text-white">
            {t('clientsSubtitle')}
        
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center px-3">
          <Image src={clientsImage} alt="clients" />
        </div>{" "}
      </div>
      <Footer />
    </main>
  );
};

export default ClientsPage;
