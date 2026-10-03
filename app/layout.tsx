import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amitytobi.netlify.app"),

  title: "Amity Ekoyi | Frontend Developer",

  description:
    "Frontend developer building responsive, accessible, and user-friendly web applications with React, Next.js, TypeScript, and Tailwind CSS.",

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
      "I build thoughtful web experiences that are simple and easy to use.",
    siteName: "Amity Ekoyi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amity Ekoyi — Frontend Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Amity Ekoyi | Frontend Developer",
    description:
      "I build thoughtful web experiences that are simple and easy to use.",
    images: ["/og-image.png"],
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
        className={`${geist.variable} bg-white font-sans text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
