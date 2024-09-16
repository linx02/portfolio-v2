// layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script"; // Import Script component

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linus Elvius - Software Developer in Sweden",
  description:
    "Hi, I'm Linus Elvius, a software developer in Sweden. I specialize in full-stack development with technologies like Next.js, React, and Python.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Schema Markup for SEO */}
        <Script
          id="person-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Linus Elvius",
            "url": "https://www.linuselvius.com/",
            "image": "https://www.linuselvius.com/images/profile-real.png",
            "sameAs": [
              "https://www.linkedin.com/in/linus-elvius-52b098266",
              "https://github.com/linx02",
            ],
            "jobTitle": "Software Developer",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Stockholm",
              "addressCountry": "Sweden",
            },
          })}
        </Script>
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://www.linuselvius.com/",
            "name": "Linus Elvius - Software Developer in Sweden",
          })}
        </Script>
        {/* Optional: hreflang links for multilingual support */}
        <link rel="alternate" href="https://www.linuselvius.com/" hrefLang="en" />
        <link
          rel="alternate"
          href="https://www.linuselvius.com/sv"
          hrefLang="sv"
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}