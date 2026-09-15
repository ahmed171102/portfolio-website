import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center">
        <p className="mb-2 text-sm font-medium tracking-wide text-accent">Contact</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s build something together
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-foreground/70">
          I&apos;m open to internships, junior roles, and collaborations across
          full-stack, ML, and systems engineering. Reach out any time.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:ahmedadel1711@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
          >
            <MailIcon className="h-4 w-4" />
            ahmedadel1711@gmail.com
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-5 text-foreground/60">
          <a
            href="https://github.com/ahmed171102"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition hover:text-foreground"
          >
            <GitHubIcon className="h-5 w-5" />
            GitHub
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://linkedin.com/in/ahmed171102"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition hover:text-foreground"
          >
            <LinkedInIcon className="h-5 w-5" />
            LinkedIn
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
