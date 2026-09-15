"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { MoonIcon, SunIcon } from "./icons";

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => { ready: Promise<void> };
};

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = stored ? stored === "dark" : prefersDark;
    setDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  function applyTheme(next: boolean) {
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  function toggle(e: MouseEvent<HTMLButtonElement>) {
    const next = !dark;
    const doc = document as ViewTransitionDocument;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!doc.startViewTransition || reducedMotion) {
      applyTheme(next);
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    document.documentElement.style.setProperty(
      "--theme-toggle-x",
      `${rect.left + rect.width / 2}px`
    );
    document.documentElement.style.setProperty(
      "--theme-toggle-y",
      `${rect.top + rect.height / 2}px`
    );

    doc.startViewTransition(() => applyTheme(next));
  }

  if (!mounted) return <div className="h-9 w-9" />;

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-foreground/70 transition hover:border-black/20 hover:text-foreground dark:border-white/10 dark:hover:border-white/25"
    >
      {dark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
    </button>
  );
}
