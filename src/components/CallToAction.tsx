"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <div className="bg-black text-white py-[72px] sm:py-24" ref={containerRef}>
      <motion.div
        style={{ translateY }}
        className="container mx-auto px-4 max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-left"
      >

        {/* Contact */}
        <div>
          <h3 className="font-bold text-2xl mb-4">Contact Us</h3>
          <p className="text-white/70 mb-2">We'd love to hear from you.</p>
          <p>Email: contact@yourcompany.com</p>
          <p>Phone: +91-9876543210</p>
          <p>Location: Your Address Here</p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-2xl mb-4">Company</h3>
          <ul className="space-y-2 text-white/80">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        {/* Pricing */}
        <div>
          <h3 className="font-bold text-2xl mb-4">Pricing</h3>
          <ul className="space-y-2 text-white/80">
            <li>Starter — $9/mo</li>
            <li>Pro — $29/mo</li>
            <li>Enterprise — Custom</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold text-2xl mb-4">Resources</h3>
          <ul className="space-y-2 text-white/80">
            <li>Documentation</li>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Community</li>
          </ul>
        </div>

      </motion.div>
    </div>
  );
};

export default CallToAction;
