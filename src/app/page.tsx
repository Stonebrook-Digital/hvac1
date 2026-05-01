import Image from "next/image";
import {
  IconAirConditioning,
  IconAirQuality,
  IconHeating,
  IconMaintenance,
} from "@/components/ServiceIcons";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import {
  CONQUER_LOGO_SRC,
  LOCAL_PHOTOS,
  MARQUEE_LOCAL_A,
} from "@/lib/local-media";

const services = [
  {
    title: "Air Conditioning",
    copy: "Diagnostics, repairs, and high-efficiency replacements that keep every room summer-steady.",
  },
  {
    title: "Heating Systems",
    copy: "Furnaces and heat pumps tuned for even heat, quiet cycles, and reliable winter performance.",
  },
  {
    title: "Indoor Air Quality",
    copy: "Filtration, humidity, and fresh-air strategy so your home breathes as good as it feels.",
  },
  {
    title: "Maintenance Plans",
    copy: "Seasonal tune-ups that extend equipment life and keep surprise breakdowns off the table.",
  },
];

const serviceIcons = [
  IconAirConditioning,
  IconHeating,
  IconAirQuality,
  IconMaintenance,
] as const;

const steps = [
  {
    number: "01",
    title: "Listen",
    detail: "Comfort goals, trouble spots, and how you actually live in the space.",
  },
  {
    number: "02",
    title: "Diagnose",
    detail: "Plain-language findings with photos when it helps you decide.",
  },
  {
    number: "03",
    title: "Deliver",
    detail: "Repairs and installs done to code, tested, and walk-through complete.",
  },
  {
    number: "04",
    title: "Support",
    detail: "Follow-up, maintenance, and answers when seasons change.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 py-6 pb-12 sm:gap-16 sm:px-8 sm:py-8 sm:pb-16">
      <section className="section-shell grain relative overflow-hidden p-6 sm:p-10 lg:p-12">
        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center">
          <div className="relative z-10 flex flex-col gap-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              <div className="mx-auto shrink-0 rounded-2xl bg-black px-8 py-7 shadow-xl ring-1 ring-white/10 sm:mx-0 sm:px-9 sm:py-8">
                <Image
                  src={CONQUER_LOGO_SRC}
                  alt="Conquer Home Services HVAC"
                  width={200}
                  height={200}
                  className="mx-auto h-24 w-24 object-contain sm:h-[6.75rem] sm:w-[6.75rem]"
                  priority
                />
              </div>
              <div className="min-w-0 flex-1 space-y-7">
                <p className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-white/80 px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] text-brand uppercase shadow-sm backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  Conquer Home Services
                </p>
                <h1 className="max-w-[16ch] text-4xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-[4rem]">
                  Comfort,
                  <br />
                  <span className="text-brand">
                    engineered for your{" "}
                    <span className="text-accent">home.</span>
                  </span>
                </h1>
              </div>
            </div>
            <p className="max-w-lg text-base leading-relaxed text-text-muted sm:text-lg">
              Real homes, real technicians, real results. Over 13 years we have
              treated HVAC as both craft and clarity—so you always know what is
              happening behind the vents.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand/30 transition hover:bg-brand-strong"
              >
                Book a visit
              </a>
              <a
                href="#services"
                className="rounded-full border-2 border-brand/20 bg-white/90 px-7 py-3.5 text-sm font-semibold text-foreground transition hover:border-accent/35 hover:text-accent"
              >
                Browse services
              </a>
            </div>
          </div>

          <div className="relative mx-auto grid w-full max-w-md grid-cols-12 gap-3 sm:max-w-none lg:mx-0 lg:max-w-none">
            <div className="animate-float relative col-span-7 col-start-1 row-start-1 aspect-[4/5] overflow-hidden rounded-3xl border border-line shadow-xl">
              <Image
                src={LOCAL_PHOTOS[0].src}
                alt={LOCAL_PHOTOS[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 60vw, 35vw"
                priority
              />
            </div>
            <div className="animate-float-delayed relative z-[1] col-span-6 col-start-7 row-start-1 mt-12 aspect-square overflow-hidden rounded-3xl border border-line shadow-lg sm:mt-16">
              <Image
                src={LOCAL_PHOTOS[2].src}
                alt={LOCAL_PHOTOS[2].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 45vw, 28vw"
                priority
              />
            </div>
            <div className="relative z-[2] col-span-5 col-start-2 -mt-8 aspect-[5/4] overflow-hidden rounded-3xl border-2 border-white shadow-xl sm:-mt-10">
              <Image
                src={LOCAL_PHOTOS[1].src}
                alt={LOCAL_PHOTOS[1].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 40vw, 22vw"
              />
            </div>
            <div className="relative col-span-6 col-start-7 -mt-4 aspect-video overflow-hidden rounded-3xl border border-line shadow-md sm:-mt-6">
              <Image
                src={LOCAL_PHOTOS[3].src}
                alt={LOCAL_PHOTOS[3].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 30vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="-mx-4 overflow-hidden sm:-mx-8">
        <p className="mb-4 px-4 text-center text-[11px] font-bold tracking-[0.25em] text-text-muted uppercase sm:px-8">
          In the field
        </p>
        <div className="relative border-y border-line bg-surface/95 py-5 shadow-inner">
          <div className="photo-marquee gap-4 pr-4">
            {MARQUEE_LOCAL_A.map((item, i) => (
              <div
                key={`a-${item.src}-${i}`}
                className="image-reveal relative h-40 w-64 shrink-0 overflow-hidden rounded-3xl border border-line shadow-sm sm:h-44 sm:w-72"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="288px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:items-stretch">
        <article className="section-shell flex flex-col justify-center p-8 lg:p-10">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Logic in the visit.
            <span className="text-brand"> Care</span> in the details.
          </h2>
          <p className="mt-5 leading-relaxed text-text-muted">
            We built our process for homeowners who want answers without jargon:
            what failed, what it costs to fix, what can wait, and what protects
            you long-term. Your home stays tidy; your mind stays clear.
          </p>
          <ul className="mt-8 space-y-3 border-t border-line pt-8 text-sm text-text-muted">
            <li className="flex gap-3">
              <span className="font-mono text-xs font-semibold text-brand">01</span>
              Documentation when it helps you decide
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-xs font-semibold text-brand">02</span>
              Options that respect budget and efficiency
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-xs font-semibold text-brand">03</span>
              Walkthrough so nothing feels left unfinished
            </li>
          </ul>
        </article>
        <div className="section-shell image-reveal relative min-h-[280px] overflow-hidden lg:min-h-0">
          <Image
            src={LOCAL_PHOTOS[0].src}
            alt={LOCAL_PHOTOS[0].alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-strong/55 via-transparent to-accent/20" />
          <p className="absolute bottom-6 left-6 max-w-xs text-sm font-medium text-white drop-shadow sm:bottom-8 sm:left-8 sm:text-base">
            The same care we bring to equipment—we bring to the rooms around it.
          </p>
        </div>
      </section>

      <section id="services" className="space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] text-brand uppercase">
              Services
            </p>
            <h2 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything that moves air and heat
            </h2>
          </div>
          <p className="max-w-md text-sm text-text-muted">
            Four pillars of residential comfort—each backed by experience and
            thorough, honest work.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => {
            const Icon = serviceIcons[idx];
            return (
              <article
                key={service.title}
                className="section-shell group flex flex-col overflow-hidden p-0 transition hover:shadow-lg hover:shadow-brand/10"
              >
                <div className="flex flex-col items-center border-b border-line bg-surface-soft/60 px-5 pb-8 pt-10 sm:px-6">
                  <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl border border-brand/20 bg-white text-brand shadow-sm transition group-hover:border-brand/35 group-hover:bg-brand/[0.06]">
                    <Icon className="h-10 w-10" />
                  </div>
                  <h3 className="mt-5 text-center text-lg font-semibold tracking-tight text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="p-5 text-sm leading-relaxed text-text-muted">
                  {service.copy}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section
        id="work"
        className="section-shell relative overflow-hidden border-brand/10 px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16"
      >
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-brand via-brand/35 to-accent"
          aria-hidden
        />
        <div className="relative pl-5 sm:pl-8">
          <p className="font-mono text-[11px] font-semibold tracking-[0.22em] text-brand">
            OUTCOME
          </p>
          <div
            className="mt-6 max-w-4xl space-y-2 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-tight text-foreground"
            style={{
              fontFamily: "var(--font-dm-serif), ui-serif, Georgia, serif",
            }}
          >
            <p>
              <span className="text-brand">Measured</span> in steady temps.
            </p>
            <p className="text-foreground/75">
              Remembered for{" "}
              <span className="text-accent">quiet nights</span> and clear answers.
            </p>
          </div>

          <div
            className="mt-8 h-px max-w-md bg-gradient-to-r from-brand/60 via-brand/25 to-accent/50"
            aria-hidden
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
            <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
              <p className="text-sm leading-relaxed text-text-muted">
                This is not a mood board—it is the standard we hold every visit
                to: diagnose with evidence, explain without theater, and leave
                systems tuned so your home feels boring in the best way.
              </p>
              <p className="text-sm leading-relaxed text-text-muted">
                When you scroll the strip above, you are seeing the world we
                work in. When you hire us, you get accountability, not collage.
              </p>
            </div>
            <aside className="border-l border-line pl-6 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-6">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-text-muted">
                FIELD NOTE
              </p>
              <p
                className="mt-3 text-lg leading-snug text-foreground"
                style={{
                  fontFamily: "var(--font-dm-serif), ui-serif, Georgia, serif",
                }}
              >
                “If it only looks good in a photo and not on the thermostat, we
                have not done our job.”
              </p>
            </aside>
          </div>

          <div className="image-reveal relative mt-12 h-44 w-full overflow-hidden rounded-2xl border border-line sm:h-52 lg:h-56">
            <Image
              src={LOCAL_PHOTOS[4].src}
              alt={LOCAL_PHOTOS[4].alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 80rem"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-strong/25 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="section-shell flex flex-col justify-center p-8 lg:p-10">
          <p className="text-[11px] font-bold tracking-[0.2em] text-brand uppercase">
            How we work
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Four beats. One steady rhythm.
          </h2>
          <p className="mt-4 text-text-muted">
            No black-box quotes. No mystery parts. Just a sequence you can follow.
          </p>
        </article>
        <div className="grid gap-3 sm:grid-cols-2">
          {steps.map((step, idx) => {
            const shot = LOCAL_PHOTOS[(idx + 1) % LOCAL_PHOTOS.length];
            return (
              <div
                key={step.number}
                className="section-shell image-reveal overflow-hidden rounded-2xl border border-line p-0"
              >
                <div className="relative aspect-[16/11] w-full">
                  <Image
                    src={shot.src}
                    alt={`${step.title}: ${shot.alt}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-strong/80 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/95 px-3 py-1 font-mono text-xs font-bold text-brand shadow-sm">
                    {step.number}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {step.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <TestimonialsSection />

      <section className="section-shell relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={LOCAL_PHOTOS[2].src}
            alt={LOCAL_PHOTOS[2].alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-strong/95 via-brand-strong/80 to-brand/70" />
        </div>
        <div className="relative grid gap-8 p-8 sm:grid-cols-[1fr_auto] sm:items-center sm:p-12 lg:p-14">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] text-white/90 uppercase">
              Maintenance
            </p>
            <h2 className="mt-2 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Seasonal tune-ups that keep efficiency—and peace of mind—on track.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/85">
              Priority scheduling, documented checks, and tuning that catches wear
              before it becomes an emergency.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand shadow-lg transition hover:bg-accent hover:text-white"
          >
            Plan details
          </a>
        </div>
      </section>

      <section
        id="contact"
        className="grid overflow-hidden rounded-3xl border border-line bg-surface shadow-xl lg:grid-cols-2"
      >
        <div className="image-reveal relative min-h-[260px] lg:min-h-full">
          <Image
            src={LOCAL_PHOTOS[1].src}
            alt={LOCAL_PHOTOS[1].alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center p-8 sm:p-12">
          <h2 className="text-3xl font-semibold tracking-tight">
            Ready when you are
          </h2>
          <p className="mt-4 text-text-muted">
            Repair, replacement, or a maintenance plan—tell us what is going on
            and we will help you pick the smartest next step.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+10000000000"
              className="rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-strong"
            >
              Call now
            </a>
            <a
              href="mailto:hello@conquerhomeservices.com"
              className="rounded-full border-2 border-line bg-surface px-6 py-3.5 text-sm font-semibold transition hover:border-brand/40 hover:text-brand"
            >
              Email us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
