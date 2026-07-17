import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Founder from "@/components/Founder";
import Promo from "@/components/Promo";
import PhotoBreak from "@/components/PhotoBreak";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
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
        <Founder />
        <Promo />
        <PhotoBreak />
        <Services />
        <Gallery />
        <Testimonials />
        <Location />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
