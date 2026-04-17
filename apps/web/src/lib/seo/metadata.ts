import { Metadata } from "next";

/**
 * SEO metadata factory for Ruby Hospital Kampala
 */

export const siteMetadata = {
  title: "Ruby Hospital Kampala | Trusted Healthcare",
  description:
    "Find doctors, explore specialties, and book appointments with confidence at Ruby Hospital Kampala. Premium healthcare experience in Kampala.",
  url: "https://rubyhospital.ug",
  image: "https://rubyhospital.ug/og-image.jpg",
  twitterHandle: "@rubyhospital",
};

export function generateBaseMetadata(): Metadata {
  return {
    title: siteMetadata.title,
    description: siteMetadata.description,
    keywords: [
      "hospital",
      "healthcare",
      "doctors",
      "appointments",
      "Kampala",
      "Uganda",
      "medical",
    ],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteMetadata.url,
      siteName: "Ruby Hospital Kampala",
      title: siteMetadata.title,
      description: siteMetadata.description,
      images: [
        {
          url: siteMetadata.image,
          width: 1200,
          height: 630,
          alt: "Ruby Hospital Kampala",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      creator: siteMetadata.twitterHandle,
      title: siteMetadata.title,
      description: siteMetadata.description,
      images: [siteMetadata.image],
    },
  };
}

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = ""
): Metadata {
  const pageUrl = path ? `${siteMetadata.url}${path}` : siteMetadata.url;

  return {
    title: `${title} | Ruby Hospital Kampala`,
    description,
    openGraph: {
      title: `${title} | Ruby Hospital Kampala`,
      description,
      url: pageUrl,
      type: "website",
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}
