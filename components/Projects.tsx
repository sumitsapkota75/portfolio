// components/Projects.tsx
import SectionContainer from "./SectionContainer";

const projects = [
  {
    name: "Go-Gin Skeleton",
    tagline: "Production-ready Go backend starter",
    description:
      "An opinionated skeleton using Gin to standardize auth, validation, logging and service structure so teams can ship Go microservices faster.",
    tech: ["Golang", "Gin", "PostgreSQL", "JWT", "Docker"],
    link: "https://github.com/readytowork-org/go-gin-skeleton",
  },
  {
    name: "DigiSign",
    tagline: "Digital document signing platform",
    description:
      "A multi-tenant document signing platform where multiple users can sign in a specific sequence defined by the document owner.",
    tech: ["React", "Golang / Node.js", "Microservices", "Stripe"],
    link: "",
  },
  {
    name: "BeHealth",
    tagline: "Healthcare platform for elderly care",
    description:
      "Platform supporting government-backed free healthcare for elderly citizens, including patient profiles, visits and reporting.",
    tech: ["React", "Django REST", "PostgreSQL", "GCP"],
    link: "",
  },
  {
    name: "HrTech",
    tagline: "Employee lifecycle automation",
    description:
      "HR platform to automate onboarding, attendance, payroll and HR analytics across the employee lifecycle.",
    tech: ["React", "Django REST", "PostgreSQL"],
    link: "",
  },
];

export default function Projects() {
  return (
    <SectionContainer title="Projects" eyebrow="What I've built">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900/70 p-5 shadow-sm shadow-black/70 transition hover:-translate-y-0.5 hover:border-emerald-500/40"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold text-neutral-50 group-hover:text-emerald-300/90">
                  {project.name}
                </h3>
                <p className="text-xs text-neutral-400">{project.tagline}</p>
              </div>
            </div>
            <p className="mb-4 text-xs text-neutral-300">
              {project.description}
            </p>
            <div className="mb-3 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-neutral-700 bg-neutral-950 px-2 py-0.5 text-[10px] text-neutral-300"
                >
                  {t}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-auto text-[11px] text-emerald-300/90 hover:text-emerald-200"
              >
                View project →
              </a>
            )}
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
