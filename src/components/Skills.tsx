const groups: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: ["C", "C#", "Python", "Dart", "JavaScript/TypeScript", "SQL"],
  },
  {
    title: "Frontend & Mobile",
    items: ["React", "Next.js", "Flutter", "HTML/CSS"],
  },
  {
    title: "Backend",
    items: ["ASP.NET Core", "Node.js", "Express", "FastAPI", "WinForms"],
  },
  {
    title: "Machine Learning",
    items: ["TensorFlow/Keras", "PyTorch", "scikit-learn", "OpenCV"],
  },
  {
    title: "Data & Infra",
    items: ["SQL Server", "MongoDB", "ChromaDB", "Git", "Docker basics"],
  },
  {
    title: "Systems",
    items: ["Embedded C (PIC)", "RISC-V / xv6 internals", "TCP sockets"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-2 text-sm font-medium tracking-wide text-accent">Skills</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Tools I work with
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground/50">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 px-3 py-1 text-sm text-foreground/75 dark:border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
