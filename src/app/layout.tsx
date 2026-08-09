import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import { CinematicEffects } from "@/components/cinematic/CinematicEffects";
import { FilmOverlays } from "@/components/cinematic/FilmOverlays";
import { Preloader } from "@/components/cinematic/Preloader";
import { Viewfinder } from "@/components/cinematic/Viewfinder";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
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
      className={`${inter.variable} ${cormorant.variable} ${jetbrains.variable} h-full w-full bg-bg antialiased`}
    >
      <body className="flex min-h-full w-full min-w-0 flex-col overflow-x-clip bg-bg font-sans font-light text-text">
        <JsonLd />
        <FilmOverlays />
        <Preloader />
        <Viewfinder />
        <CinematicEffects />
        <a
          href="#about"
          className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10001] focus:block focus:border focus:border-line focus:bg-bg focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:tracking-widest focus:text-text focus:outline-none"
        >
          Skip to main content
        </a>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
