export interface Review {
  author: string;
  rating: number;
  date: string; // ISO date string
  text: string;
}

/**
 * Google reviews for Malergeschäft Bernhard AG.
 * Source: Google Maps reviews (imported manually).
 * Add/replace with real reviews exported from Google My Business.
 */
export const reviews: Review[] = [
  // TODO: Replace with real Google reviews from Google My Business dashboard.
  // Example structure (remove these placeholders and add real ones):
  {
    author: "Max Muster",
    rating: 5,
    date: "2024-03-15",
    text: "Hervorragende Arbeit! Das Team war professionell, pünktlich und das Ergebnis hat all unsere Erwartungen übertroffen. Sehr empfehlenswert.",
  },
];

export const aggregateRating = {
  ratingValue: 4.9,
  reviewCount: reviews.length,
};
