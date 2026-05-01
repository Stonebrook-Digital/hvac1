import Image from "next/image";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { STOCK_PHOTOS, unsplashUrl } from "@/lib/unsplash";

const services = [
  {
    title: "Air Conditioning",
    copy: "Diagnostics, repairs, and high-efficiency replacements that keep every room summer-steady.",
    photoIndex: 0,
  },
  {
    title: "Heating Systems",
    copy: "Furnaces and heat pumps tuned for even heat, quiet cycles, and reliable winter performance.",
    photoIndex: 10,
  },
  {
    title: "Indoor Air Quality",
    copy: "Filtration, humidity, and fresh-air strategy so your home breathes as good as it feels.",
    photoIndex: 14,
  },
  {
    title: "Maintenance Plans",
    copy: "Seasonal tune-ups that extend equipment life and keep surprise breakdowns off the table.",
    photoIndex: 6,
  },
];

const steps = [
  {
    number: "01",
    title: "Listen",
    detail: "Comfort goals, trouble spots, and how you actually live in the space.",
    photoIndex: 15,
  },
  {
    number: "02",
    title: "Diagnose",
    detail: "Plain-language findings with photos when it helps you decide.",
    photoIndex: 1,
  },
  {
    number: "03",
    title: "Deliver",
    detail: "Repairs and installs done to code, tested, and walk-through complete.",
    photoIndex: 0,
  },
  {
    number: "04",
    title: "Support",
    detail: "Follow-up, maintenance, and answers when seasons change.",
    photoIndex: 3,
  },
];

