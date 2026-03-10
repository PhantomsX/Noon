"use client";
import Image from "next/image";
import { motion } from "motion/react";

const CERTIFICATE_LOGOS = [
  {
    logo: "/cert-logos/ministry-municipalities.png",
    logoAlt: "وزارة البلديات والإسكان",
  },
  {
    logo: "/cert-logos/balady.png",
    logoAlt: "بلدي - Balady",
  },
  {
    logo: "/cert-logos/tandheem.png",
    logoAlt: "تنظيم مشغلي المدن",
  },
  {
    logo: "/cert-logos/modon.png",
    logoAlt: "مدن - Modon",
  },
  {
    logo: "/cert-logos/REGA.png",
    logoAlt: "REGA - Real Estate General Authority",
  },
  {
    logo: "/cert-logos/economic-cities.png",
    logoAlt: "هيئة المدن والمناطق الاقتصادية الخاصة",
  },
  {
    logo: "/cert-logos/iso-certificates.png",
    logoAlt: "ISO Certificates",
  },
];

export default function Certificates() {
  return (
    <section className="w-full py-8 md:py-12 px-4 md:px-12 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-2xl py-5 max-w-6xl mx-auto"
        dir="ltr"
      >
        {/* Mobile: 3-col grid */}
        <div className="grid grid-cols-3 gap-4 px-4 md:hidden">
          {CERTIFICATE_LOGOS.map((entry, index) => (
            <div key={index} className="flex items-center justify-center py-2">
              <Image
                src={entry.logo}
                alt={entry.logoAlt}
                width={90}
                height={45}
                className="object-contain max-h-[45px] w-auto"
              />
            </div>
          ))}
        </div>

        {/* md+: horizontal row with separators */}
        <div className="hidden md:flex items-center justify-between overflow-x-auto gap-0 scrollbar-hide">
          {CERTIFICATE_LOGOS.map((entry, index) => (
            <div key={index} className="flex items-center shrink-0">
              <div className="flex items-center justify-center px-4 lg:px-6 py-2">
                <Image
                  src={entry.logo}
                  alt={entry.logoAlt}
                  width={110}
                  height={55}
                  className="object-contain max-h-[55px] w-auto"
                />
              </div>
              {index >= 2 && index < CERTIFICATE_LOGOS.length - 1 && (
                <div className="w-0.5 h-14 bg-gray-400 shrink-0" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
