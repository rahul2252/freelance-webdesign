import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesStrip from "@/components/ServicesStrip";
import WorkGrid from "@/components/WorkGrid";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import TrustStrip from "@/components/TrustStrip";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesStrip />
        <WorkGrid />
        <Process />
        <Pricing />
        <TrustStrip />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
