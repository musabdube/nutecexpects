const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <div className="flex items-center gap-3 text-lg font-semibold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 text-sm font-bold text-slate-950">
              N
            </span>
            Nutecexpects
          </div>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
            Strategy, design, and digital growth for ambitious businesses ready to scale with clarity.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-sm text-slate-400 lg:px-8">
          <p>© 2026 Nutecexpects. All rights reserved.</p>
          <p>hello@nutecexpects.com</p>
        </div>
      </div>
    </footer>
  );
}
