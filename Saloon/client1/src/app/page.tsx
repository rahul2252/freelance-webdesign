import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TagStrip from "@/components/TagStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TagStrip />
        <About />
        <Services />
        <Team />
        <BeforeAfter />
        <Testimonials />
        <Location />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
