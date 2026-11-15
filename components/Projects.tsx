const projects = [
  {
    name: "Northstar Labs",
    category: "Brand refresh",
    summary: "Repositioned a SaaS startup for a premium market with stronger messaging and a user-first funnel.",
    result: "+163% qualified leads",
  },
  {
    name: "Horizon Studio",
    category: "Website redesign",
    summary: "Created an elevated digital platform that improved trust, engagement, and conversion across key pages.",
    result: "+72% engagement",
  },
  {
    name: "Peak Commerce",
    category: "Growth sprint",
    summary: "Built and optimized campaign systems that simplified acquisition and improved customer retention.",
    result: "+4.1x ROI",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 py-20 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
              Recent work
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Outcomes that move both brand perception and business metrics.
            </h2>
          </div>
          <a href="#contact" className="text-sm font-semibold text-cyan-700 transition hover:text-cyan-600">
            Start your project →
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
              <div className="h-52 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/15 bg-white/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-100">
                    {project.category}
                  </span>
                  <span className="text-sm font-semibold text-cyan-200">Case study</span>
                </div>
                <div className="mt-16 text-2xl font-bold">{project.name}</div>
              </div>

              <div className="p-6">
                <p className="text-base leading-7 text-slate-600">{project.summary}</p>
                <div className="mt-6 rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-800">
                  {project.result}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
