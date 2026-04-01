import type { Metadata } from "next";
import { Fraunces, DM_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { baseMetadata } from "@/lib/seo";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT" suppressHydrationWarning className={`${fraunces.variable} ${dmMono.variable}`}>
      <head>
        {/* Prevent flash of un-themed content */}
        <script dangerouslySetInnerHTML={{
          __html:
            "(function(){var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var dark=s?s==='dark':d;document.documentElement.classList.toggle('dark',dark);})()",
        }} />
      </head>
      <body suppressHydrationWarning>
        <Header />
        <main className="mx-auto min-h-[calc(100vh-130px)] w-full max-w-6xl px-5 py-10 md:py-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
