export default function FeaturedEventCard() {
  const eventDate = new Date('2026-02-22T18:00:00');
  
  const handleAddToCalendar = () => {
    const event = {
      title: 'The Gathering – Live Service',
      description: 'Join us for The Gathering live service',
      location: '13704 Northwest 150th Avenue, Alachua, Florida 32615',
      start: eventDate,
      end: new Date(eventDate.getTime() + 2 * 60 * 60 * 1000), // 2 hours
    };

    // Create .ics file
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${event.start.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTEND:${event.end.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'the-gathering.ics';
    link.click();
    URL.revokeObjectURL(url);
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=The+Gathering+–+Live+Service&dates=20260222T180000/20260222T200000&details=Join+us+for+The+Gathering+live+service&location=13704+Northwest+150th+Avenue,+Alachua,+Florida+32615`;

  return (
    <div className="bg-cream border-2 border-gold rounded-lg p-8 shadow-lg">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-3xl font-display font-bold mb-4 text-royal-purple">
            The Gathering – Live Service
          </h3>
          <p className="text-xl font-semibold mb-2 text-foreground">
            Saturday, February 22, 2026
          </p>
          <p className="text-lg mb-4 text-foreground/80">
            6:00 PM Eastern Standard Time
          </p>
          <div className="mb-6">
            <p className="font-semibold text-foreground mb-1">Location:</p>
            <p className="text-foreground/80">
              13704 Northwest 150th Avenue<br />
              Alachua, Florida 32615<br />
              Next to Alachua Elementary School
            </p>
          </div>
        </div>
        
        <div className="space-y-3">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=13704+Northwest+150th+Avenue,+Alachua,+FL+32615"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-6 py-3 bg-gold text-charcoal hover:bg-gold/90 rounded-lg font-bold transition-all duration-300 hover:shadow-gold-glow"
          >
            Get Directions
          </a>
          <button
            onClick={handleAddToCalendar}
            className="block w-full text-center px-6 py-3 bg-gold text-charcoal hover:bg-gold/90 rounded-lg font-bold transition-all duration-300 hover:shadow-gold-glow"
          >
            Add to Calendar
          </button>
          <a
            href="https://www.facebook.com/KMIFellowship/live"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-6 py-3 bg-gold text-charcoal hover:bg-gold/90 rounded-lg font-bold transition-all duration-300 hover:shadow-gold-glow"
          >
            Join Online
          </a>
        </div>
      </div>
    </div>
  );
}
