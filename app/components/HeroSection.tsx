"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "./Navbar";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Background: subtle zoom + upward drift on scroll
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Content: drifts up and fades out as user scrolls away
  const contentY = useTransform(scrollYProgress, [0, 1], ["0px", "120px"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Gradient overlay intensifies on scroll for cinematic depth
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 1.6]);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: "url('/wharton-bg.png')",
          y: bgY,
          scale: bgScale,
        }}
      />

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar variant="transparent" activeLink="/" />

        <motion.div
          className="flex flex-1 flex-col justify-end px-6 pb-16 md:px-12 md:pb-24 lg:px-20 lg:pb-40 xl:px-32"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <motion.h1
            className="text-white text-3xl md:text-3xl lg:text-5xl font-light tracking-wide mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Educating Undergraduates in Private Equity & Venture Capital since 2011
          </motion.h1>

          <motion.p
            className="text-white/90 text-base md:text-lg max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            The Wharton Undergraduate Private Equity and Venture Capital Club is the premier place for Penn students interested in exploring the buy-side industry.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
