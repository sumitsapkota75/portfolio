import SectionContainer from "./SectionContainer";
import { engineeringFocus } from "@/data/portfolio";

export default function EngineeringFocus() {
  return (
    <SectionContainer title="Engineering Focus" eyebrow="How I Think">
      <div className="grid gap-4 md:grid-cols-2">
        {engineeringFocus.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--bg-panel)] p-6"
          >
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
