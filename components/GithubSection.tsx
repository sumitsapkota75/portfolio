import Image from "next/image";
import SectionContainer from "./SectionContainer";

const GITHUB_USERNAME = "sumitsapkota75";

export default function GithubSection() {
  return (
    <SectionContainer title="GitHub Activity" eyebrow="Building in public">
      <div className="grid gap-6 md:grid-cols-[1.6fr,1fr] items-start">
        <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-panel)] p-4 shadow-sm shadow-black/30">
          <p className="mb-3 text-xs text-[var(--text-muted)]">
            A quick look at my recent contribution activity.
          </p>
          <div className="w-full overflow-x-auto rounded-lg border border-[var(--border-soft)] bg-[var(--bg-panel-strong)]">
            <Image
              src={`https://ghchart.rshah.org/${GITHUB_USERNAME}`}
              alt={`GitHub contributions for ${GITHUB_USERNAME}`}
              width={720}
              height={120}
              unoptimized
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="space-y-3 rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-panel)] p-4 text-base text-[var(--text-secondary)] shadow-sm shadow-black/30">
          <p>
            My GitHub reflects the way I work professionally: backend services,
            API-focused systems, reusable platform code, and full stack
            experiments built around Java, TypeScript, and cloud-native delivery.
          </p>
          <p>
            Most of my recent interests are Spring-based architectures,
            frontend integration patterns, and developer tooling that improves
            reliability, deployment speed, and code quality.
          </p>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-emerald-300/90 hover:text-emerald-200"
          >
            Visit my GitHub →
          </a>
        </div>
      </div>
    </SectionContainer>
  );
}
