"use client";
import { useTranslations } from "next-intl";
import LogoLoop from "@/components/LogoLoop";
import type { LogoItem } from "@/components/LogoLoop";

export default function PartnersLogos() {
  const t = useTranslations();

  // First row of logos (scrolling left)
  const firstRowLogos: LogoItem[] = [
    { src: "/Noon-logos/Group.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Group-1.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Group-2.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Group-3.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Group-4.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Group-5.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Group-6.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Group-7.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Group-8.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Group-9.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Group-10.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Group-11.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Group-12.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Group-13.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Group-14.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Group-15.png", alt: t("alt.partner_logo") },
  ];

  // Second row of logos (scrolling right)
  const secondRowLogos: LogoItem[] = [
    { src: "/Noon-logos/Group-16.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Group-17.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Group-18.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Group-19.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Group-20.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Group-21.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Group-22.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Group-23.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Group 69.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Group 70.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Group 71.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Layer_1.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Layer_1-1.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Vector.png", alt: t("alt.partner_logo") },
    { src: "/Noon-logos/Vector-1.png", alt: t("alt.partner_logo") },
  ];

  return (
    <section className="w-full py-16 overflow-hidden">
      <div className="w-full">
        <h2 className="mb-12 md:mb-16 font-elegance text-4xl md:text-5xl text-[#C6A87D] text-center px-4 md:px-2">
          {t("partners_of_success")}
        </h2>

        <div className="w-full space-y-8 md:space-y-12">
          {/* First Logo Loop - Scrolling Left */}
          <div className="w-full">
            <LogoLoop
              logos={firstRowLogos}
              speed={50}
              direction="left"
              logoHeight={60}
              gap={48}
              pauseOnHover={true}
              fadeOut={true}
              fadeOutColor="#000000"
              scaleOnHover={true}
              ariaLabel={t("aria.scroll_left")}
              className="partner-logos-loop"
            />
          </div>

          {/* Second Logo Loop - Scrolling Right */}
          <div className="w-full">
            <LogoLoop
              logos={secondRowLogos}
              speed={50}
              direction="right"
              logoHeight={60}
              gap={48}
              pauseOnHover={true}
              fadeOut={true}
              fadeOutColor="#000000"
              scaleOnHover={true}
              ariaLabel={t("aria.scroll_right")}
              className="partner-logos-loop"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
