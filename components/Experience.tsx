// components/Experience.tsx
import SectionContainer from "./SectionContainer";

const experiences = [
  {
    company: "Scala Inc. — Ready To Work Team",
    role: "Software Engineer",
    location: "Remote · Japan-based",
    period: "Jan 2021 – Dec 2023",
    bullets: [
      "Collaborated on roadmaps and architecture, designing production systems with Golang, React, and Node.js.",
      "Built and maintained GCP infrastructure, improving deployment speed and reliability using IaC.",
      "Developed scalable backend services and REST APIs using modular microservices patterns.",
      "Delivered Dockerized services with testing and dependency injection to reduce server costs and maintenance overhead.",
      "Created interactive dashboards with React and Next.js to expose system metrics and analytics.",
      "Automated CI/CD pipelines with CircleCI and GitHub Actions, shortening release cycles significantly.",
      "Implemented Elasticsearch-powered search for faster, more flexible querying.",
    ],
  },
  {
    company: "Uptechsys Pvt. Ltd.",
    role: "Full Stack Developer",
    location: "Kathmandu, Nepal",
    period: "Jun 2019 – Dec 2020",
    bullets: [
      "Built web applications for 5,000+ monthly users with React, Redux and Tailwind.",
      "Designed and implemented APIs with Django REST Framework using clean MVT architecture.",
      "Improved performance with optimized queries, pagination, and strict validation.",
      "Migrated legacy systems to modern cloud-ready stacks in Python and Node.js.",
      "Integrated secure Stripe payment flows into React-based e-commerce experiences.",
    ],
  },
];

export default function Experience() {
  return (
    <SectionContainer title="Experience" eyebrow="Where I've worked">
      <div className="space-y-6">
        {experiences.map((exp) => (
          <article
            key={exp.company}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-5 transition hover:-translate-y-0.5 hover:border-emerald-500/40"
          >
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-sm font-semibold text-neutral-50">
                  {exp.role}
                </h3>
                <p className="text-base text-neutral-400">{exp.company}</p>
              </div>
              <div className="text-right text-[11px] text-neutral-400">
                <p>{exp.period}</p>
                <p>{exp.location}</p>
              </div>
            </div>
            <ul className="space-y-1.5 text-sm text-neutral-300">
              {exp.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
