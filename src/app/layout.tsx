import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "next-themes";
import TypographyEnhancer from "@/components/TypographyEnhancer";

/** Fonts load at runtime via stylesheet link — avoids next/font build-time fetches to gstatic ( flaky on some CI ). */

export const metadata: Metadata = {
  metadataBase: new URL('https://venator-capital.com'),
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
        url: "/hexagon-logo.png",
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
    images: ["/hexagon-logo.png"],
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
    icon: "/hexagon-logo.png",
    shortcut: "/hexagon-logo.png",
    apple: "/hexagon-logo.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Noto+Sans+JP:wght@300;400;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        />
      </head>
      <body
        className="font-sans antialiased text-white overflow-x-hidden"
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            <TypographyEnhancer />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
