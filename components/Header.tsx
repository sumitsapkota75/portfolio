// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "#summary", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#focus", label: "Focus" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Add a subtle shadow when the user scrolls
  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`sticky top-0 z-40 border-b border-[var(--border-soft)] bg-[rgba(10,18,32,0.92)] backdrop-blur ${
        hasScrolled ? "shadow-[0_10px_30px_rgba(0,0,0,0.65)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Left: avatar + name */}
        <Link href="#home" className="flex items-center gap-3">
          <div className="relative h-9 w-9 rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-panel)] p-[2px]">
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[var(--bg-panel-strong)]">
              <Image
                src="/sumit_cropped.jpg"
                alt="Sumit Sapkota"
                fill
                sizes="36px"
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight text-[var(--text-primary)]">
              Sumit Sapkota
            </span>
            <span className="text-[11px] text-[var(--text-muted)]">
              Senior Java Full Stack Developer
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ y: -1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
            >
              {item.label}
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-[2px] origin-center scale-x-0 bg-[var(--accent)] transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </motion.a>
          ))}
          <motion.a
            href="/Sumit_Sapkota_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="rounded-full border border-[var(--border-strong)] bg-[var(--accent)] px-4 py-1.5 text-xs font-semibold text-[#08111f] shadow-sm transition hover:bg-[#68d2bb]"
          >
            Resume
          </motion.a>
        </nav>

        {/* Mobile nav toggle */}
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border-soft)] bg-[var(--bg-panel-strong)] md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle navigation</span>
          <motion.div
            animate={open ? "open" : "closed"}
            variants={{
              closed: { rotate: 0 },
              open: { rotate: 90 },
            }}
            transition={{ duration: 0.2 }}
            className="space-y-1.5"
          >
            <span className="block h-0.5 w-5 bg-neutral-100" />
            <span className="block h-0.5 w-5 bg-neutral-100" />
          </motion.div>
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-t border-[var(--border-soft)] bg-[var(--bg-primary)] md:hidden"
          >
            <div className="mx-auto flex max-w-4xl flex-col gap-1 px-4 py-3 text-sm">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-1 text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/Sumit_Sapkota_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-md border border-[var(--border-strong)] bg-[var(--bg-panel-strong)] px-3 py-1.5 text-center text-xs text-[var(--text-primary)] transition hover:bg-[var(--bg-panel)]"
                onClick={() => setOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
