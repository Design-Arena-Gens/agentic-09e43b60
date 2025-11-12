const footerLinks = [
  {
    title: "Produto",
    links: [
      { href: "#sobre", label: "Visão geral" },
      { href: "#design-system", label: "Design System" },
      { href: "#roadmap", label: "Roadmap" }
    ]
  },
  {
    title: "Suporte",
    links: [
      { href: "#faq", label: "FAQ" },
      { href: "#contato", label: "Contato" },
      { href: "mailto:design@aurorastudio.app", label: "Suporte" }
    ]
  },
  {
    title: "Legal",
    links: [
      { href: "#politica", label: "Privacidade" },
      { href: "#termos", label: "Termos de uso" },
      { href: "#cookies", label: "Cookies" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:justify-between lg:px-8">
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 via-brand-400 to-brand-300 font-display text-lg font-semibold text-slate-950 shadow-glow">
              AS
            </span>
            <div>
              <p className="font-display text-xl font-semibold text-white">
                Aurora Studio
              </p>
              <p className="text-sm text-slate-400">
                Evolua o design do seu produto com jornadas inteligentes, dados e
                colaboração integrada.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            © {new Date().getFullYear()} Aurora Studio. Todos os direitos reservados.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm text-slate-400 sm:grid-cols-3">
          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-3">
              <h4 className="font-semibold text-slate-200">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="transition hover:text-brand-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
