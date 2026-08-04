"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HighlandsTransition() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const darkRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "60% top",
          scrub: 1.2,
        },
      });

      timeline
        .fromTo(
          imageRef.current,
          {
            scale: 1.3,
            filter: "brightness(0.45)",
          },
          {
            scale: 1,
            filter: "brightness(1)",
            ease: "none",
          },
          0
        )

        .fromTo(
          numberRef.current,
          {
            opacity: 0,
            yPercent: 25,
          },
          {
            opacity: 0.13,
            yPercent: 0,
            ease: "none",
          },
          0.08
        )

        .fromTo(
          ".highlands-label",
          {
            opacity: 0,
            x: -80,
          },
          {
            opacity: 1,
            x: 0,
            ease: "none",
          },
          0.22
        )

        .fromTo(
          ".highlands-title",
          {
            yPercent: 110,
          },
          {
            yPercent: 0,
            ease: "none",
          },
          0.25
        )

        .fromTo(
          ".highlands-description",
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            ease: "none",
          },
          0.45
        )

        .to(
          darkRef.current,
          {
            opacity: 0,
            ease: "none",
          },
          0
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[180vh] bg-[#102d26]"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* Landscape */}
        <div
          ref={imageRef}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: "url('/images/highlands.jpg')",
          }}
        />

        {/* Starting darkness */}
        <div
          ref={darkRef}
          className="absolute inset-0 bg-[#102d26]/70"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/25" />

        {/* Huge 01 */}
        <div
          ref={numberRef}
          className="absolute -left-[4vw] top-[2vh] select-none text-[42vw] font-semibold leading-none tracking-[-0.12em] text-white opacity-0"
        >
          01
        </div>

        {/* Chapter */}
        <div className="highlands-label absolute left-6 top-28 z-20 flex items-center gap-4 md:left-10 lg:left-16">
          <div className="h-px w-12 bg-white/50" />

          <span className="text-[9px] uppercase tracking-[0.45em] text-white/65">
            Chapter One
          </span>
        </div>

        {/* Main content */}
        <div
          ref={contentRef}
          className="absolute bottom-[8vh] left-6 z-20 right-6 md:left-10 lg:left-16"
        >
          <p className="highlands-label mb-4 text-[10px] uppercase tracking-[0.45em] text-[#e8d7b5]">
            The Highlands
          </p>

          <div className="overflow-hidden">
            <h2 className="highlands-title text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.85] tracking-[-0.06em] text-white">
              LOSE YOURSELF
            </h2>
          </div>

          <div className="overflow-hidden">
            <h2 className="highlands-title ml-[7vw] text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.88] tracking-[-0.06em] text-[#e8d7b5]">
              ABOVE THE CLOUDS.
            </h2>
          </div>

          <div className="highlands-description mt-7 flex max-w-xl gap-5">
            <span className="mt-3 h-px w-12 shrink-0 bg-white/40" />

            <p className="text-sm leading-6 text-white/70 md:text-base">
              Follow winding roads through tea country, mist-covered peaks and
              mountain towns where time seems to move a little slower.
            </p>
          </div>
        </div>

        {/* Coordinates */}
        <div className="highlands-description absolute bottom-8 right-8 z-20 hidden text-right lg:block lg:right-16">
          <p className="text-[9px] uppercase tracking-[0.35em] text-white/45">
            6.8667° N
          </p>

          <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/75">
            Ella · Sri Lanka
          </p>
        </div>
      </div>
    </section>
  );
}