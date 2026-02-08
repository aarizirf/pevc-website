"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Variant =
  | "fade-up"
  | "fade-in"
  | "slide-left"
  | "slide-right"
  | "blur-up"
  | "scale-up"
  | "clip-up"
  | "clip-left";

const variantMap: Record<Variant, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  },
  "blur-up": {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
  "clip-up": {
    hidden: { opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
    visible: { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" },
  },
  "clip-left": {
    hidden: { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
    visible: { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" },
  },
};

interface ScrollRevealProps {
  children?: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  margin?: string;
  as?: "div" | "section" | "span" | "h2" | "h3" | "p";
}

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
  margin = "-80px",
  as = "div",
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: margin as `${number}px` });

  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variantMap[variant]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </Component>
  );
}
