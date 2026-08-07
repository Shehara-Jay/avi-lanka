export type Service = {
  number: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  href: string;
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
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}