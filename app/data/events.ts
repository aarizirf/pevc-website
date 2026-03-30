export interface Event {
  id: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  type: "Info Session" | "Speaker Event" | "Networking" | "Case Competition" | "Workshop";
  link: string;
}

export const events: Event[] = [
  {
    id: "warburg-pitch-comp",
    title: "Warburg Pitch Competition",
    date: "March 21, 2026",
    time: "10am–1pm",
    type: "Case Competition",
    link: "#",
  },
  {
    id: "american-securities-info-session",
    title: "American Securities Info Session",
    date: "March 25, 2026",
    time: "5:30–6:30pm",
    type: "Info Session",
    link: "#",
  },
  {
    id: "blair-effron-fireside-chat",
    title: "Fireside Chat with Blair Effron: Founder of Centerview Partners",
    date: "March 26, 2026",
    time: "5:30–6:30pm",
    location: "JMHH G03",
    type: "Speaker Event",
    link: "https://groups.wharton.upenn.edu/pevc/rsvp_boot?id=123647",
  },
  {
    id: "ta-associates-networking-dinner",
    title: "TA Associates Networking Session & Dinner",
    date: "March 31, 2026",
    time: "6–7:30pm",
    location: "The Inn at Penn",
    type: "Networking",
    link: "#",
  },
  {
    id: "american-securities-networking-session",
    title: "American Securities Networking Session",
    date: "April 7, 2026",
    time: "6–7pm",
    location: "JMHH 345",
    type: "Networking",
    link: "#",
  },
  {
    id: "atlas-partners-info-session",
    title: "Atlas Partners Info Session",
    date: "April 15, 2026",
    time: "6–7pm",
    location: "JMHH 245",
    type: "Info Session",
    link: "#",
  },
  {
    id: "silver-lake-info-session",
    title: "Silver Lake Info Session",
    date: "April 16, 2026",
    time: "7–8pm",
    type: "Info Session",
    link: "#",
  },
  {
    id: "silver-lake-competition",
    title: "Silver Lake Competition",
    date: "April 17, 2026",
    time: "10–11am",
    type: "Case Competition",
    link: "#",
  },
];

export const getTypeColor = (type: Event["type"]) => {
  switch (type) {
    case "Info Session":
      return "bg-purple-100 text-purple-900";
    case "Speaker Event":
      return "bg-blue-100 text-blue-900";
    case "Networking":
      return "bg-green-100 text-green-900";
    case "Case Competition":
      return "bg-orange-100 text-orange-900";
    case "Workshop":
      return "bg-yellow-100 text-yellow-900";
    default:
      return "bg-gray-100 text-gray-900";
  }
};
