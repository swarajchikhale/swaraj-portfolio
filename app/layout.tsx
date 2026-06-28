import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Swaraj Chikhale | Full-Stack Developer & Web3 Builder",
  description:
    "Final-year IT Engineer building secure, scalable web applications. Blockchain, Web3, Full-Stack Development.",
  keywords: [
    "Swaraj Chikhale",
    "Full-Stack Developer",
    "Web3",
    "Blockchain",
    "Node.js",
    "React",
    "MongoDB",
    "Java",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
