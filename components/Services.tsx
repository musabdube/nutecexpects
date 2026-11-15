const services = [
  {
    title: "Brand Strategy",
    description: "Positioning, messaging, and brand systems that make your business more memorable and credible.",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    title: "Web Design",
    description: "High-converting websites and digital experiences tailored to your audience and goals.",
    accent: "from-violet-500 to-purple-600",
  },
  {
    title: "Product Design",
    description: "User-centered interfaces that simplify complexity and improve engagement at every step.",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "Growth Marketing",
    description: "Campaign planning, funnel optimization, and performance strategies that scale quality leads.",
    accent: "from-amber-500 to-orange-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Services
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            The capabilities businesses need to move faster and grow smarter.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/8"
            >
              <div className={`mb-5 h-12 w-12 rounded-2xl bg-gradient-to-br ${service.accent}`} />
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
