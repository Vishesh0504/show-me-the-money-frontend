import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google"; // Import design fonts
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap", // Ensure text remains visible during load
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1A237E",
};

export const metadata: Metadata = {
  title: "Vault & Virtue",
  description: "A sophisticated auto-expense tracker.",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
