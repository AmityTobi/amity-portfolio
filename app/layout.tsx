import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amitytobi.netlify.app"),

  title: "Amity Ekoyi | Frontend Developer",

  description:
    "Frontend developer building responsive and accessible web applications with React, Next.js, TypeScript, and Tailwind CSS.",

  authors: [{ name: "Amity Ekoyi" }],

  creator: "Amity Ekoyi",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    title: "Amity Ekoyi | Frontend Developer",
    description:
      "Frontend developer building thoughtful, responsive, and accessible web experiences.",
    siteName: "Amity Ekoyi",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amity Ekoyi | Frontend Developer",
    description:
      "Frontend developer building thoughtful, responsive, and accessible web experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white font-sans text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
