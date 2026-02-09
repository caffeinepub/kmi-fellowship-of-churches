import { Link } from '@tanstack/react-router';
import { SectionTitle } from '../Typography';
import { Calendar, Users, BookOpen } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  ctaText: string;
  ctaLink: string;
  note?: string;
}

const services: ServiceItem[] = [
  {
    title: 'New Members\' Classes',
    description: 'Join us on the first Saturday of every month for our New Members\' Classes. Learn about our fellowship, beliefs, and how to become an active part of our church family.',
    imagePath: '/assets/uploads/IMG_0462.jpeg',
    imageAlt: 'New Members Classes invitation flyer',
    ctaText: 'Get Service Times',
    ctaLink: '/connect',
    note: 'Pre-registration required',
  },
  {
    title: 'Request/Book Our Senior Leader',
    description: 'Schedule a consultation, speaking engagement, or meeting with our senior leadership. We are here to serve you and your ministry needs.',
    imagePath: '/assets/uploads/IMG_0457.jpeg',
    imageAlt: 'Senior Leader booking information',
    ctaText: 'Schedule a Meeting',
    ctaLink: '/schedule-meeting',
  },
  {
    title: 'Evangelism Team Training & Outreach',
    description: 'Join our evangelism team and share the Gospel of Jesus Christ with the community. Training is provided for door-to-door outreach, park evangelism, and community events.',
    imagePath: '/assets/uploads/IMG_0459.jpeg',
    imageAlt: 'Evangelism and Outreach Team invitation flyer',
    ctaText: 'Learn About Outreach',
    ctaLink: '/outreach',
  },
];

export default function ServicesSection() {
  return (
    <div>
      <SectionTitle className="text-center mb-8">Our Services</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="card-surface overflow-hidden flex flex-col">
            <div className="relative w-full aspect-[3/4] bg-muted">
              <img
                src={service.imagePath}
                alt={service.imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
              {service.note && (
                <p className="text-sm font-medium text-accent mb-3">
                  {service.note}
                </p>
              )}
              <p className="text-muted-foreground mb-4 flex-1">{service.description}</p>
              <Link to={service.ctaLink} className="btn-primary text-center">
                {service.ctaText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
