import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";

export default function OurServices() {
  return (
    <section className="bg-[#fbfcf8] py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
        {/* HEADER */}

        <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#90EE90]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                Our Services
              </p>
            </div>

            <h2 className="max-w-[700px] text-[clamp(2.6rem,4vw,4.6rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#182018]">
              Travel Sri Lanka
              <br />

              <span className="font-medium italic text-[#008000]">
                your way.
              </span>
            </h2>
          </div>

          <p className="max-w-[390px] text-[13px] leading-6 text-black/50 lg:justify-self-end">
            From private tours and trusted transport to local guides and
            tailor-made itineraries, Avi Lanka helps make your journey simple,
            flexible and personal.
          </p>
        </div>

        {/* SERVICE GRID */}

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={service.href}
              className="
                group
                overflow-hidden
                rounded-[24px]
                border
                border-black/[0.07]
                bg-white
                transition-all
                duration-300
                ease-out
                hover:-translate-y-1
                hover:border-[#90EE90]
                hover:shadow-[0_18px_40px_rgba(40,90,40,0.10)]
              "
            >
              {/* IMAGE */}

              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
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

                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-white/90 px-3 py-1.5 text-[8px] font-semibold tracking-[0.18em] text-[#008000] backdrop-blur-md">
                    {service.number}
                  </span>
                </div>

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
                    bg-white/85
                    text-black/50
                    backdrop-blur-md
                    transition-all
                    duration-300
                    group-hover:rotate-45
                    group-hover:border-[#90EE90]
                    group-hover:bg-[#90EE90]
                    group-hover:text-[#145c14]
                  "
                >
                  <ArrowUpRight size={14} />
                </div>
              </div>

              {/* CONTENT */}

              <div className="p-5">
                <h3 className="text-[1.35rem] font-semibold tracking-[-0.035em] text-[#1d241d] transition-colors duration-300 group-hover:text-[#008000]">
                  {service.title}
                </h3>

                <p className="mt-2 line-clamp-2 text-[12px] leading-5 text-black/45">
                  {service.shortDescription}
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <span className="h-[4px] w-[4px] rounded-full bg-[#90EE90]" />

                  <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#008000]">
                    Explore service
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* FOOTER */}

        <div className="mt-8 flex items-center justify-between border-t border-black/[0.08] pt-5">
          <span className="text-[8px] font-medium uppercase tracking-[0.28em] text-black/30">
            Explore with Avi Lanka
          </span>

          <Link
            href="/services"
            className="group flex items-center gap-2 text-[10px] font-semibold text-[#008000]"
          >
            View all services

            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}