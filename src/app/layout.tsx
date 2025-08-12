import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
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
    url: "https://venator-capital.com",
    siteName: "Venator Capital LLC",
    title: "Venator Capital LLC - Turning AI Into Advantage",
    description: "We architect cutting-edge AI solutions — from machine learning applications to automation frameworks. No matter where you are in your AI journey, we'll guide you from roadmap to production.",
    images: [
      {
        url: "/Cropped_black_logo-removebg-preview.png",
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
    images: ["/Cropped_black_logo-removebg-preview.png"],
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased text-white overflow-x-hidden`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
