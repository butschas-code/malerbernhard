import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { reviews, aggregateRating } from "@/lib/reviews";
import { localBusinessJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Bewertungen",
  description:
    "Google-Bewertungen für Malergeschäft Bernhard AG. Lesen Sie, was unsere Kunden über unsere Malerarbeiten sagen.",
};

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 1l2.63 5.33 5.87.86-4.25 4.14 1 5.84L10 14.27l-5.25 2.9 1-5.84L1.5 7.19l5.87-.86z"
            fill={i < rating ? "#F5A623" : "var(--line)"}
            stroke={i < rating ? "#E8950E" : "var(--line)"}
            strokeWidth="0.5"
          />
        </svg>
      ))}
    </div>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("de-CH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BewertungenPage() {
  const jsonLd = localBusinessJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        label="Kundenstimmen"
        title="Bewertungen"
        subtitle="Was unsere Kunden über unsere Arbeit sagen. Alle Bewertungen stammen von Google."
      />

      {/* Aggregate */}
      <section className="section bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-14">
              {/* Big rating */}
              <div className="text-center min-w-[120px]">
                <p style={{ fontSize: "4rem", fontWeight: 800, lineHeight: 1, color: "var(--brand)" }}>
                  {aggregateRating.ratingValue.toFixed(1)}
                </p>
                <StarRating rating={Math.round(aggregateRating.ratingValue)} />
                <p style={{ fontSize: "13px", color: "var(--muted)", marginTop: "0.5rem" }}>
                  {aggregateRating.reviewCount} {aggregateRating.reviewCount === 1 ? "Bewertung" : "Bewertungen"}
                </p>
              </div>

              <div style={{ height: "80px", width: "1px", background: "var(--line)" }} className="hidden sm:block" />

              <div>
                <h2 className="mb-2">Google-Bewertungen</h2>
                <p style={{ fontSize: "16px", color: "var(--muted)", maxWidth: "36rem", lineHeight: 1.65 }}>
                  Die Bewertungen stammen direkt von Google. Alle Kundenstimmen
                  sind authentisch und werden nicht verändert oder gefiltert.
                </p>
                <a
                  href="https://www.google.com/maps/search/Malergesch%C3%A4ft+Bernhard+AG+Dietlikon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4"
                  style={{ fontSize: "14px", fontWeight: 600, color: "var(--brand)" }}
                >
                  Auf Google bewerten
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </AnimatedSection>

          {reviews.length === 0 ? (
            <AnimatedSection>
              <div className="text-center py-16 rounded" style={{ background: "var(--paper)" }}>
                <p style={{ fontSize: "17px", color: "var(--muted)" }}>
                  Noch keine Bewertungen eingetragen. Bitte importieren Sie Ihre
                  Google-Bewertungen in <code>/lib/reviews.ts</code>.
                </p>
              </div>
            </AnimatedSection>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {reviews.map((review, i) => (
                <AnimatedSection key={i} delay={i * 0.07}>
                  <article
                    className="bg-[var(--paper)] rounded p-6 h-full flex flex-col border border-[var(--line)]"
                    itemScope
                    itemType="https://schema.org/Review"
                  >
                    {/* Stars */}
                    <div className="flex items-center justify-between mb-4">
                      <StarRating rating={review.rating} />
                      <time
                        dateTime={review.date}
                        itemProp="datePublished"
                        style={{ fontSize: "12.5px", color: "var(--muted)" }}
                      >
                        {formatDate(review.date)}
                      </time>
                    </div>

                    {/* Text */}
                    <blockquote
                      itemProp="reviewBody"
                      className="flex-1"
                      style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--ink)", opacity: 0.85 }}
                    >
                      &ldquo;{review.text}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="mt-4 pt-4 flex items-center gap-3"
                      style={{ borderTop: "1px solid var(--line)" }}>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs"
                        style={{ background: "var(--brand)", color: "white" }}>
                        {review.author.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p itemProp="author" style={{ fontSize: "14px", fontWeight: 700 }}>
                          {review.author}
                        </p>
                        <div className="flex items-center gap-1.5">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#4285F4" />
                          </svg>
                          <span style={{ fontSize: "11.5px", color: "var(--muted)" }}>Google</span>
                        </div>
                      </div>
                    </div>

                    {/* Hidden schema.org data */}
                    <div style={{ display: "none" }} itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                      <meta itemProp="ratingValue" content={String(review.rating)} />
                      <meta itemProp="bestRating" content="5" />
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "var(--paper-dark)" }}>
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="mb-4">Überzeugt?</h2>
            <p style={{ fontSize: "17px", color: "var(--muted)", marginBottom: "2rem" }}>
              Fordern Sie jetzt Ihr persönliches Angebot an.
            </p>
            <a href="/kontakt/anfrage" className="btn btn-primary">
              Offerte anfragen
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
