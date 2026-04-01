import type { Metadata } from "next";
import PostCard from "@/components/PostCard";
import { getAllPostsMeta } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "My learnings, notes, and thoughts on the world of software development.",
};

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <div className="space-y-16">

      {/* ── HEADER ─────────────────────────────────────────────── */}
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
          ✦
        </span>

        <div className="relative max-w-2xl">
          <p
            className="font-mono text-xs tracking-widest uppercase mb-4"
            style={{ color: "var(--color-dim)", letterSpacing: "0.18em" }}
          >
            — Blog
          </p>
          <h1
            className="font-display text-[clamp(2.5rem,6vw,5rem)] text-ink"
            style={{ fontWeight: 400 }}
          >
            Notes &amp;{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
              posts
            </em>
          </h1>
          <p
            className="mt-4 font-mono text-sm leading-relaxed"
            style={{ color: "var(--color-dim)" }}
          >
            Content in MDX to share practical experience, tutorials, and insights.
          </p>
        </div>
      </section>

      {/* ── POSTS ──────────────────────────────────────────────── */}
      <section>
        {posts.length ? (
          <div className="border-t border-wire">
            {posts.map((post, index) => (
              <PostCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="border-t border-wire pt-12 text-center">
            <p className="font-display text-3xl text-ink" style={{ fontWeight: 400 }}>
              Coming soon_
            </p>
            <p className="mt-3 font-mono text-sm" style={{ color: "var(--color-dim)" }}>
              No posts found in{" "}
              <code
                className="px-1.5 py-0.5"
                style={{ backgroundColor: "var(--color-surface)", color: "var(--color-accent)" }}
              >
                content/blog
              </code>
            </p>
          </div>
        )}
      </section>

    </div>
  );
}
