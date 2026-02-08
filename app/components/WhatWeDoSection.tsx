"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const chapters = [
  {
    title: "Case Competitions",
    image: "/case-comp.webp",
    description:
      "Wharton PEVC organizes competitions with premier firms for students nationwide. These events let students apply their expertise and engage with industry professionals.",
    detail:
      "Prior partnerships have included KKR, Silver Lake, Warburg Pincus, and Altamont.",
  },
  {
    title: "Industry Speakers",
    image: "/industry-speakers.webp",
    description:
      "We host multiple speaking events featuring seasoned PEVC professionals, often in senior leadership roles.",
    detail:
      "Past speakers represent firms such as Apollo Global Management, KKR, Goldman Sachs, Moelis, Silver Lake, Warburg Pincus, Blackstone, Insight Partners, Apax Partners, Carlyle and more.",
  },
];

export default function WhatWeDoSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Chapter 1: visible 0-0.45, fading out 0.4-0.5
  const ch1Opacity = useTransform(scrollYProgress, [0, 0.08, 0.4, 0.5], [0, 1, 1, 0]);
  const ch1ImageScale = useTransform(scrollYProgress, [0, 0.4], [1.15, 1]);
  const ch1TextY = useTransform(scrollYProgress, [0, 0.1], [40, 0]);
  const ch1TextBlur = useTransform(scrollYProgress, [0, 0.12], [8, 0]);

  // Chapter 2: fading in 0.5-0.6, visible 0.55-1
  const ch2Opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.92, 1], [0, 1, 1, 0]);
  const ch2ImageScale = useTransform(scrollYProgress, [0.5, 0.9], [1.15, 1]);
  const ch2TextY = useTransform(scrollYProgress, [0.5, 0.6], [40, 0]);
  const ch2TextBlur = useTransform(scrollYProgress, [0.5, 0.62], [8, 0]);

  // Progress line between 01 and 02
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Counter highlight
  const counter1Opacity = useTransform(scrollYProgress, [0, 0.45, 0.5], [1, 1, 0.3]);
  const counter2Opacity = useTransform(scrollYProgress, [0.45, 0.55, 1], [0.3, 1, 1]);

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-[#111111]">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        {/* Chapter counter + progress bar */}
        <div className="absolute top-8 left-6 md:left-12 lg:left-20 xl:left-32 z-20 flex items-center gap-4">
          <motion.span
            className="text-xs font-medium tracking-widest text-white"
            style={{ opacity: counter1Opacity }}
          >
            01
          </motion.span>
          <div className="w-16 md:w-24 h-px bg-white/20 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-white"
              style={{ width: progressWidth }}
            />
          </div>
          <motion.span
            className="text-xs font-medium tracking-widest text-white"
            style={{ opacity: counter2Opacity }}
          >
            02
          </motion.span>
        </div>

        {/* ───── Chapter 1: Case Competitions ───── */}
        <motion.div
          className="absolute inset-0 flex flex-col lg:flex-row"
          style={{ opacity: ch1Opacity }}
        >
          {/* Image */}
          <div className="relative w-full lg:w-3/5 h-1/2 lg:h-full overflow-hidden">
            <motion.img
              src={chapters[0].image}
              alt={chapters[0].title}
              className="absolute inset-0 w-full h-full object-cover will-change-transform"
              style={{ scale: ch1ImageScale }}
            />
            {/* Gradient fade into text area */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#111111] hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111111] lg:hidden" />
          </div>

          {/* Text */}
          <div className="relative w-full lg:w-2/5 flex items-center px-6 md:px-12 lg:px-16 xl:px-20 py-8 lg:py-0">
            <motion.div
              style={{
                y: ch1TextY,
                filter: useTransform(ch1TextBlur, (v) => `blur(${v}px)`),
              }}
            >
              <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-4">
                What We Do
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                {chapters[0].title}
              </h2>
              <p className="text-gray-400 text-base lg:text-lg leading-relaxed mb-4">
                {chapters[0].description}
              </p>
              <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
                {chapters[0].detail}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* ───── Chapter 2: Industry Speakers ───── */}
        <motion.div
          className="absolute inset-0 flex flex-col lg:flex-row-reverse"
          style={{ opacity: ch2Opacity }}
        >
          {/* Image */}
          <div className="relative w-full lg:w-3/5 h-1/2 lg:h-full overflow-hidden">
            <motion.img
              src={chapters[1].image}
              alt={chapters[1].title}
              className="absolute inset-0 w-full h-full object-cover will-change-transform"
              style={{ scale: ch2ImageScale }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#111111] hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111111] lg:hidden" />
          </div>

          {/* Text */}
          <div className="relative w-full lg:w-2/5 flex items-center px-6 md:px-12 lg:px-16 xl:px-20 py-8 lg:py-0">
            <motion.div
              style={{
                y: ch2TextY,
                filter: useTransform(ch2TextBlur, (v) => `blur(${v}px)`),
              }}
            >
              <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-4">
                What We Do
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                {chapters[1].title}
              </h2>
              <p className="text-gray-400 text-base lg:text-lg leading-relaxed mb-4">
                {chapters[1].description}
              </p>
              <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
                {chapters[1].detail}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
