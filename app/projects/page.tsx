import type { Metadata } from "next";
import Link from "next/link";
import ClientReviewsCarousel from "@/app/components/ClientReviewsCarousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Projects",
  description: "Valuation services and growth acceleration for local businesses. Pro bono services from Wharton PEVC members.",
};

export default function ProjectsPage() {
  return (
    <main className="w-full">
      {/* Navigation */}
      <Navbar activeLink="/projects" />

      {/* Hero */}
      <section className="bg-white pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 border-t-2 border-dashed border-gray-400 shrink-0" />
            <span className="text-sm text-gray-500 uppercase tracking-wider">Industry Projects</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-8 max-w-5xl">
            Valuation Services + Growth Acceleration
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <p className="text-gray-600 text-lg leading-relaxed">
              PEVC is now offering valuation services for local businesses, no matter the size or financial profile across the United States. Our growth acceleration team formulates strategic advice to help your firm take advantage of macro trends and help you grow your most promising products.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Members have 2+ summers of experience building valuation models for top private equity firms, venture capital firms, hedge funds, asset managers, and investment banks. Members have taken rigorous finance, accounting, and operations courses at Wharton and placed at national case competitions. The team brings insights into Gen Z consumer preferences and revolutionary technology products. All services are pro bono.
            </p>
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="bg-white py-16 md:py-24">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <ClientReviewsCarousel />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
            Interested in Becoming a Client?
          </h2>
          <p className="text-gray-600 text-base max-w-xl mx-auto mb-8">
            Reach out to learn more about our valuation services and growth acceleration program.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Contact Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
