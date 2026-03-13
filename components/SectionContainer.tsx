// components/SectionContainer.tsx
"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionContainerProps {
  title: string;
  eyebrow?: string;
  children: ReactNode;
}

export default function SectionContainer({
  title,
  eyebrow,
  children,
}: SectionContainerProps) {
  return (
    <section className="py-16 md:py-24">
      <motion.div
        className="mx-auto max-w-6xl px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {eyebrow && (
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]/80">
            {eyebrow}
          </p>
        )}
        <h2 className="mb-10 max-w-3xl text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-5xl md:leading-tight">
          {title}
        </h2>
        {children}
      </motion.div>
    </section>
  );
}
