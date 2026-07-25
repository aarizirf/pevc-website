"use client";

import Image from "next/image";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import imgKK from "../assets/team/KK.jpg";
import imgAraash from "../assets/team/Araash.jpg";
import imgAislinn from "../assets/team/aislinn.jpeg";
import imgRohan from "../assets/team/Rohan.jpg";
import imgRyder from "../assets/team/ryder.jpeg";
import imgAmy from "../assets/team/Amy.jpeg";
import imgAarav from "../assets/team/AaravPatelPEVCHeadshot.jpg";
import imgNathaniel from "../assets/team/nathaniel.png";
import imgJoaquina from "../assets/team/Joaquina.jpg";
import imgJoe from "../assets/team/Joe.jpeg";
import imgVictoria from "../assets/team/Victoria.jpeg";
import imgMihir from "../assets/team/mihir.jpg";
import imgPlaceholder from "../assets/team/placeholder.svg";

import type { StaticImageData } from "next/image";

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: StaticImageData;
}

const executiveBoard: TeamMember[] = [
  // Presidents
  { name: "Araash Ahuja", position: "President", bio: "Senior in Wharton from NJ studying Finance and Statistics. Interned at ICONIQ and NEA.", image: imgAraash },
  { name: "Kah Kheng Gan", position: "President", bio: "Senior in Wharton from Singapore studying Finance and Statistics. Interned at D1 Capital and Farallon Capital.", image: imgKK },
  // VP, Investment Analysis
  { name: "Nathaniel Seminara", position: "VP, Investment Analysis", bio: "Junior in Wharton from London studying Finance and Statistics. Interned at CD&R and Lazard.", image: imgNathaniel },
  { name: "Aarav Patel", position: "VP, Investment Analysis", bio: "Junior in M&T from CT studying Finance and Computer Science. Interned at D1 Capital and Graham Capital.", image: imgAarav },
  // VP, Corporate Outreach
  { name: "Ryder Katz", position: "VP, Corporate Outreach", bio: "Sophomore in CAS from CA studying Philosophy, Politics, and Economics. Interned at Beach Point Capital.", image: imgRyder },
  { name: "Mihir Kelkar", position: "VP, Corporate Outreach", bio: "Sophomore in Wharton from FL studying Finance and Statistics. Interned at Avendus Capital.", image: imgMihir },
  // VP, Industry Projects
  { name: "Joseph Milfort", position: "VP, Industry Projects", bio: "Senior in Wharton from GA studying Finance and AI. Interned at Blackstone's Tactical Opportunities Team.", image: imgJoe },
  { name: "Amy Zhang", position: "VP, Industry Projects", bio: "Junior in Wharton and CAS from Shanghai studying Statistics and Math Econ. Interned at Walleye Capital.", image: imgAmy },
  // VP, PEVC Academy
  { name: "Rohan Srivastava", position: "VP, PEVC Academy", bio: "Senior in Wharton from Sydney studying Finance and Statistics. Interned at Gumshoe Capital.", image: imgRohan},
  { name: "Victoria Fu", position: "VP, PEVC Academy", bio: "Sophomore in Wharton from KY studying Finance and Fine Arts. Interned at an alternative investments fund.", image: imgVictoria},
  // VP, Competitions
  { name: "Aislinn Goh", position: "VP, Competitions", bio: "Sophomore in Wharton from Singapore studying Finance and Statistics. Interned at TVF Capital.", image: imgAislinn },
  // VP, Social
  { name: "Joaquina Mendive", position: "VP, Social", bio: "Senior in Huntsman from CT studying Finance, Legal Studies, and International Studies. Interned at GS and JPM.", image: imgJoaquina },
];

interface FormerTeam {
  year: string;
  members: string;
}

const formerTeams: FormerTeam[] = [
  {
    year: "2025-2026",
    members:
      "Presidents: Muhammad Vakil & Kah Kheng Gan\nVP of IA: Kah Kheng Gan & Aarav Patel\nVP of CO: Araash Ahuja & Rohan Ramprasad\nVP of IP: Cyrus Horst & Gabe Aguero\nVP of Academy: Jack Annicelli & Drew Sonn\nVP of Competitions: Nathaniel Seminara",
  },
  {
    year: "2024-2025",
    members:
      "Presidents: Kevin Zhang & Suraj Sait\nVP of IA: Otakar Korinek & Kah Kheng Gan\nVP of CO: Madeleine Yeh & Muhammad Vakil\nVP of IP: Adrian Melendez & Oliver Dalmi\nVP of Competitions: Mikail Jaffer\nVP of Academy: Jeffrey Zhang & Rohan Srivastava\nVP of Marketing: Araash Ahuja",
  },
  {
    year: "2023-2024",
    members:
      "Presidents: Amy Zhou & Kevin Zhang\nVP of IA: Kevin Zhang & Otakar Korinek\nVP of CO: Zuleykha Kishiyeva & Madeleine Yeh\nVP of IP: Suraj Sait, Adrian Melendez & Oliver Dalmi\nVP of Competitions: Shiv Sahai\nVP of Academy: Chandler McClesky & Jeffrey Zhang\nVP of Marketing: Khwaish Lakhiani",
  },
  {
    year: "2022-2023",
    members:
      "Presidents: Leontij Potupin & Ram Fedeli\nVP of IA: Amy Zhou & Spencer Mateega\nVP of CO: Katherine Hu & Zuleykha Kishiyeva\nVP of IP: Forrest Liu, James Meng, Claire Zhong\nVP of Academy: Kiran Gadde",
  },
  {
    year: "2021-2022",
    members:
      "Presidents: Josh Cheadle & Sami El Solh\nVP of IA: Matt Current, Leontij Potupin & Annie Chen\nVP of CO: Ram Fedeli & Turner Hale\nVP of IP: Srineeth Challa & Claire Zhong",
  },
  {
    year: "2020-2021",
    members:
      "Presidents: Tim Marsh & Raymond Mason\nVP of IA: Matt Current & WenTao Zhang\nVP of CO: Sudeep Jandyam",
  },
  {
    year: "2019-2020",
    members:
      "Presidents: Andrew Ciatto & Tim Marsh\nVP of IR: Alec Hsing & Raymond Mason\nVP of CO: Juliana Sandford & Matthew Tucker",
  },
  {
    year: "2018-2019",
    members:
      "Presidents: Sadhvi Venkatramani & Brandon Li\nVP of IR: Alec Hsing & Jason Cohen\nVP of CO: Michael Springer & Andrew Ciatto",
  },
  {
    year: "2017-2018",
    members:
      "Presidents: Colin Pinto & Sadhvi Venkatramani\nVP of IR: Suyash Hodawadekar & Brandon Li\nVP of CO: Michael Springer & Armghan Ahmad",
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

      {/* Team Grid — 2 rows of 6 */}
      <section className="px-6 md:px-12 lg:px-20 xl:px-32 pb-24">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-x-4 md:gap-x-6 gap-y-4 md:gap-y-8">
          {executiveBoard.map((member, i) => (
            <div
              key={member.name}
              className="group opacity-0"
              style={{
                animation: "page-intro-fade-in 1.4s ease-out forwards",
                animationDelay: `${0.5 + i * 0.1}s`,
              }}
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-3 relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top grayscale"
                  sizes="(max-width: 768px) 33vw, 17vw"
                />
              </div>
              <h3 className="text-sm font-normal text-gray-900 mb-0.5">
                {member.name}
              </h3>
              <p className="text-xs text-gray-500 mb-1">{member.position}</p>
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
