const highlights = [
  "Strategy-first planning for new and growing businesses",
  "Clear communication, transparent milestones, and measured delivery",
  "Hands-on partnership from concept to launch and beyond",
];

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-20 text-slate-900">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="relative">
          <div className="absolute -left-8 top-8 h-48 w-48 rounded-full bg-cyan-200/70 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
            <div className="rounded-[1.5rem] bg-slate-900 p-6 text-white">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-300">Brand audit</span>
                <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs font-medium text-emerald-300">
                  +27% uplift
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="mb-2 flex justify-between text-sm text-slate-300">
                    <span>Positioning</span>
                    <span>84%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-sm text-slate-300">
                    <span>Conversion</span>
                    <span>73%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full w-[73%] rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-sm text-slate-300">
                    <span>Retention</span>
                    <span>91%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full w-[91%] rounded-full bg-gradient-to-r from-emerald-400 to-teal-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
            About us
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            We design the systems behind sustainable business growth.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Nutecexpects partners with brands that want sharper positioning, stronger digital presence, and a customer experience that actually converts attention into action.
          </p>

          <div className="mt-8 space-y-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100 text-sm text-cyan-700">
                  ✓
                </span>
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
