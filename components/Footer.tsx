export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-wire">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center">

        {/* Brand */}
        <div>
          <span className="font-display text-lg text-ink">
            rodri<span style={{ color: "var(--color-accent)" }}>.</span>dev
          </span>
          <p className="mt-1 font-mono text-xs text-dim">
            Built with Next.js &amp; Tailwind
          </p>
        </div>

        {/* Right side */}
        <div className="flex flex-col items-start gap-1 sm:items-end">
          <p className="font-mono text-xs text-dim">
            © {year} Rodrigo. All rights reserved.
          </p>
          <div className="flex items-center gap-1 font-mono text-xs text-dim">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span>Open to opportunities</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
