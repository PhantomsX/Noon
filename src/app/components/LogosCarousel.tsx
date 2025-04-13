import olayan from "@/public/logos/olayan.svg";
import naifAlrajhi from "@/public/logos/naif-alrajhi.svg";
import salehAlrajhi from "@/public/logos/saleh-alrajhi.svg";
import riyadAirports from "@/public/logos/riyad-airports.svg";
import memar from "@/public/logos/memar.svg";
import ramlaRealState from "@/public/logos/ramla-real-state.svg";
import riyadCapital from "@/public/logos/riyad-capital.svg";
import seder from "@/public/logos/seder.svg";
import kingKhaledAirport from "@/public/logos/king-khaled-airport.svg";
import masajed from "@/public/logos/masajed.svg";
import ascott from "@/public/logos/ascott.svg";
import frayan from "@/public/logos/frayan.svg";
import wme from "@/public/logos/wme.svg";
import raya from "@/public/logos/raya.svg";
import aljazera from "@/public/logos/aljazera.svg";
import sa from "@/public/logos/sa.svg";
import binDayel from "@/public/logos/bin-dayel.svg";
import mAndBeyond from "@/public/logos/m&beyond.svg";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const LogosCarousel = () => {
  const logos = [
    olayan,
    naifAlrajhi,
    salehAlrajhi,
    riyadAirports,
    memar,
    ramlaRealState,
    riyadCapital,
    seder,
    kingKhaledAirport,
    masajed,
    ascott,
    frayan,
    wme,
    raya,
    aljazera,
    sa,
    binDayel,
    mAndBeyond,
  ];
  return (
    <div dir="ltr">
      <Marquee className="py-1.5 select-none px-6">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt="logo"
            className="me-9"
            draggable={false}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default LogosCarousel;
