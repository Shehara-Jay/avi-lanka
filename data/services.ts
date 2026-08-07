export type Service = {
  number: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  href: string;

  suitableFor: string;
  availability: string;
  flexibility: string;

  highlights: string[];
  included: string[];
  howItWorks: string[];
};

export const services: Service[] = [
  {
    number: "01",
    slug: "private-tours",
    title: "Private Tours",

    shortDescription:
      "Personalized journeys across Sri Lanka, designed around your interests, schedule and travel style.",

    description:
      "Custom-made private tours designed around your interests, schedule and preferred pace. Travel through Sri Lanka with more flexibility, privacy and local support throughout the journey.",

    image: "/images/services/private-tours.jpg",
    href: "/services/private-tours",

    suitableFor:
      "Couples, families, groups and private travelers",

    availability:
      "Available throughout the year",

    flexibility:
      "Fully customizable",

    highlights: [
      "Private itinerary built around your interests",
      "Flexible travel schedule",
      "Multiple destinations can be combined",
      "Local planning and travel assistance",
    ],

    included: [
      "Custom itinerary planning",
      "Travel route coordination",
      "Local recommendations",
      "Ongoing support during the journey",
    ],

    howItWorks: [
      "Tell us your travel dates and interests",
      "We discuss the places and experiences you prefer",
      "A customized itinerary is prepared",
      "You review and adjust the plan",
      "Your private journey is arranged",
    ],
  },

  {
    number: "02",
    slug: "car-with-driver",
    title: "Car with Driver",

    shortDescription:
      "Travel comfortably with an experienced local driver and explore Sri Lanka at your own pace.",

    description:
      "Travel comfortably with an experienced local driver who understands Sri Lanka's roads, destinations and travel conditions. Enjoy a flexible journey without worrying about transport logistics.",

    image: "/images/services/car-driver.jpg",
    href: "/services/car-with-driver",

    suitableFor:
      "Independent travelers, couples, families and groups",

    availability:
      "Available throughout Sri Lanka",

    flexibility:
      "Daily or multi-day arrangements",

    highlights: [
      "Experienced local driver",
      "Flexible daily travel",
      "Comfortable private transport",
      "Routes can be adjusted during the journey",
    ],

    included: [
      "Private vehicle",
      "Experienced driver",
      "Basic route planning assistance",
      "Local travel support",
    ],

    howItWorks: [
      "Share your travel dates and route",
      "Tell us the number of travelers",
      "We recommend a suitable vehicle",
      "Confirm the travel plan",
      "Your driver and vehicle are arranged",
    ],
  },

  {
    number: "03",
    slug: "local-guides",
    title: "Local Guides",

    shortDescription:
      "Discover Sri Lanka with knowledgeable local guides who bring each destination and story to life.",

    description:
      "Explore Sri Lanka with knowledgeable local guides who can explain the history, culture, traditions and stories behind the places you visit.",

    image: "/images/services/local-guide.jpg",
    href: "/services/local-guides",

    suitableFor:
      "Culture, heritage and destination-focused travelers",

    availability:
      "Subject to location and guide availability",

    flexibility:
      "Half-day, full-day or selected destinations",

    highlights: [
      "Local destination knowledge",
      "Cultural and historical explanations",
      "Personal guidance",
      "Flexible destination-based support",
    ],

    included: [
      "Local guide service",
      "Destination guidance",
      "Cultural and historical information",
      "Local recommendations",
    ],

    howItWorks: [
      "Tell us which destinations you will visit",
      "Share your preferred dates",
      "We arrange a suitable local guide",
      "Confirm the meeting point and schedule",
      "Explore the destination with your guide",
    ],
  },

  {
    number: "04",
    slug: "translator-assistance",
    title: "Translator & Assistance",

    shortDescription:
      "Practical translation and local support to make your journey easier from arrival to departure.",

    description:
      "Get practical local assistance when communication, coordination or travel arrangements become difficult. Translation support can help make your journey smoother and more comfortable.",

    image: "/images/services/translator.jpg",
    href: "/services/translator-assistance",

    suitableFor:
      "Travelers needing language or local coordination support",

    availability:
      "By arrangement",

    flexibility:
      "Short-term or trip-based assistance",

    highlights: [
      "Translation support",
      "Local communication assistance",
      "Travel coordination help",
      "Practical support when needed",
    ],

    included: [
      "Translation assistance",
      "Local communication support",
      "Basic travel coordination",
      "Help with selected arrangements",
    ],

    howItWorks: [
      "Tell us what type of assistance you need",
      "Share the date and location",
      "We confirm the available support",
      "Agree on the required duration",
      "Assistance is arranged",
    ],
  },

  {
    number: "05",
    slug: "car-rental",
    title: "Car Rental",

    shortDescription:
      "Flexible transport options for travelers who prefer greater independence while exploring the island.",

    description:
      "Choose flexible car rental options if you prefer more independence while traveling around Sri Lanka, with local assistance available when needed.",

    image: "/images/services/car-rental.jpg",
    href: "/services/car-rental",

    suitableFor:
      "Independent travelers",

    availability:
      "Subject to vehicle availability",

    flexibility:
      "Daily and longer rental periods",

    highlights: [
      "Flexible rental periods",
      "Different vehicle options",
      "Independent travel",
      "Local support when required",
    ],

    included: [
      "Selected rental vehicle",
      "Rental coordination",
      "Basic vehicle information",
      "Local assistance where required",
    ],

    howItWorks: [
      "Share your rental dates",
      "Tell us the vehicle type you prefer",
      "We check available options",
      "Review the rental details",
      "Confirm your booking",
    ],
  },

  {
    number: "06",
    slug: "custom-itineraries",
    title: "Custom Itineraries",

    shortDescription:
      "Tell us what you want to experience and we will shape a Sri Lankan journey around you.",

    description:
      "Tell us what you want from your Sri Lankan journey and we will help shape an itinerary around your interests, travel dates and available time.",

    image: "/images/services/custom-itinerary.jpg",
    href: "/services/custom-itineraries",

    suitableFor:
      "Travelers who want a personalized trip",

    availability:
      "Available throughout the year",

    flexibility:
      "Fully customizable",

    highlights: [
      "Built around your interests",
      "Flexible destination selection",
      "Balanced travel times",
      "Activities and services can be combined",
    ],

    included: [
      "Personal itinerary planning",
      "Destination recommendations",
      "Suggested travel route",
      "Activity and service suggestions",
    ],

    howItWorks: [
      "Tell us your travel dates",
      "Share your interests and priorities",
      "We suggest destinations and experiences",
      "A custom itinerary is prepared",
      "You review and finalize the journey",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find(
    (service) => service.slug === slug
  );
}