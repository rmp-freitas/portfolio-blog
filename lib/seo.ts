import type { Metadata } from "next";

const siteUrl = "https://example.com";
const siteName = "Rodri Dev Portfolio";
const title = "Portfólio Pessoal e Blog Técnico";
const description = "Portfólio com projetos, experiências e artigos técnicos sobre desenvolvimento web.";

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
    locale: "pt_PT"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  }
};
