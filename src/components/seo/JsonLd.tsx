import { siteConfig } from "@/data/site";
import { getSiteUrl } from "@/lib/site-url";

export function JsonLd() {
  const siteUrl = getSiteUrl();
  const imageUrl = `${siteUrl}${siteConfig.ogImage}`;
  const sameAs = siteConfig.socialLinks
    .map((link) => link.href)
    .filter((href) => href.startsWith("http"));

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,
        url: siteUrl,
        name: siteConfig.title,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#person` },
        inLanguage: "en-US",
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: siteConfig.name,
        url: siteUrl,
        email: siteConfig.email,
        jobTitle: siteConfig.jobTitle,
        description: siteConfig.description,
        image: imageUrl,
        sameAs,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
