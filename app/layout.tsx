import type { Metadata } from "next";
import {Outfit, Ovo} from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "./context/languageContext";
import "./globals.css";

{/* <div className="bg-white dark:bg-black text-black dark:text-white p-10">
  DARK MODE TEST
</div> */}
const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight:["400"]
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "daniel d. ",
  description: "" ,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en" className="scroll-smooth">
  <body
    className={`${geistSans.variable} ${outfit.className} antialiased leading-8 overflow-x-hidden bg-white text-black dark:bg-[#11001F] dark:text-white`}
  >
 <LanguageProvider>
    {children}
  </LanguageProvider>
  </body>
</html>
  );
}
