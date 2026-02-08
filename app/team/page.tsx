"use client";

import Link from "next/link";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
    position: "Co-President & VP, Investment Analysis",
    bio: "Junior at Wharton from Singapore studying Finance and Statistics. Previously worked at D1 Capital and Farallon Capital.",
    image: "/team/KK.jpg",
  },
  {
    name: "Araash Ahuja",
    position: "VP, Corporate Outreach",
    bio: "Junior at Wharton from New Jersey studying Finance and Statistics. Previously interned at growth and hedge funds.",
    image: "/team/Araash.jpg",
  },
  {
    name: "Rohan Ramprasad",
    position: "VP, Corporate Outreach",
    bio: "Sophomore in CAS from Philadelphia suburbs majoring in Economics. Will work on KKR's Real Estate Equity team summer 2027.",
    image: "/team/rohanR.png",
  },
  {
    name: "Cyrus Horst",
    position: "VP, Industry Projects",
    bio: "Junior at Wharton from Washington, D.C. Completed internships at Blackstone and Odyssey Investment Partners.",
    image: "/team/cyrus.png",
  },
  {
    name: "Gabe Aguero",
    position: "VP, Industry Projects",
    bio: "Senior at Wharton from Connecticut studying Finance and AI. Interned at Goldman Sachs TMT team.",
    image: "/team/gaberA.png",
  },
  {
    name: "Aarav Patel",
    position: "VP, Investment Analysis",
    bio: "Sophomore from Connecticut studying Finance and Computer Science (M&T program). Interned at Graham Capital.",
    image: "/team/AaravPatelPEVCHeadshot.jpg",
  },
  {
    name: "Jack Annicelli",
    position: "VP, PEVC Academy",
    bio: "Senior in College from New York studying Economics. Recently interned at Moelis in investment banking.",
    image: "/team/jack.jpeg",
  },
  {
    name: "Drew Sonn",
    position: "VP, PEVC Academy",
    bio: "Junior at Wharton from Virginia concentrating in finance and operations. Previously interned at Canyon Partners.",
    image: "/team/drew.png",
  },
  {
    name: "Nathaniel Seminara",
    position: "VP, Competitions",
    bio: "Sophomore from London studying finance and statistics. Interned at Lazard as investment banking summer analyst.",
    image: "/team/nathaniel.png",
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
      "Co-Presidents: Kevin Zhang & Suraj Sait\nCo-VP of IA: Otakar Korinek & Kah Kheng Ghan\nCo-VP of CO: Madeleine Yeh & Muhammad Vakil\nCo-VP of IP: Adrian Melendez & Oliver Dalmi\nVP of Competitions: Mikail Jaffer\nCo-VP of Academy: Jeffrey Zhang & Rohan Srivastava\nVP of Marketing: Araash Ahuja",
  },
  {
    year: "2023-2024",
    members:
      "Co-Presidents: Amy Zhou & Kevin Zhang\nCo-VP of IA: Kevin Zhang & Otakar Korinek\nCo-VP of CO: Zuleykha Kishiyeva & Madeleine Yeh\nCo-VP of IP: Suraj Sait, Adrian Melendez & Oliver Dalmi\nVP of Competitions: Shiv Sahai\nCo-VP of Academy: Chandler McClesky & Jeffrey Zhang\nVP of Marketing: Khwaish Lakhiani",
  },
  {
    year: "2022-2023",
    members:
      "Co-Presidents: Leontij Potupin & Ram Fedeli\nCo-VP of IA: Amy Zhou & Spencer Mateega\nCo-VP of CO: Katherine Hu & Zuleykha Kishiyeva\nCo-VP of IP: Forrest Liu, James Meng, Claire Zhong\nVP of Academy: Kiran Gadde",
  },
  {
    year: "2021-2022",
    members:
      "Co-Presidents: Josh Cheadle & Sami El Solh\nCo-VP of IA: Matt Current, Leontij Potupin & Annie Chen\nCo-VP of CO: Ram Fedeli & Turner Hale\nCo-VP of IP: Srineeth Challa & Claire Zhong",
  },
  {
    year: "2020-2021",
    members:
      "Co-Presidents: Tim Marsh & Raymond Mason\nCo-VP of IA: Matt Current & WenTao Zhang\nVP of CO: Sudeep Jandyam",
  },
  {
    year: "2019-2020",
    members:
      "Co-Presidents: Andrew Ciatto & Tim Marsh\nCo-VP of IR: Alec Hsing & Raymond Mason\nCo-VP of CO: Juliana Sandford & Matthew Tucker",
  },
  {
    year: "2018-2019",
    members:
      "Co-Presidents: Sadhvi Venkatramani & Brandon Li\nCo-VP of IR: Alec Hsing & Jason Cohen\nCo-VP of CO: Michael Springer & Andrew Ciatto",
  },
  {
    year: "2017-2018",
    members:
      "Co-Presidents: Colin Pinto & Sadhvi Venkatramani\nCo-VP of IR: Suyash Hodawadekar & Brandon Li\nCo-VP of CO: Michael Springer & Armghan Ahmad",
  },
];

export default function TeamPage() {
  const [openYear, setOpenYear] = useState<string | null>(null);

  return (
    <main className="w-full bg-white">
      {/* Navigation */}
      <Navbar activeLink="/team" />

      {/* Header Section */}
      <section className="px-6 md:px-12 lg:px-20 xl:px-32 pt-16 md:pt-24 pb-12">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-16 border-t-2 border-dashed border-gray-400 shrink-0 animate-page-intro" />
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight animate-page-intro-delay-1">
            Our Team
          </h1>
        </div>
        <p className="text-gray-500 text-lg md:text-xl font-light animate-page-intro-delay-2">
          Current Executive Board
        </p>
      </section>

      {/* Team Grid */}
      <section className="px-6 md:px-12 lg:px-20 xl:px-32 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 md:gap-x-6 gap-y-6 md:gap-y-12">
          {executiveBoard.map((member, i) => (
            <div
              key={member.name}
              className="group opacity-0"
              style={{
                animation: "page-intro-fade-in 1.4s ease-out forwards",
                animationDelay: `${0.5 + i * 0.1}s`,
              }}
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top grayscale"
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
      <section className="px-6 md:px-12 lg:px-20 xl:px-32 pb-24 md:pb-32">
        <h2 className="text-xl md:text-2xl font-light text-gray-900 mb-10">
          Former Executive Teams
        </h2>

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
                <div className="pb-4 space-y-1">
                  {team.members.split("\n").map((line, i) => (
                    <p key={i} className="text-sm text-gray-500">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
