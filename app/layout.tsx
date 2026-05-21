import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import SplashCursor from "@/components/ui/SplashCursor";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Poojyanth M. | Creative Developer",
  description: "Bridging AI, engineering & cinematic interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-[#121212] text-white antialiased`}>
        <SplashCursor 
          SIM_RESOLUTION={64} 
          DYE_RESOLUTION={1024} 
          PRESSURE_ITERATIONS={15} 
          COLOR="#ffffff" 
          RAINBOW_MODE={false} 
        />
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
