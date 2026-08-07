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
  featured: boolean;

  price: string;

  groupSize: string;
  suitableFor: string;

  highlights: string[];
  itinerary: string[];
  included: string[];
  notIncluded: string[];
  importantInfo: string[];
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
    featured: true,

    price: "Contact for price",

    groupSize: "Private / Small Group",

    suitableFor:
      "Culture, history and sightseeing travelers",

    highlights: [
      "Sigiriya Rock Fortress",
      "Ancient water gardens",
      "Dambulla Cave Temple",
      "Cultural Triangle landscapes",
    ],

    itinerary: [
      "Depart for Sigiriya",
      "Explore the ancient water gardens",
      "Climb Sigiriya Rock Fortress",
      "Enjoy time for lunch or refreshments",
      "Travel to Dambulla",
      "Visit the Dambulla Cave Temple",
      "Return or continue your Sri Lanka journey",
    ],

    included: [
      "Private tour planning",
      "Route coordination",
      "Local travel assistance",
      "Flexible itinerary support",
    ],

    notIncluded: [
      "Entrance tickets unless specified",
      "Meals and drinks",
      "Personal expenses",
      "Optional activities",
    ],

    importantInfo: [
      "Sigiriya involves climbing a large number of steps",
      "Comfortable walking shoes are recommended",
      "Temple visitors should dress respectfully",
      "Starting early helps avoid the hottest part of the day",
    ],
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
    featured: true,

    price: "Contact for price",

    groupSize: "Private / Small Group",

    suitableFor:
      "Culture, heritage and first-time visitors",

    highlights: [
      "Temple of the Tooth",
      "Kandy Lake",
      "Traditional cultural experiences",
      "Central Sri Lankan scenery",
    ],

    itinerary: [
      "Arrive in central Kandy",
      "Explore the area around Kandy Lake",
      "Visit the Temple of the Tooth",
      "Enjoy time in the city",
      "Visit selected cultural attractions",
      "Continue to viewpoints or nearby attractions",
      "Return or continue your itinerary",
    ],

    included: [
      "Private tour planning",
      "Route coordination",
      "Local recommendations",
      "Travel assistance",
    ],

    notIncluded: [
      "Entrance tickets unless specified",
      "Meals and drinks",
      "Personal purchases",
      "Optional cultural performances",
    ],

    importantInfo: [
      "Temple visitors should cover shoulders and knees",
      "Shoes must be removed at selected religious sites",
      "Traffic can affect travel times around Kandy",
      "The itinerary can be adjusted around your route",
    ],
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
    featured: true,

    price: "Contact for price",

    groupSize: "Private / Small Group",

    suitableFor:
      "Nature, scenery and soft-adventure travelers",

    highlights: [
      "Nine Arch Bridge",
      "Little Adam's Peak",
      "Tea country",
      "Mountain and waterfall scenery",
    ],

    itinerary: [
      "Travel through Sri Lanka's hill country",
      "Explore Ella town and surrounding landscapes",
      "Visit Nine Arch Bridge",
      "Walk to a selected viewpoint",
      "Visit a waterfall or tea area",
      "Enjoy free time in Ella",
      "Continue your hill-country journey",
    ],

    included: [
      "Route planning",
      "Local destination support",
      "Flexible sightseeing schedule",
      "Travel recommendations",
    ],

    notIncluded: [
      "Accommodation",
      "Meals and drinks",
      "Entrance fees where applicable",
      "Optional activities",
    ],

    importantInfo: [
      "Some attractions require walking",
      "Hill-country weather can change quickly",
      "Comfortable footwear is recommended",
      "A light jacket can be useful",
    ],
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
    featured: true,

    price: "Contact for price",

    groupSize: "Private / Shared Safari",

    suitableFor:
      "Wildlife, nature and photography travelers",

    highlights: [
      "Yala National Park",
      "Sri Lankan elephants",
      "Leopard habitat",
      "Birdlife and natural landscapes",
    ],

    itinerary: [
      "Meet the safari driver",
      "Travel to the park entrance",
      "Enter Yala National Park",
      "Explore different wildlife habitats",
      "Stop at selected viewing areas",
      "Search for elephants, leopards and other wildlife",
      "Return after the safari",
    ],

    included: [
      "Safari coordination",
      "Safari vehicle",
      "Driver",
      "Wildlife viewing experience",
    ],

    notIncluded: [
      "National park entrance tickets unless specified",
      "Meals and drinks",
      "Personal expenses",
      "Guaranteed wildlife sightings",
    ],

    importantInfo: [
      "Wildlife sightings cannot be guaranteed",
      "Safari schedules vary by season",
      "Morning and afternoon safaris are commonly available",
      "Follow all park and guide instructions",
    ],
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
    featured: true,

    price: "Contact for price",

    groupSize: "Private / Small Group",

    suitableFor:
      "Culture, coast and relaxed sightseeing travelers",

    highlights: [
      "Galle Fort",
      "Historic colonial streets",
      "Southern coastline",
      "Beach and coastal viewpoints",
    ],

    itinerary: [
      "Travel along the south coast",
      "Arrive at Galle Fort",
      "Walk through the historic fort area",
      "Explore selected viewpoints and streets",
      "Enjoy time for lunch or refreshments",
      "Visit selected coastal stops",
      "Return or continue along the south coast",
    ],

    included: [
      "Private excursion planning",
      "Route coordination",
      "Local recommendations",
      "Flexible sightseeing support",
    ],

    notIncluded: [
      "Meals and drinks",
      "Entrance fees where applicable",
      "Personal expenses",
      "Optional beach activities",
    ],

    importantInfo: [
      "The fort area is best explored on foot",
      "Sun protection is recommended",
      "Coastal weather can be hot during midday",
      "Stops can be adjusted around your route",
    ],
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
    featured: true,

    price: "Contact for price",

    groupSize: "Private / Small Group",

    suitableFor:
      "History, heritage and multi-day cultural travelers",

    highlights: [
      "Sigiriya",
      "Dambulla",
      "Ancient cultural sites",
      "Historic landscapes",
    ],

    itinerary: [
      "Begin your Cultural Triangle journey",
      "Visit Sigiriya",
      "Explore Dambulla",
      "Travel between historic destinations",
      "Visit selected ancient sites",
      "Enjoy flexible sightseeing days",
      "Continue to your next Sri Lankan destination",
    ],

    included: [
      "Custom multi-day route planning",
      "Destination coordination",
      "Local recommendations",
      "Travel support",
    ],

    notIncluded: [
      "Accommodation unless specified",
      "Meals and drinks",
      "Entrance tickets",
      "Personal expenses",
    ],

    importantInfo: [
      "The route depends on your available number of days",
      "Some sites require significant walking",
      "Temple dress requirements apply",
      "Early starts are useful for major heritage sites",
    ],
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
    featured: false,

    price: "Contact for price",

    groupSize: "Private / Small Group",

    suitableFor:
      "Scenery, tea and relaxed sightseeing travelers",

    highlights: [
      "Tea country",
      "Nuwara Eliya",
      "Highland scenery",
      "Cool mountain climate",
    ],

    itinerary: [
      "Travel into the central highlands",
      "Explore tea-growing landscapes",
      "Visit Nuwara Eliya",
      "Stop at selected viewpoints",
      "Visit a tea estate where available",
      "Enjoy time around the town",
      "Continue your hill-country route",
    ],

    included: [
      "Route coordination",
      "Local recommendations",
      "Flexible sightseeing schedule",
      "Travel support",
    ],

    notIncluded: [
      "Meals and drinks",
      "Tea estate fees where applicable",
      "Personal expenses",
      "Optional activities",
    ],

    importantInfo: [
      "Temperatures can be cooler than other parts of Sri Lanka",
      "Bring a light jacket",
      "Weather can change quickly",
      "Tea estate access depends on availability",
    ],
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
    featured: false,

    price: "Contact for price",

    groupSize: "Private / Small Group",

    suitableFor:
      "Beach, coast and relaxed sightseeing travelers",

    highlights: [
      "Mirissa Beach",
      "Southern coast scenery",
      "Coastal viewpoints",
      "Relaxed beach atmosphere",
    ],

    itinerary: [
      "Travel along the southern coast",
      "Arrive in Mirissa",
      "Explore selected coastal viewpoints",
      "Spend time around the beach",
      "Enjoy lunch or refreshments",
      "Visit nearby coastal locations",
      "Return or continue your route",
    ],

    included: [
      "Private excursion planning",
      "Route coordination",
      "Local recommendations",
      "Flexible travel support",
    ],

    notIncluded: [
      "Meals and drinks",
      "Optional marine activities",
      "Personal expenses",
      "Entrance fees where applicable",
    ],

    importantInfo: [
      "Coastal conditions vary by season",
      "Bring sun protection",
      "Whale watching requires a separate early-morning schedule",
      "The route can be combined with Galle and other south-coast destinations",
    ],
  },
];

export function getTourBySlug(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}

export function getToursByCategory(category: TourCategory) {
  return tours.filter((tour) => tour.category === category);
}

export function getFeaturedTours() {
  return tours.filter((tour) => tour.featured);
}