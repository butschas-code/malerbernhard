import rawData from "./google-reviews.json";

export interface OwnerResponse {
  text: string;
  truncated: boolean;
}

export interface Review {
  name: string;
  stars: number;
  date: string; // relative string (Google) or German, e.g. "vor 2 Monaten"
  text: string;
  truncated: boolean;
  ownerResponse: OwnerResponse | null;
}

export const reviews: Review[] = rawData.reviews.map((r) => ({
  name: r.name,
  stars: r.stars,
  date: r.date,
  text: r.text,
  truncated: r.truncated,
  ownerResponse: r.ownerResponse
    ? { text: r.ownerResponse.text, truncated: r.ownerResponse.truncated }
    : null,
}));

export const aggregateRating = {
  ratingValue: rawData.rating,
  reviewCount: rawData.totalRatings,
  textReviews: rawData.textReviews,
};

/**
 * Normalizes review timestamps to German for display.
 * Handles English Google strings ("2 months ago") and German ("vor 2 Monaten"),
 * ISO dates, and capitalizes the first letter (e.g. "Vor 2 Monaten").
 */
export function formatReviewDateGerman(date: string): string {
  const raw = date.trim();
  if (!raw) return "";

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  // Already German relative time
  if (/^vor\s+/i.test(raw)) {
    return capitalize(raw);
  }

  const lower = raw.toLowerCase();

  if (lower === "today" || lower === "heute") return "Heute";
  if (lower === "yesterday" || lower === "gestern") return "Gestern";

  let m = raw.match(/^(\d+)\s+days?\s+ago$/i);
  if (m) {
    const n = parseInt(m[1], 10);
    return n === 1 ? "Vor einem Tag" : `Vor ${n} Tagen`;
  }

  m = raw.match(/^(\d+)\s+weeks?\s+ago$/i);
  if (m) {
    const n = parseInt(m[1], 10);
    return n === 1 ? "Vor einer Woche" : `Vor ${n} Wochen`;
  }

  m = raw.match(/^(\d+)\s+months?\s+ago$/i);
  if (m) {
    const n = parseInt(m[1], 10);
    return n === 1 ? "Vor einem Monat" : `Vor ${n} Monaten`;
  }

  m = raw.match(/^(\d+)\s+years?\s+ago$/i);
  if (m) {
    const n = parseInt(m[1], 10);
    return n === 1 ? "Vor einem Jahr" : `Vor ${n} Jahren`;
  }

  if (/^a\s+year\s+ago$/i.test(raw)) return "Vor einem Jahr";

  // ISO date
  if (/^\d{4}-\d{2}-\d{2}/.test(raw)) {
    const d = new Date(raw);
    if (!Number.isNaN(d.getTime())) {
      return d.toLocaleDateString("de-CH", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
  }

  return capitalize(raw);
}

/** Schema.org JSON-LD aggregate rating (used by SEO module) */
export { aggregateRating as default };
