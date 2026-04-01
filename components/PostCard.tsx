import Link from "next/link";
import { PostMeta } from "@/lib/types";

type PostCardProps = {
  post: PostMeta;
  index?: number;
};

export default function PostCard({ post, index = 0 }: PostCardProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article
        className="border-b border-wire py-7 transition-colors"
        style={{ borderColor: "var(--color-wire)" }}
      >
        <div className="flex items-start justify-between gap-6">

          {/* Left: number + content */}
          <div className="flex items-start gap-5 flex-1 min-w-0">

            {/* Index */}
            <span
              className="font-mono text-xs pt-1 shrink-0 w-6 select-none"
              style={{ color: "var(--color-dim)" }}
            >
              {num}
            </span>

            {/* Text */}
            <div className="min-w-0">
              {/* Meta row */}
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs" style={{ color: "var(--color-dim)" }}>
                  {post.date}
                </span>
                <span style={{ color: "var(--color-wire)" }}>·</span>
                <span className="font-mono text-xs" style={{ color: "var(--color-dim)" }}>
                  {post.readingTime}
                </span>
              </div>

              <h3
                className="font-display text-2xl md:text-3xl transition-colors duration-200"
                style={{ color: "var(--color-ink)", fontWeight: 400, lineHeight: 1.1 }}
              >
                {post.title}
              </h3>

              <p
                className="mt-2 font-mono text-sm leading-relaxed"
                style={{ color: "var(--color-dim)" }}
              >
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
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
