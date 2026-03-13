// components/ContactForm.tsx
"use client";

import { FormEvent, useState } from "react";
import SectionContainer from "./SectionContainer";
import { profile } from "@/data/portfolio";

type Status = "idle" | "loading" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Failed to send message");
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <SectionContainer title="Contact" eyebrow="Availability">
      <div className="grid gap-7 lg:grid-cols-[0.9fr,1.1fr]">
        <div className="space-y-6 rounded-[1.75rem] border border-[var(--border-soft)] bg-[var(--bg-panel)] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]/80">
              Current Positioning
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
              Senior full-stack engineer with backend depth.
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
              Open to senior backend and senior full-stack opportunities where architecture, platform reliability, API quality, and cloud-native delivery matter.
            </p>
          </div>

          <div className="grid gap-4 text-sm text-[var(--text-secondary)]">
            <div>
              <p className="font-semibold text-[var(--text-primary)]">Email</p>
              <a href={`mailto:${profile.email}`} className="mt-1 inline-block text-[var(--accent)] hover:text-[#68d2bb]">
                {profile.email}
              </a>
            </div>
            <div>
              <p className="font-semibold text-[var(--text-primary)]">Phone</p>
              <a href="tel:+19723384953" className="mt-1 inline-block text-[var(--accent)] hover:text-[#68d2bb]">
                {profile.phone}
              </a>
            </div>
            <div>
              <p className="font-semibold text-[var(--text-primary)]">Location</p>
              <p className="mt-1">{profile.location}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={profile.resume}
              className="inline-flex items-center rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[#08111f] transition hover:bg-[#68d2bb]"
            >
              Resume
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-[var(--border-soft)] bg-[var(--bg-panel-strong)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] transition hover:border-[var(--border-strong)]"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-[var(--border-soft)] bg-[var(--bg-panel-strong)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] transition hover:border-[var(--border-strong)]"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-[1.75rem] border border-[var(--border-soft)] bg-[var(--bg-panel)] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]/80">
              Reach Out
            </p>
            <h3 className="mt-3 text-xl font-semibold text-[var(--text-primary)]">
              Start a conversation
            </h3>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-neutral-100">
              Name
            </label>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-[var(--border-soft)] bg-[var(--bg-panel-strong)] px-3 py-2 text-xs text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-neutral-100">
              Email
            </label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-[var(--border-soft)] bg-[var(--bg-panel-strong)] px-3 py-2 text-xs text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-neutral-100">
              Message
            </label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-md border border-[var(--border-soft)] bg-[var(--bg-panel-strong)] px-3 py-2 text-xs text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
              placeholder="Tell me about the role, project or idea..."
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center rounded-full bg-[var(--accent)] px-5 py-2 text-xs font-semibold text-slate-950 transition hover:bg-[#67d4b7] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading"
              ? "Sending..."
              : status === "sent"
              ? "Message sent ✔"
              : "Send message"}
          </button>
          {status === "sent" && (
            <p className="mt-1 text-[11px] text-emerald-300">
              Thanks for reaching out! I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && error && (
            <p className="mt-1 text-[11px] text-red-400">{error}</p>
          )}
        </form>
      </div>
    </SectionContainer>
  );
}
