import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { Navbar } from "@/components/layout/Navbar";
import { createMetadata } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full w-full bg-bg antialiased`}
    >
      <body className="flex min-h-full w-full min-w-0 flex-col overflow-x-clip bg-bg">
        <JsonLd />
        <a
          href="#about"
          className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:block focus:rounded-lg focus:bg-purple focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline-none"
        >
          Skip to main content
        </a>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
