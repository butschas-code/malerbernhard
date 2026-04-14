import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { localBusinessJsonLd } from "@/lib/seo/jsonld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.malerbernhard.ch"),
  title: {
    default: "Malergeschäft Bernhard AG – Der Maler in Ihrer Nähe | Dietlikon",
    template: "%s | Malergeschäft Bernhard AG",
  },
  description:
    "Ihr Maler im Glatttal seit 1911. Innen- und Aussenarbeiten, Raumgestaltung, Fassaden, Schimmelpilzsanierung und Spezialarbeiten. Familienbetrieb in 4. Generation. Kostenloses Angebot.",
  keywords: [
    "Maler Dietlikon",
    "Malerarbeiten Glatttal",
    "Fassadenrenovation Zürich",
    "Raumgestaltung",
    "Schimmelpilzsanierung",
    "Malergeschäft Bernhard",
  ],
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: "Malergeschäft Bernhard AG",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = localBusinessJsonLd();

  return (
    <html lang="de" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Nav />
        <main className="flex-1 pt-[68px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
