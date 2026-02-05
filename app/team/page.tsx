"use client";

import Link from "next/link";
import { useState } from "react";

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
}

const executiveBoard: TeamMember[] = [
  {
    name: "Muhammad Vakil",
    position: "Co-President",
    bio: "Senior at Wharton studying Finance and AI from Dubai. Interned at Point72 in L/S equities.",
    image: "/team/Muhammad.jpg",
  },
  {
    name: "Kah Kheng Gan",
    position: "Co-President",
    bio: "Junior at Wharton from Singapore studying Finance and Statistics. Previously worked at D1 Capital and Farallon Capital.",
    image: "/team/KK.jpg",
  },
  {
    name: "Rohan Ramprasad",
    position: "VP, Corporate Outreach",
    bio: "Sophomore in CAS from Philadelphia suburbs majoring in Economics. Will work on KKR's Real Estate Equity team summer 2027.",
    image: "/team/rohanR.png",
  },
  {
    name: "Drew Sonn",
    position: "VP, PEVC Academy",
    bio: "Junior at Wharton from Virginia concentrating in finance and operations. Previously interned at Canyon Partners.",
    image: "/team/drew.png",
  },
  {
    name: "Aarav Patel",
    position: "VP, Investment Analysis",
    bio: "Sophomore from Connecticut studying Finance and Computer Science (M&T program). Interned at Graham Capital.",
    image: "/team/AaravPatelPEVCHeadshot.jpg",
  },
  {
    name: "Gabe Aguero",
    position: "VP, Industry Projects",
    bio: "Senior at Wharton from Connecticut studying Finance and AI. Interned at Goldman Sachs TMT team.",
    image: "/team/gaberA.png",
  },
  {
    name: "Jack Annicelli",
    position: "VP, PEVC Academy",
    bio: "Senior in College from New York studying Economics. Recently interned at Moelis in investment banking.",
    image: "/team/jack.jpeg",
  },
  {
    name: "Nathaniel Seminara",
    position: "VP, Competitions",
    bio: "Sophomore from London studying finance and statistics. Interned at Lazard as investment banking summer analyst.",
    image: "/team/nathaniel.png",
  },
  {
    name: "Araash Ahuja",
    position: "VP, Corporate Outreach",
    bio: "Junior at Wharton from New Jersey studying Finance and Statistics. Previously interned at growth and hedge funds.",
    image: "/team/Araash.jpg",
  },
  {
    name: "Cyrus Horst",
    position: "VP, Industry Projects",
    bio: "Junior at Wharton from Washington, D.C. Completed internships at Blackstone and Odyssey Investment Partners.",
    image: "/team/cyrus.png",
  },
];

interface FormerTeam {
  year: string;
  members: string;
}

const formerTeams: FormerTeam[] = [
  {
    year: "2024-2025",
    members:
      "Co-Presidents: Kevin Zhang & Suraj Sait | Co-VP of IA: Otakar Korinek & Kah Kheng Ghan | Co-VP of CO: Madeleine Yeh & Muhammad Vakil | Co-VP of IP: Adrian Melendez & Oliver Dalmi | VP of Competitions: Mikail Jaffer | Co-VP of Academy: Jeffrey Zhang & Rohan Srivastava | VP of Marketing: Araash Ahuja",
  },
  {
    year: "2023-2024",
    members:
      "Co-Presidents: Amy Zhou & Kevin Zhang | Co-VP of IA: Kevin Zhang & Otakar Korinek | Co-VP of CO: Zuleykha Kishiyeva & Madeleine Yeh | Co-VP of IP: Suraj Sait, Adrian Melendez & Oliver Dalmi | VP of Competitions: Shiv Sahai | Co-VP of Academy: Chandler McClesky & Jeffrey Zhang | VP of Marketing: Khwaish Lakhiani",
  },
  {
    year: "2022-2023",
    members:
      "Co-Presidents: Leontij Potupin & Ram Fedeli | Co-VP of IA: Amy Zhou & Spencer Mateega | Co-VP of CO: Katherine Hu & Zuleykha Kishiyeva | Co-VP of IP: Forrest Liu, James Meng, Claire Zhong | VP of Academy: Kiran Gadde",
  },
  {
    year: "2021-2022",
    members:
      "Co-Presidents: Josh Cheadle & Sami El Solh | Co-VP of IA: Matt Current, Leontij Potupin & Annie Chen | Co-VP of CO: Ram Fedeli & Turner Hale | Co-VP of IP: Srineeth Challa & Claire Zhong",
  },
  {
    year: "2020-2021",
    members:
      "Co-Presidents: Tim Marsh & Raymond Mason | Co-VP of IA: Matt Current & WenTao Zhang | VP of CO: Sudeep Jandyam",
  },
  {
    year: "2019-2020",
    members:
      "Co-Presidents: Andrew Ciatto & Tim Marsh | Co-VP of IR: Alec Hsing & Raymond Mason | Co-VP of CO: Juliana Sandford & Matthew Tucker",
  },
  {
    year: "2018-2019",
    members:
      "Co-Presidents: Sadhvi Venkatramani & Brandon Li | Co-VP of IR: Alec Hsing & Jason Cohen | Co-VP of CO: Michael Springer & Andrew Ciatto",
  },
  {
    year: "2017-2018",
    members:
      "Co-Presidents: Colin Pinto & Sadhvi Venkatramani | Co-VP of IR: Suyash Hodawadekar & Brandon Li | Co-VP of CO: Michael Springer & Armghan Ahmad",
  },
];

