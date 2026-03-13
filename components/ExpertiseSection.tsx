import SectionContainer from "./SectionContainer";
import { expertise } from "@/data/portfolio";

export default function ExpertiseSection() {
  return (
    <SectionContainer title="Core Expertise" eyebrow="How I Deliver">
      <div className="grid gap-5 md:grid-cols-2">
        {expertise.map((area) => (
          <article
            key={area.title}
            className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--bg-panel)] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
          >
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
              {area.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
              {area.description}
            </p>
            <ul className="mt-5 space-y-3 text-sm text-[var(--text-secondary)]">
              {area.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--accent)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
