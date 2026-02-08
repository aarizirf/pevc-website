import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the Wharton PEVC executive board and leadership team.",
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
