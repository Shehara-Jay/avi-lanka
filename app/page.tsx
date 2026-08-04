import Hero from "@/components/home/Hero";
import OurServices from "@/components/home/OurServices";
import ExcursionsTours from "@/components/home/ExcursionsTours";
import ExploreSriLanka from "@/components/home/ExploreSriLanka";
import WhyAviLanka from "@/components/home/WhyAviLanka";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurServices />
      <ExcursionsTours />
      <ExploreSriLanka />
      <WhyAviLanka />
    </main>
  );
}