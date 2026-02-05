"use client";

import { useState } from "react";

interface Committee {
  id: string;
  title: string;
  description: string;
}

const committees: Committee[] = [
  {
    id: "co",
    title: "Corporate Outreach",
    description:
      "Students in this team will develop skills in sourcing and investor relations. CO works to develop relationships between PEVC club members and professionals in the industry. Not only will you increase the club's visibility and learn more about the industry, but you will also build personal connections and will be able to point to tangible experiences.",
  },
  {
    id: "ia",
    title: "Investment Analysis",
    description:
      "Students in this team will develop skills in financial analysis. Note that both IA and CO will receive the same educational material during the joint session. IA students will develop pitches for potential PE and VC targets, building a keynote pitch and an associated financial model. These will be presented during joint session to the broader club with questions on your approach and assumptions.",
  },
  {
    id: "ip",
    title: "Industry Projects",
    description:
      "Students in this team will have a great opportunity to apply theoretical skills learned in classes and clubs to the real world. This team provides pro-bono consulting services to local entrepreneurs looking to sell their businesses, learn how to position their businesses for a sale, or gain a better understanding of their businesses' value. Students will practice valuation skills (LBOs, DCFs, merger models), build pitch books, and gain a better understanding of valuing and pitching companies. This is for sophomore and up.",
  },
  {
    id: "academy",
    title: "PEVC Academy",
    description:
      "This GBM team will have a 100% acceptance rate. In this program, members will come to weekly meetings to learn from our board members, alumni and each other about a wide array of topics. Members will have the opportunity to participate in stock pitch competitions and present on a relevant private equity/venture capital topic. Applicants not selected for any committee are welcome to join the Academy.",
  },
];

export default function Accordion() {
  const [openId, setOpenId] = useState<string | null>("co");

  const togglePanel = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white pt-8 md:pt-12 pb-24 md:pb-32 lg:pb-40">
      <div className="px-12 md:px-20 lg:px-32">
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-16">
          <div className="w-16 h-px bg-gray-300" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900">
            Our Committees
          </h2>
        </div>

        {/* Accordion Cards */}
        <div className="flex flex-col gap-4">
          {committees.map((committee) => (
            <div
              key={committee.id}
              className="bg-gray-50 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => togglePanel(committee.id)}
                className="w-full px-8 md:px-12 py-8 flex items-center justify-between text-left"
              >
                <h3 className="text-2xl md:text-3xl font-light text-gray-900">
                  {committee.title}
                </h3>
                <span className="text-3xl text-gray-400 ml-4 font-light">
                  {openId === committee.id ? "×" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openId === committee.id
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 md:px-12 pb-10">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
                    {committee.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
