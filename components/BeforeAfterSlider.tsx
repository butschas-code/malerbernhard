"use client";

import { useState, useRef, useCallback } from "react";

interface Props {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export default function BeforeAfterSlider({
  before,
  after,
  beforeAlt = "Vorher",
  afterAlt = "Nachher",
}: Props) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(95, Math.max(5, pct)));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded select-none cursor-col-resize"
      onMouseMove={(e) => dragging.current && updatePosition(e.clientX)}
      onMouseDown={(e) => { dragging.current = true; updatePosition(e.clientX); }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
      onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
    >
      {/* After image (full) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={after} alt={afterAlt} className="absolute inset-0 w-full h-full object-cover" draggable={false} />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={before}
          alt={beforeAlt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ minWidth: `${10000 / position}%` }}
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none"
        style={{ left: `${position}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center">
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
            <path d="M1 6h18M1 6L5 2M1 6L5 10M19 6L15 2M19 6L15 10" stroke="var(--brand)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 text-[11px] font-bold tracking-widest uppercase text-white bg-black/40 backdrop-blur-sm px-2 py-1 rounded pointer-events-none">
        Vorher
      </span>
      <span className="absolute top-3 right-3 text-[11px] font-bold tracking-widest uppercase text-white bg-[var(--brand-tertiary)]/85 backdrop-blur-sm px-2 py-1 rounded pointer-events-none">
        Nachher
      </span>
    </div>
  );
}
