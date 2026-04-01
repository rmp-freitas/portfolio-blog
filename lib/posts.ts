import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostMeta } from "@/lib/types";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export function getAllPostsMeta(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".mdx"));

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title ?? slug,
      excerpt: data.excerpt ?? "",
      date: data.date ?? "",
      tags: data.tags ?? [],
      readingTime: data.readingTime ?? "5 min",
    } satisfies PostMeta;
  });

  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    meta: {
      slug,
      title: data.title ?? slug,
      excerpt: data.excerpt ?? "",
      date: data.date ?? "",
      tags: data.tags ?? [],
      readingTime: data.readingTime ?? "5 min",
    } satisfies PostMeta,
    content,
  };
}
