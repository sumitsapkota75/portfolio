// components/GithubSection.tsx
import SectionContainer from "./SectionContainer";

const GITHUB_USERNAME = "sumitsapkota75";

export default function GithubSection() {
  return (
    <SectionContainer title="GitHub Activity" eyebrow="Building in public">
      <div className="grid gap-6 md:grid-cols-[1.6fr,1fr] items-start">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4">
          <p className="mb-3 text-xs text-neutral-400">
            A quick look at my recent contribution activity.
          </p>
          <div className="w-full overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-950">
            <img
              src={`https://ghchart.rshah.org/${GITHUB_USERNAME}`}
              alt={`GitHub contributions for ${GITHUB_USERNAME}`}
              className="w-full"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4 text-base text-neutral-300 space-y-3">
          <p>
            I mainly work on backend services, microservice templates, and
            full-stack experiments. You&apos;ll see a lot of Golang, Python,
            TypeScript and React in my repos.
          </p>
          <p>
            I enjoy designing APIs, optimizing performance and integrating
            modern tooling and AI/LLM capabilities into existing systems.
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
