import { Link } from '@tanstack/react-router';
import PrimaryCtas from '../components/PrimaryCtas';
import ScriptureOfTheDay from '../components/home/ScriptureOfTheDay';
import EventsTicker from '../components/home/EventsTicker';
import FeaturedEventCard from '../components/home/FeaturedEventCard';
import ServicesSection from '../components/home/ServicesSection';
import PrayerAndCareSection from '../components/home/PrayerAndCareSection';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[700px] flex items-center justify-center overflow-hidden">
          <img
            src="/assets/generated/eirc-hero-worship-vibrant.dim_2400x1350.jpg"
            alt="Praise and Worship"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/50 to-primary/70" />
          
          <div className="relative z-10 text-center text-white px-4 max-w-5xl">
            <p className="text-2xl md:text-3xl mb-4 font-light">Welcome To</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black mb-4 text-gold leading-tight hero-title-bold">
              Elohim's International Revival Center<br />
              & KMI – The Fellowship of Churches
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/95">
              A Prophetic and Apostolic Community for the Generations
            </p>
            
            {/* Oval Banner */}
            <div className="inline-block px-12 py-4 rounded-full bg-gradient-to-r from-primary/80 to-primary/70 mb-10">
              <p className="text-lg font-semibold">Prophetic and Apostolic Community</p>
            </div>
            
            <PrimaryCtas variant="hero" />
          </div>
        </div>
      </section>

      {/* Scripture of the Day */}
      <section className="py-12 bg-cream">
        <div className="container mx-auto px-4">
          <ScriptureOfTheDay />
        </div>
      </section>

      {/* Events Ticker */}
      <EventsTicker />

      {/* Featured Event */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <FeaturedEventCard />
        </div>
      </section>

      {/* Our Worship & Services */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-4 text-primary">
            Our Worship & Services
          </h2>
          <p className="text-center text-lg mb-12 text-foreground/70">
            Join us in worship, learning, and fellowship throughout the week
          </p>
          <ServicesSection />
        </div>
      </section>

      {/* Scripture of the Day (Second Display) */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <ScriptureOfTheDay />
        </div>
      </section>

      {/* Prayer & Care Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <PrayerAndCareSection />
        </div>
      </section>
    </>
  );
}
