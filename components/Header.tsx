// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
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
      className={`sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur ${
        hasScrolled ? "shadow-[0_10px_30px_rgba(0,0,0,0.65)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 md:py-4">
        {/* Left: avatar + name */}
        <Link href="#home" className="flex items-center gap-3">
          <div className="relative h-9 w-9 rounded-2xl bg-gradient-to-br from-emerald-500/60 via-teal-500/50 to-sky-500/40 p-[2px] shadow-sm shadow-emerald-500/40">
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-neutral-900">
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
            <span className="text-sm font-semibold tracking-tight text-neutral-50">
              Sumit Sapkota
            </span>
            <span className="text-[11px] text-neutral-400">
              Full-Stack Software Engineer
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
              className="group relative text-sm text-neutral-300 hover:text-emerald-300/90 transition-colors"
            >
              {item.label}
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-[2px] origin-center scale-x-0 bg-emerald-400/80 transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </motion.a>
          ))}
          <motion.a
            href="/Sumit_Sapkota_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="rounded-full border border-emerald-500/40 bg-neutral-900 px-4 py-1.5 text-xs font-medium text-emerald-100 shadow-sm hover:bg-emerald-500/10 hover:border-emerald-400 transition"
          >
            Resume
          </motion.a>
        </nav>

        {/* Mobile nav toggle */}
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-700 md:hidden"
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
            className="border-t border-neutral-800 bg-neutral-950 md:hidden"
          >
            <div className="mx-auto flex max-w-4xl flex-col gap-1 px-4 py-3 text-sm">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-1 text-neutral-200 hover:text-emerald-300/90 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/Sumit_Sapkota_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-md border border-emerald-500/40 bg-neutral-900 px-3 py-1.5 text-center text-xs text-emerald-100 hover:bg-emerald-500/10 transition"
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
