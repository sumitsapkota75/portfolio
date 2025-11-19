// components/Skills.tsx
"use client";

import { useState } from "react";
import SectionContainer from "./SectionContainer";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Wrench,
  GitBranch,
  Users,
  Briefcase,
  Info,
} from "lucide-react";

type SkillLevel = "Core" | "Strong" | "Supporting";

type SkillGroup = {
  title: string;
  level: SkillLevel;
  tooltip: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Languages & Frameworks",
    level: "Core",
    tooltip: "Tech I use most often to build backend APIs and frontend apps.",
    icon: Code2,
    items: [
      "Python (Django, DRF)",
      "Golang (Gin)",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux",
    ],
  },
  {
    title: "Databases & Querying",
    level: "Strong",
    tooltip:
      "Relational and NoSQL databases I use for designing schemas and writing efficient queries.",
    icon: Database,
    items: [
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Firestore",
      "Microsoft SQL Server",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    level: "Strong",
    tooltip:
      "Cloud services and DevOps tools I use to deploy, scale, and monitor applications.",
    icon: Cloud,
    items: [
      "Google Cloud Platform (App Engine, Compute Engine, Cloud Functions, Pub/Sub)",
      "Docker",
      "Kubernetes (basic)",
      "CI/CD (CircleCI, GitHub Actions, Jenkins)",
      "Amazon Web Services (S3, Cognito, EC2, DocumentDB, RDS)",
    ],
  },
  {
    title: "Development Practices",
    level: "Core",
    tooltip:
      "Ways I structure code and teams to keep systems maintainable and resilient.",
    icon: Wrench,
    items: [
      "REST API Design",
      "MVC",
      "Microservices",
      "Agile / Scrum",
      "Test-Driven Development (TDD)",
    ],
  },
  {
    title: "Version Control & Tools",
    level: "Supporting",
    tooltip: "Tools I use every day to collaborate, debug, and ship features.",
    icon: GitBranch,
    items: [
      "Git",
      "GitHub",
      "Jira",
      "Confluence",
      "Postman",
      "Visual Studio Code",
    ],
  },
  {
    title: "Soft Skills",
    level: "Strong",
    tooltip:
      "How I communicate, lead, and improve processes when working with teams.",
    icon: Users,
    items: [
      "Analytical Problem Solving",
      "Communication",
      "Team Leadership & Mentorship",
      "Process Improvement",
      "Ownership",
    ],
  },
  
];

function levelConfig(level: SkillLevel) {
  switch (level) {
    case "Core":
      return { label: "Core Stack", barClass: "w-4/5 bg-emerald-400/80" };
    case "Strong":
      return { label: "Strong", barClass: "w-3/4 bg-emerald-300/80" };
    case "Supporting":
      return { label: "Supporting", barClass: "w-2/3 bg-emerald-200/80" };
  }
}

export default function Skills() {
  // For mobile accordion: store open indices
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <SectionContainer title="Technical Skills" eyebrow="What I work with">
      {/* Mobile: accordion */}
      <div className="space-y-3 md:hidden">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          const { label, barClass } = levelConfig(group.level);
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.03 }}
              className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/70 shadow-md shadow-black/50"
            >
              <button
                type="button"
                onClick={() => toggleIndex(index)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-emerald-300" />
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-semibold text-neutral-50">
                      {group.title}
                    </span>
                    <span className="mt-1 inline-flex items-center gap-2">
                      <span className="rounded-full border border-emerald-400/40 bg-neutral-950 px-2 py-[2px] text-[11px] text-emerald-200">
                        {label}
                      </span>
                    </span>
                  </div>
                </div>
                <span
                  className={`text-xs text-neutral-400 transition-transform ${
                    isOpen ? "rotate-90" : ""
                  }`}
                >
                  ›
                </span>
              </button>

              {/* Level bar */}
              <div className="px-4 pb-2">
                <div className="h-1.5 w-full rounded-full bg-neutral-800">
                  <div className={`h-1.5 rounded-full ${barClass}`} />
                </div>
              </div>

              {/* Content */}
              {isOpen && (
                <div className="border-t border-neutral-800 px-4 py-3 text-sm text-neutral-300">
                  <ul className="space-y-1.5 leading-relaxed">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Desktop: grid with tooltips */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-6">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          const { label, barClass } = levelConfig(group.level);

          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
              className="relative rounded-xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-md shadow-black/50 hover:border-emerald-400/50 transition"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Icon className="h-6 w-6 text-emerald-300" />
                  <div>
                    <h3 className="text-base font-semibold text-neutral-50">
                      {group.title}
                    </h3>
                    <div className="mt-1 inline-flex items-center gap-2">
                      <span className="rounded-full border border-emerald-400/40 bg-neutral-950 px-2 py-[3px] text-[11px] text-emerald-200">
                        {label}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tooltip icon */}
                <div className="relative group cursor-help">
                  <Info className="h-4 w-4 text-neutral-500 group-hover:text-emerald-300" />
                  <div className="pointer-events-none absolute right-0 top-6 z-20 max-w-xs rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-[11px] text-neutral-200 opacity-0 shadow-lg shadow-black/60 transition-opacity group-hover:opacity-100">
                    {group.tooltip}
                  </div>
                </div>
              </div>

              {/* Level bar */}
              <div className="mb-3">
                <div className="h-1.5 w-full rounded-full bg-neutral-800">
                  <div className={`h-1.5 rounded-full ${barClass}`} />
                </div>
              </div>

              <ul className="space-y-1.5 text-sm text-neutral-300 leading-relaxed">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
