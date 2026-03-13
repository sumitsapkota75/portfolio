// app/page.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SummarySection from "@/components/SummarySection";
import ExpertiseSection from "@/components/ExpertiseSection";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import EngineeringFocus from "@/components/EngineeringFocus";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section id="home">
          <Hero />
        </section>

        <section
          id="summary"
          className="border-t border-[var(--border-soft)] bg-[var(--bg-secondary)]"
        >
          <SummarySection />
        </section>

        <section
          id="expertise"
          className="border-t border-[var(--border-soft)] bg-[var(--bg-primary)]"
        >
          <ExpertiseSection />
        </section>

        <section
          id="projects"
          className="border-t border-[var(--border-soft)] bg-[var(--bg-secondary)]"
        >
          <Projects />
        </section>

        <section
          id="experience"
          className="border-t border-[var(--border-soft)] bg-[var(--bg-primary)]"
        >
          <Experience />
        </section>

        <section
          id="stack"
          className="border-t border-[var(--border-soft)] bg-[var(--bg-secondary)]"
        >
          <Skills />
        </section>

        <section
          id="focus"
          className="border-t border-[var(--border-soft)] bg-[var(--bg-primary)]"
        >
          <EngineeringFocus />
        </section>

        <section
          id="contact"
          className="border-t border-[var(--border-soft)] bg-[var(--bg-secondary)]"
        >
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}
