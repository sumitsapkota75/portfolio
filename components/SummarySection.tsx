import SectionContainer from "./SectionContainer";
import { summary } from "@/data/portfolio";

export default function SummarySection() {
  return (
    <SectionContainer title={summary.title} eyebrow="About">
      <div className="rounded-[1.75rem] border border-[var(--border-soft)] bg-[var(--bg-panel)] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
        <p className="max-w-5xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
          {summary.intro}
        </p>
      </div>
    </SectionContainer>
  );
}
