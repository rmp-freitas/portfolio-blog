import type { Metadata } from "next";

import { CopyEmailButton } from "@/components/CopyEmailButton";

export const metadata: Metadata = {
  title: "About me",
  description: "Get to know me better. What I do, what I've done, and what I'm working on.",
};

const stack = [
  { label: "Frontend",          items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Flutter"] },
  { label: "Backend",           items: [".Net", "REST APIs", "Java", "C#", "Node.js"] },
  { label: "Current Interests", items: ["AI Agents", "Clean UI/UX", "Automations", "SaaS"] },
  { label: "Background",        items: ["Software Engineering", "System Architecture", "DevOps"] },
];

export default function AboutPage() {
  return (
    <div className="space-y-20">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-4 pb-2 md:pt-10">

        {/* Faded marker */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 select-none font-display font-bold leading-none"
          style={{
            fontSize: "clamp(100px, 18vw, 200px)",
            color: "var(--color-ink)",
            opacity: 0.03,
            lineHeight: 0.85,
          }}
        >
          01
        </span>

        <div className="relative max-w-3xl">
          <p
            className="font-mono text-xs tracking-widest uppercase mb-4"
            style={{ color: "var(--color-dim)", letterSpacing: "0.18em" }}
          >
            — About me
          </p>

          <h1
            className="font-display text-[clamp(2.5rem,6vw,5rem)] text-ink leading-tight"
            style={{ fontWeight: 400 }}
          >
            Building digital products with{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
              attention to detail
            </em>
            .
          </h1>
        </div>
      </section>

      {/* ── BIO ───────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 border-t border-wire pt-12">
        <div>
          <p
            className="font-mono text-xs tracking-widest uppercase mb-6"
            style={{ color: "var(--color-dim)", letterSpacing: "0.18em" }}
          >
            — Profile
          </p>
          <p className="font-mono text-sm leading-loose" style={{ color: "var(--color-ink)" }}>
            Bridging the gap between backend systems and intuitive user interfaces.
            I{"'"}m a developer dedicated to clean code, performance, and UI that makes software feel premium.
          </p>
        </div>
        <div>
          <p
            className="font-mono text-xs tracking-widest uppercase mb-6"
            style={{ color: "var(--color-dim)", letterSpacing: "0.18em" }}
          >
            — Mission
          </p>
          <p className="font-mono text-sm leading-loose" style={{ color: "var(--color-ink)" }}>
            This website is a collection of my work, learnings,
            and my thoughts on the world of software development.
          </p>
        </div>
      </section>

      {/* ── STACK ─────────────────────────────────────────────── */}
      <section className="border-t border-wire pt-12">

        <p
          className="font-mono text-xs tracking-widest uppercase mb-8"
          style={{ color: "var(--color-dim)", letterSpacing: "0.18em" }}
        >
          — Stack &amp; Skills
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map(({ label, items }) => (
            <div key={label}>
              <h3
                className="font-display text-base mb-4"
                style={{ color: "var(--color-ink)", fontWeight: 400 }}
              >
                {label}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-xs flex items-center gap-2"
                    style={{ color: "var(--color-dim)" }}
                  >
                    <span style={{ color: "var(--color-accent)" }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="border-t border-wire pt-12 pb-4">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-2xl md:text-3xl text-ink" style={{ fontWeight: 400 }}>
            Let{"'"}s work{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>together?</em>
          </p>
          <CopyEmailButton />
        </div>
      </section>

    </div>
  );
}
