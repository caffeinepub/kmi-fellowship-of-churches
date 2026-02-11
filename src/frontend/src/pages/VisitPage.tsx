import { Link } from '@tanstack/react-router';
import PageSection from '../components/PageSection';
import { PageTitle, SectionTitle, BodyText } from '../components/Typography';
import { MapPin, Clock, Users, Coffee, Heart, Smile } from 'lucide-react';

export default function VisitPage() {
  return (
    <>
      {/* Hero Section */}
      <PageSection background="muted">
        <div className="text-center max-w-4xl mx-auto">
          <PageTitle>Plan Your Visit</PageTitle>
          <BodyText className="text-foreground/70">
            We're excited to welcome you! Here's everything you need to know to make your first visit comfortable and
            meaningful.
          </BodyText>
        </div>
      </PageSection>

      {/* What to Expect */}
      <PageSection className="textured-surface">
        <SectionTitle className="text-center">
          <span className="section-title-decorated">What to Expect</span>
        </SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <div className="icon-card">
            <Smile size={48} className="icon-card-icon" />
            <div>
              <h3 className="icon-card-title">Warm Welcome</h3>
              <p className="icon-card-text">
                Our greeters will welcome you at the door and help you find your way around.
              </p>
            </div>
          </div>

          <div className="icon-card">
            <Users size={48} className="icon-card-icon" />
            <div>
              <h3 className="icon-card-title">Friendly Atmosphere</h3>
              <p className="icon-card-text">
                Experience genuine community where everyone is valued and accepted.
              </p>
            </div>
          </div>

          <div className="icon-card">
            <Heart size={48} className="icon-card-icon" />
            <div>
              <h3 className="icon-card-title">Authentic Worship</h3>
              <p className="icon-card-text">
                Join us in heartfelt worship with contemporary music and traditional hymns.
              </p>
            </div>
          </div>

          <div className="icon-card">
            <Coffee size={48} className="icon-card-icon" />
            <div>
              <h3 className="icon-card-title">Refreshments</h3>
              <p className="icon-card-text">
                Enjoy coffee and light refreshments before and after the service.
              </p>
            </div>
          </div>

          <div className="icon-card">
            <Clock size={48} className="icon-card-icon" />
            <div>
              <h3 className="icon-card-title">Service Length</h3>
              <p className="icon-card-text">
                Our services typically last about 90 minutes, including worship and teaching.
              </p>
            </div>
          </div>

          <div className="icon-card">
            <MapPin size={48} className="icon-card-icon" />
            <div>
              <h3 className="icon-card-title">Easy Parking</h3>
              <p className="icon-card-text">
                Ample free parking is available in our lot and on surrounding streets.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Service Times & Location */}
      <PageSection background="muted">
        <div className="max-w-5xl mx-auto">
          <SectionTitle className="text-center">
            <span className="section-title-decorated">Service Times & Location</span>
          </SectionTitle>
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="card-surface p-10">
              <Clock size={48} className="text-accent mb-6" />
              <h3 className="text-3xl font-bold text-primary mb-6 font-display">When We Meet</h3>
              <div className="space-y-4 text-lg">
                <div>
                  <p className="font-bold text-accent text-xl">Sunday Morning Worship</p>
                  <p className="text-foreground">10:00 AM</p>
                </div>
                <div>
                  <p className="font-bold text-accent text-xl">The Gathering at 6</p>
                  <p className="text-foreground">6:00 PM (Evening Service)</p>
                </div>
              </div>
            </div>

            <div className="card-surface p-10">
              <MapPin size={48} className="text-accent mb-6" />
              <h3 className="text-3xl font-bold text-primary mb-6 font-display">Where We Meet</h3>
              <div className="text-lg text-foreground space-y-2">
                <p className="font-semibold">KMI Fellowship of Churches</p>
                <p>123 Faith Avenue</p>
                <p>Your City, ST 12345</p>
                <a
                  href="#"
                  className="inline-block mt-4 text-accent hover:text-secondary font-bold transition-colors duration-200 underline underline-offset-4"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Call to Action */}
      <PageSection className="textured-surface">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-black text-primary mb-6">
            Ready to Visit?
          </h2>
          <BodyText className="text-foreground/70 mb-8">
            We can't wait to meet you! If you have any questions or would like to schedule a personal tour, feel free to
            reach out.
          </BodyText>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/prayer-request" className="btn-primary inline-block">
              Contact Us
            </Link>
            <Link to="/schedule-meeting" className="btn-secondary inline-block">
              Schedule a Meeting
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  );
}
