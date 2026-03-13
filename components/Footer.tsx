// components/Footer.tsx
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-soft)] bg-[var(--bg-primary)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-[11px] text-[var(--text-muted)] md:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Senior full-stack engineer focused on backend architecture, APIs, and cloud-native delivery.</p>
      </div>
    </footer>
  );
}
