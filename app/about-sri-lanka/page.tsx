import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Camera,
  Compass,
  Leaf,
  MapPin,
  Sun,
} from "lucide-react";

import { getFeaturedDestinations } from "@/data/destinations";

const destinations = getFeaturedDestinations();

const highlights = [
  {
    icon: Leaf,
    title: "Nature & Wildlife",
    text: "National parks, elephants, leopards, rainforests and rich biodiversity across the island.",
  },
  {
    icon: Camera,
    title: "Culture & Heritage",
    text: "Ancient cities, sacred temples, colonial history and traditions that are still part of everyday life.",
  },
  {
    icon: Sun,
    title: "Beaches & Coast",
    text: "Tropical beaches, quiet bays, surf towns and a coastline that changes character from region to region.",
  },
];

const travelTips = [
  "Plan around the weather — different regions can have different conditions at the same time.",
  "Allow time between destinations. Sri Lanka looks small on the map, but road travel can take longer than expected.",
  "Dress respectfully when visiting temples and religious sites.",
  "Keep some flexibility in your itinerary for local discoveries and weather changes.",
];

export default function AboutSriLankaPage() {
  return (
    <main className="bg-[#fbfcf8]">
      {/* ========================================
          HERO
      ========================================= */}

      <section className="relative min-h-[90svh] overflow-hidden">
        <img
          src="/images/about-sri-lanka/hero.jpg"
          alt="Sri Lanka landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[90svh] max-w-[1540px] items-end px-6 pb-16 pt-32 md:px-10 md:pb-20 lg:px-16">
          <div className="max-w-[850px]">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#90EE90]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#BDF5B5]">
                About Sri Lanka
              </p>
            </div>

            <h1 className="text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.88] tracking-[-0.055em] text-white">
              Discover an island
              <br />

              <span className="font-medium italic text-[#DDF7D7]">
                full of contrasts.
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-[15px] leading-7 text-white/80">
              Ancient cities, misty mountains, wildlife, tropical beaches and
              living traditions — all within one remarkable island.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          INTRO
      ========================================= */}

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-[1540px] gap-10 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
              The island
            </p>

            <h2 className="mt-4 text-[clamp(2.5rem,4vw,4.6rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#182018]">
              Small in size.
              <br />

              <span className="font-medium italic text-[#008000]">
                Rich in experience.
              </span>
            </h2>
          </div>

          <div className="max-w-[700px] lg:pt-4">
            <p className="text-[15px] leading-7 text-black/55">
              Sri Lanka is a compact island with an extraordinary range of
              landscapes and experiences. Within a relatively short journey,
              you can move from ancient kingdoms and tea-covered highlands to
              wildlife reserves and tropical beaches.
            </p>

            <p className="mt-5 text-[15px] leading-7 text-black/55">
              For travelers, that variety means a journey can be shaped in many
              different ways — cultural, adventurous, relaxed, scenic or a mix
              of everything.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          DESTINATIONS
      ========================================= */}

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-7 bg-[#90EE90]" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                  Places to explore
                </p>
              </div>

              <h2 className="text-[clamp(2.5rem,4vw,4.4rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#182018]">
                See Sri Lanka,
                <br />

                <span className="font-medium italic text-[#008000]">
                  one place at a time.
                </span>
              </h2>
            </div>

            <p className="max-w-[420px] text-[13px] leading-6 text-black/45">
              Each region offers a different side of the island, from ancient
              monuments and mountain towns to wildlife and the coast.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {destinations.map((destination) => (
              <Link
                key={destination.slug}
                href={destination.href}
                className="group overflow-hidden rounded-[24px] border border-black/[0.07] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#90EE90] hover:shadow-[0_18px_40px_rgba(40,90,40,0.10)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="flex items-center gap-2 text-white/65">
                      <MapPin size={11} />

                      <span className="text-[8px] uppercase tracking-[0.25em]">
                        {destination.region}
                      </span>
                    </div>

                    <h3 className="mt-2 text-[1.8rem] font-medium tracking-[-0.04em] text-white">
                      {destination.name}
                    </h3>

                    <p className="mt-2 line-clamp-2 max-w-[350px] text-[10px] leading-5 text-white/60">
                      {destination.shortDescription}
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-[#BDF5B5]">
                      <span className="text-[8px] font-semibold uppercase tracking-[0.2em]">
                        Explore
                      </span>

                      <ArrowUpRight
                        size={11}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          WHAT MAKES SRI LANKA SPECIAL
      ========================================= */}

      <section className="bg-[#102719] py-20 text-white md:py-24">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#BDF5B5]">
              What makes Sri Lanka special
            </p>

            <h2 className="mt-4 text-[clamp(2.6rem,4vw,4.6rem)] font-semibold leading-[0.96] tracking-[-0.05em]">
              More than one
              <br />

              <span className="font-medium italic text-[#BDF5B5]">
                kind of journey.
              </span>
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#90EE90]/50 hover:bg-white/[0.06]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#90EE90]/30 bg-[#90EE90]/10 text-[#BDF5B5]">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-6 text-[1.5rem] font-medium tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-6 text-white/55">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================
          BEST TIME
      ========================================= */}

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-[1540px] gap-8 px-6 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-16">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <CalendarDays size={15} className="text-[#008000]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                When to visit
              </p>
            </div>

            <h2 className="text-[clamp(2.5rem,4vw,4.4rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#182018]">
              There is always
              <br />

              <span className="font-medium italic text-[#008000]">
                somewhere to explore.
              </span>
            </h2>
          </div>

          <div className="rounded-[26px] border border-black/[0.07] bg-white p-6 md:p-8">
            <p className="text-[14px] leading-7 text-black/55">
              Sri Lanka&apos;s climate varies by region, which means travel is
              possible throughout much of the year. Weather conditions on the
              west and south coasts can differ from the east, while the hill
              country is cooler than the lowlands.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[18px] bg-[#f4f8f1] p-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#008000]">
                  West & South
                </p>

                <p className="mt-2 text-[13px] leading-6 text-black/50">
                  Popular for beaches, Galle, Colombo and southern travel
                  routes.
                </p>
              </div>

              <div className="rounded-[18px] bg-[#f4f8f1] p-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#008000]">
                  East Coast
                </p>

                <p className="mt-2 text-[13px] leading-6 text-black/50">
                  A different seasonal pattern, with excellent coastal
                  destinations and quieter beach experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          THINGS TO KNOW
      ========================================= */}

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="rounded-[30px] bg-[#f0f6ed] p-6 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <div className="flex items-center gap-3">
                  <Compass size={15} className="text-[#008000]" />

                  <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                    Before you travel
                  </p>
                </div>

                <h2 className="mt-4 text-[clamp(2.3rem,3.5vw,3.8rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-[#182018]">
                  A few things
                  <br />

                  <span className="font-medium italic text-[#008000]">
                    worth knowing.
                  </span>
                </h2>
              </div>

              <div className="border-t border-black/[0.08]">
                {travelTips.map((tip, index) => (
                  <div
                    key={tip}
                    className="grid gap-4 border-b border-black/[0.08] py-5 md:grid-cols-[50px_1fr]"
                  >
                    <span className="text-[9px] font-semibold tracking-[0.2em] text-[#008000]">
                      0{index + 1}
                    </span>

                    <p className="text-[13px] leading-6 text-black/55">
                      {tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          CTA
      ========================================= */}

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="rounded-[30px] bg-[#102719] px-6 py-12 text-white md:px-10 md:py-16">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[820px]">
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#BDF5B5]">
                  Start exploring
                </p>

                <h2 className="mt-4 text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
                  Ready to discover
                  <br />

                  <span className="font-medium italic text-[#BDF5B5]">
                    Sri Lanka your way?
                  </span>
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tours"
                  className="group flex items-center gap-3 rounded-full bg-[#008000] px-6 py-3.5 text-[11px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#169b16]"
                >
                  Explore tours

                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <Link
                  href="/services"
                  className="rounded-full border border-white/20 bg-white/[0.05] px-6 py-3.5 text-[11px] font-semibold text-white transition-all duration-300 hover:border-[#90EE90] hover:bg-[#90EE90]/10"
                >
                  View services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}