const marqueeA = [...STOCK_PHOTOS, ...STOCK_PHOTOS];
const marqueeB = [...STOCK_PHOTOS].reverse().concat(STOCK_PHOTOS);

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 py-8 pb-12 sm:gap-16 sm:px-8 sm:py-12 sm:pb-16">
      <section className="section-shell grain relative overflow-hidden p-6 sm:p-10 lg:p-12">
        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center">
          <div className="relative z-10 space-y-7">
            <p className="inline-flex rounded-full border border-brand/25 bg-brand/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] text-brand uppercase">
              Conquer Home Services
            </p>
            <h1 className="max-w-[15ch] text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4rem]">
              Comfort,
              <br />
              <span className="bg-gradient-to-r from-brand to-brand-strong bg-clip-text text-transparent">
                engineered for your home.
              </span>
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-text-muted sm:text-lg">
              Real homes, real technicians, real results. Over 13 years we have
              treated HVAC as both craft and clarity—so you always know what is
              happening behind the vents.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand/25 transition hover:bg-brand-strong"
              >
                Book a visit
              </a>
              <a
                href="#services"
                className="rounded-full border-2 border-line bg-surface px-7 py-3.5 text-sm font-semibold text-foreground transition hover:border-brand/50 hover:text-brand"
              >
                Browse services
              </a>
            </div>
          </div>

          <div className="relative mx-auto grid w-full max-w-md grid-cols-12 gap-3 sm:max-w-none lg:mx-0 lg:max-w-none">
            <div className="animate-float relative col-span-7 col-start-1 row-start-1 aspect-[4/5] overflow-hidden rounded-3xl border border-line shadow-xl">
              <Image
                src={unsplashUrl(STOCK_PHOTOS[0].id)}
                alt={STOCK_PHOTOS[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 60vw, 35vw"
                priority
              />
            </div>
            <div className="animate-float-delayed relative z-[1] col-span-6 col-start-7 row-start-1 mt-12 aspect-square overflow-hidden rounded-2xl border border-line shadow-lg sm:mt-16">
              <Image
                src={unsplashUrl(STOCK_PHOTOS[3].id)}
                alt={STOCK_PHOTOS[3].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 45vw, 28vw"
                priority
              />
            </div>
            <div className="relative z-[2] col-span-5 col-start-2 -mt-8 aspect-[5/4] overflow-hidden rounded-2xl border-2 border-white shadow-xl sm:-mt-10">
              <Image
                src={unsplashUrl(STOCK_PHOTOS[9].id)}
                alt={STOCK_PHOTOS[9].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 40vw, 22vw"
              />
            </div>
            <div className="relative col-span-6 col-start-7 -mt-4 aspect-video overflow-hidden rounded-2xl border border-line shadow-md sm:-mt-6">
              <Image
                src={unsplashUrl(STOCK_PHOTOS[1].id)}
                alt={STOCK_PHOTOS[1].alt}
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
            {marqueeA.map((item, i) => (
              <div
                key={`a-${item.id}-${i}`}
                className="image-reveal relative h-40 w-64 shrink-0 overflow-hidden rounded-2xl border border-line shadow-sm sm:h-44 sm:w-72"
              >
                <Image
                  src={unsplashUrl(item.id, 800)}
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

      <section className="-mx-4 overflow-hidden sm:-mx-8">
        <p className="mb-4 px-4 text-center text-[11px] font-bold tracking-[0.25em] text-text-muted uppercase sm:px-8">
          Homes & hardware
        </p>
        <div className="relative border-b border-line bg-surface-soft/80 py-5">
          <div className="photo-marquee-reverse gap-4 pr-4">
            {marqueeB.map((item, i) => (
              <div
                key={`b-${item.id}-${i}`}
                className="image-reveal relative h-36 w-56 shrink-0 overflow-hidden rounded-xl border border-line shadow-sm sm:h-40 sm:w-64"
              >
                <Image
                  src={unsplashUrl(item.id, 700)}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="256px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell overflow-hidden p-4 sm:p-6">
        <div className="mb-4 flex flex-col gap-2 px-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Snapshot wall
          </h2>
          <p className="max-w-md text-sm text-text-muted">
            A fuller picture of the spaces and systems we touch—swap any tile for
            your own project photos when you are ready.
          </p>
        </div>
        <div
          className="grid grid-cols-4 gap-1.5 sm:grid-cols-6 sm:gap-2 md:grid-cols-8"
          aria-hidden
        >
          {Array.from({ length: 40 }).map((_, i) => {
            const item = STOCK_PHOTOS[i % STOCK_PHOTOS.length];
            return (
              <div
                key={`wall-${item.id}-${i}`}
                className="image-reveal relative aspect-square overflow-hidden rounded-lg border border-line/80"
              >
                <Image
                  src={unsplashUrl(item.id, 400)}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 25vw, 12vw"
                />
              </div>
            );
          })}
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
            src={unsplashUrl("photo-1600585154363-67eb9e2e2099", 1400)}
            alt="Bright modern living room with large windows"
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
          {services.map((service) => {
            const shot = STOCK_PHOTOS[service.photoIndex % STOCK_PHOTOS.length];
            return (
              <article
                key={service.title}
                className="section-shell image-reveal group flex flex-col overflow-hidden p-0 transition hover:shadow-lg hover:shadow-brand/8"
              >
                <div className="relative aspect-[5/4] w-full overflow-hidden">
                  <Image
                    src={unsplashUrl(shot.id, 900)}
                    alt={`${service.title}: ${shot.alt}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-strong/75 via-brand-strong/15 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-white">
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

      <section className="section-shell overflow-hidden p-4 sm:p-6">
        <div className="mb-6 flex flex-col justify-between gap-4 px-2 sm:flex-row sm:items-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            The work, in color
          </h2>
          <p className="max-w-sm text-sm text-text-muted">
            Crews, homes, and hardware—real context for what we do every day.
          </p>
        </div>
        <div className="grid auto-rows-[130px] grid-cols-6 gap-2 sm:auto-rows-[150px] sm:gap-3 md:auto-rows-[170px]">
          <div className="image-reveal relative col-span-4 row-span-2 overflow-hidden rounded-2xl border border-line sm:col-span-3">
            <Image
              src={unsplashUrl(STOCK_PHOTOS[11].id, 1200)}
              alt={STOCK_PHOTOS[11].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 66vw, 50vw"
            />
          </div>
          <div className="image-reveal relative col-span-2 row-span-2 overflow-hidden rounded-2xl border border-line sm:col-span-3">
            <Image
              src={unsplashUrl(STOCK_PHOTOS[6].id, 800)}
              alt={STOCK_PHOTOS[6].alt}
              fill
              className="object-cover"
              sizes="33vw"
            />
          </div>
          <div className="image-reveal relative col-span-2 overflow-hidden rounded-2xl border border-line">
            <Image
              src={unsplashUrl(STOCK_PHOTOS[2].id, 600)}
              alt={STOCK_PHOTOS[2].alt}
              fill
              className="object-cover"
              sizes="33vw"
            />
          </div>
          <div className="image-reveal relative col-span-2 overflow-hidden rounded-2xl border border-line">
            <Image
              src={unsplashUrl(STOCK_PHOTOS[4].id, 600)}
              alt={STOCK_PHOTOS[4].alt}
              fill
              className="object-cover"
              sizes="33vw"
            />
          </div>
          <div className="image-reveal relative col-span-2 overflow-hidden rounded-2xl border border-line">
            <Image
              src={unsplashUrl(STOCK_PHOTOS[12].id, 600)}
              alt={STOCK_PHOTOS[12].alt}
              fill
              className="object-cover"
              sizes="33vw"
            />
          </div>
          <div className="image-reveal relative col-span-3 overflow-hidden rounded-2xl border border-line md:col-span-2">
            <Image
              src={unsplashUrl(STOCK_PHOTOS[8].id, 800)}
              alt={STOCK_PHOTOS[8].alt}
              fill
              className="object-cover"
              sizes="40vw"
            />
          </div>
          <div className="image-reveal relative col-span-3 overflow-hidden rounded-2xl border border-line md:col-span-2">
            <Image
              src={unsplashUrl(STOCK_PHOTOS[13].id, 800)}
              alt={STOCK_PHOTOS[13].alt}
              fill
              className="object-cover"
              sizes="40vw"
            />
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
          {steps.map((step) => {
            const shot = STOCK_PHOTOS[step.photoIndex % STOCK_PHOTOS.length];
            return (
              <div
                key={step.number}
                className="section-shell image-reveal overflow-hidden rounded-2xl border border-line p-0"
              >
                <div className="relative aspect-[16/11] w-full">
                  <Image
                    src={unsplashUrl(shot.id, 800)}
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
            src={unsplashUrl(STOCK_PHOTOS[2].id, 1600)}
            alt={STOCK_PHOTOS[2].alt}
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
            src={unsplashUrl(STOCK_PHOTOS[5].id, 1000)}
            alt={STOCK_PHOTOS[5].alt}
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
