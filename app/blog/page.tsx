import type { Metadata } from "next";
import PostCard from "@/components/PostCard";
import { getAllPostsMeta } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos técnicos sobre desenvolvimento e produtos digitais."
};

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Blog Técnico</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">
          Conteúdo em MDX para partilhar experiência prática, tutoriais e insights.
        </p>
      </div>

      <div className="grid gap-4">
        {posts.length ? (
          posts.map((post) => <PostCard key={post.slug} post={post} />)
        ) : (
          <p className="text-sm text-zinc-500">Nenhum artigo encontrado em `content/posts`.</p>
        )}
      </div>
    </section>
  );
}
