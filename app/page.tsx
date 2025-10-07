import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import StatsStrip from "@/components/StatsStrip";
import Achievements from "@/components/Achievements";
import CommunityGallery from "@/components/CommunityGallery";
import EventsCarousel from "@/components/EventsCarousel";
import Sponsors from "@/components/Sponsors";
import Partners from "@/components/Partners";
import TeamSection from "@/components/TeamSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

// Import data
import eventsData from "@/data/events.json";

export default function Home() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <Hero />
        <StatsStrip />
        <Achievements />
        <CommunityGallery />
        <EventsCarousel events={eventsData} />
        <Sponsors />
        <Partners />
        <TeamSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

