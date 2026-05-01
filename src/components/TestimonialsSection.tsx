import Image from "next/image";
import { ConquerMark } from "@/components/ConquerMark";
import { unsplashUrl } from "@/lib/unsplash";

const testimonials = [
  {
    quote:
      "They explained what was wrong in plain English and fixed it the same day. No pressure, just solid work.",
    name: "Rebecca Green",
    avatar: "photo-1438761681033-6461ffad8d80",
  },
  {
    quote:
      "Our upstairs finally matches the downstairs. They treated the house like their own.",
    name: "Rodney Mitchell",
    avatar: "photo-1507003211169-0a1dd7228f2d",
  },
  {
    quote:
      "Maintenance plan paid for itself—caught a worn part before it quit in July heat.",
    name: "Angela Brooks",
    avatar: "photo-1494790108377-be9c29b29330",
  },
  {
    quote:
      "On time, tidy, and the invoice matched the estimate. That should not feel rare, but it does.",
    name: "David Chen",
    avatar: "photo-1472099645785-5658abf4ff4e",
  },
  {
    quote:
      "New system install was smooth start to finish. Crew was respectful and thorough.",
    name: "Marcus Webb",
    avatar: "photo-1500648767791-00dcc994a43e",
  },
  {
    quote:
      "We have used them twice now—once for AC, once for heat. Consistent quality both times.",
    name: "Sarah Nguyen",
    avatar: "photo-1534528741775-53994a69daeb",
  },
];

function StarRow() {
  return (
    <div
      className="flex items-center gap-0.5 text-accent"
      aria-label="5 out of 5 stars"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-[15px] leading-none opacity-[0.88]">
          ★
        </span>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-8 rounded-3xl border border-line bg-surface px-5 py-12 sm:px-10 sm:py-14"
    >
      <p
        className="text-center text-2xl italic tracking-tight text-foreground/90 sm:text-3xl"
        style={{
          fontFamily: "var(--font-dm-serif), ui-serif, Georgia, serif",
        }}
      >
        What homeowners are saying
      </p>

      <div className="mx-auto mt-8 flex justify-center text-brand">
        <ConquerMark className="h-24 w-20 sm:h-28 sm:w-24" />
      </div>

      <ul className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <li
            key={t.name}
            className="relative flex flex-col rounded-2xl border-2 border-brand/20 bg-surface p-6 pt-8 shadow-sm transition hover:border-brand/35 hover:shadow-md"
          >
            <span
              className="absolute left-5 top-4 font-serif text-5xl leading-none text-accent/90"
              aria-hidden
            >
              “
            </span>
            <div className="flex items-start justify-end gap-2">
              <span className="text-sm font-medium text-text-muted">5</span>
              <StarRow />
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
              {t.quote}
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-line/80 pt-5">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-brand/25 bg-brand/5 ring-1 ring-brand/10">
                <Image
                  src={unsplashUrl(t.avatar, 160)}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>
              <p
                className="text-base font-medium text-foreground"
                style={{
                  fontFamily: "var(--font-dm-serif), ui-serif, Georgia, serif",
                }}
              >
                {t.name}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <ul className="mx-auto mt-12 grid max-w-4xl gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {[
          "13+ years residential HVAC",
          "Clear estimates & options",
          "Respectful crews, clean sites",
          "Priority scheduling for members",
        ].map((line) => (
          <li
            key={line}
            className="rounded-xl border border-line bg-surface-soft/60 px-3 py-2.5 text-center text-xs text-text-muted"
          >
            {line}
          </li>
        ))}
      </ul>
    </section>
  );
}
