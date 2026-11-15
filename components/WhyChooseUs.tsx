const reasons = [
  {
    title: "Senior-level attention",
    description: "Every engagement gets experienced strategy and execution support from day one.",
  },
  {
    title: "Built around business goals",
    description: "We align design, messaging, and growth decisions to meaningful performance outcomes.",
  },
  {
    title: "Clear, collaborative process",
    description: "No guesswork, no hidden complexity — just structured momentum and transparent checkpoints.",
  },
  {
    title: "Flexible partnership model",
    description: "Whether you need a full launch partner or a focused expert team, we adapt to your roadmap.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-white py-20 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
            Why Us
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Focused on clarity, momentum, and measurable outcomes.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-lg font-bold text-white">
                ✓
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{reason.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
