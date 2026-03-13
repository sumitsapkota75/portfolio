// components/Hero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { hero, profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <div className="relative overflow-hidden border-b border-[var(--border-soft)] bg-[linear-gradient(180deg,#0a1220_0%,#0b1524_55%,#0d1828_100%)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(77,197,167,0.08),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(77,197,167,0.05),transparent_20%)]" />
      <motion.div
        className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-[minmax(0,1fr),190px] md:items-start md:py-24 lg:grid-cols-[minmax(0,1fr),210px]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="relative md:pr-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]/80 md:text-sm">
            {hero.eyebrow}
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[var(--text-primary)] md:text-6xl md:leading-[1.05]">
            {hero.headline}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
            {hero.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={hero.primaryCta.href}
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[#08111f] transition hover:bg-[#68d2bb]"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="rounded-full border border-[var(--border-soft)] bg-[var(--bg-panel)] px-6 py-3 text-sm font-medium text-[var(--text-primary)] transition hover:border-[var(--border-strong)] hover:bg-[var(--bg-elevated)]"
            >
              {hero.secondaryCta.label}
            </Link>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
            >
              Resume
            </a>
          </div>
        </motion.div>

        <div className="hidden md:flex md:justify-end">
          <motion.div
            className="mt-2 w-[180px] lg:w-[200px]"
            initial={{ opacity: 0, scale: 0.92, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--bg-panel)] p-3 shadow-[0_18px_40px_rgba(0,0,0,0.22)]">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.15rem] border border-[var(--border-soft)] bg-[var(--bg-panel-strong)]">
                <Image
                  src="/sumit.jpg"
                  alt={profile.name}
                  fill
                  priority
                  sizes="200px"
                  className="object-cover object-center"
                />
              </div>
              <div className="px-1 pb-1 pt-3">
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  {profile.name}
                </p>
                <p className="mt-1 text-[12px] text-[var(--text-muted)]">
                  {profile.title}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-2">
          <div className="mt-2 grid gap-3 lg:grid-cols-3">
            {hero.highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--bg-panel)] px-5 py-4 shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]/75">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-medium leading-6 text-[var(--text-primary)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.75rem] border border-[var(--border-soft)] bg-[var(--bg-panel-strong)] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]/80">
              Core Technologies
            </p>
            <ul className="mt-4 grid gap-3 text-sm text-[var(--text-secondary)] md:grid-cols-3">
              {hero.trustPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--accent)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
