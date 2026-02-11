import PageSection from '../components/PageSection';
import { PageTitle, SectionTitle, BodyText } from '../components/Typography';
import { MapPin, Phone, Mail, Clock, Video } from 'lucide-react';

export default function ConnectPage() {
  return (
    <>
      {/* Hero Section */}
      <PageSection background="muted">
        <div className="text-center max-w-4xl mx-auto">
          <PageTitle>Connect With Us</PageTitle>
          <BodyText className="text-foreground/70">
            We'd love to hear from you! Whether you have questions, need prayer, or want to get involved, we're here to
            connect.
          </BodyText>
        </div>
      </PageSection>

      {/* Watch Live Section */}
      <PageSection className="textured-surface">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-secondary text-white p-12 rounded-2xl shadow-2xl text-center">
            <Video size={64} className="mx-auto mb-6" />
            <h2 className="text-4xl font-display font-black mb-4">Watch Our Services Live</h2>
            <p className="text-xl mb-8 opacity-95">
              Join us online every Sunday at 10:00 AM for live worship and teaching.
            </p>
            <a
              href="#"
              className="inline-block px-10 py-4 bg-white text-primary hover:bg-accent hover:text-accent-foreground rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Watch Live Stream
            </a>
          </div>
        </div>
      </PageSection>

      {/* Contact Information */}
      <PageSection background="muted">
        <SectionTitle className="text-center">
          <span className="section-title-decorated">Get In Touch</span>
        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Location */}
          <div className="card-surface p-8">
            <div className="flex items-start gap-4">
              <MapPin size={32} className="text-accent shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3 font-display">Our Location</h3>
                <p className="text-foreground leading-relaxed text-lg">
                  123 Faith Avenue
                  <br />
                  Your City, ST 12345
                </p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="card-surface p-8">
            <div className="flex items-start gap-4">
              <Phone size={32} className="text-accent shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3 font-display">Call Us</h3>
                <p className="text-foreground leading-relaxed text-lg">
                  Office: (555) 123-4567
                  <br />
                  Prayer Line: (555) 123-4568
                </p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="card-surface p-8">
            <div className="flex items-start gap-4">
              <Mail size={32} className="text-accent shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3 font-display">Email Us</h3>
                <p className="text-foreground leading-relaxed text-lg">
                  info@kmifellowship.org
                  <br />
                  prayer@kmifellowship.org
                </p>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="card-surface p-8">
            <div className="flex items-start gap-4">
              <Clock size={32} className="text-accent shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3 font-display">Office Hours</h3>
                <p className="text-foreground leading-relaxed text-lg">
                  Monday - Friday: 9:00 AM - 5:00 PM
                  <br />
                  Saturday: By Appointment
                  <br />
                  Sunday: Service Times
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Service Times */}
      <PageSection className="textured-surface">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle>
            <span className="section-title-decorated">Service Times</span>
          </SectionTitle>
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="card-surface p-8">
              <h3 className="text-3xl font-bold text-primary mb-4 font-display">Sunday Morning Worship</h3>
              <p className="text-2xl text-accent font-bold mb-2">10:00 AM</p>
              <p className="text-foreground leading-relaxed text-lg">
                Join us for powerful worship, inspiring teaching, and authentic community.
              </p>
            </div>
            <div className="card-surface p-8">
              <h3 className="text-3xl font-bold text-primary mb-4 font-display">The Gathering at 6</h3>
              <p className="text-2xl text-accent font-bold mb-2">6:00 PM</p>
              <p className="text-foreground leading-relaxed text-lg">
                An evening service focused on prayer, worship, and spiritual growth.
              </p>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}

