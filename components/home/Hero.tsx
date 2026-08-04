"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Background parallax */
      gsap.to(imageRef.current, {
        yPercent: 18,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      /* Content scroll movement */
      gsap.to(contentRef.current, {
        yPercent: -16,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "25% top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[110vh] overflow-hidden bg-[#fafaf7]"
    >
      {/* =========================================
          STICKY HERO
      ========================================== */}

      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* =========================================
            BACKGROUND IMAGE
        ========================================== */}

        <div
          ref={imageRef}
          className="absolute inset-0 scale-[1.02] bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: "url('/images/hero/hero-main.jpg')",
          }}
        />

        {/* =========================================
            GRADIENT OVERLAYS
        ========================================== */}

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 via-[38%] to-transparent to-[72%]" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

        <div className="absolute inset-x-0 top-0 h-[180px] bg-gradient-to-b from-black/10 to-transparent" />

        {/* =========================================
            HERO CONTENT
        ========================================== */}

        <div
          ref={contentRef}
          className="relative z-10 mx-auto flex h-full max-w-[1540px] flex-col justify-center px-6 pt-24 md:px-10 lg:px-16"
        >
          <div className="max-w-[820px]">
            {/* EYEBROW */}

            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#90EE90]" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#B7F5B7]">
                Your guide to Sri Lanka
              </p>
            </div>

            {/* =========================================
                MAIN TITLE
            ========================================== */}

            <h1 className="text-[clamp(4.5rem,7.5vw,8rem)] font-semibold leading-[0.88] tracking-[-0.055em]">
              <span className="text-white">Sri Lanka,</span>

              <br />

              <span className="font-medium italic text-[#F3E8C8]">
                your way.
              </span>
            </h1>

            {/* =========================================
                DESCRIPTION
            ========================================== */}

            <p className="mt-7 max-w-[540px] text-[16px] font-medium leading-[1.7] text-white/90">
              Private and small-group journeys across the island, with local
              guides, flexible itineraries, trusted transport and personal
              assistance from arrival to departure.
            </p>

            {/* =========================================
                BUTTONS
            ========================================== */}

            <div className="mt-9 flex flex-wrap items-center gap-3">
              {/* PRIMARY GREEN BUTTON */}

              <Link
                href="/tours"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#008000]
                  bg-[#008000]
                  px-7
                  py-3.5
                  text-[12px]
                  font-semibold
                  text-white
                  shadow-[0_10px_30px_rgba(0,128,0,0.25)]
                  transition-all
                  duration-300
                  ease-out

                  hover:-translate-y-1
                  hover:border-[#32A852]
                  hover:bg-[#32A852]
                  hover:shadow-[0_14px_35px_rgba(0,128,0,0.35)]
                "
              >
                Explore tours

                <ArrowUpRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </Link>

              {/* SECONDARY GLASS BUTTON */}

              <Link
                href="/services"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/50
                  bg-white/15
                  px-7
                  py-3.5
                  text-[12px]
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  ease-out

                  hover:-translate-y-1
                  hover:border-[#90EE90]
                  hover:bg-[#90EE90]/20
                  hover:text-white
                  hover:shadow-[0_10px_30px_rgba(144,238,144,0.15)]
                "
              >
                Our services
              </Link>
            </div>
          </div>

          {/* =========================================
              BOTTOM SERVICE STRIP
          ========================================== */}

          <div className="absolute bottom-8 left-6 right-6 flex items-end justify-between md:left-10 md:right-10 lg:left-16 lg:right-16">
            <div className="hidden items-center gap-8 md:flex">
              <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/75">
                Private Tours
              </span>

              <span className="h-[3px] w-[3px] rounded-full bg-[#90EE90]" />

              <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/75">
                Car with Driver
              </span>

              <span className="h-[3px] w-[3px] rounded-full bg-[#90EE90]" />

              <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/75">
                Local Guides
              </span>

              <span className="h-[3px] w-[3px] rounded-full bg-[#90EE90]" />

              <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/75">
                Custom Itineraries
              </span>
            </div>

            {/* =========================================
                SCROLL INDICATOR
            ========================================== */}

            <div className="ml-auto flex flex-col items-center gap-2 text-white/80">
              <span className="text-[8px] font-medium uppercase tracking-[0.3em]">
                Scroll
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm transition-colors duration-300 hover:border-[#90EE90] hover:bg-[#90EE90]/20">
                <ArrowDown size={14} className="animate-bounce" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}