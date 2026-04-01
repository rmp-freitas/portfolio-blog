import Link from "next/link";
import { PostMeta } from "@/lib/types";

type PostCardProps = {
  post: PostMeta;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <p className="text-xs text-zinc-500 dark:text-zinc-400">{post.date} · {post.readingTime}</p>
      <h3 className="mt-2 text-xl font-semibold">{post.title}</h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{post.excerpt}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-zinc-100 px-2 py-1 text-xs dark:bg-zinc-800">
            {tag}
          </span>
        ))}
      </div>
      <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-sm font-medium text-brand-600 hover:underline dark:text-brand-500">
        Ler artigo
      </Link>
    </article>
  );
}
