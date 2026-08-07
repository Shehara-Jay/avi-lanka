import Link from "next/link";
import {
  ArrowRight,
  Heart,
  MapPin,
  Route,
  ShieldCheck,
  Users,
} from "lucide-react";

const values = [
  {
    number: "01",
    icon: Heart,
    title: "Personal",
    description:
      "Every traveler is different. We shape our support around your interests, pace and the kind of experience you want.",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Local",
    description:
      "Our knowledge comes from Sri Lanka itself — its destinations, roads, culture and the small details that make travel easier.",
  },
  {
    number: "03",
    icon: Route,
    title: "Flexible",
    description:
      "Plans can change. We believe a good journey should leave enough freedom to adjust, discover and enjoy the unexpected.",
  },
];

const reasons = [
  "Private and personalized travel",
  "Local knowledge and assistance",
  "Flexible itineraries",
  "Trusted transport and drivers",
  "Direct communication",
  "Support throughout your journey",
];

export default function AboutPage() {
  return (
    <main className="bg-[#fbfcf8]">
      {/* ========================================
          IMAGE-FREE HERO
      ========================================= */}

      <section className="relative overflow-hidden bg-[#eef5ea] pt-32 md:pt-36">
        {/* DECORATIVE BACKGROUND */}

        <div className="pointer-events-none absolute left-[-170px] top-[-170px] h-[470px] w-[470px] rounded-full bg-[#90EE90]/20 blur-[110px]" />

        <div className="pointer-events-none absolute bottom-[-190px] right-[-120px] h-[470px] w-[470px] rounded-full bg-[#008000]/[0.06] blur-[120px]" />

        <div className="pointer-events-none absolute right-[12%] top-[22%] hidden h-24 w-24 rounded-full border border-[#008000]/10 lg:block" />

        <div className="pointer-events-none absolute right-[18%] top-[30%] hidden h-3 w-3 rounded-full bg-[#90EE90] lg:block" />

        <div className="mx-auto max-w-[1540px] px-6 pb-16 md:px-10 md:pb-20 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
            {/* LEFT */}

            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#90EE90]" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                  About Avi Lanka
                </p>
              </div>

              <h1 className="mt-5 max-w-[900px] text-[clamp(3.5rem,6vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-[#182018]">
                Sri Lanka,
                <br />

                <span className="font-medium italic text-[#008000]">
                  made personal.
                </span>
              </h1>

              <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-black/50">
                We help travelers discover Sri Lanka through flexible journeys,
                trusted local support and experiences built around the way they
                want to travel.
              </p>
            </div>

            {/* HERO SUMMARY */}

            <div className="rounded-[24px] border border-black/[0.06] bg-white/75 p-5 backdrop-blur-sm">
              <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                Travel with Avi Lanka
              </p>

              <h2 className="mt-4 text-[1.7rem] font-semibold leading-[1.05] tracking-[-0.04em] text-[#182018]">
                Local knowledge.
                <br />
                Personal journeys.
              </h2>

              <p className="mt-4 text-[11px] leading-5 text-black/45">
                We combine local knowledge, flexible planning and direct
                support to help you experience Sri Lanka in your own way.
              </p>

              <div className="mt-5 grid grid-cols-3 gap-2 border-t border-black/[0.07] pt-5">
                <div>
                  <p className="text-[1.25rem] font-semibold tracking-[-0.04em] text-[#008000]">
                    Local
                  </p>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-black/35">
                    Knowledge
                  </p>
                </div>

                <div>
                  <p className="text-[1.25rem] font-semibold tracking-[-0.04em] text-[#008000]">
                    Private
                  </p>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-black/35">
                    Travel
                  </p>
                </div>

                <div>
                  <p className="text-[1.25rem] font-semibold tracking-[-0.04em] text-[#008000]">
                    Flexible
                  </p>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-black/35">
                    Planning
                  </p>
                </div>
              </div>

              <Link
                href="/booking"
                className="group mt-6 inline-flex items-center gap-2 text-[10px] font-semibold text-[#008000]"
              >
                Plan your journey

                <ArrowRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          OUR STORY
      ========================================= */}

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-[1540px] gap-12 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#90EE90]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                Our story
              </p>
            </div>

            <h2 className="mt-4 text-[clamp(2.6rem,4vw,4.6rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#182018]">
              More than
              <br />

              <span className="font-medium italic text-[#008000]">
                showing you places.
              </span>
            </h2>
          </div>

          <div className="max-w-[700px]">
            <p className="text-[16px] leading-8 text-[#263026]">
              Avi Lanka is about helping travelers experience Sri Lanka in a
              more personal way.
            </p>

            <p className="mt-5 text-[14px] leading-7 text-black/50">
              A journey through Sri Lanka is not only about moving from one
              famous attraction to another. Some of the best experiences happen
              between those places — a roadside stop, a local conversation, a
              scenic route or simply having enough time to enjoy where you are.
            </p>

            <p className="mt-5 text-[14px] leading-7 text-black/50">
              That is why we focus on flexible travel rather than forcing every
              visitor into the same itinerary. Whether you need a complete
              private journey or simply reliable local support, we help make the
              experience easier to plan and more enjoyable to travel.
            </p>

            <div className="mt-8 flex items-center gap-3 border-t border-black/[0.08] pt-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef7ea] text-[#008000]">
                <MapPin size={15} />
              </span>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#008000]">
                  Based in Sri Lanka
                </p>

                <p className="mt-1 text-[11px] text-black/40">
                  Local knowledge. Local support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          IMAGE STORY
      ========================================= */}

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-4 md:grid-cols-[1.35fr_0.65fr]">
            <div className="group relative min-h-[440px] overflow-hidden rounded-[26px] md:min-h-[600px]">
              <img
                src="/images/about/about-main.jpg"
                alt="Discover Sri Lanka"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1000ms] group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 max-w-[450px] md:bottom-8 md:left-8">
                <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#BDF5B5]">
                  Our home
                </p>

                <h3 className="mt-2 text-[clamp(2rem,3vw,3.5rem)] font-medium leading-[1] tracking-[-0.045em] text-white">
                  An island made
                  <br />
                  for exploring.
                </h3>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
              <div className="group relative min-h-[260px] overflow-hidden rounded-[26px]">
                <img
                  src="/images/about/about-culture.jpg"
                  alt="Sri Lankan culture"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <p className="text-[8px] uppercase tracking-[0.25em] text-[#BDF5B5]">
                    Culture
                  </p>

                  <p className="mt-1 text-[18px] font-medium text-white">
                    Living traditions
                  </p>
                </div>
              </div>

              <div className="group relative min-h-[260px] overflow-hidden rounded-[26px]">
                <img
                  src="/images/about/about-nature.jpg"
                  alt="Nature in Sri Lanka"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <p className="text-[8px] uppercase tracking-[0.25em] text-[#BDF5B5]">
                    Nature
                  </p>

                  <p className="mt-1 text-[18px] font-medium text-white">
                    Remarkable landscapes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          VALUES
      ========================================= */}

      <section className="bg-[#102719] py-20 text-white md:py-24">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#BDF5B5]">
                How we travel
              </p>

              <h2 className="mt-4 text-[clamp(2.6rem,4vw,4.6rem)] font-semibold leading-[0.96] tracking-[-0.05em]">
                Simple values.
                <br />

                <span className="font-medium italic text-[#BDF5B5]">
                  Better journeys.
                </span>
              </h2>
            </div>

            <p className="max-w-[520px] text-[13px] leading-6 text-white/50 lg:justify-self-end">
              The way we work is straightforward: understand the traveler,
              share what we know and keep enough flexibility for the journey to
              feel like your own.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.number}
                  className="group rounded-[24px] border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#90EE90]/40 hover:bg-white/[0.055]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-semibold tracking-[0.2em] text-[#BDF5B5]/60">
                      {value.number}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#90EE90]/20 bg-[#90EE90]/10 text-[#BDF5B5]">
                      <Icon size={16} strokeWidth={1.7} />
                    </span>
                  </div>

                  <h3 className="mt-12 text-[1.7rem] font-medium tracking-[-0.035em]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-[12px] leading-6 text-white/50">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================
          WHY AVI LANKA
      ========================================= */}

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-[1540px] gap-12 px-6 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-16">
          <div>
            <div className="flex items-center gap-3">
              <ShieldCheck size={15} className="text-[#008000]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                Why Avi Lanka
              </p>
            </div>

            <h2 className="mt-4 text-[clamp(2.5rem,4vw,4.3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#182018]">
              Travel with
              <br />

              <span className="font-medium italic text-[#008000]">
                someone local.
              </span>
            </h2>

            <p className="mt-5 max-w-[460px] text-[13px] leading-6 text-black/50">
              Good local support can make a complicated trip feel simple. We
              help with the practical side of travel while giving you space to
              enjoy the experience.
            </p>
          </div>

          <div className="border-t border-black/[0.08]">
            {reasons.map((reason, index) => (
              <div
                key={reason}
                className="group grid grid-cols-[45px_1fr_auto] items-center border-b border-black/[0.08] py-5"
              >
                <span className="text-[9px] font-semibold tracking-[0.18em] text-[#008000]/50">
                  0{index + 1}
                </span>

                <p className="text-[14px] font-medium text-[#263026] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#008000]">
                  {reason}
                </p>

                <ArrowRight
                  size={13}
                  className="text-black/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#008000]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          PERSONAL SUPPORT
      ========================================= */}

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="overflow-hidden rounded-[28px] bg-[#eef5ea]">
            <div className="grid lg:grid-cols-2">
              <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                <div className="flex items-center gap-3">
                  <Users size={15} className="text-[#008000]" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                    Here when you need us
                  </span>
                </div>

                <h2 className="mt-5 text-[clamp(2.4rem,3.5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-[#182018]">
                  A real person,
                  <br />

                  <span className="font-medium italic text-[#008000]">
                    not just a booking.
                  </span>
                </h2>

                <p className="mt-5 max-w-[500px] text-[13px] leading-6 text-black/50">
                  Questions come up while traveling. Routes change, plans move
                  and sometimes you simply need local advice. We want it to be
                  easy to reach someone who can actually help.
                </p>

                <Link
                  href="/contact"
                  className="group mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-[#008000] px-6 py-3 text-[10px] font-semibold text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#087508]"
                >
                  Talk to us

                  <ArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>

              <div className="relative min-h-[380px] overflow-hidden lg:min-h-[500px]">
                <img
                  src="/images/about/about-support.jpg"
                  alt="Personal travel support in Sri Lanka"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#eef5ea]/20 to-transparent lg:from-[#eef5ea]/35" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          FINAL CTA
      ========================================= */}

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="rounded-[28px] bg-[#102719] px-6 py-12 text-white md:px-10 md:py-14">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#BDF5B5]">
                  Discover Sri Lanka with us
                </p>

                <h2 className="mt-4 text-[clamp(2.6rem,4.5vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
                  Your journey.
                  <br />

                  <span className="font-medium italic text-[#BDF5B5]">
                    Your Sri Lanka.
                  </span>
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tours"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#008000] px-6 py-3.5 text-[10px] font-semibold text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#169b16]"
                >
                  Explore tours

                  <ArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/services"
                  className="rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 text-[10px] font-semibold text-white transition-all duration-300 hover:border-[#90EE90] hover:bg-[#90EE90]/10"
                >
                  Our services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}