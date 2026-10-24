export interface Sponsor {
  name: string;
  logo: string;
  size?: "sm";
}

export const platinumSponsors: Sponsor[] = [
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
    name: "Jane Street",
    logo: "/sponsors/jane-street.jpg",
  },
  {
    name: "KKR",
    logo: "/sponsors/kkr.png",
    size: "sm",
  },
  {
    name: "OceanSound Partners",
    logo: "/sponsors/oceansound-partners.svg",
  },
  {
    name: "TA Associates",
    logo: "/sponsors/ta-associates.svg",
  },
  {
    name: "Warburg Pincus",
    logo: "/sponsors/warburg-pincus.svg.webp",
  },
];

export const caseCompetitionPartners: Sponsor[] = [
  {
    name: "KKR",
    logo: "/sponsors/kkr.png",
    size: "sm",
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

export const allSponsors: Sponsor[] = [
  ...platinumSponsors,
  ...caseCompetitionPartners.filter(
    (sponsor) => !platinumSponsors.some((p) => p.name === sponsor.name)
  ),
];
