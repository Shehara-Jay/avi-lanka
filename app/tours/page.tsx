import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  Clock3,
  MapPin,
  MessageCircle,
  Mountain,
} from "lucide-react";

import { tours } from "@/data/tours";

const categories = [
  "All tours",
  "Culture",
  "Nature",
  "Wildlife",
  "Hill Country",
  "Coast",
];

export default function ToursPage() {
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
                  Excursions & Tours
                </p>
              </div>

              <h1 className="mt-5 max-w-[900px] text-[clamp(3.5rem,6vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-[#182018]">
                Explore more of
                <br />

                <span className="font-medium italic text-[#008000]">
                  Sri Lanka.
                </span>
              </h1>

              <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-black/50">
                From ancient cities and mountain landscapes to wildlife and the
                coast, discover excursions shaped around the places you want to
                experience.
              </p>
            </div>

            {/* HERO SUMMARY */}

            <div className="rounded-[24px] border border-black/[0.06] bg-white/75 p-5 backdrop-blur-sm">
              <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                Explore Sri Lanka
              </p>

              <h2 className="mt-4 text-[1.7rem] font-semibold leading-[1.05] tracking-[-0.04em] text-[#182018]">
                Flexible journeys
                <br />
                built around you.
              </h2>

              <p className="mt-4 text-[11px] leading-5 text-black/45">
                Choose an existing excursion or use it as a starting point for
                your own personalized Sri Lanka journey.
              </p>

              <div className="mt-5 grid grid-cols-3 gap-2 border-t border-black/[0.07] pt-5">
                <div>
                  <p className="text-[1.4rem] font-semibold tracking-[-0.04em] text-[#008000]">
                    {tours.length}
                  </p>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-black/35">
                    Tours
                  </p>
                </div>

                <div>
                  <p className="text-[1.4rem] font-semibold tracking-[-0.04em] text-[#008000]">
                    5
                  </p>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-black/35">
                    Styles
                  </p>
                </div>

                <div>
                  <p className="text-[1.4rem] font-semibold tracking-[-0.04em] text-[#008000]">
                    100%
                  </p>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-black/35">
                    Flexible
                  </p>
                </div>
              </div>

              <Link
                href="/booking?type=tour"
                className="group mt-6 inline-flex items-center gap-2 text-[10px] font-semibold text-[#008000]"
              >
                Plan a tour

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
          INTRO
      ========================================= */}

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#90EE90]" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                  Find your journey
                </p>
              </div>

              <h2 className="mt-4 text-[clamp(2.4rem,4vw,4.2rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#182018]">
                Places worth
                <br />

                <span className="font-medium italic text-[#008000]">
                  experiencing.
                </span>
              </h2>
            </div>

            <div className="max-w-[620px] lg:justify-self-end">
              <p className="text-[14px] leading-7 text-black/50">
                Choose one of our popular excursions or use them as inspiration
                for your own trip. Routes, timing and stops can be adjusted
                depending on your travel plans.
              </p>
            </div>
          </div>

          {/* CATEGORY CHIPS */}

          <div className="mt-9 flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`rounded-full border px-4 py-2 text-[10px] font-medium transition-all duration-300 ${
                  index === 0
                    ? "border-[#008000] bg-[#008000] text-white"
                    : "border-black/[0.08] bg-white text-black/55 hover:border-[#90EE90] hover:text-[#008000]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          TOUR CARDS
      ========================================= */}

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {tours.map((tour) => (
              <Link
                key={tour.slug}
                href={tour.href}
                className="group flex h-full flex-col"
              >
                {/* IMAGE */}

                <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[#edf3e9]">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                  {/* NUMBER */}

                  <span className="absolute left-3 top-3 rounded-full border border-white/50 bg-white/90 px-2.5 py-1.5 text-[8px] font-semibold tracking-[0.15em] text-[#182018] backdrop-blur-md">
                    {tour.number}
                  </span>

                  {/* ARROW */}

                  <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/60 bg-white/90 text-[#182018] transition-all duration-300 group-hover:bg-[#008000] group-hover:text-white">
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-[2px]"
                    />
                  </span>
                </div>

                {/* INFORMATION */}

                <div className="flex flex-1 flex-col pt-4">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <div className="flex items-center gap-1.5">
                      <MapPin
                        size={11}
                        strokeWidth={1.8}
                        className="text-[#008000]"
                      />

                      <span className="text-[9px] text-black/45">
                        {tour.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Clock3
                        size={11}
                        strokeWidth={1.8}
                        className="text-[#008000]"
                      />

                      <span className="text-[9px] text-black/45">
                        {tour.duration}
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-2.5 text-[17px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#182018] transition-colors duration-300 group-hover:text-[#008000]">
                    {tour.title}
                  </h3>

                  <p className="mt-2.5 text-[11px] leading-[1.7] text-black/45">
                    {tour.description}
                  </p>

                  {/* PACKAGE PRICE */}

                  <div className="mt-4 flex items-center gap-2 rounded-[12px] bg-[#eef5ea] px-3 py-2.5">
                    <BadgeDollarSign
                      size={13}
                      className="shrink-0 text-[#008000]"
                    />

                    <div>
                      <p className="text-[7px] font-semibold uppercase tracking-[0.18em] text-black/30">
                        Package price
                      </p>

                      <p className="mt-0.5 text-[10px] font-semibold text-[#008000]">
                        {tour.price}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto pt-4">
                    <span className="inline-flex items-center gap-2 text-[9px] font-semibold text-[#008000]">
                      View tour

                      <ArrowRight
                        size={11}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          CUSTOM TOUR
      ========================================= */}

      <section className="bg-[#eef5ea] py-16 md:py-20">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <Mountain size={15} className="text-[#008000]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                  Something different?
                </span>
              </div>

              <h2 className="mt-4 text-[clamp(2.4rem,4vw,4.2rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#182018]">
                Build your own
                <br />

                <span className="font-medium italic text-[#008000]">
                  Sri Lanka journey.
                </span>
              </h2>
            </div>

            <div className="lg:justify-self-end">
              <p className="max-w-[520px] text-[13px] leading-6 text-black/50">
                You don&apos;t have to follow a fixed tour. Tell us where you
                want to go, how long you have and what you enjoy. We can help
                shape the route around you.
              </p>

              <Link
                href="/services/custom-itineraries"
                className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#008000] px-6 py-3 text-[10px] font-semibold text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#087508]"
              >
                Create my itinerary

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
          CONTACT CTA
      ========================================= */}

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="flex flex-col gap-6 rounded-[24px] bg-[#102719] px-6 py-8 text-white md:flex-row md:items-center md:justify-between md:px-9 md:py-9">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#90EE90]/10 text-[#BDF5B5]">
                <MessageCircle size={20} />
              </div>

              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#BDF5B5]">
                  Talk to Avi Lanka
                </p>

                <h3 className="mt-1 text-[19px] font-semibold tracking-[-0.025em]">
                  Not sure which tour is right for you?
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-white/50">
                  Tell us what you&apos;d like to experience and we&apos;ll
                  help you plan it.
                </p>
              </div>
            </div>

            <Link
              href="/booking?type=tour"
              className="group flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#008000] px-6 py-3 text-[10px] font-semibold text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#169b16]"
            >
              Send inquiry

              <ArrowRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}