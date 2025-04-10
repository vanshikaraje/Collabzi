'use client'
import Image from "next/image";
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import {motion} from "framer-motion";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-xl text-center text-white/70 font-medium">
          Trusted by India's mosts Futuristic Brands
        </h2>
        <div className=" flex overflow-hidden mt-9 relative before:z-10 before:absolute before:w-5 before:h-full before:left-0 before:top-0 before:bg-gradient-to-r before:from-black before:to-transparent  after:absolute after:w-5 after:h-full after:right-0 after:top-0 after:bg-gradient-to-l after:from-black after:to-transparent">
          < motion.div
          transition={{
            duration:15,
            ease:"linear",
            repeat:Infinity,
          }}
          initial={{translateX:0}}
          animate={{translateX:"-100%"}}
           className="flex flex-none gap-16 pr-16 justify-center items-center">
            {images.map(({ src, alt }) => (
              <Image key={alt} src={src} alt={alt} className="h-8 w-auto" />
            ))}
            {images.map(({ src, alt }) => (
              <Image key={alt} src={src} alt={alt} className="h-8 w-auto" />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};