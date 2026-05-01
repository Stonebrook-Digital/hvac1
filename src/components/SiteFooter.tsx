export function SiteFooter() {
  const year = new Date().getFullYear();

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Reviews", href: "/#testimonials" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="mt-auto border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-semibold tracking-tight text-foreground">
              Conquer Home Services
            </p>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              Residential heating and cooling with clear communication and
              dependable workmanship.
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-10 gap-y-4 text-sm"
            aria-label="Footer"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                Explore
              </p>
              <ul className="mt-3 space-y-2.5">
                {links.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-foreground transition hover:text-brand"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                Reach us
              </p>
              <ul className="mt-3 space-y-2.5">
                <li>
                  <a
                    href="tel:+10000000000"
                    className="text-foreground transition hover:text-brand"
                  >
                    Call
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@conquerhomeservices.com"
                    className="text-foreground transition hover:text-brand"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-8 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Conquer Home Services LLC</p>
          <p className="sm:text-right">Residential heating & cooling</p>
        </div>
      </div>
    </footer>
  );
}
