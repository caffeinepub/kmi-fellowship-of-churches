export default function EventsTicker() {
  const events = [
    "School of the Prophets – Monday through Thursday, 7:15 PM EST",
    "Wednesday Bible Study",
    "Sabbath Service – Friday 7:15 PM EST",
    "Outreach & New Members Classes – Saturdays",
    "The Gathering – 2nd & 4th Sundays at 6 PM"
  ];

  return (
    <div className="bg-primary text-white py-4 overflow-hidden relative">
      <div className="ticker-wrapper">
        <div className="ticker-content">
          {[...events, ...events].map((event, index) => (
            <span key={index} className="ticker-item text-gold font-semibold">
              {event}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
