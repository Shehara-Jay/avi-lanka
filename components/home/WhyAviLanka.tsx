"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  HeartHandshake,
  MapPinned,
  Route,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Local knowledge",
    description:
      "Explore Sri Lanka with people who understand the island, its culture, its roads and the places worth slowing down for.",
    icon: MapPinned,
  },
  {
    number: "02",
    title: "Travel your way",
    description:
      "Your journey can be adjusted around your interests, travel dates, pace and the experiences you want most.",
    icon: Route,
  },
  {
    number: "03",
    title: "Trusted support",
    description:
      "From transport and guides to local assistance, we help keep every part of your journey clear and comfortable.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Personal service",
    description:
      "You are not just another booking. We stay close to your journey and help when plans need to change.",
    icon: HeartHandshake,
  },
];

export default function WhyAviLanka() {
  return (
    <section className="relative overflow-hidden bg-[#fbfcf8] py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* =====================================
              LEFT SIDE
          ====================================== */}

          <div className="lg:sticky lg:top-[120px] lg:h-fit">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#90EE90]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                Why Avi Lanka
              </p>
            </div>

            <h2 className="max-w-[560px] text-[clamp(2.7rem,4.4vw,5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[#182018]">
              Sri Lanka feels different
              <br />

              <span className="font-medium italic text-[#008000]">
                when it feels personal.
              </span>
            </h2>

            <p className="mt-6 max-w-[470px] text-[14px] leading-7 text-black/50">
              We believe the best journeys are not rushed through a checklist.
              They are shaped around the traveler, supported by local knowledge
              and flexible enough to leave room for discovery.
            </p>

            {/* Small trust statement */}

            <div className="mt-8 max-w-[430px] rounded-[20px] border border-[#90EE90]/40 bg-white p-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#90EE90]/30 text-[#008000]">
                  <Check size={14} strokeWidth={2.2} />
                </span>

                <div>
                  <p className="text-[12px] font-semibold text-[#182018]">
                    Built around your journey
                  </p>

                  <p className="mt-1 text-[12px] leading-5 text-black/45">
                    Flexible planning, local assistance and direct communication
                    throughout your Sri Lankan experience.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="group mt-7 flex w-fit items-center gap-2 text-[10px] font-semibold text-[#008000]"
            >
              Learn more about Avi Lanka

              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          {/* =====================================
              RIGHT SIDE / REASONS
          ====================================== */}

          <div className="border-t border-black/[0.08]">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.number}
                  className="
                    group
                    relative
                    border-b
                    border-black/[0.08]
                    py-7
                    transition-all
                    duration-500
                    md:py-8
                  "
                >
                  {/* Hover background */}

                  <div
                    className="
                      absolute
                      inset-x-[-16px]
                      inset-y-2
                      -z-0
                      rounded-[20px]
                      bg-[#f1f8ee]
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative z-10 grid gap-5 md:grid-cols-[70px_1fr_46px] md:items-start">
                    {/* Number */}

                    <span className="pt-1 text-[9px] font-semibold tracking-[0.2em] text-[#008000]/55">
                      {reason.number}
                    </span>

                    {/* Text */}

                    <div>
                      <h3
                        className="
                          text-[clamp(1.5rem,2vw,2.1rem)]
                          font-medium
                          tracking-[-0.035em]
                          text-[#1e241e]
                          transition-all
                          duration-300
                          group-hover:translate-x-1
                          group-hover:text-[#008000]
                        "
                      >
                        {reason.title}
                      </h3>

                      <p className="mt-3 max-w-[560px] text-[13px] leading-6 text-black/45">
                        {reason.description}
                      </p>
                    </div>

                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-black/[0.08]
                        bg-white
                        text-[#008000]
                        transition-all
                        duration-400
                        group-hover:-translate-y-1
                        group-hover:border-[#90EE90]
                        group-hover:bg-[#90EE90]
                        group-hover:text-[#145c14]
                      "
                    >
                      <Icon size={17} strokeWidth={1.7} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================
            BOTTOM STATEMENT
        ====================================== */}

        <div className="mt-16 border-t border-black/[0.08] pt-8 md:mt-20">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-[900px] text-[clamp(1.6rem,2.8vw,3rem)] font-medium leading-[1.15] tracking-[-0.04em] text-[#1c221c]">
              Come for the places.
              <span className="text-black/35"> Stay for the moments </span>
              <span className="italic text-[#008000]">
                you didn&apos;t plan.
              </span>
            </p>

            <div className="flex items-center gap-3">
              <span className="h-[6px] w-[6px] rounded-full bg-[#90EE90]" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#008000]">
                Avi Lanka
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}