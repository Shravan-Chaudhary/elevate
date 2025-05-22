import "@/app/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/footer";
import "@fontsource-variable/inter";
import React from "react";

export const metadata = {
  title: "Elevate - AI Interview Practice",
  description:
    "Elevate: Your AI platform for interview practice. Improve your skills and boost your confidence with AI coaching.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
