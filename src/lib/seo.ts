import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { getSiteUrl } from "@/lib/site-url";

export function createMetadata(): Metadata {
  const siteUrl = getSiteUrl();
  const ogImageUrl = `${siteUrl}${siteConfig.ogImage}`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.name, url: siteUrl }],
    creator: siteConfig.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteUrl,
      siteName: siteConfig.name,
      title: siteConfig.title,
      description: siteConfig.description,
      images: [
        {
          url: ogImageUrl,
          width: siteConfig.ogImageWidth,
          height: siteConfig.ogImageHeight,
          alt: siteConfig.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
      images: [ogImageUrl],
    },
    category: "portfolio",
  };
}
