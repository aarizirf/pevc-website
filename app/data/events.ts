export interface Event {
  id: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  type: "Info Session" | "Speaker Event" | "Networking" | "Case Competition" | "Workshop";
  link: string;
}

export const events: Event[] = [];

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
