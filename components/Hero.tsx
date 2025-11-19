// components/Hero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Scroll-based glow for the photo card (desktop)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.6, 0.15]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  // Mouse-driven 3D parallax (desktop)
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const percentX = (x - midX) / midX;
    const percentY = (y - midY) / midY;

    const maxRotate = 10;

    rotateY.set(percentX * maxRotate);
    rotateX.set(-percentY * maxRotate);
  };

  const handlePointerLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div className="relative border-b border-neutral-900 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900">
      <motion.div
        className="mx-auto flex max-w-4xl flex-col items-center gap-10 px-4 py-12 md:flex-row md:items-center md:justify-between md:py-24"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Left – text block */}
        <motion.div
          className="relative w-full md:flex-1"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          {/* Blurred gradient behind text for readability */}
          <div className="pointer-events-none absolute -inset-x-6 -inset-y-6 -z-10 bg-gradient-to-b from-emerald-500/10 via-neutral-950/90 to-transparent blur-2xl" />

          <p className="mb-3 text-[13px] md:text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
            Full-Stack Software Engineer
          </p>

          <h1 className="mb-4 text-4xl leading-tight md:text-5xl md:leading-tight font-semibold tracking-tight text-neutral-50">
            I build reliable{" "}
            <span className="text-emerald-300/90">backend systems</span> and
            smooth{" "}
            <span className="text-emerald-300/90">frontend experiences</span>.
          </h1>

          <p className="mb-6 max-w-xl text-[15px] md:text-base text-neutral-300">
            I&apos;m Sumit, a full-stack engineer with over 5 years of
            experience building cloud-native products using Golang, Python,
            Node.js, React, and Next.js. I focus on clean architecture, readable
            code, and shipping real, production-ready software.
          </p>

          <div className="mb-6 flex flex-wrap items-center gap-4">
            <Link
              href="#projects"
              className="rounded-full bg-emerald-500/90 px-6 py-2.5 text-xs md:text-sm font-semibold text-neutral-950 shadow-md shadow-emerald-500/30 hover:bg-emerald-400 transition"
            >
              See my work
            </Link>
            <Link
              href="#contact"
              className="text-xs md:text-sm text-neutral-300 hover:text-emerald-300/90"
            >
              Contact me →
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 text-[12px] md:text-[13px] text-neutral-400">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Open to full-stack & backend roles
            </span>
            <span>Golang · Python · React · Next.js · GCP · AWS</span>
          </div>

          {/* Scroll-down indicator – mobile only, just below content */}
          <a
            href="#skills"
            className="mt-8 flex flex-col items-center gap-1 text-[11px] text-neutral-500 md:hidden"
          >
            <span>Scroll down</span>
            <span className="h-6 w-px overflow-hidden rounded-full bg-neutral-700">
              <span className="block h-full w-full animate-bounce bg-emerald-400" />
            </span>
          </a>
        </motion.div>

        {/* Right – desktop-only 3D parallax photo */}
        <div className="hidden md:flex md:flex-1 md:justify-end">
          <motion.div
            ref={cardRef}
            className="relative w-80 aspect-[3/4]"
            initial={{ opacity: 0, scale: 0.92, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            {/* Scroll-synced glow */}
            <motion.div
              style={{ opacity: glowOpacity, scale: glowScale }}
              className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-gradient-to-tr from-emerald-500/30 via-teal-500/25 to-sky-500/20 blur-2xl"
            />

            {/* Mouse-driven 3D card */}
            <motion.div
              className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-neutral-700 bg-neutral-900/90 shadow-xl shadow-black/60"
              style={{
                transformStyle: "preserve-3d",
                rotateX: springRotateX,
                rotateY: springRotateY,
              }}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
            >
              <Image
                src="/sumit.jpg"
                alt="Sumit Sapkota"
                fill
                priority
                sizes="320px"
                className="object-cover object-center"
              />
              {/* subtle inner border highlight */}
              <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] border border-emerald-300/10" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
