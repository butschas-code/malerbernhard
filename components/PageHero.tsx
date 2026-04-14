"use client";

import { motion } from "framer-motion";

interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
}

export default function PageHero({ label, title, subtitle, image, imageAlt }: Props) {
  return (
    <section className="relative pt-[68px] overflow-hidden bg-[var(--brand)] shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]">
      {/* Background image */}
      {image && (
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={imageAlt || ""} className="w-full h-full object-cover opacity-25" />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, var(--brand), color-mix(in srgb, var(--brand-tertiary) 32%, var(--brand)) 52%, transparent)`,
            }}
          />
        </div>
      )}

      <div className="relative container py-16 md:py-20">
        {label && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-bold tracking-[0.16em] uppercase text-white/70 mb-3"
          >
            {label}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-white max-w-2xl drop-shadow-[0_2px_24px_rgba(0,0,0,0.2)]"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.02em" }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 text-[17px] max-w-xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.88)" }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Brand accent strip — same weight as home */}
      <div
        className="h-1.5 shrink-0"
        style={{
          background: "linear-gradient(90deg, var(--brand-red) 0%, var(--brand-secondary) 50%, var(--brand-tertiary) 100%)",
        }}
      />
    </section>
  );
}
