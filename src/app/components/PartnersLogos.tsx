"use client";
import Image from "next/image";

export default function PartnersLogos() {
  return (
    <section className="w-full bg-black py-24 px-4 md:px-16 overflow-hidden">
      <h2 className="mb-20 font-elegance text-4xl md:text-5xl text-[#C6A87D] text-center">
        Partners Of Success
      </h2>

      <div className="w-full">
        {/* Desktop Image */}
        <div className="hidden md:block w-full">
          <Image
            src="/images/partners-desktop.png"
            alt="Partners of Success"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden w-full">
          <Image
            src="/images/partners-mobile.png"
            alt="Partners of Success"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
