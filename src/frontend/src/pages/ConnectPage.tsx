import PageSection from '../components/PageSection';
import { PageTitle, SectionTitle, BodyText } from '../components/Typography';
import { MapPin, Clock, Video, Share2 } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { useEffect } from 'react';

export default function ConnectPage() {
  // Handle hash navigation on mount
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      <PageSection>
        <PageTitle>Connect With Us</PageTitle>
        <BodyText>
          Stay connected with KMI Fellowship through worship services, events and special gatherings, online messages
          and live streams, and prayer and community support.
        </BodyText>
      </PageSection>

      <PageSection background="muted">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Service Times */}
          <div className="bg-white p-8 rounded-lg">
            <Clock className="text-[oklch(var(--flame-gold))] mb-4" size={40} />
            <h3 className="text-2xl font-bold text-[oklch(var(--royal-blue))] mb-4">Service Times</h3>
            <div className="space-y-3 text-foreground">
              <p className="font-semibold">Regular Worship Services:</p>
              <p className="text-muted-foreground italic">Service times will be posted here. Please check back soon or contact us for current schedule.</p>
              
              <p className="font-semibold mt-4">The Gathering at 6:</p>
              <p>Every 2nd & 4th Sunday at 6:00 PM</p>
              <p className="text-sm text-muted-foreground">Beginning February 22</p>
              
              <Link to="/gathering-at-6" className="link-default font-semibold inline-block mt-2">
                Learn More About The Gathering →
              </Link>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white p-8 rounded-lg">
            <MapPin className="text-[oklch(var(--flame-gold))] mb-4" size={40} />
            <h3 className="text-2xl font-bold text-[oklch(var(--royal-blue))] mb-4">Location</h3>
            <div className="space-y-3 text-foreground">
              <p className="font-semibold">Elohim's International Revival Center</p>
              <p>13704 NW 150th Place<br />Alachua, Florida 32616</p>
              <p className="text-sm text-muted-foreground">(Right next to Alachua Elementary School)</p>
              
              <p className="font-semibold mt-4">Contact Information:</p>
              <p className="text-muted-foreground italic">Phone and email will be posted here. Please check back soon.</p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Watch Live Section */}
      <PageSection id="watch-live">
        <div className="bg-gradient-to-br from-[oklch(var(--royal-blue))] to-[oklch(var(--anointed-purple))] text-white p-12 rounded-lg text-center">
          <Video className="mx-auto mb-6" size={64} />
          <SectionTitle className="text-white mb-4">Watch Live & Sermons</SectionTitle>
          <BodyText className="text-white/90 mb-6">
            Join us online for live worship services and access our sermon archive. Whether you're joining from home or
            catching up on a message you missed, we're glad you're here.
          </BodyText>
          <p className="text-white/80 italic">
            Live stream link and sermon archive will be available here soon. Stay tuned for updates!
          </p>
        </div>
      </PageSection>

      {/* Social Media */}
      <PageSection background="muted">
        <div className="text-center">
          <Share2 className="text-[oklch(var(--flame-gold))] mx-auto mb-6" size={48} />
          <SectionTitle>Stay Connected on Social Media</SectionTitle>
          <BodyText>
            Follow us on social media to stay updated on events, announcements, and inspirational content.
          </BodyText>
          <p className="text-muted-foreground italic mt-4">
            Social media links will be posted here. Please check back soon.
          </p>
        </div>
      </PageSection>

      {/* Schedule Meeting CTA */}
      <PageSection>
        <div className="text-center max-w-2xl mx-auto">
          <SectionTitle>Need to Speak with Leadership?</SectionTitle>
          <BodyText>
            Our pastoral team is available for counseling, prayer, and ministry support. Schedule a meeting with our
            leadership team.
          </BodyText>
          <Link to="/schedule-meeting" className="btn-primary inline-block">
            Schedule a Meeting
          </Link>
        </div>
      </PageSection>
    </>
  );
}
