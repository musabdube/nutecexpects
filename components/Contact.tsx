export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Contact
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to turn your next stage of growth into a clear plan?
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-8 text-slate-300">
            Tell us where you are, what needs attention, and where you want momentum to build next.
          </p>

          <div className="mt-8 space-y-4 text-slate-300">
            <p>Email: hello@nutecexpects.com</p>
            <p>Phone: +1 (415) 890-2441</p>
            <p>Based in London & remote worldwide</p>
          </div>
        </div>

        <form className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-cyan-950/20 backdrop-blur-sm sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm text-slate-300">
              Name
              <input
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
              />
            </label>

            <label className="text-sm text-slate-300">
              Email
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
              />
            </label>
          </div>

          <label className="mt-5 block text-sm text-slate-300">
            Company
            <input
              type="text"
              placeholder="Your company name"
              className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
            />
          </label>

          <label className="mt-5 block text-sm text-slate-300">
            Project details
            <textarea
              rows={5}
              placeholder="Tell us about your goals and timeline"
              className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
            />
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Send inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
