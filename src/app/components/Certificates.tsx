"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface CertificateEntry {
  logo: string;
  logoAlt: string;
  certificates: string[];
}

const CERTIFICATE_DATA: CertificateEntry[] = [
  {
    logo: "/certificates/certificates%20logos/tci.png",
    logoAlt: "TCI – ISO Certification",
    certificates: [
      "/certificates/%D8%B4%D9%87%D8%A7%D8%AF%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A5%D9%8A%D8%B2%D9%88%20%D9%84%D9%85%D9%83%D8%AA%D8%A8%20%D9%86%D9%88%D9%86%20%D9%84%D9%84%D8%A5%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9%20%D8%AD%D8%AA%D9%89%2017-08-2026%D9%85_page-0001.jpg",
      "/certificates/%D8%B4%D9%87%D8%A7%D8%AF%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A5%D9%8A%D8%B2%D9%88%20%D9%84%D9%85%D9%83%D8%AA%D8%A8%20%D9%86%D9%88%D9%86%20%D9%84%D9%84%D8%A5%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9%20%D8%AD%D8%AA%D9%89%2017-08-2026%D9%85_page-0002.jpg",
      "/certificates/%D8%B4%D9%87%D8%A7%D8%AF%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A5%D9%8A%D8%B2%D9%88%20%D9%84%D9%85%D9%83%D8%AA%D8%A8%20%D9%86%D9%88%D9%86%20%D9%84%D9%84%D8%A5%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9%20%D8%AD%D8%AA%D9%89%2017-08-2026%D9%85_page-0003.jpg",
    ],
  },
  {
    logo: "/certificates/certificates%20logos/balady.jpg",
    logoAlt: "Balady – بلدي",
    certificates: [
      "/certificates/%D8%B4%D9%87%D8%A7%D8%AF%D8%A9%20%D8%A5%D8%B9%D8%AA%D9%85%D8%A7%D8%AF%20%D8%AA%D8%B5%D9%86%D9%8A%D9%81%20%D9%85%D9%82%D8%AF%D9%85%D9%8A%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D9%85%D8%AF%D9%86%20(%20%D8%A8%D9%84%D8%AF%D9%8A)%20%D9%85%D9%83%D8%AA%D8%A8%20%D9%86%D9%88%D9%86%20%D9%81%D8%B1%D8%B9%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%20%D8%AD%D8%AA%D9%89%2011-09-2026%D9%85_page-0001.jpg",
    ],
  },
  {
    logo: "/certificates/certificates%20logos/modon.png",
    logoAlt: "Modon – مدن",
    certificates: [
      "/certificates/%D8%B4%D9%87%D8%A7%D8%AF%D8%A9%20%D8%AA%D8%A3%D9%87%D9%8A%D9%84%20%D9%85%D9%83%D8%AA%D8%A8%20%D9%86%D9%88%D9%86%20%D9%84%D9%84%D8%A5%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%AF%D9%86%20%D8%AD%D8%AA%D9%89%2027-07-2027%D9%85_page-0001.jpg",
    ],
  },
  {
    logo: "/certificates/certificates%20logos/real%20estate%20general%20authority.png",
    logoAlt: "Real Estate General Authority",
    certificates: [
      "/certificates/%D8%B4%D9%87%D8%A7%D8%AF%D8%A9%20%D8%AA%D8%A3%D9%87%D9%8A%D9%84%20%D9%85%D9%83%D8%AA%D8%A8%20%D9%86%D9%88%D9%86%20%D9%84%D9%84%D8%A5%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9%20%D9%84%D9%84%D8%A5%D8%B4%D8%B1%D8%A7%D9%81%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D8%A7%D8%AA%20%D8%B9%D9%82%D8%A7%D8%B1%D9%8A%D8%A9%20%D8%B9%D9%84%D9%89%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B1%D8%B7%D8%A9%20%D8%AD%D8%AA%D9%89%2031-12-2026%D9%85_page-0001.jpg",
    ],
  },
  {
    logo: "/certificates/certificates%20logos/economic%20cities%20and%20special%20zones%20authority.png",
    logoAlt: "Economic Cities & Special Zones Authority",
    certificates: [
      "/certificates/%D8%B4%D9%87%D8%A7%D8%AF%D8%A9%20%D8%AA%D8%A3%D9%87%D9%8A%D9%84%20%D9%85%D9%83%D8%AA%D8%A8%20%D9%86%D9%88%D9%86%20%D9%84%D9%84%D8%A5%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9-%D9%87%D9%8A%D8%A6%D8%A9%20%D8%A7%D9%84%D9%85%D8%AF%D9%86%20%D9%88%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%B7%D9%82%20%D8%A7%D9%84%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9%20%D8%AD%D8%AA%D9%89%2013-11-2027%D9%85_page-0001.jpg",
    ],
  },
];

export default function Certificates() {
  const t = useTranslations();
  const [selected, setSelected] = useState<CertificateEntry | null>(null);
  const [certIndex, setCertIndex] = useState(0);

  const openModal = (entry: CertificateEntry) => {
    setSelected(entry);
    setCertIndex(0);
  };

  const closeModal = () => {
    setSelected(null);
    setCertIndex(0);
  };

  const prev = () =>
    setCertIndex(
      (i) =>
        (i - 1 + (selected?.certificates.length ?? 1)) %
        (selected?.certificates.length ?? 1),
    );

  const next = () =>
    setCertIndex((i) => (i + 1) % (selected?.certificates.length ?? 1));

  return (
    <section className="w-full py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-16">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-elegance text-center py-2 mb-8 md:mb-16 bg-[linear-gradient(270deg,#BE7B2C_0%,#F9C39D_100%)] bg-clip-text text-transparent"
        >
          {t("certificates")}
        </motion.h2>

        {/* Logo Grid – full width, equal dimensions */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {CERTIFICATE_DATA.map((entry, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => openModal(entry)}
              className="bg-white hover:scale-105 hover:shadow-amber-500 overflow-hidden group relative flex flex-col items-center justify-center aspect-8/5 w-full rounded-2xl border border-[#C6A87D]/20 hover:border-[#BE7B2C]/60 transition-all duration-300 shadow-2xl cursor-pointer"
              aria-label={entry.logoAlt}
            >
              <Image
                src={entry.logo}
                alt={entry.logoAlt}
                fill
                className="object-cover"
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1 }}
              onClick={closeModal}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-110 size-12 rounded-full bg-[#BE7B2C] hover:bg-[#F9C39D] transition-colors duration-300 flex items-center justify-center text-white"
              aria-label={t("aria.close_modal")}
            >
              <X className="size-6" />
            </motion.button>

            {/* Certificate Image */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-[80vh] max-w-4xl rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={certIndex}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={selected.certificates[certIndex]}
                    alt={selected.logoAlt}
                    fill
                    className="object-contain"
                    quality={100}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next arrows (only when multiple certs) */}
              {selected.certificates.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 size-10 rounded-full bg-black/60 hover:bg-[#BE7B2C] transition-colors duration-200 flex items-center justify-center text-white"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 size-10 rounded-full bg-black/60 hover:bg-[#BE7B2C] transition-colors duration-200 flex items-center justify-center text-white"
                    aria-label="Next"
                  >
                    <ChevronRight className="size-5" />
                  </button>

                  {/* Page dots with black overlay */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4 pt-8 bg-linear-to-t from-black/70 to-transparent">
                    <div className="flex gap-2">
                      {selected.certificates.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCertIndex(i)}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            i === certIndex
                              ? "bg-[#C6A87D] scale-125"
                              : "bg-white/50 hover:bg-white/80"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
