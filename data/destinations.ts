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

  topPlaces: string[];
  thingsToDo: string[];
  bestTimeToVisit: string;
  travelTips: string[];

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

    topPlaces: [
      "Sigiriya Rock Fortress",
      "Pidurangala Rock",
      "Dambulla Cave Temple",
      "Sigiriya Museum",
    ],

    thingsToDo: [
      "Climb Sigiriya Rock Fortress",
      "Watch sunrise or sunset from Pidurangala",
      "Explore ancient water gardens",
      "Visit nearby Dambulla",
      "Discover the Cultural Triangle",
    ],

    bestTimeToVisit:
      "Sigiriya can be visited throughout much of the year. Early mornings are generally best for climbing because temperatures are cooler and the site is less crowded.",

    travelTips: [
      "Start early to avoid the midday heat",
      "Wear comfortable walking shoes",
      "Carry drinking water",
      "Allow enough time for the climb and archaeological areas",
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

    topPlaces: [
      "Nine Arch Bridge",
      "Little Adam's Peak",
      "Ella Rock",
      "Ravana Falls",
    ],

    thingsToDo: [
      "Walk to Nine Arch Bridge",
      "Hike Little Adam's Peak",
      "Explore tea country",
      "Visit nearby waterfalls",
      "Enjoy the hill-country train journey",
    ],

    bestTimeToVisit:
      "Ella is popular throughout much of the year. Mornings usually offer clearer mountain views, while rain can occur at different times in the highlands.",

    travelTips: [
      "Bring comfortable walking shoes",
      "Carry a light rain jacket",
      "Start hikes early in the day",
      "Allow extra time for scenic train journeys",
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

    topPlaces: [
      "Temple of the Tooth",
      "Kandy Lake",
      "Royal Botanical Gardens",
      "Kandy View Point",
    ],

    thingsToDo: [
      "Visit the Temple of the Tooth",
      "Walk around Kandy Lake",
      "Explore the botanical gardens",
      "Watch a cultural performance",
      "Discover central Sri Lankan traditions",
    ],

    bestTimeToVisit:
      "Kandy can be visited throughout the year. Mornings and late afternoons are generally comfortable for sightseeing around the city.",

    travelTips: [
      "Dress respectfully when visiting temples",
      "Shoes must be removed at selected religious sites",
      "Allow extra travel time because city traffic can be busy",
      "Carry a light umbrella during wet weather",
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

    topPlaces: [
      "Yala National Park",
      "Palatupana Entrance",
      "Wildlife viewing areas",
      "Nearby southern nature reserves",
    ],

    thingsToDo: [
      "Join a morning or afternoon safari",
      "Look for elephants and leopards",
      "Observe Sri Lanka's birdlife",
      "Photograph natural landscapes",
      "Combine Yala with the southern coast",
    ],

    bestTimeToVisit:
      "Wildlife can be seen at different times of the year, though conditions vary seasonally. Early-morning and late-afternoon safari times are commonly preferred.",

    travelTips: [
      "Wildlife sightings cannot be guaranteed",
      "Follow all park and driver instructions",
      "Bring sun protection and water",
      "Avoid feeding or disturbing wildlife",
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

    topPlaces: [
      "Galle Fort",
      "Galle Lighthouse",
      "Dutch Reformed Church",
      "Southern coastal beaches",
    ],

    thingsToDo: [
      "Walk around Galle Fort",
      "Explore historic streets",
      "Watch sunset from the fort walls",
      "Visit cafés and small local shops",
      "Combine Galle with nearby beaches",
    ],

    bestTimeToVisit:
      "Galle can be explored throughout much of the year. Early mornings and late afternoons are particularly pleasant for walking around the fort.",

    travelTips: [
      "The fort is best explored on foot",
      "Bring sun protection",
      "Wear comfortable shoes",
      "Allow time to explore side streets and viewpoints",
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

    topPlaces: [
      "Gregory Lake",
      "Tea estates",
      "Victoria Park",
      "Nearby waterfalls",
    ],

    thingsToDo: [
      "Visit a tea estate",
      "Explore Gregory Lake",
      "Discover highland scenery",
      "Visit nearby waterfalls",
      "Enjoy the cooler mountain climate",
    ],

    bestTimeToVisit:
      "Nuwara Eliya has a cooler climate throughout the year compared with most other parts of Sri Lanka. Weather can change quickly in the highlands.",

    travelTips: [
      "Bring a light jacket",
      "Expect cooler evenings",
      "Wear comfortable walking shoes",
      "Check weather conditions before outdoor activities",
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

    topPlaces: [
      "Mirissa Beach",
      "Coconut Tree Hill",
      "Parrot Rock",
      "Nearby southern beaches",
    ],

    thingsToDo: [
      "Relax on Mirissa Beach",
      "Visit coastal viewpoints",
      "Join a whale-watching trip",
      "Explore nearby beaches",
      "Enjoy the south-coast atmosphere",
    ],

    bestTimeToVisit:
      "Beach and sea conditions vary seasonally along Sri Lanka's south coast. Marine activities are also dependent on weather and ocean conditions.",

    travelTips: [
      "Use sun protection",
      "Check sea conditions before swimming",
      "Whale-watching departures are usually early",
      "Respect local safety guidance at beaches",
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

    topPlaces: [
      "Dambulla Cave Temple",
      "Golden Temple",
      "Rock viewpoints",
      "Nearby Sigiriya",
    ],

    thingsToDo: [
      "Visit the cave temple complex",
      "Explore historic Buddhist art",
      "Walk to elevated viewpoints",
      "Learn about local religious heritage",
      "Combine Dambulla with Sigiriya",
    ],

    bestTimeToVisit:
      "Dambulla can be visited throughout much of the year. Morning visits are often more comfortable for the climb to the cave temples.",

    travelTips: [
      "Dress respectfully for the temple",
      "Wear comfortable footwear",
      "Carry water",
      "Expect steps and some uphill walking",
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