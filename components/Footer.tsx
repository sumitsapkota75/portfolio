// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-neutral-950">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-4 text-[11px] text-neutral-500 md:flex-row">
        <p>© {new Date().getFullYear()} Sumit Sapkota</p>
        <p>Built with Next.js & Tailwind · Dark-mode by default.</p>
      </div>
    </footer>
  );
}
