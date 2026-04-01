"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/about", label: "Sobre" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const darkEnabled = savedTheme ? savedTheme === "dark" : prefersDark;
    root.classList.toggle("dark", darkEnabled);
    setIsDark(darkEnabled);
  }, []);

  const toggleTheme = () => {
    const nextThemeIsDark = !isDark;
    document.documentElement.classList.toggle("dark", nextThemeIsDark);
    localStorage.setItem("theme", nextThemeIsDark ? "dark" : "light");
    setIsDark(nextThemeIsDark);
  };

  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200/80 bg-white/85 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/85">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Rodri<span className="text-brand-500">.dev</span>
        </Link>

        <nav className="flex items-center gap-5">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white">
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium dark:border-zinc-700"
            aria-label="Toggle dark mode"
          >
            {mounted ? (isDark ? "Light" : "Dark") : "Theme"}
          </button>
        </nav>
      </div>
    </header>
  );
}
