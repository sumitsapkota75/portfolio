// components/ContactForm.tsx
"use client";

import { FormEvent, useState } from "react";
import SectionContainer from "./SectionContainer";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: integrate with API route / email service
    setStatus("sent");
  };

  return (
    <SectionContainer title="Contact & Resume" eyebrow="Let's talk">
      <div className="grid gap-7 md:grid-cols-[1.4fr,1fr]">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-neutral-800 bg-neutral-900/70 p-5"
        >
          <div>
            <label className="mb-1 block text-xs font-medium text-neutral-100">
              Name
            </label>
            <input
              required
              type="text"
              className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-xs text-neutral-100 placeholder:text-neutral-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
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
              className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-xs text-neutral-100 placeholder:text-neutral-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
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
              className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-xs text-neutral-100 placeholder:text-neutral-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="Tell me about the role, project or idea..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center rounded-full bg-emerald-500/90 px-5 py-2 text-xs font-semibold text-neutral-950 hover:bg-emerald-400 transition"
          >
            {status === "sent" ? "Message sent ✔" : "Send message"}
          </button>
          {status === "sent" && (
            <p className="text-[11px] text-emerald-300 mt-1">
              Thanks for reaching out! I&apos;ll get back to you soon.
            </p>
          )}
        </form>

        {/* Contact details & resume */}
        <div className="space-y-4 rounded-2xl border border-neutral-800 bg-neutral-900/70 p-5 text-xs text-neutral-300">
          <div>
            <h3 className="mb-2 text-sm font-semibold text-neutral-50">
              Direct contact
            </h3>
            <p>
              Email:{" "}
              <a
                href="mailto:ersumitsapkota@gmail.com"
                className="text-emerald-300/90 hover:text-emerald-200"
              >
                ersumitsapkota@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+19132955756"
                className="text-emerald-300/90 hover:text-emerald-200"
              >
                +1 (913) 295-5756
              </a>
            </p>
            <p>Overland Park, Kansas, USA</p>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold text-neutral-50">
              Resume
            </h3>
            <p className="mb-2">
              Prefer a PDF? Download my latest resume here:
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/Sumit_Sapkota_Resume.pdf"
              className="inline-flex items-center rounded-full border border-emerald-500/40 bg-neutral-950 px-4 py-1.5 text-[11px] font-medium text-emerald-100 hover:bg-emerald-500/10 transition"
            >
              Download Resume
            </a>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold text-neutral-50">
              Socials
            </h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/sumitsapkota75"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-300/90 hover:text-emerald-200"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sumit-sapkota-636b0319b/"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-300/90 hover:text-emerald-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
