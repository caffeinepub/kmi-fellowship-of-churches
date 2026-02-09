import { Link } from '@tanstack/react-router';
import PageSection from '../components/PageSection';
import { PageTitle, SectionTitle, BodyText } from '../components/Typography';
import PrimaryCtas from '../components/PrimaryCtas';
import { ScriptureBlock, EventHighlight } from '../components/BrandSections';
import ServicesSection from '../components/home/ServicesSection';
import UpcomingEventsSection from '../components/home/UpcomingEventsSection';
import { Church, Heart, Users, BookOpen } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <PageSection noPadding className="relative">
        <div className="relative h-[700px] flex items-center justify-center overflow-hidden">
          <img
            src="/assets/generated/kmi-hero-holiness.dim_1920x800.png"
            alt="KMI Fellowship of Churches"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-glory-burgundy/85 via-glory-burgundy/70 to-primary/80" />
          <div className="absolute inset-0 textured-surface opacity-20" />
          
          {/* Decorative top border */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-accent via-secondary to-accent" />
          
          <div className="relative z-10 text-center text-white px-4 max-w-5xl">
            <div className="mb-8">
              <div className="inline-block w-32 h-16 bg-contain bg-center bg-no-repeat opacity-70 mb-4" style={{ backgroundImage: "url('/assets/generated/holiness-divider.dim_1600x200.png')" }} />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black mb-8 drop-shadow-2xl leading-tight">
              KMI Fellowship of Churches
            </h1>
            <p className="text-2xl md:text-3xl mb-10 text-white/95 font-semibold drop-shadow-lg">
              A Place of Worship, Growth, and Community
            </p>
            <PrimaryCtas variant="hero" />
          </div>
        </div>
      </PageSection>

      {/* Welcome Section */}
      <PageSection className="textured-surface">
        <div className="text-center max-w-4xl mx-auto">
          <SectionTitle>
            <span className="section-title-decorated">Welcome to KMI Fellowship</span>
          </SectionTitle>
          <BodyText>
            Welcome to KMI Fellowship of Churches, a Christ-centered ministry committed to worship, discipleship, and
            community impact. We are a fellowship of believers who desire to experience the presence of God, grow in
            faith, and live out the gospel through love, service, and unity.
          </BodyText>
          <BodyText>
            Whether you are searching for a church home, seeking spiritual renewal, or simply looking to grow deeper in
            your walk with Christ, you are welcome here. At KMI Fellowship, we believe no one is meant to walk alone—we
            grow best together.
          </BodyText>
        </div>
      </PageSection>

      {/* Upcoming Events Section */}
      <PageSection background="muted">
        <UpcomingEventsSection />
      </PageSection>

      {/* Services Section */}
      <PageSection className="textured-surface">
        <ServicesSection />
      </PageSection>

      {/* Core Values Section */}
      <PageSection background="muted">
        <SectionTitle className="text-center">
          <span className="section-title-decorated">Our Core Values</span>
        </SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent to-secondary mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
              <Church size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3 font-display">Worship</h3>
            <p className="text-foreground leading-relaxed text-lg">
              Encountering God's presence through authentic praise and worship
            </p>
          </div>
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-deep-plum mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
              <BookOpen size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3 font-display">Teaching</h3>
            <p className="text-foreground leading-relaxed text-lg">
              Growing in biblical knowledge and spiritual maturity
            </p>
          </div>
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-fire-red to-accent mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
              <Users size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3 font-display">Fellowship</h3>
            <p className="text-foreground leading-relaxed text-lg">
              Building authentic relationships and community
            </p>
          </div>
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-glory-burgundy to-fire-red mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
              <Heart size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3 font-display">Service</h3>
            <p className="text-foreground leading-relaxed text-lg">
              Serving our community with compassion and love
            </p>
          </div>
        </div>
      </PageSection>

      {/* Scripture Section */}
      <PageSection className="textured-surface">
        <div className="max-w-4xl mx-auto">
          <ScriptureBlock citation="Matthew 28:19-20">
            Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and
            of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you
            always, to the very end of the age.
          </ScriptureBlock>
        </div>
      </PageSection>

      {/* The Gathering at 6 Highlight */}
      <PageSection background="muted">
        <div className="max-w-4xl mx-auto">
          <EventHighlight title="The Gathering at 6">
            <BodyText>
              Join us every Sunday evening at 6:00 PM for The Gathering at 6—a dynamic worship experience designed for
              those seeking a fresh encounter with God. This service features contemporary worship, powerful teaching,
              and a welcoming atmosphere for all ages.
            </BodyText>
            <Link
              to="/gathering-at-6"
              className="inline-block mt-4 btn-primary"
            >
              Learn More About The Gathering
            </Link>
          </EventHighlight>
        </div>
      </PageSection>

      {/* Call to Action Section */}
      <PageSection className="bg-gradient-to-br from-primary via-glory-burgundy to-primary textured-surface text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-secondary/10" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="mb-6">
            <div className="inline-block w-40 h-16 bg-contain bg-center bg-no-repeat opacity-50" style={{ backgroundImage: "url('/assets/generated/holiness-divider.dim_1600x200.png')" }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black mb-8 drop-shadow-lg">
            Ready to Take Your Next Step?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/95 font-semibold">
            Whether you're visiting for the first time or looking to get more involved, we're here to help you connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/visit"
              className="bg-accent text-accent-foreground hover:bg-white hover:text-primary transition-all duration-300 font-bold px-10 py-5 rounded-xl shadow-2xl hover:shadow-accent/50 hover:scale-105 border-2 border-accent text-lg"
            >
              Plan Your Visit
            </Link>
            <Link
              to="/connect"
              className="bg-white/10 text-white hover:bg-white hover:text-primary transition-all duration-300 font-bold px-10 py-5 rounded-xl shadow-2xl backdrop-blur-sm border-2 border-white hover:scale-105 text-lg"
            >
              Get Connected
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  );
}

