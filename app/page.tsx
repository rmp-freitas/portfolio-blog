import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/lib/types";

const featuredProjects: Project[] = [
  {
    title: "Projeto 1.1 - Portfólio e Blog",
    description: "Site pessoal com foco em performance, SEO e publicações técnicas em MDX.",
    href: "/blog",
    tags: ["Next.js", "Tailwind", "MDX"],
  },
  {
    title: "Dashboard Analytics",
    description: "Painel responsivo para métricas de produtos SaaS com visualização clara de dados.",
    href: "#",
    tags: ["TypeScript", "Charts", "UX"],
  },
];

export default function HomePage() {
  return (
    <section className="space-y-12">
      <div className="max-w-3xl space-y-5">
        <p className="inline-block rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-600 dark:text-brand-500">
          Bem-vindo ao meu espaço digital
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Construo experiências web modernas e partilho conhecimento técnico.
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-300">
          Este é o meu portfólio pessoal e blog técnico: projetos reais, lições práticas e estudos sobre desenvolvimento full stack.
        </p>
        <Link href="/about" className="inline-block rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-500">
          Conhecer meu perfil
        </Link>
      </div>

      <div>
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-2xl font-bold">Projetos em destaque</h2>
          <Link href="/blog" className="text-sm text-brand-600 hover:underline dark:text-brand-500">
            Ver artigos
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
