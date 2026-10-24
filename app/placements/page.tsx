import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionHeader from "../components/SectionHeader";
import { placements } from "../data/placements";

export const metadata: Metadata = {
  title: "Placements",
  description: "Firms where Wharton PEVC alumni have gone on to work in private equity, venture capital, and investment banking.",
};

const LOGO_EXTENSIONS = ["png", "jpg", "jpeg", "svg", "webp"];
const PLACEMENTS_DIR = path.join(process.cwd(), "public", "placements");

function findLogo(slug: string): string | null {
  for (const ext of LOGO_EXTENSIONS) {
    if (fs.existsSync(path.join(PLACEMENTS_DIR, `${slug}.${ext}`))) {
      return `/placements/${slug}.${ext}`;
    }
  }
  return null;
}

export default function PlacementsPage() {
  return (
    <main className="w-full">
      {/* Navigation */}
      <Navbar activeLink="/placements" />

      {/* Hero Section */}
      <section className="bg-white pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <SectionHeader
            eyebrow="Our Alumni"
            title="Placements"
            lineClassName="animate-page-intro"
            eyebrowClassName="animate-page-intro-delay-1"
            headingClassName="mb-6 animate-page-intro-delay-2"
          />
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed animate-page-intro-delay-3">
            Wharton PEVC alumni have gone on to build careers at leading private equity, venture
            capital, hedge fund, and investment banking firms around the world.
          </p>
        </div>
      </section>

      {/* Placements Grid */}
      <section className="bg-white pb-20 md:pb-28">
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-10 md:gap-x-10 md:gap-y-14 place-items-center animate-page-intro-delay-4">
            {placements.map((placement) => {
              const logo = findLogo(placement.slug);
              return (
                <div key={placement.slug} className="flex h-14 w-full items-center justify-center">
                  {logo ? (
                    <img
                      src={logo}
                      alt={placement.name}
                      style={{ maxWidth: `min(${Math.round((placement.maxWidth ?? 140) * 0.72)}px, 100%)` }}
                      className="h-7 md:h-8 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  ) : (
                    <span className="text-center text-sm text-gray-500 leading-snug px-2">
                      {placement.name}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
