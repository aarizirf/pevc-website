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
  metadataBase: new URL("https://whartonugpevc.com"),
  title: {
    default: "Wharton PEVC",
    template: "%s | Wharton PEVC",
  },
  description: "Educating Undergraduates in Private Equity & Venture Capital since 2011",
  openGraph: {
    title: "Wharton PEVC",
    description: "Educating Undergraduates in Private Equity & Venture Capital since 2011",
    type: "website",
    images: [{ url: "/wharton-logo.png", width: 512, height: 512 }],
  },
  twitter: {
    card: "summary_large_image",
  },
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
