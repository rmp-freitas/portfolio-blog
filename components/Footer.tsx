export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
      <p>© {new Date().getFullYear()} Rodri Dev. Construído com Next.js e Tailwind.</p>
    </footer>
  );
}
