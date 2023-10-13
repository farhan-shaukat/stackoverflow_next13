import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

import { ThemeProvider } from '@/context/ThemeProvider';

import "./globals.css";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});
export const metadata: Metadata = {
  title: "MyStackOverFlow",
  description: "This is my version of Stack Overflow",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          <ClerkProvider
          appearance={{
              elements: {
                formButtonPrimary: "primary-gradient",
                footerActionLink: "primary-text-gradient hover:text-primary-500",
              },
            }}
          >
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </ClerkProvider>
        </body>
      </html>
  );
}
