import "./global.css";

import type { Metadata } from "next";
import { Navbar } from "@/components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseUrl } from "./sitemap";
import { ThemeProvider } from "@/components/theme-provider";

import { cn } from "@/lib/utils";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Head from "next/head";

const serif = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Metro Cluster Tembalang",
    template: "%s | Metro Cluster Tembalang",
  },
  description:
    "Temukan Hunian Impian Anda di Metro Cluster Tembalang – Nyaman, Strategis, dan Terjangkau.",
  openGraph: {
    title: "Metro Cluster Tembalang",
    description:
      "Temukan Hunian Impian Anda di Metro Cluster Tembalang – Nyaman, Strategis, dan Terjangkau.",
    url: baseUrl,
    siteName: "Metro Cluster Tembalang",
    locale: "en_US",
    type: "website",
    images: "/logo.png",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "text-black bg-white dark:text-white dark:bg-black font-sans",
        serif.variable,
      )}
      suppressHydrationWarning
    >
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@1,2&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased lg:mx-auto">
        <main className="flex-auto min-w-0 flex flex-col px-2 md:px-0">
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
