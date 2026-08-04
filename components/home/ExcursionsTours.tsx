"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  MapPin,
} from "lucide-react";
import { useState } from "react";

const tours = [
  {
    number: "01",
    title: "Kandy Kingdom",
    location: "Kandy",
    duration: "1 Day",
    price: "From $185",
    description:
      "Discover Sri Lanka's cultural heart with temples, gardens, mountain scenery and the historic city of Kandy.",
    image: "/images/tours/kandy.jpg",
    href: "/tours/kandy-kingdom",
  },
  {
    number: "02",
    title: "Sigiriya & Dambulla",
    location: "Cultural Triangle",
    duration: "1 Day",
    price: "From $195",
    description:
      "Climb the legendary Sigiriya Rock Fortress and explore the ancient cave temples of Dambulla.",
    image: "/images/tours/sigiriya.jpg",
    href: "/tours/sigiriya-dambulla",
  },
  {
    number: "03",
    title: "Wild Yala",
    location: "Yala",
    duration: "2 Days",
    price: "From $290",
    description:
      "Journey into Sri Lanka's wild south for safari landscapes, elephants, birdlife and the chance to spot leopards.",
    image: "/images/tours/yala.jpg",
    href: "/tours/wild-yala",
  },
  {
    number: "04",
    title: "Ella Escape",
    location: "Ella",
    duration: "2 Days",
    price: "From $275",
    description:
      "Experience misty mountains, tea country, waterfalls and one of the island's most beautiful hill-country escapes.",
    image: "/images/tours/ella.jpg",
    href: "/tours/ella-escape",
  },
];

export default function ExcursionsTours() {
  const [activeTour, setActiveTour] = useState(0);

  const previousTour = () => {
    setActiveTour((current) =>
      current === 0 ? tours.length - 1 : current - 1
    );
  };

  const nextTour = () => {
    setActiveTour((current) =>
      current === tours.length - 1 ? 0 : current + 1
    );
  };

  const tour = tours[activeTour];

  return (
    <section className="overflow-hidden bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
        {/* ================================
            SECTION HEADER
        ================================= */}

        <div className="mb-10 flex flex-col gap-6 md:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#90EE90]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                Excursions & Tours
              </p>
            </div>

            <h2 className="max-w-[650px] text-[clamp(2.5rem,4vw,4.5rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#182018]">
              Discover more of
              <br />

              <span className="font-medium italic text-[#008000]">
                Sri Lanka.
              </span>
            </h2>
          </div>

          <div className="flex max-w-[420px] flex-col gap-5">
            <p className="text-[13px] leading-6 text-black/50">
              From one-day discoveries to multi-day journeys, explore some of
              Sri Lanka&apos;s most memorable places with a route designed to
              make every day count.
            </p>

            <Link
              href="/tours"
              className="group flex w-fit items-center gap-2 text-[10px] font-semibold text-[#008000]"
            >
              View all excursions

              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        {/* ================================
            MAIN TOUR EXPERIENCE
        ================================= */}

        <div className="grid overflow-hidden rounded-[28px] border border-black/[0.06] bg-[#f8faf6] lg:grid-cols-[1.25fr_0.75fr]">
          {/* ================================
              TOUR IMAGE
          ================================= */}

          <div className="relative min-h-[420px] overflow-hidden md:min-h-[540px] lg:min-h-[620px]">
            {tours.map((item, index) => (
              <img
                key={item.image}
                src={item.image}
                alt={item.title}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                  activeTour === index
                    ? "scale-100 opacity-100"
                    : "scale-[1.04] opacity-0"
                }`}
              />
            ))}

            {/* IMAGE GRADIENT */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/5" />

            {/* TOUR NUMBER */}

            <div className="absolute left-5 top-5 md:left-7 md:top-7">
              <span className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-[8px] font-semibold tracking-[0.22em] text-white backdrop-blur-md">
                {tour.number} / 0{tours.length}
              </span>
            </div>

            {/* LOCATION */}

            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <div className="flex items-center gap-2 text-white/80">
                <MapPin size={13} />

                <span className="text-[9px] font-medium uppercase tracking-[0.24em]">
                  {tour.location}
                </span>
              </div>
            </div>
          </div>

          {/* ================================
              TOUR INFORMATION
          ================================= */}

          <div className="flex min-h-[460px] flex-col justify-between p-6 md:p-9 lg:min-h-0 lg:p-10">
            <div>
              {/* DURATION */}

              <div className="flex items-center gap-2 text-[#008000]">
                <Clock3 size={14} />

                <span className="text-[9px] font-semibold uppercase tracking-[0.25em]">
                  {tour.duration}
                </span>
              </div>

              {/* TITLE */}

              <h3 className="mt-6 max-w-[420px] text-[clamp(2.2rem,3.5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-[#192019]">
                {tour.title}
              </h3>

              {/* DESCRIPTION */}

              <p className="mt-5 max-w-[420px] text-[13px] leading-6 text-black/50">
                {tour.description}
              </p>

              {/* PRICE */}

              <div className="mt-8 border-t border-black/[0.08] pt-5">
                <p className="text-[8px] font-medium uppercase tracking-[0.25em] text-black/35">
                  Tour price
                </p>

                <p className="mt-1 text-[1.35rem] font-semibold tracking-[-0.03em] text-[#008000]">
                  {tour.price}
                </p>
              </div>
            </div>

            {/* ================================
                ACTIONS
            ================================= */}

            <div className="mt-10">
              <Link
                href={tour.href}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-full
                  bg-[#008000]
                  px-5
                  py-3.5
                  text-[11px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#169b16]
                  hover:shadow-[0_10px_25px_rgba(0,128,0,0.18)]
                "
              >
                Explore this tour

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              {/* ================================
                  ARROW NAVIGATION ONLY
              ================================= */}

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={previousTour}
                    aria-label="Previous tour"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-black/10
                      bg-white
                      text-black/45
                      transition-all
                      duration-300
                      hover:-translate-x-0.5
                      hover:border-[#90EE90]
                      hover:bg-[#90EE90]
                      hover:text-[#145c14]
                    "
                  >
                    <ArrowLeft size={14} />
                  </button>

                  <button
                    type="button"
                    onClick={nextTour}
                    aria-label="Next tour"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-black/10
                      bg-white
                      text-black/45
                      transition-all
                      duration-300
                      hover:translate-x-0.5
                      hover:border-[#90EE90]
                      hover:bg-[#90EE90]
                      hover:text-[#145c14]
                    "
                  >
                    <ArrowRight size={14} />
                  </button>
                </div>

                {/* CURRENT POSITION */}

                <div className="flex items-center gap-3">
                  <span className="text-[8px] font-semibold tracking-[0.2em] text-[#008000]">
                    0{activeTour + 1}
                  </span>

                  <div className="h-[2px] w-20 overflow-hidden rounded-full bg-black/10">
                    <div
                      className="h-full bg-[#90EE90] transition-all duration-500"
                      style={{
                        width: `${
                          ((activeTour + 1) / tours.length) * 100
                        }%`,
                      }}
                    />
                  </div>

                  <span className="text-[8px] tracking-[0.2em] text-black/30">
                    0{tours.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}