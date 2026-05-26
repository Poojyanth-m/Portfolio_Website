import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Poojyanth M. | Creative Developer",
  description: "Bridging scalable backend systems, machine learning, and dynamic user interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-[#121212] text-white antialiased`}>

        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
