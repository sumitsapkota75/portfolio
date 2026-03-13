// components/Projects.tsx
import SectionContainer from "./SectionContainer";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <SectionContainer title="Selected Work" eyebrow="Case Studies">
      <div className="space-y-5">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-[1.75rem] border border-[var(--border-soft)] bg-[var(--bg-panel)] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
          >
            <div className="grid gap-6 lg:grid-cols-[0.8fr,1.2fr]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]/80">
                  {project.role}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
                  {project.name}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--border-soft)] bg-[var(--bg-panel-strong)] px-3 py-1 text-[11px] text-[var(--text-secondary)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    Problem
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    Solution
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                    {project.solution}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    Impact
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                    {project.impact}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    Ownership
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                    {project.ownership}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
