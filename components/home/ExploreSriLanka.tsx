"use client";

import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { destinations } from "@/data/destinations";

gsap.registerPlugin(ScrollTrigger);

const places = destinations.filter(
  (destination) => destination.featured
);

export default function ExploreSriLanka() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      /*
       * The card track starts at 58vw.
       *
       * We need to include that starting offset when calculating
       * how far the cards must travel.
       *
       * The final card will stop with its right edge around 88%
       * of the viewport, ensuring every card becomes visible
       * before the section unpins.
       */
      const getScrollDistance = () => {
        const viewportWidth = window.innerWidth;

        const trackStart = viewportWidth * 0.58;
        const desiredFinalRight = viewportWidth * 0.88;

        return Math.max(
          0,
          trackStart +
            track.scrollWidth -
            desiredFinalRight
        );
      };

      /*
       * Horizontal card movement
       */
      gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",

        scrollTrigger: {
          trigger: section,

          start: "top top",

          /*
           * Give the user enough vertical scrolling distance
           * to comfortably move through every card.
           */
          end: () =>
            `+=${getScrollDistance() * 1.2}`,

          scrub: 1,

          pin: true,

          anticipatePin: 1,

          invalidateOnRefresh: true,
        },
      });

      /*
       * Very subtle heading movement
       */
      gsap.to(contentRef.current, {
        yPercent: -6,
        ease: "none",

        scrollTrigger: {
          trigger: section,

          start: "top top",

          end: () =>
            `+=${getScrollDistance() * 1.2}`,

          scrub: 1.5,

          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] overflow-hidden bg-[#17331f]"
    >
      {/* =========================================
          BASE BACKGROUND
      ========================================== */}

      <div className="absolute inset-0 bg-[#17331f]" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />

      <div className="pointer-events-none absolute left-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-[#90EE90]/[0.035] blur-[130px]" />

      {/* =========================================
          HORIZONTAL CARD TRACK
      ========================================== */}

      <div
        ref={trackRef}
        className="
          absolute
          bottom-[5vh]
          left-[58vw]
          z-20

          flex
          w-max
          gap-5

          pr-[10vw]

          will-change-transform
        "
      >
        {places.map((place) => (
          <Link
            key={place.slug}
            href={place.href}
            className="
              group
              relative

              h-[370px]
              w-[280px]

              shrink-0
              overflow-hidden

              rounded-[24px]

              border
              border-white/15

              bg-white/[0.06]

              shadow-[0_20px_50px_rgba(0,0,0,0.18)]

              transition-all
              duration-500

              hover:-translate-y-2
              hover:border-[#90EE90]/60
              hover:shadow-[0_26px_60px_rgba(0,0,0,0.26)]

              md:h-[400px]
              md:w-[300px]

              xl:h-[430px]
              xl:w-[320px]
            "
          >
            {/* IMAGE */}

            <img
              src={place.image}
              alt={place.name}
              className="
                absolute
                inset-0

                h-full
                w-full

                object-cover

                transition-transform
                duration-[1000ms]
                ease-out

                group-hover:scale-[1.07]
              "
            />

            {/* IMAGE GRADIENT */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/5" />

            {/* GREEN HOVER TINT */}

            <div className="absolute inset-0 bg-[#008000]/0 transition-colors duration-500 group-hover:bg-[#008000]/[0.06]" />

            {/* NUMBER */}

            <div className="absolute left-5 top-5">
              <span className="rounded-full border border-white/25 bg-black/10 px-3 py-1.5 text-[8px] font-semibold tracking-[0.2em] text-white backdrop-blur-md">
                {place.number}
              </span>
            </div>

            {/* ARROW */}

            <div
              className="
                absolute
                right-5
                top-5

                flex
                h-9
                w-9
                items-center
                justify-center

                rounded-full

                border
                border-white/25

                bg-black/10
                text-white

                backdrop-blur-md

                transition-all
                duration-500

                group-hover:rotate-45
                group-hover:border-[#90EE90]
                group-hover:bg-[#90EE90]
                group-hover:text-[#175c17]
              "
            >
              <ArrowUpRight size={14} />
            </div>

            {/* CONTENT */}

            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="flex items-center gap-2 text-white/55">
                <MapPin size={10} />

                <span className="text-[8px] font-medium uppercase tracking-[0.24em]">
                  {place.region}
                </span>
              </div>

              <p className="mt-3 text-[8px] font-semibold uppercase tracking-[0.28em] text-[#C4F3BE]">
                {place.category}
              </p>

              <h3 className="mt-1 text-[1.8rem] font-medium tracking-[-0.04em] text-white md:text-[2rem]">
                {place.name}
              </h3>

              <div
                className="
                  grid
                  grid-rows-[0fr]

                  overflow-hidden
                  opacity-0

                  transition-all
                  duration-500

                  group-hover:mt-3
                  group-hover:grid-rows-[1fr]
                  group-hover:opacity-100
                "
              >
                <div className="overflow-hidden">
                  <p className="max-w-[270px] pb-1 text-[11px] leading-5 text-white/65">
                    {place.shortDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* BOTTOM GREEN LINE */}

            <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#90EE90] transition-all duration-700 group-hover:w-full" />
          </Link>
        ))}
      </div>

      {/* =========================================
          LEFT PROTECTED AREA
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          top-0
          z-30

          hidden
          w-[47vw]

          bg-gradient-to-r
          from-[#17331f]
          from-[70%]
          via-[#17331f]/95
          via-[82%]
          to-transparent

          lg:block
        "
      />

      {/* =========================================
          INTRO CONTENT
      ========================================== */}

      <div
        ref={contentRef}
        className="
          pointer-events-none

          absolute
          left-0
          right-0
          top-0

          z-40

          mx-auto
          max-w-[1540px]

          px-6
          pt-24

          md:px-10
          md:pt-28

          lg:px-16
        "
      >
        <div className="max-w-[560px]">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-7 bg-[#90EE90]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#C4F3BE]">
              Explore Sri Lanka
            </span>
          </div>

          <h2 className="text-[clamp(2.8rem,4.5vw,5rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-white">
            One island.
            <br />

            <span className="font-medium italic text-[#C4F3BE]">
              Endless stories.
            </span>
          </h2>

          <p className="mt-5 max-w-[430px] text-[13px] leading-6 text-white/60">
            From ancient kingdoms and misty mountains to wildlife reserves and
            tropical coastlines, discover the places that make Sri Lanka
            unforgettable.
          </p>
        </div>
      </div>

      {/* =========================================
          SCROLL INDICATOR
      ========================================== */}

      <div
        className="
          pointer-events-none

          absolute
          bottom-7
          left-6

          z-40

          hidden
          items-center
          gap-4

          text-white/45

          md:left-10
          md:flex

          lg:left-16
        "
      >
        <span className="text-[8px] uppercase tracking-[0.3em]">
          Scroll to explore
        </span>

        <span className="h-px w-16 bg-white/25" />

        <span className="text-[8px] uppercase tracking-[0.2em] text-[#C4F3BE]">
          01 — {String(places.length).padStart(2, "0")}
        </span>
      </div>

      {/* =========================================
          RIGHT EDGE FADE
      ========================================== */}

      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-30 w-[5vw] bg-gradient-to-l from-[#17331f]/40 to-transparent" />
    </section>
  );
}