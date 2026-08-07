"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  CalendarDays,
  Compass,
  Users,
} from "lucide-react";

import { services } from "@/data/services";
import { tours } from "@/data/tours";
import { activities } from "@/data/activities";
import { destinations } from "@/data/destinations";

const inquiryTypes = [
  {
    value: "tour",
    label: "Excursion / Tour",
  },
  {
    value: "activity",
    label: "Activity",
  },
  {
    value: "service",
    label: "Service",
  },
  {
    value: "destination",
    label: "Destination",
  },
  {
    value: "general",
    label: "Not sure yet",
  },
];

export default function PlanJourney() {
  const router = useRouter();

  const [type, setType] = useState("tour");
  const [item, setItem] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travelers, setTravelers] = useState("2");

  const availableItems = useMemo(() => {
    switch (type) {
      case "service":
        return services.map((service) => ({
          value: service.slug,
          label: service.title,
        }));

      case "tour":
        return tours.map((tour) => ({
          value: tour.slug,
          label: tour.title,
        }));

      case "activity":
        return activities.map((activity) => ({
          value: activity.slug,
          label: activity.title,
        }));

      case "destination":
        return destinations.map((destination) => ({
          value: destination.slug,
          label: destination.name,
        }));

      default:
        return [];
    }
  }, [type]);

  const handleTypeChange = (value: string) => {
    setType(value);
    setItem("");
  };

  const handleContinue = () => {
    const params = new URLSearchParams();

    if (type && type !== "general") {
      params.set("type", type);
    }

    if (item) {
      params.set("item", item);
    }

    if (travelDate) {
      params.set("date", travelDate);
    }

    if (travelers) {
      params.set("travelers", travelers);
    }

    const query = params.toString();

    router.push(
      query ? `/booking?${query}` : "/booking"
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#102719] py-20 text-white md:py-24 lg:py-28">
      {/* BACKGROUND DETAILS */}

      <div className="pointer-events-none absolute left-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-[#90EE90]/[0.06] blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-200px] right-[-120px] h-[520px] w-[520px] rounded-full bg-[#008000]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
        {/* HEADER */}

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#90EE90]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#BDF5B5]">
                Plan your journey
              </p>
            </div>

            <h2 className="mt-4 text-[clamp(2.8rem,4.5vw,5rem)] font-semibold leading-[0.94] tracking-[-0.055em]">
              Start with
              <br />

              <span className="font-medium italic text-[#BDF5B5]">
                what interests you.
              </span>
            </h2>
          </div>

          <p className="max-w-[520px] text-[13px] leading-6 text-white/50 lg:justify-self-end">
            Choose what you&apos;re interested in, tell us when you&apos;re
            traveling and we&apos;ll take you to the full inquiry form with
            your selections already added.
          </p>
        </div>

        {/* BOOKING PANEL */}

        <div className="mt-12 rounded-[28px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md md:p-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-[1fr_1.25fr_0.9fr_0.65fr_auto] xl:items-end">
            {/* TYPE */}

            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50">
                <Compass
                  size={12}
                  className="text-[#BDF5B5]"
                />

                Interested in
              </span>

              <select
                value={type}
                onChange={(event) =>
                  handleTypeChange(event.target.value)
                }
                className="
                  w-full
                  rounded-[14px]
                  border
                  border-white/10
                  bg-white
                  px-4
                  py-3.5
                  text-[12px]
                  text-[#182018]
                  outline-none
                  transition-all
                  duration-300
                  focus:border-[#90EE90]
                  focus:ring-4
                  focus:ring-[#90EE90]/10
                "
              >
                {inquiryTypes.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            {/* ITEM */}

            <label className="block">
              <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50">
                Choose option
              </span>

              {type === "general" ? (
                <div className="flex min-h-[47px] items-center rounded-[14px] border border-white/10 bg-white/10 px-4 text-[11px] text-white/45">
                  We&apos;ll help you decide
                </div>
              ) : (
                <select
                  value={item}
                  onChange={(event) =>
                    setItem(event.target.value)
                  }
                  className="
                    w-full
                    rounded-[14px]
                    border
                    border-white/10
                    bg-white
                    px-4
                    py-3.5
                    text-[12px]
                    text-[#182018]
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#90EE90]
                    focus:ring-4
                    focus:ring-[#90EE90]/10
                  "
                >
                  <option value="">
                    Select an option
                  </option>

                  {availableItems.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
            </label>

            {/* DATE */}

            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50">
                <CalendarDays
                  size={12}
                  className="text-[#BDF5B5]"
                />

                Travel date
              </span>

              <input
                type="date"
                value={travelDate}
                onChange={(event) =>
                  setTravelDate(event.target.value)
                }
                className="
                  w-full
                  rounded-[14px]
                  border
                  border-white/10
                  bg-white
                  px-4
                  py-3.5
                  text-[12px]
                  text-[#182018]
                  outline-none
                  transition-all
                  duration-300
                  focus:border-[#90EE90]
                  focus:ring-4
                  focus:ring-[#90EE90]/10
                "
              />
            </label>

            {/* TRAVELERS */}

            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50">
                <Users
                  size={12}
                  className="text-[#BDF5B5]"
                />

                Travelers
              </span>

              <input
                type="number"
                min="1"
                value={travelers}
                onChange={(event) =>
                  setTravelers(event.target.value)
                }
                className="
                  w-full
                  rounded-[14px]
                  border
                  border-white/10
                  bg-white
                  px-4
                  py-3.5
                  text-[12px]
                  text-[#182018]
                  outline-none
                  transition-all
                  duration-300
                  focus:border-[#90EE90]
                  focus:ring-4
                  focus:ring-[#90EE90]/10
                "
              />
            </label>

            {/* BUTTON */}

            <button
              type="button"
              onClick={handleContinue}
              className="
                group
                flex
                min-h-[47px]
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#90EE90]
                px-6
                text-[10px]
                font-semibold
                text-[#123f16]
                transition-all
                duration-300
                hover:-translate-y-[2px]
                hover:bg-[#BDF5B5]
                hover:shadow-[0_12px_30px_rgba(144,238,144,0.18)]
              "
            >
              Continue

              <ArrowRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* FOOTER MESSAGE */}

          <div className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[9px] leading-5 text-white/35">
              No payment is required here. This starts a travel inquiry with Avi
              Lanka.
            </p>

            <button
              type="button"
              onClick={() => router.push("/booking")}
              className="w-fit text-[9px] font-semibold text-[#BDF5B5] transition-colors hover:text-white"
            >
              Send a general inquiry →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}