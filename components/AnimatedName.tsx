"use client"
import React from "react"

export default function AnimatedName({ name = "OLUWAFEMI JACOB" }: { name?: string }) {
  return (
    <p
      className="text-2xl md:text-3xl font-semibold text-primary animate-slide-up stagger-1 name-animated"
      aria-label={name}
    >
      {name.split("").map((ch, i) => (
        <span
          key={i}
          className="inline-block name-letter"
          style={{ animationDelay: `${i * 0.06}s` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}

      <style>{`
        /* Import Google font for the name */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap');

        :root { --name-font: 'Poppins', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; }

        .name-animated {
          font-family: var(--name-font);
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .name-letter {
          display: inline-block;
          opacity: 0;
          transform: translateY(8px);
          animation: letterPulse 2.6s cubic-bezier(.2,.9,.3,1) infinite;
          will-change: transform, opacity;
        }

        @keyframes letterPulse {
          0%   { opacity: 0; transform: translateY(8px); }
          10%  { opacity: 1; transform: translateY(0); }
          60%  { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-6px); }
        }
      `}</style>
    </p>
  )
}