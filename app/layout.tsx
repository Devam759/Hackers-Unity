import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://hackersunity.dev'),
  title: "Hacker's Unity — India's Developer Community",
  description:
    "Build, learn, ship. Meet weekly, contribute to open-source, win hackathons. Join India's most active developer community.",
  keywords: [
    "developer community",
    "hackathon",
    "open source",
    "coding",
    "programming",
    "tech community",
    "India",
  ],
  authors: [{ name: "Hacker's Unity" }],
  creator: "Hacker's Unity",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hackersunity.dev",
    title: "Hacker's Unity — India's Developer Community",
    description:
      "Build, learn, ship. Meet weekly, contribute to open-source, win hackathons.",
    siteName: "Hacker's Unity",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Hacker's Unity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hacker's Unity — India's Developer Community",
    description:
      "Build, learn, ship. Meet weekly, contribute to open-source, win hackathons.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-black" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-black`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

