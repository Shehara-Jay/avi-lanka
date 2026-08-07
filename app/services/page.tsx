import Link from "next/link";
import {
  ArrowRight,
  Car,
  Languages,
  Map,
  MessageCircle,
  Route,
  UserRound,
} from "lucide-react";
import { services } from "@/data/services";

const serviceIcons = {
  "private-tours": Route,
  "car-with-driver": Car,
  "local-guides": UserRound,
  "translator-assistance": Languages,
  "car-rental": Car,
  "custom-itineraries": Map,
};

export default function ServicesPage() {
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
                  Our Services
                </p>
              </div>

              <h1 className="mt-5 max-w-[900px] text-[clamp(3.5rem,6vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-[#182018]">
                Travel Sri Lanka
                <br />

                <span className="font-medium italic text-[#008000]">
                  your way.
                </span>
              </h1>

              <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-black/50">
                From private tours and trusted transport to local guides and
                personalized itineraries, choose the support you need for your
                journey.
              </p>
            </div>

            {/* HERO SUMMARY */}

            <div className="rounded-[24px] border border-black/[0.06] bg-white/75 p-5 backdrop-blur-sm">
              <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                Travel support
              </p>

              <h2 className="mt-4 text-[1.7rem] font-semibold leading-[1.05] tracking-[-0.04em] text-[#182018]">
                Flexible services for
                <br />
                your Sri Lanka journey.
              </h2>

              <p className="mt-4 text-[11px] leading-5 text-black/45">
                Choose one service or combine several depending on how you
                prefer to travel.
              </p>

              <div className="mt-5 grid grid-cols-3 gap-2 border-t border-black/[0.07] pt-5">
                <div>
                  <p className="text-[1.4rem] font-semibold tracking-[-0.04em] text-[#008000]">
                    {services.length}
                  </p>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-black/35">
                    Services
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

                <div>
                  <p className="text-[1.4rem] font-semibold tracking-[-0.04em] text-[#008000]">
                    Local
                  </p>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-black/35">
                    Support
                  </p>
                </div>
              </div>

              <Link
                href="/booking?type=service"
                className="group mt-6 inline-flex items-center gap-2 text-[10px] font-semibold text-[#008000]"
              >
                Send a service inquiry

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
          SERVICES
      ========================================= */}

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          {/* HEADER */}

          <div className="mb-10 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-[#90EE90]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                What we offer
              </span>

              <span className="h-px w-7 bg-[#90EE90]" />
            </div>

            <h2 className="mt-4 text-[clamp(2.2rem,3.5vw,3.8rem)] font-semibold tracking-[-0.045em] text-[#182018]">
              Our Services
            </h2>

            <p className="mx-auto mt-3 max-w-[560px] text-[13px] leading-6 text-black/45">
              Choose the services that fit your travel style and let us take
              care of the rest.
            </p>
          </div>

          {/* CARDS */}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon =
                serviceIcons[
                  service.slug as keyof typeof serviceIcons
                ];

              return (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-black/[0.07] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#90EE90]/80 hover:shadow-[0_16px_40px_rgba(26,80,26,0.10)]"
                >
                  {/* IMAGE */}

                  <div className="relative aspect-[16/10] overflow-hidden bg-[#edf3e9]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/90 text-[#008000] shadow-sm backdrop-blur-sm">
                      <Icon size={17} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-[9px] font-semibold tracking-[0.2em] text-[#70b870]">
                      {service.number}
                    </span>

                    <h3 className="mt-2 text-[20px] font-semibold tracking-[-0.035em] text-[#182018] transition-colors duration-300 group-hover:text-[#008000]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-[12px] leading-[1.75] text-black/50">
                      {service.description}
                    </p>

                    <div className="mt-auto pt-6">
                      <div className="flex items-center justify-between border-t border-black/[0.06] pt-4">
                        <span className="text-[10px] font-semibold text-[#008000]">
                          Learn more
                        </span>

                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f0f8ed] text-[#008000] transition-all duration-300 group-hover:bg-[#008000] group-hover:text-white">
                          <ArrowRight
                            size={13}
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
          WHATSAPP CTA
      ========================================= */}

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="flex flex-col gap-6 rounded-[22px] bg-[#eef5ea] px-6 py-7 md:flex-row md:items-center md:justify-between md:px-9">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#008000] text-white">
                <MessageCircle size={20} />
              </div>

              <div>
                <h3 className="text-[18px] font-semibold tracking-[-0.025em] text-[#182018]">
                  Need help planning your trip?
                </h3>

                <p className="mt-1 text-[12px] leading-5 text-black/45">
                  Chat with us and we&apos;ll help you choose the right
                  services for your journey.
                </p>
              </div>
            </div>

            <Link
              href="/booking?type=service"
              className="group flex w-fit items-center gap-3 rounded-full bg-[#008000] px-6 py-3 text-[11px] font-semibold text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#087508]"
            >
              Send inquiry

              <ArrowRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}