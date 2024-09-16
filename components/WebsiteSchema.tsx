// components/WebSiteSchema.tsx
import Head from 'next/head';

export default function WebSiteSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://linuselvius.com/",
    "name": "Linus Elvius - Software Developer in Sweden"
    // Add potentialAction if you have a search feature
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Head>
  );
}