const stats = [
  { value: "8+", label: "Years of delivery" },
  { value: "120", label: "Projects launched" },
  { value: "96%", label: "Client retention" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.18),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center">
          <span className="mb-6 inline-flex w-fit items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
            Digital growth partner
          </span>

          <h1 className="max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building bold brands and smarter digital experiences.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
            We help ambitious businesses turn ideas into polished products, stronger visibility, and measurable growth.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Let&apos;s Talk
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Work
            </a>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">{item.value}</div>
                <p className="mt-1 text-sm text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-5 shadow-2xl shadow-cyan-950/30">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-cyan-300">
                  Growth dashboard
                </span>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Campaign reach</p>
                  <div className="mt-3 flex items-end justify-between">
                    <span className="text-3xl font-bold text-white">2.4M</span>
                    <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-xs font-medium text-emerald-300">+38%</span>
                  </div>
                  <div className="mt-4 flex h-2 overflow-hidden rounded-full bg-slate-800">
                    <span className="block w-[68%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">ROI</p>
                    <div className="mt-3 text-2xl font-bold text-white">4.8x</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Leads</p>
                    <div className="mt-3 text-2xl font-bold text-white">18.4K</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-200">Quarterly sprint</p>
                    <span className="text-xs text-cyan-300">On track</span>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    {[55, 70, 85, 95].map((value, index) => (
                      <div key={value} className="flex-1">
                        <div className="flex h-20 items-end overflow-hidden rounded-xl bg-slate-800/80">
                          <div
                            className="w-full rounded-xl bg-gradient-to-t from-cyan-500 to-blue-400"
                            style={{ height: `${value}%`, opacity: 0.7 + index * 0.08 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
