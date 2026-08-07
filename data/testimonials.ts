export type Testimonial = {
  id: number;
  name: string;
  country: string;
  rating: number;
  feedback: string;
  trip?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Anna",
    country: "Germany",
    rating: 5,
    feedback:
      "A wonderful experience from beginning to end. Everything was well organized and we always felt comfortable throughout our journey.",
    trip: "Sri Lanka Round Tour",
  },
  {
    id: 2,
    name: "Michael",
    country: "United Kingdom",
    rating: 5,
    feedback:
      "Our trip was planned around exactly what we wanted to see. The local knowledge and flexibility made our time in Sri Lanka very special.",
    trip: "Private Tour",
  },
  {
    id: 3,
    name: "Elena",
    country: "Italy",
    rating: 5,
    feedback:
      "We discovered beautiful places that we would never have found by ourselves. The entire journey felt personal and relaxed.",
    trip: "Custom Itinerary",
  },
  {
    id: 4,
    name: "Thomas",
    country: "France",
    rating: 5,
    feedback:
      "Friendly, reliable and very helpful throughout our holiday. We would happily travel with Avi Lanka again.",
    trip: "Car with Driver",
  },
];