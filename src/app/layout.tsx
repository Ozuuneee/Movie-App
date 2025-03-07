"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "./_components/Footer";
import { Navigation } from "./_components/Navigation";
import { useState } from "react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export type MoonType = "dark" | "light";

const metadata: Metadata = {
  title: "Movie Z",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState<MoonType>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <html lang="en" className={`2xl:w-[1536px] mx-auto bg-muted ${theme}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${theme}`}
      >
        <Navigation theme={theme} toggleTheme={toggleTheme} />
        <div className="flex flex-col gap-8">
          <main className="min-h-screen px-5 py-8 sm:px-[40px] md:px-[60px] lg:px-[80px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
