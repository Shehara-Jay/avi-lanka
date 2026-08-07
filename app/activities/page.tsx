import Link from "next/link";
import {
  ArrowRight,
  Binoculars,
  Compass,
  Leaf,
  MapPin,
  MessageCircle,
  Waves,
} from "lucide-react";

import { activities } from "@/data/activities";

const categories = [
  "All Activities",
  "Ocean",
  "Wildlife",
  "Nature",
  "Wellness",
  "Culture",
];

const categoryIcons = {
  Ocean: Waves,
  Wildlife: Binoculars,
  Nature: Leaf,
  Wellness: Leaf,
  Culture: Compass,
};

export default function ActivitiesPage() {
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
                  Things to do
                </p>
              </div>

              <h1 className="mt-5 max-w-[900px] text-[clamp(3.5rem,6vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-[#182018]">
                Experience more
                <br />

                <span className="font-medium italic text-[#008000]">
                  of Sri Lanka.
                </span>
              </h1>

              <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-black/50">
                From ocean adventures and wildlife encounters to tea country,
                wellness and local traditions, discover experiences that make
                your journey unforgettable.
              </p>
            </div>

            {/* HERO SUMMARY */}

            <div className="rounded-[24px] border border-black/[0.06] bg-white/75 p-5 backdrop-blur-sm">
              <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                Experiences
              </p>

              <h2 className="mt-4 text-[1.7rem] font-semibold leading-[1.05] tracking-[-0.04em] text-[#182018]">
                More than places.
                <br />
                Make memories.
              </h2>

              <p className="mt-4 text-[11px] leading-5 text-black/45">
                Add activities to your itinerary depending on your interests,
                destination and the kind of Sri Lankan experience you want.
              </p>

              <div className="mt-5 grid grid-cols-3 gap-2 border-t border-black/[0.07] pt-5">
                <div>
                  <p className="text-[1.4rem] font-semibold tracking-[-0.04em] text-[#008000]">
                    {activities.length}
                  </p>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-black/35">
                    Activities
                  </p>
                </div>

                <div>
                  <p className="text-[1.4rem] font-semibold tracking-[-0.04em] text-[#008000]">
                    5
                  </p>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-black/35">
                    Categories
                  </p>
                </div>

                <div>
                  <p className="text-[1.4rem] font-semibold tracking-[-0.04em] text-[#008000]">
                    Local
                  </p>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-black/35">
                    Experiences
                  </p>
                </div>
              </div>

              <Link
                href="/booking?type=activity"
                className="group mt-6 inline-flex items-center gap-2 text-[10px] font-semibold text-[#008000]"
              >
                Plan an experience

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
                  Activities
                </p>
              </div>

              <h2 className="mt-4 text-[clamp(2.4rem,4vw,4.2rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#182018]">
                Find your kind
                <br />

                <span className="font-medium italic text-[#008000]">
                  of adventure.
                </span>
              </h2>
            </div>

            <p className="max-w-[620px] text-[14px] leading-7 text-black/50 lg:justify-self-end">
              Whether you want adventure, nature, wildlife, culture or
              relaxation, Sri Lanka offers experiences for every kind of
              traveler.
            </p>
          </div>

          {/* CATEGORY LABELS */}

          <div className="mt-9 flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <span
                key={category}
                className={`rounded-full border px-4 py-2 text-[10px] font-medium ${
                  index === 0
                    ? "border-[#008000] bg-[#008000] text-white"
                    : "border-black/[0.08] bg-white text-black/55"
                }`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          ACTIVITIES GRID
      ========================================= */}

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {activities.map((activity) => {
              const Icon =
                categoryIcons[
                  activity.category as keyof typeof categoryIcons
                ];

              return (
                <Link
                  key={activity.slug}
                  href={activity.href}
                  className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-black/[0.07] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#90EE90] hover:shadow-[0_18px_40px_rgba(40,90,40,0.10)]"
                >
                  {/* IMAGE */}

                  <div className="relative aspect-[4/3] overflow-hidden bg-[#edf3e9]">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    {/* NUMBER */}

                    <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/90 px-3 py-1.5 text-[8px] font-semibold tracking-[0.18em] text-[#008000] backdrop-blur-md">
                      {activity.number}
                    </span>

                    {/* CATEGORY ICON */}

                    <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/90 text-[#008000] backdrop-blur-md">
                      <Icon size={15} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-2">
                      <MapPin size={10} className="text-[#008000]" />

                      <span className="text-[8px] uppercase tracking-[0.18em] text-black/40">
                        {activity.location}
                      </span>
                    </div>

                    <p className="mt-4 text-[8px] font-semibold uppercase tracking-[0.25em] text-[#70b870]">
                      {activity.category}
                    </p>

                    <h3 className="mt-1.5 text-[20px] font-semibold tracking-[-0.035em] text-[#182018] transition-colors duration-300 group-hover:text-[#008000]">
                      {activity.title}
                    </h3>

                    <p className="mt-3 text-[11px] leading-[1.7] text-black/45">
                      {activity.shortDescription}
                    </p>

                    <div className="mt-auto pt-5">
                      <div className="flex items-center justify-between border-t border-black/[0.06] pt-4">
                        <span className="text-[9px] font-semibold text-[#008000]">
                          Explore activity
                        </span>

                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f0f8ed] text-[#008000] transition-all duration-300 group-hover:bg-[#008000] group-hover:text-white">
                          <ArrowRight
                            size={12}
                            className="transition-transform duration-300 group-hover:translate-x-[2px]"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================
          CUSTOM EXPERIENCE CTA
      ========================================= */}

      <section className="bg-[#eef5ea] py-16 md:py-20">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <Compass size={15} className="text-[#008000]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                  Your journey
                </span>
              </div>

              <h2 className="mt-4 text-[clamp(2.4rem,4vw,4.2rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#182018]">
                Mix experiences into
                <br />

                <span className="font-medium italic text-[#008000]">
                  your perfect trip.
                </span>
              </h2>
            </div>

            <div className="lg:justify-self-end">
              <p className="max-w-[520px] text-[13px] leading-6 text-black/50">
                Tell us which activities interest you and we can include them
                while planning your Sri Lankan itinerary.
              </p>

              <Link
                href="/services/custom-itineraries"
                className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#008000] px-6 py-3 text-[10px] font-semibold text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#087508]"
              >
                Plan my journey

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
          CONTACT
      ========================================= */}

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="flex flex-col gap-6 rounded-[24px] bg-[#102719] px-6 py-8 text-white md:flex-row md:items-center md:justify-between md:px-9">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#90EE90]/10 text-[#BDF5B5]">
                <MessageCircle size={20} />
              </div>

              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#BDF5B5]">
                  Ask Avi Lanka
                </p>

                <h3 className="mt-1 text-[19px] font-semibold tracking-[-0.025em]">
                  Looking for a specific experience?
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-white/50">
                  Tell us what you&apos;d like to do and we&apos;ll help you
                  include it in your journey.
                </p>
              </div>
            </div>

            <Link
              href="/booking?type=activity"
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