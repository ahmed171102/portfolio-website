"use client";

import { useMemo, useState } from "react";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";
import { categories, categoryAccent, projects, type ProjectCategory } from "@/data/projects";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

export default function ProjectsSection() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-medium tracking-wide text-accent">Projects</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Selected work
            </h2>
          </div>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-8 flex flex-wrap gap-2">
          {(["All", ...categories] as const).map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                active === c
                  ? "bg-foreground text-background"
                  : "border border-black/10 text-foreground/70 hover:border-black/25 dark:border-white/15 dark:hover:border-white/30"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {filtered.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 4) * 90}>
            <TiltCard>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-background p-6 transition-colors duration-300 hover:border-black/25 hover:shadow-lg dark:border-white/10 dark:hover:border-white/25"
              >
                <span
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${categoryAccent[p.category]} opacity-70 transition group-hover:opacity-100`}
                  aria-hidden="true"
                />

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wide text-accent">
                      {p.category}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
                  </div>
                  <GitHubIcon className="mt-1 h-5 w-5 flex-shrink-0 text-foreground/40 transition group-hover:rotate-6 group-hover:text-foreground" />
                </div>

                <p className="mt-3 text-sm text-foreground/70">{p.description}</p>
                <p className="mt-3 text-sm font-medium text-foreground/85">
                  ✦ {p.highlight}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-black/[0.04] px-2.5 py-1 text-xs text-foreground/70 dark:bg-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  View on GitHub
                  <ArrowUpRightIcon className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
