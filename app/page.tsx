import type { Metadata } from "next";
import Link from "next/link";
import Accordion from "./components/Accordion";
import SponsorCarousel from "./components/SponsorCarousel";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ScrollReveal from "./components/ScrollReveal";
import TextReveal from "./components/TextReveal";
import WhatWeDoSection from "./components/WhatWeDoSection";
import { events, getTypeColor } from "./data/events";

export const metadata: Metadata = {
  title: "Home",
  description: "Educating Undergraduates in Private Equity & Venture Capital since 2011",
};

export default function Home() {
  return (
    <main className="w-full">
      {/* Intro Overlay */}
      <div className="fixed inset-0 z-50 bg-white flex items-center justify-center animate-intro-overlay pointer-events-none">
        <img
          src="/wharton-logo.png"
          alt="Wharton PEVC"
          className="h-20 md:h-18 lg:h-22 brightness-0"
        />
      </div>

      {/* Hero Section — parallax bg + content fade on scroll */}
      <HeroSection />

      {/* About Section */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
            {/* Left Column — scroll-linked text reveal */}
            <div className="flex items-start gap-6">
              <ScrollReveal variant="slide-left" duration={0.9} className="w-16 border-t-2 border-dashed border-gray-400 shrink-0 mt-5" />
              <TextReveal
                text="Cultivating the next generation of private equity and venture capital leaders."
                className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-tight"
              />
            </div>

            {/* Right Column — blur-in reveal */}
            <ScrollReveal variant="blur-up" delay={0.15} className="flex flex-col justify-center">
              <h3 className="text-gray-900 text-lg font-medium mb-4">
                Who We Are
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                PEVC is a thriving organization of bright and passionate individuals. Our mission is to cultivate connections between private market firms and Penn&apos;s students that will ultimately lead to a more professionally prepared and passionate educational community. As a PEVC member, you will acquire and hone vital financial skills, meet and interact with professionals from the industry&apos;s best firms, and work and play in a team with the most driven and interesting students Penn has to offer. We are proud to have led Wharton Council&apos;s &ldquo;<span className="underline underline-offset-2 decoration-blue-900">Best GBM Program</span>&rdquo; (2023), organized the &ldquo;<span className="underline underline-offset-2 decoration-blue-900">Best Event</span>&rdquo; (2023), and had the &ldquo;<span className="underline underline-offset-2 decoration-blue-900">Most Outstanding Board Member</span>&rdquo; for 2 years straight (2024, 2025).
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Sponsor Carousel — fade up */}
        <ScrollReveal variant="fade-up" delay={0.1} className="mt-24 md:mt-32">
          <SponsorCarousel />
        </ScrollReveal>
      </section>

      {/* Committees Section */}
      <Accordion />

      {/* What We Do — sticky scroll narrative with parallax images */}
      <WhatWeDoSection />

      {/* Events Section — staggered card reveals */}
      <section className="bg-white pt-20 md:pt-28 lg:pt-36 pb-24 md:pb-32 lg:pb-40">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          {/* Section Header */}
          <ScrollReveal variant="fade-up">
            <div className="flex items-center justify-between mb-8 md:mb-16">
              <div className="flex items-center gap-6">
                <div className="w-16 border-t-2 border-dashed border-gray-400 shrink-0" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900">
                  Upcoming Events
                </h2>
              </div>
              <Link
                href="/events"
                className="text-gray-900 text-sm font-medium border-b border-gray-900 pb-1 hover:opacity-70 transition-opacity"
              >
                View All
              </Link>
            </div>
          </ScrollReveal>

          {/* Events Grid — staggered card reveals */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.slice(0, 3).map((event, i) => (
              <ScrollReveal key={event.id} variant="fade-up" delay={i * 0.12}>
                <a
                  href={event.link}
                  target={event.link.startsWith("http") ? "_blank" : undefined}
                  rel={event.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group block"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-medium px-3 py-1 rounded ${getTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                    <span className="text-sm text-gray-500">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-900 transition-colors">
                    {event.title}
                  </h3>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <ScrollReveal variant="fade-in">
        <Footer />
      </ScrollReveal>
    </main>
  );
}
