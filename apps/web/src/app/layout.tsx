import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@fontsource-variable/inter";
import "./globals.css";

// Components
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Webb - AI Interview Practice",
  description:
    "Webb: Your AI platform for interview practice. Improve your skills and boost your confidence with AI coaching.",
  keywords: [
    "AI interview",
    "interview practice",
    "job preparation",
    "career coaching",
  ],
  authors: [{ name: "Webb Team" }],
  creator: "Webb",
  publisher: "Webb",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webb.ai",
    title: "Webb - AI Interview Practice",
    description:
      "Practice interviews with AI voice coaching. Get instant feedback and improve your interview skills.",
    siteName: "Webb",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webb - AI Interview Practice",
    description: "Practice interviews with AI voice coaching",
    creator: "@webb",
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
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
