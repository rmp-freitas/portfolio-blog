import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/lib/types";

const featuredProjects: Project[] = [
  {
    title: "Portfolio and blog",
    description: "Personal site and blog with focus on performance, SEO and technical posts in MDX.",
    href: "/blog",
    tags: ["Next.js", "Tailwind", "MDX"],
  },
];

export default function HomePage() {
  return (
    <div className="space-y-24">

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="hero-glow relative overflow-hidden pt-8 pb-4 md:pt-16">

        {/* Faded large section marker */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 select-none font-display font-bold leading-none"
          style={{
            fontSize: "clamp(120px, 22vw, 240px)",
            color: "var(--color-ink)",
            opacity: 0.035,
            lineHeight: 0.85,
          }}
        >
          01
        </span>

        <div className="relative max-w-4xl space-y-8">

          {/* Badge */}
          <p
            className="animate-fade-up font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--color-dim)", letterSpacing: "0.18em" }}
          >
            — Full-stack developer
          </p>

          {/* Headline */}
          <h1
            className="animate-fade-up delay-100 font-display text-[clamp(2.8rem,7vw,5.5rem)] text-ink"
            style={{ fontWeight: 400 }}
          >
            I build{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
              stuff
            </em>{" "}
            <span
              className="animate-blink delay-300 inline-block"
              style={{ color: "var(--color-accent)", marginLeft: "2px" }}
            >
              _
            </span>
          </h1>

          {/* Sub-description */}
          <p
            className="animate-fade-up delay-200 max-w-xl font-mono text-sm leading-relaxed"
            style={{ color: "var(--color-dim)" }}
          >
            A full-stack developer's log:
             real projects, architectural deep dives, and everything I learn while breaking (and fixing) code.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up delay-300 flex flex-wrap items-center gap-4">
            <Link
              href="/about"
              className="font-mono text-sm px-5 py-2.5 transition-opacity hover:opacity-80"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "#06060A",
                fontWeight: 500,
              }}
            >
              About me →
            </Link>
            <Link
              href="/blog"
              className="font-mono text-sm px-5 py-2.5 border border-wire text-dim hover:text-ink hover:border-ink transition-colors"
            >
              Blog →
            </Link>
          </div>

          {/* Stack pills */}
          <div className="animate-fade-up delay-400 flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
            {["Next.js", "TypeScript", "React", "Performance", "UX", "Design Systems"].map((skill) => (
              <span
                key={skill}
                className="font-mono text-xs"
                style={{ color: "var(--color-dim)" }}
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* ── PROJECTS ────────────────────────────────────────────── */}
      <section className="relative">

        {/* Section marker */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 select-none font-display font-bold leading-none"
          style={{
            fontSize: "clamp(80px, 14vw, 160px)",
            color: "var(--color-ink)",
            opacity: 0.03,
            lineHeight: 0.85,
          }}
        >
          02
        </span>

        {/* Header row */}
        <div className="mb-2 flex items-end justify-between">
          <div>
            <p
              className="font-mono text-xs tracking-widest uppercase mb-2"
              style={{ color: "var(--color-dim)", letterSpacing: "0.18em" }}
            >
              — Recent work
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-ink" style={{ fontWeight: 400 }}>
              Featured projects
            </h2>
          </div>
          <Link
            href="/blog"
            className="font-mono text-xs hidden sm:block transition-colors text-dim hover:text-accent"
          >
            Blog →
          </Link>
        </div>

        {/* Project list */}
        <div className="mt-8 border-t border-wire">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Mobile articles link */}
        <div className="mt-6 sm:hidden">
          <Link
            href="/blog"
            className="font-mono text-xs"
            style={{ color: "var(--color-dim)" }}
          >
            Blog →
          </Link>
        </div>

      </section>

    </div>
  );
}
