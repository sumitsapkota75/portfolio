// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Sumit Sapkota | Software Engineer",
  description:
    "Full-stack software engineer portfolio – Golang, Python, React, Next.js, cloud-native systems, and scalable microservices.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-neutral-950 text-neutral-50 antialiased text-[16px] md:text-[17px] leading-relaxed">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
