import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  MapPin,
  MessageCircle,
  Mountain,
} from "lucide-react";

const tours = [
  {
    number: "01",
    title: "Sigiriya & Dambulla",
    location: "Cultural Triangle",
    duration: "Full Day",
    description:
      "Discover the ancient Sigiriya Rock Fortress and the remarkable cave temples of Dambulla on a journey through Sri Lanka's cultural heart.",
    image: "/images/tours/sigiriya-dambulla.jpg",
    href: "/tours/sigiriya-dambulla",
  },
  {
    number: "02",
    title: "Kandy & Cultural Heritage",
    location: "Central Sri Lanka",
    duration: "Full Day",
    description:
      "Explore Kandy, its cultural traditions, scenic surroundings and some of the most important heritage sites in central Sri Lanka.",
    image: "/images/tours/kandy.jpg",
    href: "/tours/kandy",
  },
  {
    number: "03",
    title: "Ella & Hill Country",
    location: "Hill Country",
    duration: "1–2 Days",
    description:
      "Experience mountain scenery, tea country, waterfalls and some of Sri Lanka's most memorable viewpoints around Ella.",
    image: "/images/tours/ella.jpg",
    href: "/tours/ella-hill-country",
  },
  {
    number: "04",
    title: "Yala Wildlife Safari",
    location: "Yala National Park",
    duration: "Half / Full Day",
    description:
      "Travel into Yala National Park on a wildlife safari in search of elephants, leopards and Sri Lanka's remarkable birdlife.",
    image: "/images/tours/yala.jpg",
    href: "/tours/yala-safari",
  },
  {
    number: "05",
    title: "Galle & South Coast",
    location: "Southern Sri Lanka",
    duration: "Full Day",
    description:
      "Explore historic Galle Fort, tropical coastline and relaxed southern destinations on a flexible private excursion.",
    image: "/images/tours/galle.jpg",
    href: "/tours/galle-south-coast",
  },
  {
    number: "06",
    title: "Cultural Triangle",
    location: "Central North",
    duration: "2–4 Days",
    description:
      "Journey through Sri Lanka's ancient cities, sacred sites and historic landscapes with an itinerary shaped around your available time.",
    image: "/images/tours/cultural-triangle.jpg",
    href: "/tours/cultural-triangle",
  },
  {
    number: "07",
    title: "Nuwara Eliya & Tea Country",
    location: "Central Highlands",
    duration: "Full Day",
    description:
      "Travel through cool mountain landscapes, tea estates and colonial-era Nuwara Eliya in the heart of Sri Lanka's highlands.",
    image: "/images/tours/nuwara-eliya.jpg",
    href: "/tours/nuwara-eliya",
  },
  {
    number: "08",
    title: "Mirissa & Southern Coast",
    location: "South Coast",
    duration: "Full Day",
    description:
      "Enjoy tropical beaches, coastal scenery and the relaxed atmosphere of Sri Lanka's beautiful southern coastline.",
    image: "/images/tours/mirissa.jpg",
    href: "/tours/mirissa",
  },
];

const categories = [
  "All tours",
  "Culture",
  "Nature",
  "Wildlife",
  "Hill Country",
  "Coast",
];

