import { ArrowUpRightIcon } from "./icons";
import { eshara } from "@/data/projects";

export default function Eshara() {
  return (
    <section id="eshara" className="border-y border-black/5 bg-accent/[0.04] dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-3 text-sm font-medium tracking-wide text-accent">
          Featured — Graduation Project
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {eshara.title}
        </h2>
        <p className="mt-2 text-sm text-foreground/60">{eshara.subtitle}</p>
        <p className="mt-6 max-w-3xl text-foreground/75">{eshara.description}</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground/50">
              Four models, four vocabularies
            </h3>
            <div className="overflow-hidden rounded-xl border border-black/10 dark:border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-black/[0.03] dark:bg-white/[0.05]">
                  <tr>
                    <th className="px-4 py-3 font-medium">Model</th>
                    <th className="px-4 py-3 font-medium">Architecture</th>
                    <th className="px-4 py-3 font-medium">Accuracy</th>
                  </tr>
                </thead>
                <tbody>
                  {eshara.models.map((m) => (
                    <tr key={m.name} className="border-t border-black/5 dark:border-white/10">
                      <td className="px-4 py-3 font-medium">{m.name}</td>
                      <td className="px-4 py-3 text-foreground/70">{m.arch}</td>
                      <td className="px-4 py-3 text-accent">{m.accuracy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground/50">
              Highlights
            </h3>
            <ul className="space-y-3">
              {eshara.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-foreground/75">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a
          href={eshara.github}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium transition hover:border-black/25 dark:border-white/15 dark:hover:border-white/30"
        >
          View repository & thesis
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
