import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <p className="mb-4 text-sm font-medium tracking-wide text-accent">
        Hi, I&apos;m Ahmed 👋
      </p>
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Computer Engineering student building full-stack apps,
        <span className="text-accent"> machine learning systems</span>, and
        low-level software.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-foreground/70">
        I graduated with a bilingual sign-language recognition platform as my
        capstone, and I build everything from Flutter apps and REST APIs to
        3D medical-image segmentation models and interrupt-driven embedded
        firmware.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
        >
          View projects
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>
        <a
          href="/resume.pdf"
          className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium transition hover:border-black/25 dark:border-white/15 dark:hover:border-white/30"
        >
          Download résumé
        </a>
      </div>

      <div className="mt-10 flex items-center gap-4 text-foreground/60">
        <a
          href="https://github.com/ahmed171102"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="transition hover:text-foreground"
        >
          <GitHubIcon className="h-5 w-5" />
        </a>
        <a
          href="https://linkedin.com/in/ahmed171102"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="transition hover:text-foreground"
        >
          <LinkedInIcon className="h-5 w-5" />
        </a>
        <a
          href="mailto:ahmedadel1711@gmail.com"
          aria-label="Email"
          className="transition hover:text-foreground"
        >
          <MailIcon className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