export default function ToursPage() {
  return (
    <main className="bg-[#fbfcf8]">
      {/* ========================================
          HERO
      ========================================= */}

      <section className="relative min-h-[68svh] overflow-hidden">
        <img
          src="/images/tours/tours-hero.jpg"
          alt="Explore Sri Lanka"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/5" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[68svh] max-w-[1540px] items-end px-6 pb-14 pt-32 md:px-10 md:pb-16 lg:px-16">
          <div className="max-w-[800px]">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#90EE90]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#BDF5B5]">
                Excursions & Tours
              </p>
            </div>

            <h1 className="text-[clamp(3.5rem,6vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-white">
              Explore more of
              <br />

              <span className="font-medium italic text-[#DDF7D7]">
                Sri Lanka.
              </span>
            </h1>

            <p className="mt-5 max-w-[550px] text-[14px] leading-6 text-white/75">
              From ancient cities and mountain landscapes to wildlife and the
              coast, discover excursions shaped around the places you want to
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          INTRO
      ========================================= */}

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#90EE90]" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                  Find your journey
                </p>
              </div>

              <h2 className="mt-4 text-[clamp(2.4rem,4vw,4.2rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#182018]">
                Places worth
                <br />

                <span className="font-medium italic text-[#008000]">
                  experiencing.
                </span>
              </h2>
            </div>

            <div className="max-w-[620px] lg:justify-self-end">
              <p className="text-[14px] leading-7 text-black/50">
                Choose one of our popular excursions or use them as inspiration
                for your own trip. Routes, timing and stops can be adjusted
                depending on your travel plans.
              </p>
            </div>
          </div>

          {/* CATEGORY CHIPS */}

          <div className="mt-9 flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`rounded-full border px-4 py-2 text-[10px] font-medium transition-all duration-300 ${
                  index === 0
                    ? "border-[#008000] bg-[#008000] text-white"
                    : "border-black/[0.08] bg-white text-black/55 hover:border-[#90EE90] hover:text-[#008000]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          TOUR CARDS
      ========================================= */}

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {tours.map((tour) => (
              <Link
                key={tour.number}
                href={tour.href}
                className="group flex h-full flex-col"
              >
                {/* IMAGE */}

                <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[#edf3e9]">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                  {/* NUMBER */}

                  <span className="absolute left-3 top-3 rounded-full border border-white/50 bg-white/90 px-2.5 py-1.5 text-[8px] font-semibold tracking-[0.15em] text-[#182018] backdrop-blur-md">
                    {tour.number}
                  </span>

                  {/* ARROW */}

                  <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/60 bg-white/90 text-[#182018] transition-all duration-300 group-hover:bg-[#008000] group-hover:text-white">
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-[2px]"
                    />
                  </span>
                </div>

                {/* CARD INFORMATION */}

                <div className="flex flex-1 flex-col pt-4">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <div className="flex items-center gap-1.5">
                      <MapPin
                        size={11}
                        strokeWidth={1.8}
                        className="text-[#008000]"
                      />

                      <span className="text-[9px] text-black/45">
                        {tour.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Clock3
                        size={11}
                        strokeWidth={1.8}
                        className="text-[#008000]"
                      />

                      <span className="text-[9px] text-black/45">
                        {tour.duration}
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-2.5 text-[17px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#182018] transition-colors duration-300 group-hover:text-[#008000]">
                    {tour.title}
                  </h3>

                  <p className="mt-2.5 text-[11px] leading-[1.7] text-black/45">
                    {tour.description}
                  </p>

                  <div className="mt-auto pt-4">
                    <span className="inline-flex items-center gap-2 text-[9px] font-semibold text-[#008000]">
                      View tour

                      <ArrowRight
                        size={11}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          CUSTOM TOUR
      ========================================= */}

      <section className="bg-[#eef5ea] py-16 md:py-20">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <Mountain size={15} className="text-[#008000]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                  Something different?
                </span>
              </div>

              <h2 className="mt-4 text-[clamp(2.4rem,4vw,4.2rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#182018]">
                Build your own
                <br />

                <span className="font-medium italic text-[#008000]">
                  Sri Lanka journey.
                </span>
              </h2>
            </div>

            <div className="lg:justify-self-end">
              <p className="max-w-[520px] text-[13px] leading-6 text-black/50">
                You don&apos;t have to follow a fixed tour. Tell us where you
                want to go, how long you have and what you enjoy. We can help
                shape the route around you.
              </p>

              <Link
                href="/services/custom-itineraries"
                className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#008000] px-6 py-3 text-[10px] font-semibold text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#087508]"
              >
                Create my itinerary

                <ArrowRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          CONTACT CTA
      ========================================= */}

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="flex flex-col gap-6 rounded-[24px] bg-[#102719] px-6 py-8 text-white md:flex-row md:items-center md:justify-between md:px-9 md:py-9">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#90EE90]/10 text-[#BDF5B5]">
                <MessageCircle size={20} />
              </div>

              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#BDF5B5]">
                  Talk to Avi Lanka
                </p>

                <h3 className="mt-1 text-[19px] font-semibold tracking-[-0.025em]">
                  Not sure which tour is right for you?
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-white/50">
                  Tell us what you&apos;d like to experience and we&apos;ll
                  help you plan it.
                </p>
              </div>
            </div>

            <a
              href="#"
              className="group flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#008000] px-6 py-3 text-[10px] font-semibold text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#169b16]"
            >
              Chat on WhatsApp

              <ArrowRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}