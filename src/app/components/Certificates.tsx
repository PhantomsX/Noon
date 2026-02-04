"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";
import { Expand, X } from "lucide-react";

const certificates = [
  "/certificates/شهادات الإيزو لمكتب نون للإستشارات الهندسية حتى 17-08-2026م_page-0001.jpg",
  "/certificates/شهادات الإيزو لمكتب نون للإستشارات الهندسية حتى 17-08-2026م_page-0002.jpg",
  "/certificates/شهادات الإيزو لمكتب نون للإستشارات الهندسية حتى 17-08-2026م_page-0003.jpg",
  "/certificates/شهادة إعتماد تصنيف مقدمي خدمات المدن ( بلدي) مكتب نون فرع الرياض حتى 11-09-2026م_page-0001.jpg",
  "/certificates/شهادة تأهيل مكتب نون للإستشارات الهندسية في مدن حتى 27-07-2027م_page-0001.jpg",
  "/certificates/شهادة تأهيل مكتب نون للإستشارات الهندسية للإشراف على مشروعات عقارية على الخارطة حتى 31-12-2026م_page-0001.jpg",
  "/certificates/شهادة تأهيل مكتب نون للإستشارات الهندسية-هيئة المدن والمناطق الاقتصادية الخاصة حتى 13-11-2027م_page-0001.jpg",
];

export default function Certificates() {
  const t = useTranslations();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-elegance text-center py-2 mb-12 md:mb-16 bg-[linear-gradient(270deg,#BE7B2C_0%,#F9C39D_100%)] bg-clip-text text-transparent"
        >
          {t("certificates")}
        </motion.h2>

        {/* Masonry Layout with CSS Columns */}
        <div className="columns-2 md:columns-3 lg:columns-5 gap-6 space-y-6">
          {certificates.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer bg-neutral-900 border border-[#C6A87D]/20 hover:border-[#BE7B2C] transition-all duration-300 shadow-lg"
              onClick={() => setSelectedImage(src)}
            >
              <div className="relative w-full">
                <Image
                  src={src}
                  alt={`${t("alt.certificate")} ${index + 1}`}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Hover Reveal Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                  <div className="size-12 rounded-full bg-[#BE7B2C]/90 backdrop-blur-sm flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Expand strokeWidth={3} fill="#fff" stroke="#fff" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-size Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-110 size-12 rounded-full bg-[#BE7B2C] hover:bg-[#F9C39D] transition-colors duration-300 flex items-center justify-center text-white"
              aria-label={t("aria.close_modal")}
            >
              <X className="size-6" />
            </motion.button>

            {/* Certificate Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-[80vh] max-w-5xl rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt={t("alt.certificate_full")}
                fill
                className="object-contain"
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