export default function TeamPage() {
  const [openYear, setOpenYear] = useState<string | null>(null);

  return (
    <main className="w-full bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-12 py-8 md:px-20 lg:px-32 border-b border-gray-100">
        <Link
          href="/"
          className="text-gray-900 font-semibold text-lg tracking-wide"
        >
          Wharton PEVC
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link
            href="/"
            className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/team"
            className="text-gray-900 text-sm font-medium transition-colors"
          >
            Our Team
          </Link>
          <Link
            href="/sponsors"
            className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
          >
            Sponsors
          </Link>
          <Link
            href="/events"
            className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
          >
            Events
          </Link>
          <Link
            href="/projects"
            className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
          >
            Industry Projects
          </Link>
          <Link
            href="/join"
            className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
          >
            Join Us
          </Link>
        </div>
      </nav>

      {/* Header Section */}
      <section className="px-12 md:px-20 lg:px-32 pt-16 md:pt-24 pb-12">
        <div className="flex items-start gap-6 mb-8">
          <div className="w-1 bg-blue-900 h-16 shrink-0" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 tracking-tight">
            OUR TEAM
          </h1>
        </div>
        <p className="text-gray-500 text-lg md:text-xl font-light">
          Current Executive Board
        </p>
      </section>

      {/* Team Grid */}
      <section className="px-12 md:px-20 lg:px-32 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
          {executiveBoard.map((member) => (
            <div key={member.name} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h3 className="text-base font-normal text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{member.position}</p>
              <p className="text-xs text-gray-400 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Former Executive Teams */}
      <section className="px-12 md:px-20 lg:px-32 pb-24 md:pb-32">
        <div className="flex items-center gap-6 mb-10">
          <div className="w-12 h-px bg-gray-300" />
          <h2 className="text-xl md:text-2xl font-light text-gray-900">
            Former Executive Teams
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {formerTeams.map((team) => (
            <div
              key={team.year}
              className="border-b border-gray-100 last:border-b-0"
            >
              <button
                onClick={() =>
                  setOpenYear(openYear === team.year ? null : team.year)
                }
                className="w-full py-4 flex items-center justify-between text-left"
              >
                <h3 className="text-base font-medium text-gray-700">
                  {team.year}
                </h3>
                <span className="text-xl text-gray-400 ml-4 font-light">
                  {openYear === team.year ? "-" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openYear === team.year
                    ? "max-h-[300px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-4">
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {team.members}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 md:py-20">
        <div className="px-12 md:px-20 lg:px-32">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <Link
                href="/"
                className="text-white font-semibold text-xl tracking-wide"
              >
                Wharton PEVC
              </Link>
            </div>

            <div>
              <h4 className="text-gray-400 text-sm mb-4">Club</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/team"
                    className="text-white text-sm hover:text-gray-300 transition-colors"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/join"
                    className="text-white text-sm hover:text-gray-300 transition-colors"
                  >
                    Join Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-400 text-sm mb-4">Committees</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/committees"
                    className="text-white text-sm hover:text-gray-300 transition-colors"
                  >
                    Investment Analysis
                  </Link>
                </li>
                <li>
                  <Link
                    href="/committees"
                    className="text-white text-sm hover:text-gray-300 transition-colors"
                  >
                    Industry Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/committees"
                    className="text-white text-sm hover:text-gray-300 transition-colors"
                  >
                    PEVC Academy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/committees"
                    className="text-white text-sm hover:text-gray-300 transition-colors"
                  >
                    Corporate Outreach
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-400 text-sm mb-4">Events</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/events"
                    className="text-white text-sm hover:text-gray-300 transition-colors"
                  >
                    Upcoming Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-white text-sm hover:text-gray-300 transition-colors"
                  >
                    Speaker Series
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-white text-sm hover:text-gray-300 transition-colors"
                  >
                    Networking
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-400 text-sm mb-4">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/sponsors"
                    className="text-white text-sm hover:text-gray-300 transition-colors"
                  >
                    Sponsors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-white text-sm hover:text-gray-300 transition-colors"
                  >
                    Industry Projects
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-400 text-sm mb-4">Connect</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/contact"
                    className="text-white text-sm hover:text-gray-300 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm hover:text-gray-300 transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm hover:text-gray-300 transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 <span className="text-gray-400">Wharton PEVC</span> All
              Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <p className="mt-8 text-gray-500 text-xs leading-relaxed text-center">
            As a Wharton Council-recognized student organization, Wharton PEVC
            adheres to the{" "}
            <a
              href="https://almanac.upenn.edu/articles/of-record-university-of-pennsylvania-policy-on-equal-opportunity-and-equal-opportunity-and-nondiscrimination-statement"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300 transition-colors"
            >
              University of Pennsylvania Policy on Equal Opportunity
            </a>
            . All Penn undergraduates are welcome to sign up to participate in
            our general body membership (GBM) events and programs.
          </p>
        </div>
      </footer>
    </main>
  );
}
