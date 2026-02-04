"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function PartnersLogos() {
  const t = useTranslations();

  return (
    <section className="w-full bg-black py-10 px-4 md:px-2 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-20 font-elegance text-4xl md:text-5xl text-[#C6A87D] text-center">
          {t("partners_of_success")}
        </h2>

        <div className="w-full">
          {/* Desktop Image */}
          <div className="hidden md:flex justify-center">
            <div className="w-full max-w-6xl">
              <Image
                src="/images/partners-desktop.png"
                alt="Partners of Success"
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 80vw"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Mobile Image */}
          <div className="flex md:hidden justify-center">
            <div className="w-full max-w-md">
              <Image
                src="/images/partners-mobile.png"
                alt="Partners of Success"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
