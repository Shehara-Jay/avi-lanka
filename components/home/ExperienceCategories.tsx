import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    title: "Wildlife",
    count: "18 places",
    image: "/images/experiences/wildlife.jpg",
    href: "/experiences/wildlife",
  },
  {
    title: "Beaches",
    count: "24 places",
    image: "/images/experiences/beaches.jpg",
    href: "/experiences/beaches",
  },
  {
    title: "Culture",
    count: "16 places",
    image: "/images/experiences/culture.jpg",
    href: "/experiences/culture",
  },
  {
    title: "Adventure",
    count: "12 journeys",
    image: "/images/experiences/adventure.jpg",
    href: "/experiences/adventure",
  },
];

export default function ExperienceCategories() {
  return (
    <section className="bg-[#fbfbf8] py-24">
      <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#67C7E8]">
              Find your Sri Lanka
            </p>

            <h2 className="mt-3 text-[clamp(2.5rem,5vw,5rem)] font-semibold tracking-[-0.05em] text-[#171714]">
              What are you looking for?
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-black/45">
            From wildlife and beaches to culture and adventure, choose the kind
            of experience you want to build your journey around.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {experiences.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative h-[430px] overflow-hidden rounded-[26px] bg-black"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-white/55">
                      {item.count}
                    </p>

                    <h3 className="mt-2 text-3xl font-medium tracking-[-0.04em] text-white">
                      {item.title}
                    </h3>
                  </div>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}