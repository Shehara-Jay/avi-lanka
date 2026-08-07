export type ActivityCategory =
  | "Ocean"
  | "Wildlife"
  | "Nature"
  | "Wellness"
  | "Culture";

export type Activity = {
  number: string;
  slug: string;
  title: string;
  category: ActivityCategory;
  location: string;

  shortDescription: string;
  description: string;

  image: string;

  duration: string;
  groupSize: string;
  suitableFor: string;

  whatYouWillDo: string[];
  included: string[];
  notIncluded: string[];
  importantInfo: string[];

  featured: boolean;
  href: string;
};

export const activities: Activity[] = [
  {
    number: "01",
    slug: "fishing",
    title: "Fishing",
    category: "Ocean",
    location: "Coastal Sri Lanka",

    shortDescription:
      "Experience Sri Lanka's coastal waters through relaxing and adventurous fishing experiences.",

    description:
      "Spend time on Sri Lanka's coastline and experience local fishing traditions with an activity that can be adapted around your travel route and available time.",

    image: "/images/activities/fishing.jpg",

    duration: "3–5 Hours",
    groupSize: "Private / Small Group",
    suitableFor: "Beginners & Experienced Guests",

    whatYouWillDo: [
      "Meet your local guide or fishing crew",
      "Receive a short safety briefing",
      "Travel to the selected fishing location",
      "Prepare the fishing equipment",
      "Enjoy a guided fishing session",
      "Return after the activity",
    ],

    included: [
      "Fishing equipment",
      "Local guide or crew",
      "Basic safety equipment",
      "Activity coordination",
    ],

    notIncluded: [
      "Hotel transfers unless arranged",
      "Food and drinks unless specified",
      "Personal expenses",
      "Tips and gratuities",
    ],

    importantInfo: [
      "Activity depends on sea and weather conditions",
      "Wear comfortable clothing suitable for the water",
      "Bring sun protection",
      "Advance booking is recommended",
    ],

    featured: true,
    href: "/activities/fishing",
  },

  {
    number: "02",
    slug: "diving",
    title: "Diving",
    category: "Ocean",
    location: "Sri Lankan Coast",

    shortDescription:
      "Explore reefs, marine life and underwater landscapes around Sri Lanka's coastline.",

    description:
      "Discover Sri Lanka beneath the surface through a diving experience designed around your skill level and the conditions at the selected coastal location.",

    image: "/images/activities/diving.jpg",

    duration: "2–4 Hours",
    groupSize: "Private / Small Group",
    suitableFor: "Beginners & Certified Divers",

    whatYouWillDo: [
      "Meet the diving instructor",
      "Complete the safety briefing",
      "Prepare and check diving equipment",
      "Travel to the selected dive site",
      "Join the guided underwater session",
      "Return to the dive center",
    ],

    included: [
      "Diving equipment",
      "Instructor or dive guide",
      "Safety briefing",
      "Dive site coordination",
    ],

    notIncluded: [
      "Hotel transfers unless arranged",
      "Meals and drinks",
      "Personal expenses",
      "Optional additional dives",
    ],

    importantInfo: [
      "Diving conditions depend on weather and sea conditions",
      "Certification may be required for selected dives",
      "Beginners can request introductory sessions",
      "Medical conditions should be disclosed before diving",
    ],

    featured: true,
    href: "/activities/diving",
  },

  {
    number: "03",
    slug: "surfing",
    title: "Surfing",
    category: "Ocean",
    location: "South & East Coast",

    shortDescription:
      "Discover some of Sri Lanka's best-known surf destinations along the south and east coasts.",

    description:
      "Enjoy a surfing experience along Sri Lanka's tropical coastline with sessions suitable for beginners as well as travelers with previous surfing experience.",

    image: "/images/activities/surfing.jpg",

    duration: "2–3 Hours",
    groupSize: "Private / Small Group",
    suitableFor: "Beginners & Experienced Surfers",

    whatYouWillDo: [
      "Meet your local surf instructor",
      "Receive a safety briefing",
      "Learn basic surfing techniques",
      "Practice techniques on the beach",
      "Join a guided surfing session",
      "Enjoy free time to continue practicing",
    ],

    included: [
      "Surfboard",
      "Surf instructor",
      "Safety briefing",
      "Basic surfing equipment",
    ],

    notIncluded: [
      "Hotel transfers unless requested",
      "Food and drinks",
      "Personal expenses",
      "Optional photography",
    ],

    importantInfo: [
      "Swimming ability is recommended",
      "Activity depends on sea and weather conditions",
      "Bring swimwear, sunscreen and a towel",
      "Suitable surf locations vary by season",
    ],

    featured: true,
    href: "/activities/surfing",
  },

  {
    number: "04",
    slug: "whale-watching",
    title: "Whale Watching",
    category: "Wildlife",
    location: "Mirissa & Coastal Areas",

    shortDescription:
      "Head out to sea for the chance to experience Sri Lanka's remarkable marine wildlife.",

    description:
      "Travel offshore from selected coastal areas for the opportunity to observe whales, dolphins and other marine wildlife in their natural environment.",

    image: "/images/activities/whale-watching.jpg",

    duration: "3–5 Hours",
    groupSize: "Shared / Private Options",
    suitableFor: "Most Travelers",

    whatYouWillDo: [
      "Arrive at the departure point",
      "Receive a short safety briefing",
      "Board the whale-watching boat",
      "Travel to known marine wildlife areas",
      "Observe whales and dolphins when conditions allow",
      "Return to the harbor",
    ],

    included: [
      "Boat trip",
      "Crew and guide",
      "Safety equipment",
      "Wildlife viewing experience",
    ],

    notIncluded: [
      "Hotel transfers unless arranged",
      "Personal expenses",
      "Meals unless specified",
      "Guaranteed wildlife sightings",
    ],

    importantInfo: [
      "Wildlife sightings cannot be guaranteed",
      "Trips depend on sea and weather conditions",
      "Morning departures are common",
      "Travelers prone to seasickness should prepare accordingly",
    ],

    featured: true,
    href: "/activities/whale-watching",
  },

  {
    number: "05",
    slug: "water-sports",
    title: "Water Sports",
    category: "Ocean",
    location: "Coastal Sri Lanka",

    shortDescription:
      "Add some adventure to your beach holiday with exciting water-based activities.",

    description:
      "Enjoy a selection of water sports around Sri Lanka's coastal destinations, with activities depending on location, season and weather conditions.",

    image: "/images/activities/water-sports.jpg",

    duration: "1–3 Hours",
    groupSize: "Private / Small Group",
    suitableFor: "Adventure Travelers",

    whatYouWillDo: [
      "Meet the activity team",
      "Choose available water sports",
      "Receive a safety briefing",
      "Prepare the required equipment",
      "Take part in the selected activities",
      "Return equipment after the session",
    ],

    included: [
      "Activity equipment",
      "Safety equipment",
      "Instructor or activity guide",
      "Basic activity briefing",
    ],

    notIncluded: [
      "Hotel transfers unless arranged",
      "Food and drinks",
      "Personal expenses",
      "Additional activities not selected",
    ],

    importantInfo: [
      "Available activities depend on the location",
      "Weather and sea conditions may affect availability",
      "Swimming ability may be required",
      "Follow all instructor safety guidance",
    ],

    featured: false,
    href: "/activities/water-sports",
  },

  {
    number: "06",
    slug: "waterfalls",
    title: "Waterfalls",
    category: "Nature",
    location: "Hill Country",

    shortDescription:
      "Discover spectacular waterfalls hidden among Sri Lanka's mountains and tropical landscapes.",

    description:
      "Explore Sri Lanka's highlands and discover scenic waterfalls surrounded by forests, tea plantations and mountain landscapes.",

    image: "/images/activities/waterfalls.jpg",

    duration: "Half / Full Day",
    groupSize: "Private",
    suitableFor: "Nature Lovers",

    whatYouWillDo: [
      "Travel through Sri Lanka's hill country",
      "Visit selected waterfall locations",
      "Enjoy scenic viewpoints",
      "Take short nature walks where suitable",
      "Spend time photographing the landscapes",
      "Continue along your planned route",
    ],

    included: [
      "Route planning",
      "Local travel assistance",
      "Selected waterfall visits",
      "Local recommendations",
    ],

    notIncluded: [
      "Entrance fees where applicable",
      "Food and drinks",
      "Personal expenses",
      "Special hiking equipment",
    ],

    importantInfo: [
      "Some waterfalls require short walks",
      "Paths can become slippery during rain",
      "Wear comfortable footwear",
      "Water levels change depending on season",
    ],

    featured: true,
    href: "/activities/waterfalls",
  },

  {
    number: "07",
    slug: "tea-trails",
    title: "Tea Trails",
    category: "Nature",
    location: "Central Highlands",

    shortDescription:
      "Walk through beautiful tea country and discover the story behind Ceylon tea.",

    description:
      "Explore Sri Lanka's tea-growing highlands through scenic trails, plantation landscapes and experiences that introduce the story of Ceylon tea.",

    image: "/images/activities/tea-trails.jpg",

    duration: "Half / Full Day",
    groupSize: "Private / Small Group",
    suitableFor: "Nature & Culture Travelers",

    whatYouWillDo: [
      "Travel into Sri Lanka's tea country",
      "Walk through plantation landscapes",
      "Learn about tea cultivation",
      "Visit a tea factory when available",
      "Learn about tea processing",
      "Enjoy a tea tasting experience",
    ],

    included: [
      "Tea plantation experience",
      "Local guidance",
      "Tea factory visit where available",
      "Tea tasting where available",
    ],

    notIncluded: [
      "Hotel transfers unless arranged",
      "Meals",
      "Personal expenses",
      "Optional purchases",
    ],

    importantInfo: [
      "Wear comfortable walking shoes",
      "Highland weather can change quickly",
      "Bring a light jacket",
      "Factory access may depend on operating schedules",
    ],

    featured: true,
    href: "/activities/tea-trails",
  },

  {
    number: "08",
    slug: "bird-watching",
    title: "Bird Watching",
    category: "Wildlife",
    location: "Across Sri Lanka",

    shortDescription:
      "Discover Sri Lanka's diverse birdlife across forests, wetlands and national parks.",

    description:
      "Explore selected natural areas with opportunities to observe Sri Lanka's resident and migratory bird species.",

    image: "/images/activities/bird-watching.jpg",

    duration: "Half / Full Day",
    groupSize: "Private / Small Group",
    suitableFor: "Nature & Wildlife Travelers",

    whatYouWillDo: [
      "Meet your local wildlife guide",
      "Travel to the selected birding location",
      "Explore forests, wetlands or protected areas",
      "Observe local bird species",
      "Learn about habitats and ecosystems",
      "Return or continue your itinerary",
    ],

    included: [
      "Local birding guidance",
      "Route coordination",
      "Selected bird-watching locations",
      "Basic wildlife information",
    ],

    notIncluded: [
      "Binocular rental unless arranged",
      "Entrance fees where applicable",
      "Meals",
      "Personal expenses",
    ],

    importantInfo: [
      "Early morning is often best for bird watching",
      "Wildlife sightings cannot be guaranteed",
      "Bring binoculars if available",
      "Wear neutral-colored comfortable clothing",
    ],

    featured: false,
    href: "/activities/bird-watching",
  },

  {
    number: "09",
    slug: "ayurvedic-medicine",
    title: "Ayurvedic Medicine",
    category: "Wellness",
    location: "Across Sri Lanka",

    shortDescription:
      "Experience Sri Lanka's traditional approach to wellness, relaxation and natural treatments.",

    description:
      "Discover Sri Lankan wellness traditions through selected Ayurvedic experiences focused on relaxation, traditional practices and natural therapies.",

    image: "/images/activities/ayurvedic-medicine.jpg",

    duration: "1–3 Hours",
    groupSize: "Private",
    suitableFor: "Wellness Travelers",

    whatYouWillDo: [
      "Visit a selected wellness center",
      "Receive an introduction to Ayurveda",
      "Discuss available wellness experiences",
      "Enjoy your selected treatment",
      "Relax after the session",
      "Receive general wellness guidance where available",
    ],

    included: [
      "Selected Ayurvedic experience",
      "Wellness center access",
      "Basic consultation where provided",
      "Activity coordination",
    ],

    notIncluded: [
      "Medical treatment",
      "Additional therapies",
      "Personal purchases",
      "Hotel transfers unless arranged",
    ],

    importantInfo: [
      "Inform the provider about allergies or medical conditions",
      "Treatments vary by wellness center",
      "This is a tourism wellness experience and not medical advice",
      "Advance booking is recommended",
    ],

    featured: false,
    href: "/activities/ayurvedic-medicine",
  },

  {
    number: "10",
    slug: "organic-tea",
    title: "Organic Tea",
    category: "Nature",
    location: "Tea Country",

    shortDescription:
      "Visit tea-growing regions and learn about organic cultivation and Ceylon tea production.",

    description:
      "Visit selected tea-growing areas and discover more about organic cultivation, tea processing and the traditions behind Ceylon tea.",

    image: "/images/activities/organic-tea.jpg",

    duration: "2–4 Hours",
    groupSize: "Private / Small Group",
    suitableFor: "Culture & Nature Travelers",

    whatYouWillDo: [
      "Visit a selected tea estate",
      "Explore the plantation landscape",
      "Learn about organic tea cultivation",
      "Discover the tea production process",
      "Taste selected teas where available",
      "Visit the estate shop if available",
    ],

    included: [
      "Tea estate experience",
      "Local explanation",
      "Tea tasting where available",
      "Activity coordination",
    ],

    notIncluded: [
      "Tea purchases",
      "Meals",
      "Personal expenses",
      "Hotel transfers unless arranged",
    ],

    importantInfo: [
      "Experiences depend on estate availability",
      "Wear comfortable footwear",
      "Highland weather may be cool",
      "Tea production schedules may vary",
    ],

    featured: false,
    href: "/activities/organic-tea",
  },

  {
    number: "11",
    slug: "elephant-watching",
    title: "Elephant Watching",
    category: "Wildlife",
    location: "National Parks",

    shortDescription:
      "Observe Sri Lankan elephants in the natural landscapes of the island's national parks.",

    description:
      "Experience Sri Lanka's elephants in their natural environment through selected national park and wildlife experiences.",

    image: "/images/activities/elephant-watching.jpg",

    duration: "Half Day",
    groupSize: "Private / Shared Safari",
    suitableFor: "Wildlife Travelers",

    whatYouWillDo: [
      "Travel to the selected national park",
      "Meet the safari driver or guide",
      "Enter the park by safari vehicle",
      "Explore known elephant habitats",
      "Observe wildlife responsibly",
      "Return after the safari",
    ],

    included: [
      "Safari vehicle",
      "Driver or wildlife guide",
      "Safari coordination",
      "Wildlife viewing experience",
    ],

    notIncluded: [
      "National park entrance tickets unless specified",
      "Meals",
      "Personal expenses",
      "Guaranteed elephant sightings",
    ],

    importantInfo: [
      "Wildlife sightings cannot be guaranteed",
      "Always maintain a safe distance from animals",
      "Do not feed wildlife",
      "Park conditions vary seasonally",
    ],

    featured: true,
    href: "/activities/elephant-watching",
  },

  {
    number: "12",
    slug: "safari",
    title: "Safari",
    category: "Wildlife",
    location: "National Parks",

    shortDescription:
      "Explore Sri Lanka's national parks in search of elephants, leopards and other wildlife.",

    description:
      "Travel through selected Sri Lankan national parks by safari vehicle and experience the island's remarkable wildlife and landscapes.",

    image: "/images/activities/safari.jpg",

    duration: "Half / Full Day",
    groupSize: "Private / Shared Safari",
    suitableFor: "Wildlife & Nature Travelers",

    whatYouWillDo: [
      "Meet your safari driver or guide",
      "Enter the selected national park",
      "Travel through different wildlife habitats",
      "Look for elephants, leopards and other wildlife",
      "Stop at selected viewing locations",
      "Return after the safari",
    ],

    included: [
      "Safari vehicle",
      "Safari driver",
      "Wildlife viewing experience",
      "Activity coordination",
    ],

    notIncluded: [
      "National park entrance tickets unless specified",
      "Meals and drinks",
      "Personal expenses",
      "Guaranteed wildlife sightings",
    ],

    importantInfo: [
      "Wildlife sightings cannot be guaranteed",
      "Safari times vary by national park",
      "Morning and afternoon safaris are commonly available",
      "Follow all park and guide instructions",
    ],

    featured: true,
    href: "/activities/safari",
  },

  {
    number: "13",
    slug: "art-and-craft",
    title: "Art & Craft",
    category: "Culture",
    location: "Across Sri Lanka",

    shortDescription:
      "Discover traditional Sri Lankan craftsmanship, local artists and cultural creativity.",

    description:
      "Explore Sri Lanka's artistic traditions through local craft workshops, handmade products and selected artisan experiences.",

    image: "/images/activities/art-and-craft.jpg",

    duration: "2–4 Hours",
    groupSize: "Private / Small Group",
    suitableFor: "Culture Travelers",

    whatYouWillDo: [
      "Visit a selected craft location",
      "Meet local artisans where available",
      "Learn about traditional techniques",
      "Observe the creation process",
      "Explore handmade Sri Lankan products",
      "Purchase local crafts if you wish",
    ],

    included: [
      "Local craft experience",
      "Artisan introduction where available",
      "Cultural explanation",
      "Activity coordination",
    ],

    notIncluded: [
      "Craft purchases",
      "Meals",
      "Personal expenses",
      "Transport unless arranged",
    ],

    importantInfo: [
      "Available workshops depend on location",
      "Some experiences may require advance booking",
      "Photography rules may vary",
      "Purchases are optional",
    ],

    featured: false,
    href: "/activities/art-and-craft",
  },
];

export function getActivityBySlug(slug: string) {
  return activities.find(
    (activity) => activity.slug === slug
  );
}

export function getFeaturedActivities() {
  return activities.filter(
    (activity) => activity.featured
  );
}

export function getActivitiesByCategory(
  category: ActivityCategory
) {
  return activities.filter(
    (activity) => activity.category === category
  );
}