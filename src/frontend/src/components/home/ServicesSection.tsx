import { Link } from '@tanstack/react-router';

export default function ServicesSection() {
  const services = [
    {
      title: 'Sabbath Service (Online)',
      time: 'Friday – 7:15 PM EST',
      link: '/worship-services'
    },
    {
      title: 'The Gathering',
      time: '2nd & 4th Sundays – 6 PM',
      details: 'In Person',
      link: '/worship-services'
    },
    {
      title: 'School of the Prophets',
      time: 'Monday–Thursday – 7:15 PM EST',
      details: 'Dial In Available',
      link: '/prophetic-training'
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div key={index} className="bg-white border-2 border-gold/30 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-display font-bold mb-3 text-royal-purple">
            {service.title}
          </h3>
          <p className="text-lg font-semibold mb-2 text-foreground">
            {service.time}
          </p>
          {service.details && (
            <p className="text-base mb-4 text-foreground/70">
              {service.details}
            </p>
          )}
          <Link
            to={service.link}
            className="inline-flex items-center text-gold hover:text-gold/80 font-semibold transition-colors"
          >
            Learn More →
          </Link>
        </div>
      ))}
    </div>
  );
}
