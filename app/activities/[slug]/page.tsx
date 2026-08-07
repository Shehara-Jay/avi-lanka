import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  MapPin,
  MessageCircle,
  Minus,
  ShieldCheck,
  Users,
} from "lucide-react";

import {
  activities,
  getActivityBySlug,
} from "@/data/activities";

type ActivityDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return activities.map((activity) => ({
    slug: activity.slug,
  }));
}

export default async function ActivityDetailPage({
  params,
}: ActivityDetailPageProps) {
  const { slug } = await params;

  const activity = getActivityBySlug(slug);

  if (!activity) {
    notFound();
  }

  const relatedActivities = activities
    .filter(
      (item) =>
        item.slug !== activity.slug &&
        item.category === activity.category
    )
    .slice(0, 3);

  return (
    <main className="bg-[#fbfcf8]">
      {/* ========================================
          IMAGE-FREE HERO
      ========================================= */}

      <section className="relative overflow-hidden bg-[#eef5ea] pt-32 md:pt-36">
        <div className="pointer-events-none absolute left-[-140px] top-[-150px] h-[430px] w-[430px] rounded-full bg-[#90EE90]/20 blur-[100px]" />

        <div className="pointer-events-none absolute bottom-[-170px] right-[-100px] h-[430px] w-[430px] rounded-full bg-[#008000]/[0.06] blur-[110px]" />

        <div className="mx-auto max-w-[1540px] px-6 pb-16 md:px-10 md:pb-20 lg:px-16">
          {/* BREADCRUMBS */}

          <div className="flex flex-wrap items-center gap-2 text-[9px] font-medium uppercase tracking-[0.2em] text-black/35">
            <Link
              href="/"
              className="transition-colors duration-300 hover:text-[#008000]"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/activities"
              className="transition-colors duration-300 hover:text-[#008000]"
            >
              Activities
            </Link>

            <span>/</span>

            <span className="text-[#008000]">
              {activity.title}
            </span>
          </div>

          {/* HERO */}

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#90EE90]" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                  {activity.category} Experience
                </p>
              </div>

              <h1 className="max-w-[900px] text-[clamp(3.5rem,6vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-[#182018]">
                {activity.title}
              </h1>

              <p className="mt-6 max-w-[680px] text-[15px] leading-7 text-black/50">
                {activity.description}
              </p>
            </div>

            {/* PACKAGE QUICK INFO */}

            <div className="grid grid-cols-2 gap-3 rounded-[24px] border border-black/[0.06] bg-white/70 p-4 backdrop-blur-sm">
              <div className="rounded-[17px] bg-white p-4">
                <Clock3
                  size={15}
                  className="text-[#008000]"
                />

                <p className="mt-4 text-[8px] font-semibold uppercase tracking-[0.22em] text-black/35">
                  Duration
                </p>

                <p className="mt-1 text-[12px] font-semibold text-[#182018]">
                  {activity.duration}
                </p>
              </div>

              <div className="rounded-[17px] bg-white p-4">
                <Users
                  size={15}
                  className="text-[#008000]"
                />

                <p className="mt-4 text-[8px] font-semibold uppercase tracking-[0.22em] text-black/35">
                  Group
                </p>

                <p className="mt-1 text-[12px] font-semibold text-[#182018]">
                  {activity.groupSize}
                </p>
              </div>

              <div className="rounded-[17px] bg-white p-4">
                <MapPin
                  size={15}
                  className="text-[#008000]"
                />

                <p className="mt-4 text-[8px] font-semibold uppercase tracking-[0.22em] text-black/35">
                  Location
                </p>

                <p className="mt-1 text-[12px] font-semibold text-[#182018]">
                  {activity.location}
                </p>
              </div>

              <div className="rounded-[17px] bg-white p-4">
                <ShieldCheck
                  size={15}
                  className="text-[#008000]"
                />

                <p className="mt-4 text-[8px] font-semibold uppercase tracking-[0.22em] text-black/35">
                  Suitable for
                </p>

                <p className="mt-1 text-[12px] font-semibold text-[#182018]">
                  {activity.suitableFor}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          PACKAGE OVERVIEW
      ========================================= */}

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-[1540px] gap-10 px-6 md:px-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#90EE90]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                Package overview
              </p>
            </div>

            <h2 className="mt-4 text-[clamp(2.4rem,3.6vw,4rem)] font-semibold leading-[0.97] tracking-[-0.05em] text-[#182018]">
              What to expect
              <br />

              <span className="font-medium italic text-[#008000]">
                from the experience.
              </span>
            </h2>
          </div>

          <div className="max-w-[720px]">
            <p className="text-[16px] leading-8 text-[#263026]">
              {activity.shortDescription}
            </p>

            <p className="mt-5 text-[14px] leading-7 text-black/50">
              This experience can be arranged individually or included as part
              of a larger Sri Lankan itinerary. The exact timing and location
              can be adjusted depending on your travel route, season and local
              conditions.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          WHAT YOU WILL DO
      ========================================= */}

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="overflow-hidden rounded-[28px] border border-black/[0.07] bg-white">
            <div className="grid lg:grid-cols-[0.65fr_1.35fr]">
              {/* LEFT */}

              <div className="bg-[#102719] p-7 text-white md:p-10">
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#BDF5B5]">
                  Your experience
                </p>

                <h2 className="mt-4 text-[clamp(2.4rem,3.5vw,3.8rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
                  What you&apos;ll
                  <br />

                  <span className="font-medium italic text-[#BDF5B5]">
                    do.
                  </span>
                </h2>

                <p className="mt-5 max-w-[360px] text-[12px] leading-6 text-white/50">
                  The experience may vary slightly depending on the selected
                  destination, local conditions and your preferences.
                </p>
              </div>

              {/* STEPS */}

              <div className="p-6 md:p-8 lg:p-10">
                <div className="border-t border-black/[0.08]">
                  {activity.whatYouWillDo.map(
                    (step, index) => (
                      <div
                        key={step}
                        className="group grid grid-cols-[52px_1fr_auto] items-center gap-4 border-b border-black/[0.08] py-5"
                      >
                        <span className="text-[9px] font-semibold tracking-[0.2em] text-[#008000]/50">
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <p className="text-[13px] font-medium leading-6 text-[#263026] transition-colors duration-300 group-hover:text-[#008000]">
                          {step}
                        </p>

                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#eef7ea] text-[#008000]">
                          <Check size={12} />
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          INCLUDED / NOT INCLUDED
      ========================================= */}

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-5 lg:grid-cols-2">
            {/* INCLUDED */}

            <div className="rounded-[26px] border border-[#90EE90]/40 bg-[#f2f8ef] p-6 md:p-8">
              <div className="mb-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                  Package includes
                </p>

                <h3 className="mt-2 text-[1.8rem] font-semibold tracking-[-0.035em] text-[#182018]">
                  What&apos;s included
                </h3>
              </div>

              <div className="space-y-3">
                {activity.included.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-[14px] bg-white/75 px-4 py-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#90EE90]/40 text-[#008000]">
                      <Check size={12} />
                    </span>

                    <span className="text-[12px] text-black/55">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* NOT INCLUDED */}

            <div className="rounded-[26px] border border-black/[0.07] bg-white p-6 md:p-8">
              <div className="mb-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-black/35">
                  Please note
                </p>

                <h3 className="mt-2 text-[1.8rem] font-semibold tracking-[-0.035em] text-[#182018]">
                  Not included
                </h3>
              </div>

              <div className="space-y-3">
                {activity.notIncluded.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-[14px] bg-[#f7f7f4] px-4 py-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black/[0.05] text-black/35">
                      <Minus size={12} />
                    </span>

                    <span className="text-[12px] text-black/50">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          IMPORTANT INFORMATION
      ========================================= */}

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="rounded-[28px] bg-[#eef5ea] p-6 md:p-9">
            <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                  Before you go
                </p>

                <h2 className="mt-3 text-[clamp(2rem,3vw,3.3rem)] font-semibold leading-[1] tracking-[-0.045em] text-[#182018]">
                  Important
                  <br />

                  <span className="font-medium italic text-[#008000]">
                    information.
                  </span>
                </h2>
              </div>

              <div className="border-t border-black/[0.08]">
                {activity.importantInfo.map(
                  (item, index) => (
                    <div
                      key={item}
                      className="grid gap-3 border-b border-black/[0.08] py-4 sm:grid-cols-[45px_1fr]"
                    >
                      <span className="text-[8px] font-semibold tracking-[0.18em] text-[#008000]/50">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <p className="text-[12px] leading-6 text-black/55">
                        {item}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          BOOKING CTA
      ========================================= */}

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="rounded-[28px] bg-[#102719] px-6 py-10 text-white md:px-10 md:py-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[760px]">
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#BDF5B5]">
                  Book this experience
                </p>

                <h2 className="mt-4 text-[clamp(2.5rem,4vw,4.4rem)] font-semibold leading-[0.96] tracking-[-0.05em]">
                  Add {activity.title}
                  <br />

                  <span className="font-medium italic text-[#BDF5B5]">
                    to your journey.
                  </span>
                </h2>

                <p className="mt-5 max-w-[560px] text-[12px] leading-6 text-white/50">
                  Send us your travel dates and requirements. We&apos;ll help
                  arrange the activity around your itinerary.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/booking?type=activity&item=${activity.slug}`}
                  className="group inline-flex items-center gap-3 rounded-full bg-[#008000] px-6 py-3.5 text-[10px] font-semibold text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#169b16]"
                >
                  Book / Send inquiry

                  <ArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/activities"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 text-[10px] font-semibold text-white transition-all duration-300 hover:border-[#90EE90] hover:bg-[#90EE90]/10"
                >
                  <ArrowLeft size={12} />

                  All activities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          RELATED ACTIVITIES
      ========================================= */}

      {relatedActivities.length > 0 && (
        <section className="bg-[#eef5ea] py-16 md:py-20">
          <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
            {/* HEADER */}

            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                  Keep exploring
                </p>

                <h2 className="mt-3 text-[clamp(2.2rem,3.5vw,3.6rem)] font-semibold tracking-[-0.045em] text-[#182018]">
                  Related activities
                </h2>
              </div>

              <Link
                href="/activities"
                className="group inline-flex items-center gap-2 text-[10px] font-semibold text-[#008000]"
              >
                View all activities

                <ArrowRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* RELATED CARDS */}

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedActivities.map((item) => (
                <Link
                  key={item.slug}
                  href={item.href}
                  className="
                    group
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-black/[0.06]
                    bg-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#90EE90]
                    hover:shadow-[0_16px_40px_rgba(40,90,40,0.10)]
                  "
                >
                  {/* IMAGE */}

                  <div className="relative aspect-[4/3] overflow-hidden bg-[#edf3e9]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.06]
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                    {/* CATEGORY */}

                    <div className="absolute left-4 top-4">
                      <span className="rounded-full border border-white/40 bg-white/90 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#008000] backdrop-blur-md">
                        {item.category}
                      </span>
                    </div>

                    {/* ARROW */}

                    <div
                      className="
                        absolute
                        right-4
                        top-4
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/50
                        bg-white/90
                        text-[#182018]
                        backdrop-blur-md
                        transition-all
                        duration-300
                        group-hover:bg-[#008000]
                        group-hover:text-white
                      "
                    >
                      <ArrowRight
                        size={13}
                        className="transition-transform duration-300 group-hover:translate-x-[2px]"
                      />
                    </div>

                    {/* IMAGE TITLE */}

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white/65">
                        <MapPin size={10} />

                        <span className="text-[8px] uppercase tracking-[0.2em]">
                          {item.location}
                        </span>
                      </div>

                      <h3 className="mt-2 text-[22px] font-semibold tracking-[-0.035em] text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="p-5">
                    <p className="line-clamp-2 text-[11px] leading-5 text-black/45">
                      {item.shortDescription}
                    </p>

                    <div className="mt-4 flex items-center justify-between border-t border-black/[0.06] pt-4">
                      <span className="text-[9px] font-semibold text-[#008000]">
                        Explore activity
                      </span>

                      <ArrowRight
                        size={12}
                        className="text-[#008000] transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================
          SUPPORT
      ========================================= */}

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="flex flex-col gap-6 rounded-[24px] border border-black/[0.07] bg-white px-6 py-7 md:flex-row md:items-center md:justify-between md:px-8">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eef7ea] text-[#008000]">
                <MessageCircle size={18} />
              </span>

              <div>
                <h3 className="text-[17px] font-semibold tracking-[-0.025em] text-[#182018]">
                  Have a question about {activity.title}?
                </h3>

                <p className="mt-1 text-[11px] text-black/45">
                  Contact Avi Lanka and we&apos;ll help you with the package
                  details.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-2 text-[10px] font-semibold text-[#008000]"
            >
              Contact us

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