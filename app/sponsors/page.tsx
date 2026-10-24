import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionHeader from "../components/SectionHeader";
import { platinumSponsors, caseCompetitionPartners, type Sponsor } from "../data/sponsors";

export const metadata: Metadata = {
  title: "Sponsors",
  description: "Partners and case competition sponsors of Wharton Undergraduate PEVC.",
};

function SponsorSection({
  title,
  sponsors,
}: {
  title: string;
  sponsors: Sponsor[];
}) {
  return (
    <div className="mb-16 md:mb-24">
      <h2 className="text-xl md:text-2xl font-light text-gray-900 mb-10 md:mb-12">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-12 md:gap-y-16 place-items-center">
        {sponsors.map((sponsor) => (
          <img
            key={sponsor.name}
            src={sponsor.logo}
            alt={sponsor.name}
            className={`w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${sponsor.size === "sm" ? "h-7 md:h-8 max-w-[95px] md:max-w-[120px]" : "h-9 md:h-10 max-w-[120px] md:max-w-[155px]"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function SponsorsPage() {
  return (
    <main className="w-full">
      {/* Navigation */}
      <Navbar activeLink="/sponsors" />

      {/* Hero Section */}
      <section className="bg-white pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <SectionHeader
            eyebrow="Our Partners"
            title="Sponsors"
            lineClassName="animate-page-intro"
            eyebrowClassName="animate-page-intro-delay-1"
            headingClassName="mb-6 animate-page-intro-delay-2"
          />
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed animate-page-intro-delay-3">
            We are grateful for the support of leading private equity and venture capital firms
            who help make our events, case competitions, and programming possible.
          </p>
        </div>
      </section>

      {/* Sponsors Content */}
      <section className="bg-white py-12 md:py-16">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="animate-page-intro-delay-4">
            <SponsorSection title="Sponsors" sponsors={platinumSponsors} />
          </div>
          <div className="animate-page-intro-delay-5">
            <SponsorSection title="Case Competition Partners" sponsors={caseCompetitionPartners} />
          </div>
        </div>
      </section>

      {/* Become a Sponsor CTA */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
            Interested in Sponsoring?
          </h2>
          <p className="text-gray-600 text-base max-w-xl mx-auto mb-8">
            Partner with Wharton PEVC to connect with talented undergraduates and support
            the next generation of finance professionals.
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
