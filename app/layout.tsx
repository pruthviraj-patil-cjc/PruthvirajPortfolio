import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono, Instrument_Serif } from "next/font/google";

import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pruthviraj Ubale — Java Full Stack Developer",
  description:
    "Portfolio of Pruthviraj Ubale, a Java Backend / Full Stack Developer (fresher) from Pune — Spring Boot, Hibernate, MySQL and React.",
  openGraph: {
    title: "Pruthviraj Ubale — Java Full Stack Developer",
    description:
      "Spring Boot, Hibernate, MySQL and React. Projects, skills and contact.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07070b",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${grotesk.variable} ${jetbrains.variable} ${instrument.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
