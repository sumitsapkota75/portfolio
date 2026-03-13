// components/Skills.tsx
"use client";

import SectionContainer from "./SectionContainer";
import { motion } from "framer-motion";
import { stackGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <SectionContainer title="Tech Stack" eyebrow="Tools and Platforms">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stackGroups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.04 }}
            className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--bg-panel)] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]/80">
              {group.title}
            </p>
            <ul className="mt-5 space-y-3 text-sm text-[var(--text-secondary)]">
              {group.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </SectionContainer>
  );
}
