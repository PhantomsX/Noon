"use client";
import Image from "next/image";
import { motion } from "motion/react";

const CERTIFICATE_LOGOS = [
  {
    logo: "/certificates/certificates logos/image 2.png",
    logoAlt: "Certificate 1",
  },
  {
    logo: "/certificates/certificates logos/image 3.png",
    logoAlt: "Certificate 2",
  },
  {
    logo: "/certificates/certificates logos/image 4.png",
    logoAlt: "Certificate 3",
  },
  {
    logo: "/certificates/certificates logos/image 5.png",
    logoAlt: "Certificate 4",
  },
  {
    logo: "/certificates/certificates logos/image 6.png",
    logoAlt: "Certificate 5",
  },
  {
    logo: "/certificates/certificates logos/image 7.png",
    logoAlt: "Certificate 6",
  },
  {
    logo: "/certificates/certificates logos/image 8.png",
    logoAlt: "Certificate 7",
  },
];

export default function Certificates() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-16">
        {/* Logo Grid */}
        <div
          dir="ltr"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4"
        >
          {CERTIFICATE_LOGOS.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col items-center justify-center aspect-square w-full"
            >
              <Image
                src={entry.logo}
                alt={entry.logoAlt}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
