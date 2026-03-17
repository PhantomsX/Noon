"use client";
import Image from "next/image";
import { motion } from "motion/react";

const CERTIFICATES_IMAGE = "/cert-logos/certificates.png";
const CERTIFICATES_ALT =
  "Ministry of Municipal and Housing, Balady, Urban Operators Regulation, MODON, REGA, Economic Cities and Special Zones Authority, ISO 14001, ISO 9001, ISO 45001";

export default function Certificates() {
  return (
    <section className="w-full py-8 md:py-12 px-4 md:px-12 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-5 max-w-6xl mx-auto"
        dir="ltr"
      >
        <div className="flex items-center justify-center px-4 md:px-8">
          <Image
            src={CERTIFICATES_IMAGE}
            alt={CERTIFICATES_ALT}
            width={1200}
            height={120}
            className="object-contain w-full max-h-[80px] md:max-h-[100px]"
          />
        </div>
      </motion.div>
    </section>
  );
}
