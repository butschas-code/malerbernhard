import { reviews, aggregateRating } from "@/lib/reviews";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.malerbernhard.ch/#business",
    name: "Malergeschäft Bernhard AG",
    url: "https://www.malerbernhard.ch",
    telephone: "+41448332251",
    email: "info@malerbernhard.ch",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Säntisstrasse 30",
      addressLocality: "Dietlikon",
      postalCode: "8305",
      addressCountry: "CH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.4283,
      longitude: 8.6176,
    },
    image: "https://www.malerbernhard.ch/domains/devmalerbernhard_ch/data/free_docs/logo/logo.png",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/109805820406631/",
      "https://instagram.com/malerbernhard",
      "https://www.youtube.com/@malerbernhard",
    ],
    foundingDate: "1911",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 12,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.author,
      },
      datePublished: r.date,
      reviewBody: r.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
        worstRating: 1,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://www.malerbernhard.ch${item.href}`,
    })),
  };
}
