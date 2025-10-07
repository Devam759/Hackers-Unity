import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CommunityGallery from "@/components/CommunityGallery";
import EventsCarousel from "@/components/EventsCarousel";
import Sponsors from "@/components/Sponsors";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

// Import data
import eventsData from "@/data/events.json";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <NavBar />
      <main id="main-content" className="bg-black">
        <Hero />
        <CommunityGallery />
        <EventsCarousel events={eventsData} />
        <Sponsors />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

