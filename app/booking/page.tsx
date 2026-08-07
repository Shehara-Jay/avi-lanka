import BookingForm from "@/components/booking/BookingForm";

import { services } from "@/data/services";
import { tours } from "@/data/tours";
import { activities } from "@/data/activities";
import { destinations } from "@/data/destinations";

type BookingPageProps = {
  searchParams: Promise<{
    type?: string;
    item?: string;
    date?: string;
    travelers?: string;
  }>;
};

function resolveSelectedItem(
  type?: string,
  slug?: string
) {
  if (!type || !slug) {
    return null;
  }

  if (type === "service") {
    const service = services.find(
      (item) => item.slug === slug
    );

    if (service) {
      return {
        type: "service",
        slug: service.slug,
        title: service.title,
      };
    }
  }

  if (type === "tour") {
    const tour = tours.find(
      (item) => item.slug === slug
    );

    if (tour) {
      return {
        type: "tour",
        slug: tour.slug,
        title: tour.title,
      };
    }
  }

  if (type === "activity") {
    const activity = activities.find(
      (item) => item.slug === slug
    );

    if (activity) {
      return {
        type: "activity",
        slug: activity.slug,
        title: activity.title,
      };
    }
  }

  if (type === "destination") {
    const destination = destinations.find(
      (item) => item.slug === slug
    );

    if (destination) {
      return {
        type: "destination",
        slug: destination.slug,
        title: destination.name,
      };
    }
  }

  return null;
}

export default async function BookingPage({
  searchParams,
}: BookingPageProps) {
  const params = await searchParams;

  const selectedItem = resolveSelectedItem(
    params.type,
    params.item
  );

  const initialTravelDate =
    params.date ?? "";

  const initialTravelers =
    params.travelers ?? "1";

  return (
    <main className="bg-[#fbfcf8]">
      {/* ========================================
          IMAGE-FREE HERO
      ========================================= */}

      <section className="relative overflow-hidden bg-[#eef5ea] pt-32 md:pt-36">
        <div className="pointer-events-none absolute left-[-180px] top-[-170px] h-[480px] w-[480px] rounded-full bg-[#90EE90]/20 blur-[110px]" />

        <div className="pointer-events-none absolute bottom-[-200px] right-[-120px] h-[480px] w-[480px] rounded-full bg-[#008000]/[0.06] blur-[120px]" />

        <div className="mx-auto max-w-[1540px] px-6 pb-16 md:px-10 md:pb-20 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
            {/* LEFT */}

            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#90EE90]" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                  Booking & Inquiry
                </p>
              </div>

              <h1 className="mt-5 max-w-[900px] text-[clamp(3.5rem,6vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-[#182018]">
                Plan your
                <br />

                <span className="font-medium italic text-[#008000]">
                  Sri Lanka journey.
                </span>
              </h1>

              <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-black/50">
                Tell us what you&apos;re looking for and
                share a few details about your trip. Avi
                Lanka will get back to you with the next
                steps.
              </p>
            </div>

            {/* SELECTED ITEM */}

            <div className="rounded-[24px] border border-black/[0.06] bg-white/70 p-5 backdrop-blur-sm">
              <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                Your inquiry
              </p>

              {selectedItem ? (
                <>
                  <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#008000]">
                    {selectedItem.type}
                  </p>

                  <h2 className="mt-2 text-[1.7rem] font-semibold tracking-[-0.04em] text-[#182018]">
                    {selectedItem.title}
                  </h2>

                  <p className="mt-3 text-[11px] leading-5 text-black/45">
                    This selection has been added to your
                    inquiry automatically.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="mt-4 text-[1.7rem] font-semibold tracking-[-0.04em] text-[#182018]">
                    General Inquiry
                  </h2>

                  <p className="mt-3 text-[11px] leading-5 text-black/45">
                    Not sure what you need yet? That&apos;s
                    fine. Tell us about your travel plans
                    below.
                  </p>
                </>
              )}

              {(initialTravelDate ||
                initialTravelers) && (
                <div className="mt-5 border-t border-black/[0.07] pt-5">
                  {initialTravelDate && (
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[8px] uppercase tracking-[0.2em] text-black/35">
                        Travel date
                      </span>

                      <span className="text-[11px] font-semibold text-[#182018]">
                        {initialTravelDate}
                      </span>
                    </div>
                  )}

                  {initialTravelers && (
                    <div className="mt-3 flex items-center justify-between gap-4">
                      <span className="text-[8px] uppercase tracking-[0.2em] text-black/35">
                        Travelers
                      </span>

                      <span className="text-[11px] font-semibold text-[#182018]">
                        {initialTravelers}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          BOOKING FORM
      ========================================= */}

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <BookingForm
            initialType={selectedItem?.type ?? ""}
            initialItem={selectedItem?.slug ?? ""}
            initialItemTitle={
              selectedItem?.title ?? ""
            }
            initialTravelDate={
              initialTravelDate
            }
            initialTravelers={
              initialTravelers
            }
          />
        </div>
      </section>
    </main>
  );
}