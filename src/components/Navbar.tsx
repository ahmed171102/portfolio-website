"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#eshara", label: "Featured" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [underline, setUnderline] = useState({ left: 0, width: 0, opacity: 0 });
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActive(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = linkRefs.current[active];
    if (el) {
      setUnderline({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
    } else {
      setUnderline((u) => ({ ...u, opacity: 0 }));
    }
  }, [active]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-background/80 backdrop-blur transition-shadow ${
        scrolled
          ? "border-black/5 shadow-sm dark:border-white/10"
          : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="#top" className="text-sm font-semibold tracking-tight">
          Ahmed Adel Goda
        </Link>
        <div className="relative hidden items-center gap-6 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              ref={(node) => {
                linkRefs.current[l.href] = node;
              }}
              href={l.href}
              className={`text-sm transition ${
                active === l.href
                  ? "text-foreground"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
          <span
            className="nav-underline"
            style={{ left: underline.left, width: underline.width, opacity: underline.opacity }}
          />
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
