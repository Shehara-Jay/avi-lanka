"use client";

import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { useState } from "react";

import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const previousTestimonial = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const nextTestimonial = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="overflow-hidden bg-[#eef5ea] py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
        {/* HEADER */}

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#90EE90]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                Traveler stories
              </p>
            </div>

            <h2 className="mt-4 text-[clamp(2.7rem,4.5vw,5rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-[#182018]">
              Memories shared
              <br />

              <span className="font-medium italic text-[#008000]">
                by our travelers.
              </span>
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-[520px] text-[13px] leading-6 text-black/50">
              Every journey is different. Here&apos;s what travelers have to
              say about discovering Sri Lanka with Avi Lanka.
            </p>
          </div>
        </div>

        {/* TESTIMONIAL */}

        <div className="mt-12 overflow-hidden rounded-[28px] border border-black/[0.06] bg-white md:mt-14">
          <div className="grid lg:grid-cols-[0.42fr_1.58fr]">
            {/* LEFT SIDE */}

            <div className="flex flex-col justify-between bg-[#102719] p-7 text-white md:p-9 lg:min-h-[420px]">
              <div>
                <Quote
                  size={38}
                  strokeWidth={1.3}
                  className="text-[#90EE90]"
                />

                <p className="mt-7 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#BDF5B5]">
                  Real experiences
                </p>
              </div>

              <div className="mt-12">
                <p className="text-[11px] leading-5 text-white/45">
                  Feedback from travelers who experienced Sri Lanka with Avi
                  Lanka.
                </p>

                <div className="mt-6 flex items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={13}
                      fill={
                        index < activeTestimonial.rating
                          ? "currentColor"
                          : "none"
                      }
                      className={
                        index < activeTestimonial.rating
                          ? "text-[#BDF5B5]"
                          : "text-white/20"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* REVIEW */}

            <div className="flex min-h-[420px] flex-col justify-between p-7 md:p-10 lg:p-12">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#008000]">
                    {activeTestimonial.trip}
                  </span>

                  <span className="text-[9px] font-medium tracking-[0.15em] text-black/25">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(testimonials.length).padStart(2, "0")}
                  </span>
                </div>

                <blockquote className="mt-8 max-w-[900px] text-[clamp(1.5rem,2.5vw,2.5rem)] font-medium leading-[1.35] tracking-[-0.035em] text-[#202820]">
                  “{activeTestimonial.feedback}”
                </blockquote>
              </div>

              <div className="mt-10 flex flex-col gap-6 border-t border-black/[0.07] pt-6 sm:flex-row sm:items-end sm:justify-between">
                {/* CUSTOMER */}

                <div>
                  <p className="text-[15px] font-semibold text-[#182018]">
                    {activeTestimonial.name}
                  </p>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-black/35">
                    {activeTestimonial.country}
                  </p>
                </div>

                {/* ARROWS */}

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={previousTestimonial}
                    aria-label="Previous testimonial"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.08] bg-white text-[#008000] transition-all duration-300 hover:border-[#008000] hover:bg-[#008000] hover:text-white"
                  >
                    <ArrowLeft size={14} />
                  </button>

                  <button
                    type="button"
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#008000] text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#169b16]"
                  >
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM MESSAGE */}

        <div className="mt-6 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#008000]" />

          <p className="text-[9px] uppercase tracking-[0.2em] text-black/35">
            Travel personally · Explore locally · Remember forever
          </p>
        </div>
      </div>
    </section>
  );
}