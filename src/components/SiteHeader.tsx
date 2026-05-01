import Link from "next/link";

const nav = [
  { label: "Services", href: "/#services" },
  { label: "Reviews", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/90 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-8">
        <Link href="/" className="group flex min-w-0 flex-col leading-tight">
          <span className="truncate text-[15px] font-semibold tracking-tight text-foreground transition group-hover:text-brand">
            Conquer Home Services
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
            Residential HVAC
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 text-sm font-medium text-foreground/85 md:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/#contact"
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-brand/20 transition hover:bg-brand-strong sm:px-5"
          >
            Book
          </Link>
        </div>
      </div>

      <nav
        className="flex border-t border-line/60 px-4 py-2.5 md:hidden"
        aria-label="Primary mobile"
      >
        <ul className="flex w-full justify-between gap-2 text-xs font-medium text-foreground/90">
          {nav.map((item) => (
            <li key={item.href} className="min-w-0 flex-1 text-center">
              <Link href={item.href} className="block truncate py-1 text-brand">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
