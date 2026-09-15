"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import Reveal from "./Reveal";
import Spotlight from "./Spotlight";
import SplitText from "./SplitText";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const blobA = useRef<HTMLDivElement>(null);
  const blobB = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    function onScroll() {
      const y = window.scrollY;
      if (blobA.current) blobA.current.style.transform = `translateY(${y * 0.25}px)`;
      if (blobB.current) blobB.current.style.transform = `translateY(${y * 0.15}px)`;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Spotlight>
      <section
        id="top"
        className="relative mx-auto max-w-5xl overflow-hidden px-6 pt-20 pb-16 sm:pt-28 sm:pb-24"
      >
        <div
          ref={blobA}
          className="bg-blob animate-float animate-hue -top-20 -left-20 h-72 w-72 bg-accent"
          aria-hidden="true"
        />
        <div
          ref={blobB}
          className="bg-blob animate-float animate-hue top-10 -right-24 h-80 w-80 bg-purple-400"
          style={{ animationDelay: "-3s" }}
          aria-hidden="true"
        />

        <Reveal>
          <p className="mb-4 text-sm font-medium tracking-wide text-accent">
            Hi, I&apos;m Ahmed 👋
          </p>
        </Reveal>

        <SplitText
          as="h1"
          baseDelay={80}
          step={35}
          className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl"
          segments={[
            { text: "Computer Engineering student building full-stack apps," },
            { text: "machine learning systems,", className: "text-gradient" },
            { text: "and low-level software." },
          ]}
        />

        <Reveal delay={240}>
          <p className="mt-6 max-w-2xl text-lg text-foreground/70">
            I graduated with a bilingual sign-language recognition platform as
            my capstone, and I build everything from Flutter apps and REST
            APIs to 3D medical-image segmentation models and interrupt-driven
            embedded firmware.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticButton
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90"
            >
              View projects
              <ArrowUpRightIcon className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton
              href="https://linkedin.com/in/ahmed171102"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium hover:border-black/25 dark:border-white/15 dark:hover:border-white/30"
            >
              Connect on LinkedIn
              <LinkedInIcon className="h-4 w-4" />
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-10 flex items-center gap-4 text-foreground/60">
            <a
              href="https://github.com/ahmed171102"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition hover:-translate-y-0.5 hover:text-foreground"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/ahmed171102"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition hover:-translate-y-0.5 hover:text-foreground"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:ahmedadel1711@gmail.com"
              aria-label="Email"
              className="transition hover:-translate-y-0.5 hover:text-foreground"
            >
              <MailIcon className="h-5 w-5" />
            </a>
          </div>
        </Reveal>
      </section>
    </Spotlight>
  );
}
