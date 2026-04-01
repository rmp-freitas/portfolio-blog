import type { Metadata } from "next";

const siteUrl = "https://rodri.dev";
const siteName = "Rodri Dev Portfolio";
const title = "Personal site and blog";
const description = "Personal site and blog with focus on performance, SEO and technical posts in MDX.";

export const siteConfig = {
  title,
  description,
  siteUrl,
  siteName
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${siteName}`
  },
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  }
};
