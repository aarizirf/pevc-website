import type { Metadata } from "next";
import { Hanken_Grotesk, Red_Rose } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
});

const redRose = Red_Rose({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Wharton PEVC",
  description: "Educating Undergraduates in Private Equity & Venture Capital since 2011",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hankenGrotesk.className} ${redRose.variable}`}>{children}</body>
    </html>
  );
}
