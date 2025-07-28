import "./global.css";

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";

import { cn } from "@/lib/utils";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Head from "next/head";

const serif = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ??
      "https://www.nasaktiansolusibersama.co.id",
  ),
  title: {
    default: "PT Nasaktian Solusi Bersama",
    template: "%s | PT Nasaktian Solusi Bersama",
  },
  description: "Solusi Audio Visual Terintegrasi untuk Bisnis Modern Anda.",
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
        sans.variable,
      )}
      suppressHydrationWarning
    >
      <Head>
        <meta name="apple-mobile-web-app-title" content="PT NSB" />
      </Head>
      <body className="antialiased lg:mx-auto">
        <main className="flex-auto min-w-0 flex flex-col md:px-0">
          {/* <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          > */}
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          {/* </ThemeProvider> */}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
