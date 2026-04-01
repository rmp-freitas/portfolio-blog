import Link from "next/link";
import { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Link href={project.href} className="group block">
      <article
        className="border-b border-wire py-7 transition-colors"
        style={{ borderColor: "var(--color-wire)" }}
      >
        <div className="flex items-start justify-between gap-6">

          {/* Left: number + content */}
          <div className="flex items-start gap-5 flex-1 min-w-0">

            {/* Index number */}
            <span
              className="font-mono text-xs pt-1 shrink-0 w-6 select-none"
              style={{ color: "var(--color-dim)" }}
            >
              {num}
            </span>

            {/* Text */}
            <div className="min-w-0">
              <h3
                className="font-display text-2xl md:text-3xl transition-colors duration-200"
                style={{
                  color: "var(--color-ink)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                }}
              >
                {project.title}
              </h3>
              <p
                className="mt-2 font-mono text-sm leading-relaxed"
                style={{ color: "var(--color-dim)" }}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-0.5 border border-wire"
                    style={{ color: "var(--color-dim)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right: arrow */}
          <span
            className="font-mono text-xl mt-1 shrink-0 transition-all duration-300 group-hover:translate-x-1"
            style={{ color: "var(--color-dim)" }}
          >
            →
          </span>

        </div>
      </article>
    </Link>
  );
}
