"use client";
import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";
import { motion } from "framer-motion";
import { useState } from "react";

export const ProductShowcase = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] relative py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Interactive Interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
           "Now influencers can also make there cv' like other sounds crazy."
          </p>

          {/* Motion div for 3D hover effect */}
          <motion.div
            className="mt-14"
            initial={{ rotateX: 0, opacity: 0.8 }}
            animate={{ rotateX: isHovered ? 15 : 0 }} // Rotate on X-axis
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              transformPerspective: "1000px",
              opacity: 0.8, // Always visible
            }}
          >
            <Image src={appScreen} alt="The product screenshot" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
