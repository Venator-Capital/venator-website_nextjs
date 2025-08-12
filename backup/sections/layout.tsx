import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://venator-capital.net"),
  title: "Venator Capital LLC - Turning AI Into Advantage",
  description: "We architect cutting-edge AI solutions — from machine learning applications to automation frameworks. No matter where you are in your AI journey, we'll guide you from roadmap to production.",
  keywords: ["AI", "Machine Learning", "Automation", "Consulting", "Enterprise AI", "MLOps", "Data Analytics"],
  authors: [{ name: "Venator Capital LLC" }],
  creator: "Venator Capital LLC",
  publisher: "Venator Capital LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ja_JP"],
    url: "https://venator-capital.net",
    siteName: "Venator Capital LLC",
    title: "Venator Capital LLC - Turning AI Into Advantage",
    description: "We architect cutting-edge AI solutions — from machine learning applications to automation frameworks. No matter where you are in your AI journey, we'll guide you from roadmap to production.",
    images: [
      {
        url: "/logos/Cropped_black_logo-removebg-preview.png",
        width: 1200,
        height: 630,
        alt: "Venator Capital LLC Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Venator Capital LLC - Turning AI Into Advantage",
    description: "We architect cutting-edge AI solutions — from machine learning applications to automation frameworks. No matter where you are in your AI journey, we'll guide you from roadmap to production.",
    images: ["/logos/Cropped_black_logo-removebg-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-black text-white overflow-x-hidden`}
        suppressHydrationWarning
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
