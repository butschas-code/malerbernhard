import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/malerarbeiten/innenraum", destination: "/malerarbeiten#innenraum", permanent: true },
      {
        source: "/malerarbeiten/aussenraum-fassade",
        destination: "/malerarbeiten#aussenraum-fassade",
        permanent: true,
      },
      { source: "/malerarbeiten/raumgestaltung", destination: "/malerarbeiten#raumgestaltung", permanent: true },
      {
        source: "/malerarbeiten/historische-bauten",
        destination: "/malerarbeiten#historische-bauten",
        permanent: true,
      },
      { source: "/malerarbeiten/kt-color", destination: "/malerarbeiten#kt-color", permanent: true },
      {
        source: "/spezialarbeiten/schimmelpilzsanierung",
        destination: "/spezialarbeiten#schimmelpilzsanierung",
        permanent: true,
      },
      {
        source: "/spezialarbeiten/gesundes-wohnen",
        destination: "/spezialarbeiten#gesundes-wohnen",
        permanent: true,
      },
      { source: "/spezialarbeiten/naturofloor", destination: "/spezialarbeiten#naturofloor", permanent: true },
      { source: "/spezialarbeiten/spritzwerk", destination: "/spezialarbeiten#spritzwerk", permanent: true },
      { source: "/spezialarbeiten/niederdruck", destination: "/spezialarbeiten#niederdruck", permanent: true },
      { source: "/ueber-uns/philosophie", destination: "/ueber-uns", permanent: true },
      { source: "/ueber-uns/vier-generationen", destination: "/ueber-uns", permanent: true },
      { source: "/ueber-uns/kultur-sport", destination: "/ueber-uns", permanent: true },
      { source: "/ueber-uns/knowhow", destination: "/ueber-uns", permanent: true },
      { source: "/ueber-uns/top-ausbildungsbetrieb", destination: "/ueber-uns/ausbildungsbetrieb", permanent: true },
      { source: "/ueber-uns/leistungssport", destination: "/ueber-uns/ausbildungsbetrieb", permanent: true },
      { source: "/kontakt/anfrage", destination: "/kontakt", permanent: true },
      { source: "/kontakt/links", destination: "/kontakt", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.malerbernhard.ch",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
