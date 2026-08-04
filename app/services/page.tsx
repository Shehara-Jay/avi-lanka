import Link from "next/link";
import {
  ArrowRight,
  Car,
  Languages,
  Map,
  Route,
  UserRound,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Private Tours",
    description:
      "Custom-made private tours designed around your interests, schedule and preferred pace.",
    image: "/images/services/private-tours.jpg",
    icon: Route,
    href: "/services/private-tours",
  },
  {
    number: "02",
    title: "Car with Driver",
    description:
      "Travel comfortably with an experienced local driver who knows the roads and the best routes.",
    image: "/images/services/car-driver.jpg",
    icon: Car,
    href: "/services/car-with-driver",
  },
  {
    number: "03",
    title: "Local Guides",
    description:
      "Discover the stories behind each destination with friendly and knowledgeable local guides.",
    image: "/images/services/local-guide.jpg",
    icon: UserRound,
    href: "/services/local-guides",
  },
  {
    number: "04",
    title: "Translator & Assistance",
    description:
      "Language support and local assistance to help you communicate and travel with confidence.",
    image: "/images/services/translator.jpg",
    icon: Languages,
    href: "/services/translator-assistance",
  },
  {
    number: "05",
    title: "Car Rental",
    description:
      "Flexible car rental options for travelers who prefer the freedom to explore independently.",
    image: "/images/services/car-rental.jpg",
    icon: Car,
    href: "/services/car-rental",
  },
  {
    number: "06",
    title: "Custom Itineraries",
    description:
      "Personalized itineraries created around your interests, available time and travel style.",
    image: "/images/services/custom-itinerary.jpg",
    icon: Map,
    href: "/services/custom-itineraries",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#fbfcf8]">
      {/* ========================================
          HERO
      ========================================= */}

      <section className="relative min-h-[68svh] overflow-hidden">
        <img
          src="/images/services/services-hero.jpg"
          alt="Travel through Sri Lanka"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Same natural gradient direction as homepage */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/5" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[68svh] max-w-[1540px] items-end px-6 pb-14 pt-32 md:px-10 md:pb-16 lg:px-16">
          <div className="max-w-[760px]">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#90EE90]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#BDF5B5]">
                Our Services
              </p>
            </div>

            <h1 className="text-[clamp(3.5rem,6vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-white">
              Travel Sri Lanka
              <br />

              <span className="font-medium italic text-[#DDF7D7]">
                your way.
              </span>
            </h1>

            <p className="mt-5 max-w-[540px] text-[14px] leading-6 text-white/75">
              From private tours and trusted transport to local guides and
              personalized itineraries, choose the support you need for your
              journey.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          SERVICES
      ========================================= */}

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          {/* SECTION HEADER */}

          <div className="mb-10 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-[#90EE90]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                What we offer
              </span>

              <span className="h-px w-7 bg-[#90EE90]" />
            </div>

            <h2 className="mt-4 text-[clamp(2.2rem,3.5vw,3.8rem)] font-semibold tracking-[-0.045em] text-[#182018]">
              Our Services
            </h2>

            <p className="mx-auto mt-3 max-w-[560px] text-[13px] leading-6 text-black/45">
              Choose the services that fit your travel style and let us take
              care of the rest.
            </p>
          </div>

          {/* ========================================
              CARD GRID
          ========================================= */}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.number}
                  href={service.href}
                  className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-black/[0.07] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#90EE90]/80 hover:shadow-[0_16px_40px_rgba(26,80,26,0.10)]"
                >
                  {/* IMAGE */}

                  <div className="relative aspect-[16/10] overflow-hidden bg-[#edf3e9]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />

                    {/* Light bottom gradient */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                    {/* ICON */}

                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/90 text-[#008000] shadow-sm backdrop-blur-sm">
                      <Icon size={17} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="flex flex-1 flex-col p-5">
                    {/* NUMBER */}

                    <span className="text-[9px] font-semibold tracking-[0.2em] text-[#70b870]">
                      {service.number}
                    </span>

                    {/* TITLE */}

                    <h3 className="mt-2 text-[20px] font-semibold tracking-[-0.035em] text-[#182018] transition-colors duration-300 group-hover:text-[#008000]">
                      {service.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p className="mt-3 text-[12px] leading-[1.75] text-black/50">
                      {service.description}
                    </p>

                    {/* LEARN MORE */}

                    <div className="mt-auto pt-6">
                      <div className="flex items-center justify-between border-t border-black/[0.06] pt-4">
                        <span className="text-[10px] font-semibold text-[#008000]">
                          Learn more
                        </span>

                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f0f8ed] text-[#008000] transition-all duration-300 group-hover:bg-[#008000] group-hover:text-white">
                          <ArrowRight
                            size={13}
                            className="transition-transform duration-300 group-hover:translate-x-[2px]"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================
          WHATSAPP CTA
      ========================================= */}

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="flex flex-col gap-6 rounded-[22px] bg-[#eef5ea] px-6 py-7 md:flex-row md:items-center md:justify-between md:px-9">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#008000] text-white">
                <MessageCircle size={20} />
              </div>

              <div>
                <h3 className="text-[18px] font-semibold tracking-[-0.025em] text-[#182018]">
                  Need help planning your trip?
                </h3>

                <p className="mt-1 text-[12px] leading-5 text-black/45">
                  Chat with us and we&apos;ll help you choose the right
                  services for your journey.
                </p>
              </div>
            </div>

            <a
              href="#"
              className="group flex w-fit items-center gap-3 rounded-full bg-[#008000] px-6 py-3 text-[11px] font-semibold text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#087508]"
            >
              Chat on WhatsApp

              <ArrowRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}