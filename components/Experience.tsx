// components/Experience.tsx
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionContainer from "./SectionContainer";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  const [expandedCompanies, setExpandedCompanies] = useState<string[]>([]);

  const toggleExpanded = (company: string) => {
    setExpandedCompanies((current) =>
      current.includes(company)
        ? current.filter((item) => item !== company)
        : [...current, company]
    );
  };

  return (
    <SectionContainer title="Experience Timeline" eyebrow="Career">
      <div className="space-y-6">
        {experiences.map((exp) => {
          const isExpanded = expandedCompanies.includes(exp.company);
          const previewCount = Math.ceil(exp.bullets.length / 2);
          const previewBullets = exp.bullets.slice(0, previewCount);
          const extraBullets = exp.bullets.slice(previewCount);

          return (
            <motion.article
              key={exp.company}
              layout
              className="rounded-[1.75rem] border border-[var(--border-soft)] bg-[var(--bg-panel)] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition hover:border-[var(--border-strong)]"
            >
              <div className="grid gap-5 lg:grid-cols-[0.8fr,1.2fr]">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]/80">
                    {exp.period}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-base text-[var(--text-secondary)]">
                    {exp.company}
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    {exp.location}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-[var(--border-soft)] bg-[var(--bg-panel-strong)] px-3 py-1 text-[11px] text-[var(--text-secondary)]"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-4 text-sm leading-7 text-[var(--text-secondary)]">
                    {exp.summary}
                  </p>

                  <ul className="space-y-1.5 text-sm text-[var(--text-secondary)]">
                    {previewBullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--accent)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}

                    <AnimatePresence initial={false}>
                      {isExpanded &&
                        extraBullets.map((bullet, index) => (
                          <motion.li
                            key={bullet}
                            layout
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{
                              duration: 0.22,
                              ease: "easeOut",
                              delay: index * 0.025,
                            }}
                            className="flex gap-3"
                          >
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--accent)]" />
                            <span>{bullet}</span>
                          </motion.li>
                        ))}
                    </AnimatePresence>
                  </ul>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    {extraBullets.length > 0 && !isExpanded && (
                      <button
                        type="button"
                        onClick={() => toggleExpanded(exp.company)}
                        className="inline-flex items-center rounded-full border border-[var(--border-strong)] bg-[var(--bg-panel-strong)] px-4 py-2 text-xs font-semibold text-[var(--text-primary)] transition hover:bg-[var(--bg-elevated)]"
                      >
                        Show {extraBullets.length} more details
                      </button>
                    )}

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.button
                          type="button"
                          onClick={() => toggleExpanded(exp.company)}
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="inline-flex items-center text-xs font-medium text-[var(--accent)] transition hover:text-[#67d4b7]"
                        >
                          Show less
                        </motion.button>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </SectionContainer>
  );
}
