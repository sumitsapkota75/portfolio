// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Sumit Sapkota | Senior Java Full Stack Developer",
  description:
    "Senior full-stack Java developer with 7+ years of experience delivering Spring Boot microservices, distributed systems, cloud-native platforms, and production-grade React and Angular applications.",
  keywords: [
    "Senior Java Developer",
    "Full Stack Engineer",
    "Spring Boot",
    "Microservices",
    "Kafka",
    "AWS",
    "React",
    "Angular",
    "Next.js",
    "Kubernetes",
  ],
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
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased text-[16px] leading-relaxed md:text-[17px]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
