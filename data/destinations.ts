export type DestinationCategory =
  | "Culture"
  | "Hill Country"
  | "Wildlife"
  | "Coast"
  | "Nature";

export type Destination = {
  number: string;
  slug: string;
  name: string;
  region: string;
  category: DestinationCategory;
  shortDescription: string;
  description: string;
  image: string;
  heroImage: string;
  suggestedDuration: string;
  highlights: string[];
  relatedTourSlugs: string[];
  featured: boolean;
  href: string;
};

export const destinations: Destination[] = [
  {
    number: "01",
    slug: "sigiriya",
    name: "Sigiriya",
    region: "Cultural Triangle",
    category: "Culture",
    shortDescription:
      "Ancient history, remarkable views and one of Sri Lanka's most recognizable landmarks.",
    description:
      "Sigiriya is one of Sri Lanka's most remarkable historic destinations. Rising dramatically above the surrounding landscape, the ancient rock fortress combines archaeology, landscaped gardens, frescoes and panoramic views across the Cultural Triangle.",
    image: "/images/about-sri-lanka/sigiriya.jpg",
    heroImage: "/images/about-sri-lanka/sigiriya.jpg",
    suggestedDuration: "1–2 Days",
    highlights: [
      "Sigiriya Rock Fortress",
      "Ancient water gardens",
      "Panoramic summit views",
      "Nearby Dambulla Cave Temple",
    ],
    relatedTourSlugs: [
      "sigiriya-dambulla",
      "cultural-triangle",
    ],
    featured: true,
    href: "/destinations/sigiriya",
  },
  {
    number: "02",
    slug: "ella",
    name: "Ella",
    region: "Hill Country",
    category: "Hill Country",
    shortDescription:
      "Mountain views, waterfalls, tea country and some of Sri Lanka's most beautiful walking routes.",
    description:
      "Ella is a relaxed mountain town surrounded by tea plantations, waterfalls and dramatic highland scenery. It is one of Sri Lanka's most popular places for scenic walks, viewpoints and the famous railway journey through the hill country.",
    image: "/images/about-sri-lanka/ella.jpg",
    heroImage: "/images/about-sri-lanka/ella.jpg",
    suggestedDuration: "2–3 Days",
    highlights: [
      "Nine Arch Bridge",
      "Little Adam's Peak",
      "Ella Rock",
      "Waterfalls and tea country",
    ],
    relatedTourSlugs: ["ella-hill-country"],
    featured: true,
    href: "/destinations/ella",
  },
  {
    number: "03",
    slug: "kandy",
    name: "Kandy",
    region: "Central Province",
    category: "Culture",
    shortDescription:
      "Sri Lanka's cultural capital, surrounded by hills, history and living traditions.",
    description:
      "Kandy sits among Sri Lanka's central hills and remains one of the country's most important cultural destinations. The city combines sacred heritage, traditional arts, gardens and a scenic lake in the heart of the city.",
    image: "/images/about-sri-lanka/kandy.jpg",
    heroImage: "/images/about-sri-lanka/kandy.jpg",
    suggestedDuration: "1–2 Days",
    highlights: [
      "Temple of the Tooth",
      "Kandy Lake",
      "Royal Botanical Gardens",
      "Traditional culture and dance",
    ],
    relatedTourSlugs: ["kandy"],
    featured: true,
    href: "/destinations/kandy",
  },
  {
    number: "04",
    slug: "yala",
    name: "Yala",
    region: "Southern Sri Lanka",
    category: "Wildlife",
    shortDescription:
      "Wild landscapes and one of Sri Lanka's best-known destinations for safari experiences.",
    description:
      "Yala National Park is one of Sri Lanka's most famous wildlife areas. Its varied landscapes provide habitat for elephants, leopards, crocodiles, deer and an extraordinary variety of birdlife.",
    image: "/images/about-sri-lanka/yala.jpg",
    heroImage: "/images/about-sri-lanka/yala.jpg",
    suggestedDuration: "1–2 Days",
    highlights: [
      "Jeep safari experiences",
      "Sri Lankan leopards",
      "Wild elephants",
      "Birdlife and natural landscapes",
    ],
    relatedTourSlugs: ["yala-safari"],
    featured: true,
    href: "/destinations/yala",
  },
  {
    number: "05",
    slug: "galle",
    name: "Galle",
    region: "South Coast",
    category: "Coast",
    shortDescription:
      "Colonial heritage, ocean views and the character of Sri Lanka's beautiful southern coast.",
    description:
      "Galle combines coastal scenery with centuries of history. At its heart is Galle Fort, where colonial architecture, narrow streets, cafés, museums and ocean views create one of Sri Lanka's most distinctive destinations.",
    image: "/images/about-sri-lanka/galle.jpg",
    heroImage: "/images/about-sri-lanka/galle.jpg",
    suggestedDuration: "1–2 Days",
    highlights: [
      "Galle Fort",
      "Historic streets and architecture",
      "Indian Ocean sunsets",
      "Nearby southern beaches",
    ],
    relatedTourSlugs: ["galle-south-coast"],
    featured: true,
    href: "/destinations/galle",
  },
  {
    number: "06",
    slug: "nuwara-eliya",
    name: "Nuwara Eliya",
    region: "Central Highlands",
    category: "Hill Country",
    shortDescription:
      "Cool mountain weather, tea estates and beautiful landscapes in Sri Lanka's central highlands.",
    description:
      "Nuwara Eliya is set high in Sri Lanka's central mountains and is known for its cool climate, tea plantations and distinctive colonial-era character. The surrounding region offers some of the island's most scenic highland landscapes.",
    image: "/images/about-sri-lanka/nuwara-eliya.jpg",
    heroImage: "/images/about-sri-lanka/nuwara-eliya.jpg",
    suggestedDuration: "1–2 Days",
    highlights: [
      "Tea estates and factories",
      "Gregory Lake",
      "Cool highland climate",
      "Scenic mountain routes",
    ],
    relatedTourSlugs: ["nuwara-eliya"],
    featured: true,
    href: "/destinations/nuwara-eliya",
  },
  {
    number: "07",
    slug: "mirissa",
    name: "Mirissa",
    region: "South Coast",
    category: "Coast",
    shortDescription:
      "Tropical beaches and a relaxed coastal atmosphere on Sri Lanka's southern shore.",
    description:
      "Mirissa is one of Sri Lanka's best-known southern beach destinations. Its tropical coastline, relaxed atmosphere and access to marine experiences make it a popular stop along the south coast.",
    image: "/images/tours/mirissa.jpg",
    heroImage: "/images/tours/mirissa.jpg",
    suggestedDuration: "2–3 Days",
    highlights: [
      "Mirissa Beach",
      "Coastal viewpoints",
      "Whale watching",
      "Nearby southern beaches",
    ],
    relatedTourSlugs: ["mirissa"],
    featured: false,
    href: "/destinations/mirissa",
  },
  {
    number: "08",
    slug: "dambulla",
    name: "Dambulla",
    region: "Cultural Triangle",
    category: "Culture",
    shortDescription:
      "Ancient cave temples and centuries of Buddhist art in the heart of Sri Lanka.",
    description:
      "Dambulla is best known for its historic cave temple complex, where ancient statues and paintings are preserved within a series of natural rock caves. Its central location also makes it an important stop in Sri Lanka's Cultural Triangle.",
    image: "/images/tours/sigiriya-dambulla.jpg",
    heroImage: "/images/tours/sigiriya-dambulla.jpg",
    suggestedDuration: "Half / Full Day",
    highlights: [
      "Dambulla Cave Temple",
      "Ancient Buddhist art",
      "Rock temple views",
      "Easy connection with Sigiriya",
    ],
    relatedTourSlugs: [
      "sigiriya-dambulla",
      "cultural-triangle",
    ],
    featured: false,
    href: "/destinations/dambulla",
  },
];

export function getDestinationBySlug(slug: string) {
  return destinations.find(
    (destination) => destination.slug === slug
  );
}

export function getFeaturedDestinations() {
  return destinations.filter(
    (destination) => destination.featured
  );
}

export function getDestinationsByCategory(
  category: DestinationCategory
) {
  return destinations.filter(
    (destination) => destination.category === category
  );
}