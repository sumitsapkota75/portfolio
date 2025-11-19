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
    <section className="py-14 md:py-20">
      <motion.div
        className="mx-auto max-w-4xl px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {eyebrow && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300/70">
            {eyebrow}
          </p>
        )}
        <h2 className="mb-8 text-3xl md:text-4xl font-semibold tracking-tight text-neutral-50">
          {title}
        </h2>
        {children}
      </motion.div>
    </section>
  );
}
