export type TourCategory =
  | "Culture"
  | "Nature"
  | "Wildlife"
  | "Hill Country"
  | "Coast";

export type Tour = {
  number: string;
  slug: string;
  title: string;
  location: string;
  duration: string;
  category: TourCategory;
  shortDescription: string;
  description: string;
  image: string;
  href: string;
};

export const tours: Tour[] = [
  {
    number: "01",
    slug: "sigiriya-dambulla",
    title: "Sigiriya & Dambulla",
    location: "Cultural Triangle",
    duration: "Full Day",
    category: "Culture",
    shortDescription:
      "Discover two of Sri Lanka's most remarkable ancient attractions in the Cultural Triangle.",
    description:
      "Discover the ancient Sigiriya Rock Fortress and the remarkable cave temples of Dambulla on a journey through Sri Lanka's cultural heart.",
    image: "/images/tours/sigiriya-dambulla.jpg",
    href: "/tours/sigiriya-dambulla",
  },
  {
    number: "02",
    slug: "kandy",
    title: "Kandy & Cultural Heritage",
    location: "Central Sri Lanka",
    duration: "Full Day",
    category: "Culture",
    shortDescription:
      "Experience Kandy's sacred sites, cultural traditions and beautiful central landscapes.",
    description:
      "Explore Kandy, its cultural traditions, scenic surroundings and some of the most important heritage sites in central Sri Lanka.",
    image: "/images/tours/kandy.jpg",
    href: "/tours/kandy",
  },
  {
    number: "03",
    slug: "ella-hill-country",
    title: "Ella & Hill Country",
    location: "Hill Country",
    duration: "1–2 Days",
    category: "Hill Country",
    shortDescription:
      "Explore mountain scenery, tea country, waterfalls and famous viewpoints around Ella.",
    description:
      "Experience mountain scenery, tea country, waterfalls and some of Sri Lanka's most memorable viewpoints around Ella.",
    image: "/images/tours/ella.jpg",
    href: "/tours/ella-hill-country",
  },
  {
    number: "04",
    slug: "yala-safari",
    title: "Yala Wildlife Safari",
    location: "Yala National Park",
    duration: "Half / Full Day",
    category: "Wildlife",
    shortDescription:
      "Head into Yala National Park in search of elephants, leopards and remarkable wildlife.",
    description:
      "Travel into Yala National Park on a wildlife safari in search of elephants, leopards and Sri Lanka's remarkable birdlife.",
    image: "/images/tours/yala.jpg",
    href: "/tours/yala-safari",
  },
  {
    number: "05",
    slug: "galle-south-coast",
    title: "Galle & South Coast",
    location: "Southern Sri Lanka",
    duration: "Full Day",
    category: "Coast",
    shortDescription:
      "Discover historic Galle Fort and the tropical landscapes of Sri Lanka's southern coastline.",
    description:
      "Explore historic Galle Fort, tropical coastline and relaxed southern destinations on a flexible private excursion.",
    image: "/images/tours/galle.jpg",
    href: "/tours/galle-south-coast",
  },
  {
    number: "06",
    slug: "cultural-triangle",
    title: "Cultural Triangle",
    location: "Central North",
    duration: "2–4 Days",
    category: "Culture",
    shortDescription:
      "Journey through ancient cities, sacred sites and some of Sri Lanka's greatest historic landscapes.",
    description:
      "Journey through Sri Lanka's ancient cities, sacred sites and historic landscapes with an itinerary shaped around your available time.",
    image: "/images/tours/cultural-triangle.jpg",
    href: "/tours/cultural-triangle",
  },
  {
    number: "07",
    slug: "nuwara-eliya",
    title: "Nuwara Eliya & Tea Country",
    location: "Central Highlands",
    duration: "Full Day",
    category: "Hill Country",
    shortDescription:
      "Experience cool mountain landscapes, tea estates and the charm of Sri Lanka's highlands.",
    description:
      "Travel through cool mountain landscapes, tea estates and colonial-era Nuwara Eliya in the heart of Sri Lanka's highlands.",
    image: "/images/tours/nuwara-eliya.jpg",
    href: "/tours/nuwara-eliya",
  },
  {
    number: "08",
    slug: "mirissa",
    title: "Mirissa & Southern Coast",
    location: "South Coast",
    duration: "Full Day",
    category: "Coast",
    shortDescription:
      "Enjoy tropical beaches, coastal scenery and the relaxed atmosphere of southern Sri Lanka.",
    description:
      "Enjoy tropical beaches, coastal scenery and the relaxed atmosphere of Sri Lanka's beautiful southern coastline.",
    image: "/images/tours/mirissa.jpg",
    href: "/tours/mirissa",
  },
];

export function getTourBySlug(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}

export function getToursByCategory(category: TourCategory) {
  return tours.filter((tour) => tour.category === category);
}