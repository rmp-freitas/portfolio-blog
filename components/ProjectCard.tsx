import Link from "next/link";
import { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
            {tag}
          </span>
        ))}
      </div>
      <Link href={project.href} className="mt-4 inline-block text-sm font-medium text-brand-600 hover:underline dark:text-brand-500">
        Ver projeto
      </Link>
    </article>
  );
}
