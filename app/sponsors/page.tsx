import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Sponsors",
  description: "Partners and case competition sponsors of Wharton Undergraduate PEVC.",
};

interface Sponsor {
  name: string;
  logo: string;
}

const caseCompetitionPartners: Sponsor[] = [
  {
    name: "KKR",
    logo: "/sponsors/kkr.png",
  },
  {
    name: "Silver Lake",
    logo: "/sponsors/silver-lake.png",
  },
  {
    name: "Warburg Pincus",
    logo: "/sponsors/warburg-pincus.svg.webp",
  },
];

const platinumSponsors: Sponsor[] = [
  {
    name: "American Securities",
    logo: "/sponsors/american-securities.png",
  },
  {
    name: "CD&R",
    logo: "/sponsors/cdr.png",
  },
  {
    name: "Grata",
    logo: "/sponsors/grata.png",
  },
  {
    name: "Insight Partners",
    logo: "/sponsors/insight-partners.png",
  },
  {
    name: "KKR",
    logo: "/sponsors/kkr.png",
  },
  {
    name: "OceanSound Partners",
    logo: "/sponsors/oceansound-partners.svg",
  },
  {
    name: "Warburg Pincus",
    logo: "/sponsors/warburg-pincus.svg.webp",
  },
];

function SponsorSection({
  title,
  sponsors,
}: {
  title: string;
  sponsors: Sponsor[];
}) {
  return (
    <div className="mb-12 md:mb-16">
      <h2 className="text-xl md:text-2xl font-light text-gray-900 mb-6 md:mb-8">{title}</h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.name}
            className="flex h-32 items-center justify-center rounded-lg bg-white p-4 shadow-sm"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="max-h-20 max-w-28 object-contain"
            />
          </div>
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
          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 border-t-2 border-dashed border-gray-400 shrink-0 animate-page-intro" />
            <span className="text-sm text-gray-500 uppercase tracking-wider animate-page-intro-delay-1">Our Partners</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 animate-page-intro-delay-2">
            Sponsors
          </h1>
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
