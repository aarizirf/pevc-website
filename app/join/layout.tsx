import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Us",
  description: "Join Wharton PEVC — get involved with the premier undergraduate PE and VC club at Penn.",
};

export default function JoinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
