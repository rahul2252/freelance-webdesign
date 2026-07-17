import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import BrandStory from "@/components/BrandStory";
import TrustStrip from "@/components/TrustStrip";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Collections />
        <BrandStory />
        <TrustStrip />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
