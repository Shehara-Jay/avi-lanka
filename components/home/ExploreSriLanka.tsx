"use client";

import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const places = [
  {
    number: "01",
    title: "Sigiriya",
    subtitle: "Ancient Kingdom",
    location: "Central Province",
    description:
      "Climb one of Sri Lanka's most iconic landmarks and discover the history of an ancient royal fortress.",
    image: "/images/explore/sigiriya.jpg",
    href: "/about-sri-lanka/sigiriya",
  },
  {
    number: "02",
    title: "Ella",
    subtitle: "Hill Country",
    location: "Uva Province",
    description:
      "Tea-covered mountains, waterfalls and unforgettable train journeys through Sri Lanka's highlands.",
    image: "/images/explore/ella.jpg",
    href: "/about-sri-lanka/ella",
  },
  {
    number: "03",
    title: "Kandy",
    subtitle: "Culture & Heritage",
    location: "Central Province",
    description:
      "Explore Sri Lanka's cultural capital, surrounded by hills, temples and living traditions.",
    image: "/images/explore/kandy.jpg",
    href: "/about-sri-lanka/kandy",
  },
  {
    number: "04",
    title: "Yala",
    subtitle: "The Wild",
    location: "Southern Sri Lanka",
    description:
      "Enter one of Sri Lanka's most remarkable wildlife landscapes and experience safari country.",
    image: "/images/explore/yala.jpg",
    href: "/about-sri-lanka/yala",
  },
  {
    number: "05",
    title: "Galle",
    subtitle: "Southern Coast",
    location: "Southern Province",
    description:
      "Walk through historic streets, ocean-facing fortifications and the atmosphere of Sri Lanka's south coast.",
    image: "/images/explore/galle.jpg",
    href: "/about-sri-lanka/galle",
  },
  {
    number: "06",
    title: "Nuwara Eliya",
    subtitle: "Tea Country",
    location: "Central Highlands",
    description:
      "Cool mountain air, tea estates and green landscapes in the heart of Sri Lanka's hill country.",
    image: "/images/explore/nuwara-eliya.jpg",
    href: "/about-sri-lanka/nuwara-eliya",
  },
];

export default function ExploreSriLanka() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getScrollDistance = () => {
        return Math.max(0, track.scrollWidth - window.innerWidth + 160);
      };

      /*
       * Horizontal cards move from right to left
       * while the section remains pinned.
       */
      gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",

        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollDistance() + window.innerHeight * 1.4}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /*
       * Slow background movement for depth.
       */
      gsap.to(backgroundRef.current, {
        scale: 1.12,
        xPercent: -4,
        ease: "none",

        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      /*
       * Heading subtly drifts upward while scrolling.
       */
      gsap.to(contentRef.current, {
        yPercent: -12,
        ease: "none",

        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
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
          BACKGROUND
      ========================================== */}

      <div
        ref={backgroundRef}
        className="absolute inset-0 scale-[1.03] bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: "url('/images/explore/background.jpg')",
        }}
      />

      {/* Background treatment */}

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/10" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

      {/* =========================================
          INTRO CONTENT
      ========================================== */}

      <div
        ref={contentRef}
        className="pointer-events-none absolute left-0 right-0 top-0 z-20 mx-auto max-w-[1540px] px-6 pt-24 md:px-10 md:pt-28 lg:px-16"
      >
        <div className="max-w-[680px]">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-7 bg-[#90EE90]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#C4F3BE]">
              Explore Sri Lanka
            </span>
          </div>

          <h2 className="text-[clamp(2.8rem,5vw,5.6rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-white">
            One island.
            <br />

            <span className="font-medium italic text-[#C4F3BE]">
              Endless stories.
            </span>
          </h2>

          <p className="mt-5 max-w-[470px] text-[13px] leading-6 text-white/65">
            From ancient kingdoms and misty mountains to wildlife reserves and
            tropical coastlines, discover the places that make Sri Lanka
            unforgettable.
          </p>
        </div>
      </div>

      {/* =========================================
          HORIZONTAL CARD TRACK
      ========================================== */}

      <div
        ref={trackRef}
        className="
          absolute
          bottom-[7vh]
          left-[48vw]
          z-30
          flex
          w-max
          gap-5
          pr-[20vw]
          will-change-transform
        "
      >
        {places.map((place) => (
          <Link
            key={place.number}
            href={place.href}
            className="
              group
              relative
              h-[410px]
              w-[300px]
              shrink-0
              overflow-hidden
              rounded-[26px]
              border
              border-white/15
              bg-white/10
              shadow-[0_20px_50px_rgba(0,0,0,0.18)]
              backdrop-blur-sm
              transition-all
              duration-500

              hover:-translate-y-3
              hover:border-[#90EE90]/70
              hover:shadow-[0_26px_60px_rgba(0,0,0,0.28)]

              md:h-[460px]
              md:w-[330px]

              xl:h-[500px]
              xl:w-[360px]
            "
          >
            {/* Image */}

            <img
              src={place.image}
              alt={place.title}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition-transform
                duration-[1000ms]
                ease-out
                group-hover:scale-[1.08]
              "
            />

            {/* Card gradients */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/10" />

            <div className="absolute inset-0 bg-[#008000]/0 transition-colors duration-500 group-hover:bg-[#008000]/[0.07]" />

            {/* Number */}

            <div className="absolute left-5 top-5">
              <span className="rounded-full border border-white/25 bg-black/10 px-3 py-1.5 text-[8px] font-semibold tracking-[0.2em] text-white backdrop-blur-md">
                {place.number}
              </span>
            </div>

            {/* Arrow */}

            <div
              className="
                absolute
                right-5
                top-5
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/25
                bg-black/10
                text-white
                backdrop-blur-md
                transition-all
                duration-400

                group-hover:rotate-45
                group-hover:border-[#90EE90]
                group-hover:bg-[#90EE90]
                group-hover:text-[#175c17]
              "
            >
              <ArrowUpRight size={15} />
            </div>

            {/* Content */}

            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="flex items-center gap-2 text-white/55">
                <MapPin size={11} />

                <span className="text-[8px] font-medium uppercase tracking-[0.25em]">
                  {place.location}
                </span>
              </div>

              <p className="mt-4 text-[8px] font-semibold uppercase tracking-[0.3em] text-[#C4F3BE]">
                {place.subtitle}
              </p>

              <h3 className="mt-1 text-[2rem] font-medium tracking-[-0.045em] text-white md:text-[2.2rem]">
                {place.title}
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
                  <p className="max-w-[280px] pb-1 text-[12px] leading-5 text-white/65">
                    {place.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom green accent */}

            <div
              className="
                absolute
                bottom-0
                left-0
                h-[3px]
                w-0
                bg-[#90EE90]
                transition-all
                duration-700
                group-hover:w-full
              "
            />
          </Link>
        ))}
      </div>

      {/* =========================================
          SIDE LABEL
      ========================================== */}

      <div className="pointer-events-none absolute bottom-7 left-6 z-20 hidden items-center gap-4 text-white/45 md:flex md:left-10 lg:left-16">
        <span className="text-[8px] uppercase tracking-[0.3em]">
          Scroll to explore
        </span>

        <span className="h-px w-16 bg-white/25" />

        <span className="text-[8px] uppercase tracking-[0.2em] text-[#C4F3BE]">
          01 — 06
        </span>
      </div>

      {/* =========================================
          RIGHT EDGE FADE
      ========================================== */}

      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-40 w-[8vw] bg-gradient-to-l from-black/25 to-transparent" />
    </section>
  );
}