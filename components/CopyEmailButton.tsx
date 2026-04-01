"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const EMAIL = "rodrigompdfreitas@gmail.com";
const RESET_MS = 2200;

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const resetRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (resetRef.current) clearTimeout(resetRef.current);
    },
    []
  );

  const handleClick = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      if (resetRef.current) clearTimeout(resetRef.current);
      setCopied(true);
      resetRef.current = setTimeout(() => {
        setCopied(false);
        resetRef.current = null;
      }, RESET_MS);
    } catch {
      // Clipboard may be denied (non-secure context, permissions)
    }
  }, []);

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={copied ? "Email copied to clipboard" : `Copy ${EMAIL} to clipboard`}
      className={`font-mono text-sm px-5 py-2.5 border border-wire transition-colors text-dim hover:text-accent hover:border-accent cursor-pointer bg-transparent ${
        copied ? "animate-copy-pop text-accent border-accent" : ""
      }`}
    >
      <span aria-live="polite" className="inline-block min-w-[10.5rem] text-left">
        {copied ? "Email copied!" : "Get in touch →"}
      </span>
    </button>
  );
}
