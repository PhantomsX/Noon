import Image from "next/image";
import React from "react";
import clientsImage from "@/public/clients.svg";
import Footer from "../components/Footer";

const ClientsPage = () => {
  return (
    <main className="flex-1 main-bg-gradient flex-col flex">
      <div className="flex max-sm:flex-col max-sm:gap-16 px-8 pt-12 sm:ps-[88px] sm:pt-28">
        <div className="sm:max-w-[270px] shrink-0  space-y-6">
          <h2 className="text-bg capitalize text-4xl">
            our partners of success
          </h2>
          <p className="text-justify text-white">
            Are Delivered By Seasoned Professionals With Extensive Industry
            Expertise, Each Specializing In Focused Functional Areas. Committed
            To Delivering High-Quality Services That Understand Our Clients'
            Needs, Contribute To The Sustainable And Innovative Success Of Their
            Projects.
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
