"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Private Tours",
    description:
      "Personalized journeys across Sri Lanka, designed around your interests, schedule and travel style.",
    image: "/images/services/private-tours.jpg",
    href: "/services/private-tours",
  },
  {
    number: "02",
    title: "Car with Driver",
    description:
      "Travel comfortably with an experienced local driver and the flexibility to explore at your own pace.",
    image: "/images/services/car-driver.jpg",
    href: "/services/car-with-driver",
  },
  {
    number: "03",
    title: "Local Guides",
    description:
      "Discover Sri Lanka with knowledgeable local guides who bring each destination and story to life.",
    image: "/images/services/local-guide.jpg",
    href: "/services/local-guides",
  },
  {
    number: "04",
    title: "Translator & Assistance",
    description:
      "Practical local support and translation assistance to make your journey easier from arrival to departure.",
    image: "/images/services/translator.jpg",
    href: "/services/translator-assistance",
  },
  {
    number: "05",
    title: "Car Rental",
    description:
      "Flexible transport options for travelers who want greater independence while exploring the island.",
    image: "/images/services/car-rental.jpg",
    href: "/services/car-rental",
  },
  {
    number: "06",
    title: "Custom Itineraries",
    description:
      "Tell us what you want to experience and we will shape a Sri Lankan journey around you.",
    image: "/images/services/custom-itinerary.jpg",
    href: "/services/custom-itineraries",
  },
];

export default function OurServices() {
  return (
    <section className="bg-[#fbfcf8] pb-20 pt-10 md:pb-24 md:pt-12 lg:pb-28 lg:pt-14">
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
              key={service.number}
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

                {/* TOP NUMBER */}

                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-white/90 px-3 py-1.5 text-[8px] font-semibold tracking-[0.18em] text-[#008000] backdrop-blur-md">
                    {service.number}
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
                  {service.description}
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