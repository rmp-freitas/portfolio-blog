import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { baseMetadata } from "@/lib/seo";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT" suppressHydrationWarning>
      <body>
        <Header />
        <main className="mx-auto min-h-[calc(100vh-130px)] w-full max-w-6xl px-5 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
