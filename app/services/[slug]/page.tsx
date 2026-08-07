import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  MapPin,
  MessageCircle,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

import {
  getServiceBySlug,
  services,
} from "@/data/services";

type ServiceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services
    .filter(
      (item) => item.slug !== service.slug
    )
    .slice(0, 3);

  return (
    <main className="bg-[#fbfcf8]">
      {/* ========================================
          IMAGE-FREE HERO
      ========================================= */}

      <section className="relative overflow-hidden bg-[#eef5ea] pt-32 md:pt-36">
        <div className="pointer-events-none absolute left-[-150px] top-[-150px] h-[440px] w-[440px] rounded-full bg-[#90EE90]/20 blur-[100px]" />

        <div className="pointer-events-none absolute bottom-[-180px] right-[-100px] h-[440px] w-[440px] rounded-full bg-[#008000]/[0.06] blur-[110px]" />

        <div className="mx-auto max-w-[1540px] px-6 pb-16 md:px-10 md:pb-20 lg:px-16">
          {/* BREADCRUMB */}

          <div className="flex flex-wrap items-center gap-2 text-[9px] font-medium uppercase tracking-[0.2em] text-black/35">
            <Link
              href="/"
              className="transition-colors hover:text-[#008000]"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/services"
              className="transition-colors hover:text-[#008000]"
            >
              Services
            </Link>

            <span>/</span>

            <span className="text-[#008000]">
              {service.title}
            </span>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
            {/* LEFT */}

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#90EE90]" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                  Avi Lanka Service
                </p>
              </div>

              <h1 className="max-w-[900px] text-[clamp(3.5rem,6vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-[#182018]">
                {service.title}
              </h1>

              <p className="mt-6 max-w-[680px] text-[15px] leading-7 text-black/50">
                {service.description}
              </p>
            </div>

            {/* QUICK INFORMATION */}

            <div className="space-y-3 rounded-[24px] border border-black/[0.06] bg-white/70 p-4 backdrop-blur-sm">
              <div className="rounded-[17px] bg-white p-4">
                <ShieldCheck
                  size={15}
                  className="text-[#008000]"
                />

                <p className="mt-3 text-[8px] font-semibold uppercase tracking-[0.22em] text-black/35">
                  Suitable for
                </p>

                <p className="mt-1 text-[12px] font-semibold leading-5 text-[#182018]">
                  {service.suitableFor}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-[17px] bg-white p-4">
                  <Clock3
                    size={15}
                    className="text-[#008000]"
                  />

                  <p className="mt-3 text-[8px] font-semibold uppercase tracking-[0.22em] text-black/35">
                    Availability
                  </p>

                  <p className="mt-1 text-[11px] font-semibold leading-5 text-[#182018]">
                    {service.availability}
                  </p>
                </div>

                <div className="rounded-[17px] bg-white p-4">
                  <RefreshCw
                    size={15}
                    className="text-[#008000]"
                  />

                  <p className="mt-3 text-[8px] font-semibold uppercase tracking-[0.22em] text-black/35">
                    Flexibility
                  </p>

                  <p className="mt-1 text-[11px] font-semibold leading-5 text-[#182018]">
                    {service.flexibility}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          OVERVIEW
      ========================================= */}

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-[1540px] gap-12 px-6 md:px-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#90EE90]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                Service overview
              </p>
            </div>

            <h2 className="mt-4 text-[clamp(2.4rem,3.6vw,4rem)] font-semibold leading-[0.97] tracking-[-0.05em] text-[#182018]">
              Travel with
              <br />

              <span className="font-medium italic text-[#008000]">
                less complication.
              </span>
            </h2>
          </div>

          <div className="max-w-[720px]">
            <p className="text-[16px] leading-8 text-[#263026]">
              {service.shortDescription}
            </p>

            <p className="mt-5 text-[14px] leading-7 text-black/50">
              This service can be arranged individually
              or combined with other Avi Lanka services,
              excursions and activities depending on your
              travel plans.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          HIGHLIGHTS
      ========================================= */}

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {service.highlights.map(
              (highlight, index) => (
                <div
                  key={highlight}
                  className="rounded-[20px] border border-black/[0.07] bg-white p-5"
                >
                  <span className="text-[8px] font-semibold tracking-[0.22em] text-[#008000]/45">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <p className="mt-6 text-[13px] font-medium leading-6 text-[#263026]">
                    {highlight}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ========================================
          HOW IT WORKS
      ========================================= */}

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="overflow-hidden rounded-[28px] border border-black/[0.07] bg-white">
            <div className="grid lg:grid-cols-[0.65fr_1.35fr]">
              {/* LEFT */}

              <div className="bg-[#102719] p-7 text-white md:p-10">
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#BDF5B5]">
                  Simple process
                </p>

                <h2 className="mt-4 text-[clamp(2.4rem,3.5vw,3.8rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
                  How it
                  <br />

                  <span className="font-medium italic text-[#BDF5B5]">
                    works.
                  </span>
                </h2>

                <p className="mt-5 max-w-[360px] text-[12px] leading-6 text-white/50">
                  Tell us what you need and we&apos;ll
                  help organize the details around your
                  travel plans.
                </p>
              </div>

              {/* STEPS */}

              <div className="p-6 md:p-8 lg:p-10">
                <div className="border-t border-black/[0.08]">
                  {service.howItWorks.map(
                    (step, index) => (
                      <div
                        key={step}
                        className="grid grid-cols-[52px_1fr_auto] items-center gap-4 border-b border-black/[0.08] py-5"
                      >
                        <span className="text-[9px] font-semibold tracking-[0.2em] text-[#008000]/50">
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <p className="text-[13px] font-medium leading-6 text-[#263026]">
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
          INCLUDED
      ========================================= */}

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="rounded-[28px] bg-[#eef5ea] p-6 md:p-9">
            <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                  Service includes
                </p>

                <h2 className="mt-3 text-[clamp(2.1rem,3vw,3.4rem)] font-semibold leading-[1] tracking-[-0.045em] text-[#182018]">
                  What you
                  <br />

                  <span className="font-medium italic text-[#008000]">
                    can expect.
                  </span>
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {service.included.map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-[15px] bg-white/80 px-4 py-4"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#90EE90]/40 text-[#008000]">
                        <Check size={12} />
                      </span>

                      <span className="text-[12px] leading-5 text-black/55">
                        {item}
                      </span>
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
                  Interested in this service?
                </p>

                <h2 className="mt-4 text-[clamp(2.5rem,4vw,4.4rem)] font-semibold leading-[0.96] tracking-[-0.05em]">
                  Let&apos;s arrange
                  <br />

                  <span className="font-medium italic text-[#BDF5B5]">
                    {service.title}.
                  </span>
                </h2>

                <p className="mt-5 max-w-[560px] text-[12px] leading-6 text-white/50">
                  Send us your dates and requirements
                  and we&apos;ll get back to you with the
                  next steps.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/booking?type=service&item=${service.slug}`}
                  className="group inline-flex items-center gap-3 rounded-full bg-[#008000] px-6 py-3.5 text-[10px] font-semibold text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#169b16]"
                >
                  Book / Send inquiry

                  <ArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 text-[10px] font-semibold text-white transition-all duration-300 hover:border-[#90EE90] hover:bg-[#90EE90]/10"
                >
                  <ArrowLeft size={12} />

                  All services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          RELATED SERVICES
      ========================================= */}

      <section className="bg-[#eef5ea] py-16 md:py-20">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                You may also need
              </p>

              <h2 className="mt-3 text-[clamp(2.2rem,3.5vw,3.6rem)] font-semibold tracking-[-0.045em] text-[#182018]">
                Related services
              </h2>
            </div>

            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-[10px] font-semibold text-[#008000]"
            >
              View all services

              <ArrowRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((item) => (
              <Link
                key={item.slug}
                href={item.href}
                className="group overflow-hidden rounded-[22px] border border-black/[0.06] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#90EE90] hover:shadow-[0_16px_40px_rgba(40,90,40,0.10)]"
              >
                {/* IMAGE */}

                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-[22px] font-semibold tracking-[-0.035em] text-white">
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
                      Explore service
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
                  Need help choosing a service?
                </h3>

                <p className="mt-1 text-[11px] text-black/45">
                  Tell us about your travel plans and
                  we&apos;ll recommend the right option.
                </p>
              </div>
            </div>

            <Link
              href="/booking"
              className="group inline-flex w-fit items-center gap-2 text-[10px] font-semibold text-[#008000]"
            >
              Send an inquiry

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