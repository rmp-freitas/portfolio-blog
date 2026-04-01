import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre mim",
  description: "Conhece melhor o meu percurso, competências e objetivos."
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Sobre mim</h1>
      <p className="text-zinc-700 dark:text-zinc-300">
        Sou desenvolvedor focado em construir produtos digitais de alta qualidade, com atenção a performance, design system e experiência de utilizador.
      </p>
      <p className="text-zinc-700 dark:text-zinc-300">
        Neste espaço partilho projetos, anotações técnicas e aprendizados sobre Next.js, TypeScript, arquitetura frontend e boas práticas de engenharia.
      </p>
    </section>
  );
}
