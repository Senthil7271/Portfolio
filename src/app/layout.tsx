import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ElectricBackground from "@/components/ElectricBackground";
import LightningCursor from "@/components/cursor/LightningCursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Senthil Kumar Mahalingam | Hardware, FPGA & Edge AI Engineer",
  description:
    "Engineering Intelligence Into Hardware. Personal engineering portfolio of Senthil Kumar Mahalingam — specializing in FPGA Development, Embedded Systems, VLSI Design, Edge AI, and RTOS.",
  keywords: [
    "Senthil Kumar Mahalingam",
    "FPGA Development",
    "Embedded Systems",
    "VLSI Design",
    "Edge AI",
    "RTOS",
    "μT-Kernel",
    "Renesas RA8P1",
    "Lattice FPGA",
    "ZedBoard",
    "Verilog RTL",
    "Chennai Institute of Technology",
  ],
  authors: [{ name: "Senthil Kumar Mahalingam" }],
  openGraph: {
    title: "Senthil Kumar Mahalingam | Hardware, FPGA & Edge AI Engineer",
    description: "From Electrons to Intelligence: FPGA, Embedded Systems, VLSI & Edge AI Showcase.",
    url: "https://senthilkumar-m.dev",
    siteName: "Senthil Kumar Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-background-primary text-text-primary antialiased selection:bg-electric-yellow selection:text-black relative overflow-x-hidden">
        <LightningCursor />
        <ElectricBackground />
        <Navbar />
        <main className="relative z-10 flex flex-col min-h-screen overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
