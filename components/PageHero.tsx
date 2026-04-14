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
    <section className="relative pt-[68px] overflow-hidden bg-[var(--brand)]">
      {/* Background image */}
      {image && (
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={imageAlt || ""} className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand)] via-[var(--brand)]/80 to-transparent" />
        </div>
      )}

      <div className="relative container py-16 md:py-20">
        {label && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-bold tracking-[0.16em] uppercase text-white/60 mb-4"
          >
            {label}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-white max-w-2xl"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 text-white/75 text-[17px] max-w-xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Red accent line at bottom */}
      <div className="h-1 bg-[var(--brand-red)]" />
    </section>
  );
}
