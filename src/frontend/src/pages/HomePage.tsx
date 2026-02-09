import { Link } from '@tanstack/react-router';
import PageSection from '../components/PageSection';
import { PageTitle, SectionTitle, BodyText } from '../components/Typography';
import PrimaryCtas from '../components/PrimaryCtas';
import { ScriptureBlock, EventHighlight } from '../components/BrandSections';
import { Church, Heart, Users, BookOpen } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <PageSection noPadding className="relative">
        <div className="relative h-[600px] flex items-center justify-center">
          <img
            src="/assets/generated/kmi-hero.dim_1920x800.png"
            alt="KMI Fellowship of Churches"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(var(--royal-blue))]/80 to-[oklch(var(--royal-blue))]/60" />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              KMI Fellowship of Churches
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-[oklch(var(--warm-neutral))]">
              A Place of Worship, Growth, and Community
            </p>
            <PrimaryCtas variant="hero" />
          </div>
        </div>
      </PageSection>

      {/* Welcome Section */}
      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <SectionTitle>Welcome to KMI Fellowship</SectionTitle>
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

      {/* Core Values */}
      <PageSection background="muted">
        <SectionTitle className="text-center mb-12">Who We Are</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Church className="text-[oklch(var(--flame-gold))] mb-4" size={40} />
            <h3 className="text-xl font-bold text-[oklch(var(--royal-blue))] mb-3">Spirit-Led Worship</h3>
            <p className="text-foreground leading-relaxed">
              Experience passionate, authentic worship that honors God's presence and celebrates His goodness.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <BookOpen className="text-[oklch(var(--flame-gold))] mb-4" size={40} />
            <h3 className="text-xl font-bold text-[oklch(var(--royal-blue))] mb-3">Biblical Teaching</h3>
            <p className="text-foreground leading-relaxed">
              Grow in faith through relevant, life-giving teaching rooted in Scripture and practical application.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Users className="text-[oklch(var(--flame-gold))] mb-4" size={40} />
            <h3 className="text-xl font-bold text-[oklch(var(--royal-blue))] mb-3">Authentic Community</h3>
            <p className="text-foreground leading-relaxed">
              Find a church family that values love, unity, and truth—where you belong and can grow together.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Heart className="text-[oklch(var(--flame-gold))] mb-4" size={40} />
            <h3 className="text-xl font-bold text-[oklch(var(--royal-blue))] mb-3">Compassionate Service</h3>
            <p className="text-foreground leading-relaxed">
              Extend God's love beyond the church walls through practical outreach and service to our community.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm col-span-1 md:col-span-2 lg:col-span-1">
            <div className="text-[oklch(var(--flame-gold))] mb-4 text-4xl">🙏</div>
            <h3 className="text-xl font-bold text-[oklch(var(--royal-blue))] mb-3">The Power of Prayer</h3>
            <p className="text-foreground leading-relaxed">
              Build a foundation of faith through prayer, seeking God's guidance and experiencing His transforming power.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link to="/who-we-are" className="link-default font-semibold text-lg">
            Learn More About Us →
          </Link>
        </div>
      </PageSection>

      {/* Scripture Block */}
      <PageSection>
        <ScriptureBlock citation="Ephesians 4:11-13">
          So Christ himself gave the apostles, the prophets, the evangelists, the pastors and teachers, to equip his
          people for works of service, so that the body of Christ may be built up until we all reach unity in the faith
          and in the knowledge of the Son of God and become mature, attaining to the whole measure of the fullness of
          Christ.
        </ScriptureBlock>
      </PageSection>

      {/* The Gathering at 6 Highlight */}
      <PageSection background="muted">
        <EventHighlight title="The Gathering at 6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-lg mb-4">
                Join us for a powerful evening worship experience every second and fourth Sunday at 6:00 PM.
              </p>
              <p className="mb-4">
                Beginning February 22nd at Elohim's International Revival Center in Alachua, this gathering offers a
                sacred space to encounter God in an atmosphere of unity and revival.
              </p>
              <Link to="/gathering-at-6" className="link-default font-semibold">
                Learn More About The Gathering →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-[oklch(var(--royal-blue))] mb-3">Service Details</h4>
              <ul className="space-y-2 text-foreground">
                <li>
                  <strong>Time:</strong> 6:00 PM
                </li>
                <li>
                  <strong>When:</strong> Every 2nd & 4th Sunday
                </li>
                <li>
                  <strong>Launch:</strong> February 22
                </li>
                <li>
                  <strong>Location:</strong> 13704 NW 150th Place, Alachua, FL 32616
                </li>
              </ul>
            </div>
          </div>
        </EventHighlight>
      </PageSection>

      {/* Call to Action */}
      <PageSection>
        <div className="text-center max-w-3xl mx-auto">
          <SectionTitle>Come as You Are. Grow in Christ. Serve with Purpose.</SectionTitle>
          <BodyText>
            We invite you to worship with us in person or connect with us online. Whether you are nearby or joining from
            a distance, you are part of our extended family.
          </BodyText>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/visit" className="btn-primary text-center">
              Plan Your Visit
            </Link>
            <Link to="/connect" className="btn-secondary text-center">
              Connect With Us
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  );
}
