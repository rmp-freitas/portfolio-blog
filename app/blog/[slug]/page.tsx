import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllPostsMeta, getPostBySlug } from "@/lib/posts";
import { siteConfig } from "@/lib/seo";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPostsMeta();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const canonicalUrl = `${siteConfig.siteUrl}/blog/${post.meta.slug}`;

  return {
    title: post.meta.title,
    description: post.meta.excerpt,
    openGraph: {
      title: post.meta.title,
      description: post.meta.excerpt,
      url: canonicalUrl,
      type: "article"
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl">
      <header className="mb-8 border-b border-zinc-200 pb-5 dark:border-zinc-800">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {post.meta.date} · {post.meta.readingTime}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">{post.meta.title}</h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-300">{post.meta.excerpt}</p>
      </header>

      <div className="prose prose-zinc max-w-none dark:prose-invert">
        <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </div>
    </article>
  );
}
