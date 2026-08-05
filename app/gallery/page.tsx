"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Category =
  | "All"
  | "Nature"
  | "Wildlife"
  | "Culture"
  | "Beaches"
  | "Hill Country";

type GalleryImage = {
  id: number;
  title: string;
  location: string;
  category: Exclude<Category, "All">;
  image: string;
  size: "normal" | "tall";
};

const categories: Category[] = [
  "All",
  "Nature",
  "Wildlife",
  "Culture",
  "Beaches",
  "Hill Country",
];

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Sigiriya Rock Fortress",
    location: "Sigiriya",
    category: "Culture",
    image: "/images/gallery/sigiriya.jpg",
    size: "tall",
  },
  {
    id: 2,
    title: "Nine Arch Bridge",
    location: "Ella",
    category: "Hill Country",
    image: "/images/gallery/nine-arch-bridge.jpg",
    size: "normal",
  },
  {
    id: 3,
    title: "Wild Elephant",
    location: "Sri Lanka",
    category: "Wildlife",
    image: "/images/gallery/elephant.jpg",
    size: "normal",
  },
  {
    id: 4,
    title: "Southern Coast",
    location: "Mirissa",
    category: "Beaches",
    image: "/images/gallery/mirissa.jpg",
    size: "tall",
  },
  {
    id: 5,
    title: "Tea Country",
    location: "Nuwara Eliya",
    category: "Hill Country",
    image: "/images/gallery/tea-country.jpg",
    size: "normal",
  },
  {
    id: 6,
    title: "Temple of the Tooth",
    location: "Kandy",
    category: "Culture",
    image: "/images/gallery/kandy-temple.jpg",
    size: "normal",
  },
  {
    id: 7,
    title: "Yala National Park",
    location: "Yala",
    category: "Wildlife",
    image: "/images/gallery/yala.jpg",
    size: "tall",
  },
  {
    id: 8,
    title: "Galle Fort",
    location: "Galle",
    category: "Culture",
    image: "/images/gallery/galle-fort.jpg",
    size: "normal",
  },
  {
    id: 9,
    title: "Tropical Escape",
    location: "South Coast",
    category: "Beaches",
    image: "/images/gallery/south-coast.jpg",
    size: "normal",
  },
  {
    id: 10,
    title: "Mountain Mornings",
    location: "Ella",
    category: "Nature",
    image: "/images/gallery/ella-mountains.jpg",
    size: "tall",
  },
  {
    id: 11,
    title: "Sri Lankan Leopard",
    location: "Yala",
    category: "Wildlife",
    image: "/images/gallery/leopard.jpg",
    size: "normal",
  },
  {
    id: 12,
    title: "Hidden Waterfalls",
    location: "Central Highlands",
    category: "Nature",
    image: "/images/gallery/waterfall.jpg",
    size: "normal",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const [selectedImage, setSelectedImage] =
    useState<GalleryImage | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === activeCategory
        );

  const selectedIndex = selectedImage
    ? filteredImages.findIndex(
        (image) => image.id === selectedImage.id
      )
    : -1;

  const showPreviousImage = () => {
    if (!selectedImage || filteredImages.length === 0) return;

    const previousIndex =
      selectedIndex <= 0
        ? filteredImages.length - 1
        : selectedIndex - 1;

    setSelectedImage(filteredImages[previousIndex]);
  };

  const showNextImage = () => {
    if (!selectedImage || filteredImages.length === 0) return;

    const nextIndex =
      selectedIndex >= filteredImages.length - 1
        ? 0
        : selectedIndex + 1;

    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <main className="bg-[#fbfcf8]">
      {/* ========================================
          HERO
      ========================================= */}

      <section className="relative min-h-[58svh] overflow-hidden">
        <img
          src="/images/gallery/gallery-hero.jpg"
          alt="Beautiful destinations across Sri Lanka"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/5" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[58svh] max-w-[1540px] items-end px-6 pb-12 pt-32 md:px-10 md:pb-14 lg:px-16">
          <div className="max-w-[760px]">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#90EE90]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#BDF5B5]">
                Photo Gallery
              </p>
            </div>

            <h1 className="text-[clamp(3.4rem,6vw,6.3rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-white">
              A glimpse of
              <br />

              <span className="font-medium italic text-[#DDF7D7]">
                Sri Lanka.
              </span>
            </h1>

            <p className="mt-5 max-w-[500px] text-[14px] leading-6 text-white/75">
              From misty mountains and ancient cities to wildlife and
              tropical shores, discover the many sides of the island.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          GALLERY INTRO + FILTER
      ========================================= */}

      <section className="pb-10 pt-14 md:pb-12 md:pt-16">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <Camera
                  size={14}
                  strokeWidth={1.8}
                  className="text-[#008000]"
                />

                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                  Explore through images
                </p>
              </div>

              <h2 className="mt-4 text-[clamp(2.3rem,3.7vw,4rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#182018]">
                Moments from
                <span className="font-medium italic text-[#008000]">
                  {" "}
                  the island.
                </span>
              </h2>
            </div>

            {/* FILTERS */}

            <div className="flex max-w-[700px] flex-wrap gap-2">
              {categories.map((category) => {
                const active = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setActiveCategory(category);
                      setSelectedImage(null);
                    }}
                    className={`rounded-full border px-4 py-2 text-[10px] font-medium transition-all duration-300 ${
                      active
                        ? "border-[#008000] bg-[#008000] text-white"
                        : "border-black/[0.08] bg-white text-black/50 hover:border-[#90EE90] hover:text-[#008000]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          MASONRY GALLERY
      ========================================= */}

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
            {filteredImages.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedImage(item)}
                className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-[18px] bg-[#edf3e9] text-left"
              >
                <div
                  className={
                    item.size === "tall"
                      ? "aspect-[3/4]"
                      : "aspect-[4/3]"
                  }
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.05]"
                  />
                </div>

                {/* HOVER OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-70 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100" />

                {/* LOCATION */}

                <div className="absolute left-4 top-4 translate-y-[-5px] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="rounded-full border border-white/30 bg-black/15 px-3 py-1.5 text-[8px] font-medium text-white backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                {/* INFORMATION */}

                <div className="absolute bottom-0 left-0 right-0 p-4 md:translate-y-3 md:opacity-0 md:transition-all md:duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  <div className="flex items-center gap-1.5 text-white/65">
                    <MapPin size={10} />

                    <span className="text-[8px] uppercase tracking-[0.18em]">
                      {item.location}
                    </span>
                  </div>

                  <h3 className="mt-1.5 text-[17px] font-medium tracking-[-0.025em] text-white">
                    {item.title}
                  </h3>
                </div>

                {/* VIEW ICON */}

                <span className="absolute right-4 top-4 flex h-8 w-8 scale-90 items-center justify-center rounded-full bg-white text-[#182018] opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <ArrowRight size={12} />
                </span>
              </button>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-[13px] text-black/40">
                No photos available in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ========================================
          SMALL GALLERY STATEMENT
      ========================================= */}

      <section className="bg-[#eef5ea] py-16 md:py-20">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-7 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-[900px]">
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
                See it for yourself
              </p>

              <h2 className="mt-4 text-[clamp(2.5rem,4vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-[#182018]">
                Photos show the place.
                <br />

                <span className="font-medium italic text-[#008000]">
                  The journey gives you the story.
                </span>
              </h2>
            </div>

            <Link
              href="/tours"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#008000] px-6 py-3 text-[10px] font-semibold text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#087508]"
            >
              Explore tours

              <ArrowRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          FINAL CTA
      ========================================= */}

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1540px] px-6 md:px-10 lg:px-16">
          <div className="rounded-[26px] bg-[#102719] px-6 py-10 text-white md:px-10 md:py-12">
            <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#BDF5B5]">
                  Your turn
                </p>

                <h2 className="mt-3 text-[clamp(2.4rem,4vw,4.2rem)] font-semibold leading-[0.96] tracking-[-0.05em]">
                  Come create your own
                  <br />

                  <span className="font-medium italic text-[#BDF5B5]">
                    Sri Lanka memories.
                  </span>
                </h2>
              </div>

              <Link
                href="/contact"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#008000] px-6 py-3 text-[10px] font-semibold text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#169b16]"
              >
                Start planning

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
          IMAGE LIGHTBOX
      ========================================= */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
        >
          {/* CLOSE */}

          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
            className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white hover:text-black md:right-8 md:top-8"
          >
            <X size={17} />
          </button>

          {/* PREVIOUS */}

          <button
            type="button"
            onClick={showPreviousImage}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all hover:bg-white hover:text-black md:left-8 md:h-12 md:w-12"
          >
            <ChevronLeft size={18} />
          </button>

          {/* NEXT */}

          <button
            type="button"
            onClick={showNextImage}
            aria-label="Next image"
            className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all hover:bg-white hover:text-black md:right-8 md:h-12 md:w-12"
          >
            <ChevronRight size={18} />
          </button>

          {/* IMAGE */}

          <div className="relative flex max-h-[88vh] max-w-[1200px] flex-col items-center">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[78vh] max-w-full rounded-[14px] object-contain"
            />

            <div className="mt-4 text-center">
              <div className="flex items-center justify-center gap-1.5 text-white/45">
                <MapPin size={10} />

                <span className="text-[8px] uppercase tracking-[0.22em]">
                  {selectedImage.location}
                </span>
              </div>

              <h3 className="mt-1 text-[17px] font-medium text-white">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}