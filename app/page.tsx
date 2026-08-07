import Hero from "@/components/home/Hero";
import OurServices from "@/components/home/OurServices";
import ExcursionsTours from "@/components/home/ExcursionsTours";
import ExploreSriLanka from "@/components/home/ExploreSriLanka";
import WhyAviLanka from "@/components/home/WhyAviLanka";
import Testimonials from "@/components/home/Testimonials";
import PlanJourney from "@/components/home/PlanJourney";

export default function Home() {
  return (
    <main>
      <Hero />
      <PlanJourney />
      <OurServices />
      <ExcursionsTours />
      <ExploreSriLanka />
      <WhyAviLanka />
      <Testimonials />
      
    </main>
  );
}