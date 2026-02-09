import { SectionTitle } from '../Typography';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface EventItem {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imagePath: string;
  imageAlt: string;
}

const events: EventItem[] = [
  {
    title: 'Ministry Consultation Service',
    date: 'Sunday, February 22nd, 2026',
    time: '6:00 PM',
    location: 'KMI Fellowship Church, Alachua, Florida',
    description: 'Join us for a special ministry consultation service with our senior leadership.',
    imagePath: '/assets/uploads/IMG_0461.jpeg',
    imageAlt: 'Ministry Consultation Service flyer',
  },
  {
    title: 'Church in the Neighborhood',
    date: 'Saturday, February 24th, 2026',
    time: '12:00 PM - 5:00 PM',
    location: 'Lake Butler, Florida',
    description: 'An outreach and evangelism event bringing the church to the community.',
    imagePath: '/assets/uploads/IMG_0463.jpeg',
    imageAlt: 'Church in the Neighborhood event flyer',
  },
];

export default function UpcomingEventsSection() {
  return (
    <div>
      <SectionTitle className="text-center">
        <span className="section-title-decorated">Upcoming Events</span>
      </SectionTitle>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
        {events.map((event, index) => (
          <div key={index} className="card-surface overflow-hidden flex flex-col group">
            <div className="relative w-full aspect-[3/4] bg-muted overflow-hidden">
              <img
                src={event.imagePath}
                alt={event.imageAlt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-8 flex flex-col flex-1 bg-gradient-to-br from-card to-surface-elevated">
              <h3 className="text-2xl font-display font-bold text-primary mb-4">{event.title}</h3>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{event.description}</p>
              <div className="space-y-3 mt-auto">
                <div className="flex items-start gap-3 text-base">
                  <Calendar className="text-accent shrink-0 mt-1" size={20} />
                  <span className="text-foreground font-semibold">{event.date}</span>
                </div>
                <div className="flex items-start gap-3 text-base">
                  <Clock className="text-accent shrink-0 mt-1" size={20} />
                  <span className="text-foreground font-semibold">{event.time}</span>
                </div>
                <div className="flex items-start gap-3 text-base">
                  <MapPin className="text-accent shrink-0 mt-1" size={20} />
                  <span className="text-foreground font-semibold">{event.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

