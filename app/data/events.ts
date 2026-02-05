export interface Event {
  id: string;
  title: string;
  date: string;
  type: "Info Session" | "Speaker Event" | "Networking" | "Case Competition" | "Workshop";
  link: string;
}

export const events: Event[] = [
  {
    id: "accel-kkr-info-session",
    title: "Accel-KKR x Wharton PEVC Info Session",
    date: "February 11, 2026",
    type: "Info Session",
    link: "https://groups.wharton.upenn.edu/pevc/rsvp_boot?id=123645",
  },
  {
    id: "blair-effron-fireside-chat",
    title: "Fireside Chat with Blair Effron: Founder of Centerview Partners",
    date: "March 26, 2026",
    type: "Speaker Event",
    link: "https://groups.wharton.upenn.edu/pevc/rsvp_boot?id=123647",
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
