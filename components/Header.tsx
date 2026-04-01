"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/",      label: "Home" },
  { href: "/about", label: "About"  },
  { href: "/blog",  label: "Blog"   },
];

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isDark,  setIsDark]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const root        = document.documentElement;
    const savedTheme  = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const darkEnabled = savedTheme ? savedTheme === "dark" : prefersDark;
    root.classList.toggle("dark", darkEnabled);
    setIsDark(darkEnabled);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <header
      className="sticky top-0 z-20 border-b border-wire"
      style={{ backgroundColor: "var(--color-canvas)", transition: "background-color 0.3s ease" }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4">

        {/* Logo */}
        <Link href="/" className="font-display text-xl tracking-tight text-ink">
          rodri<span style={{ color: "var(--color-accent)" }}>.</span>dev
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-6">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-xs tracking-widest uppercase transition-colors"
                style={{
                  color: active ? "var(--color-ink)" : "var(--color-dim)",
                  letterSpacing: "0.12em",
                }}
                onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = "var(--color-ink)"; }}
                onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = "var(--color-dim)"; }}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative h-5 w-9 rounded-full border border-wire transition-colors"
            style={{ backgroundColor: "var(--color-surface)" }}
          >
            <span
              className="absolute top-0.5 h-3.5 w-3.5 rounded-full transition-all duration-300"
              style={{
                left:            mounted && isDark ? "calc(100% - 18px)" : "2px",
                backgroundColor: mounted && isDark ? "var(--color-accent)" : "var(--color-dim)",
              }}
            />
          </button>
        </nav>
      </div>
    </header>
  );
}
