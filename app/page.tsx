import Hero from "@/components/home/Hero";
import OurServices from "@/components/home/OurServices";
import ExcursionsTours from "@/components/home/ExcursionsTours";
import ExploreSriLanka from "@/components/home/ExploreSriLanka";
import WhyAviLanka from "@/components/home/WhyAviLanka";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurServices />
      <ExcursionsTours />
      <ExploreSriLanka />
      <WhyAviLanka />
      <Testimonials />
    </main>
  );
}