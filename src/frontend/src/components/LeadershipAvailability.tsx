import { SectionTitle, BodyText } from './Typography';
import { Calendar, Circle } from 'lucide-react';

export default function LeadershipAvailability() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <Calendar className="text-[oklch(var(--flame-gold))]" size={40} />
        <SectionTitle className="mb-0">Chief Apostle & Prophet Availability</SectionTitle>
      </div>
      
      <BodyText>
        To better serve our community and partner ministries, Dr. Virgil Leo Postell Jr.'s availability is displayed
        below. This calendar reflects current availability for appointments, ministry engagements, and out-of-office
        days.
      </BodyText>

      {/* Legend */}
      <div className="flex flex-wrap gap-6 mb-8 p-6 bg-muted rounded-lg">
        <div className="flex items-center gap-2">
          <Circle className="text-green-600 fill-green-600" size={16} />
          <span className="font-medium">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <Circle className="text-red-600 fill-red-600" size={16} />
          <span className="font-medium">Out of Office</span>
        </div>
        <div className="flex items-center gap-2">
          <Circle className="text-yellow-600 fill-yellow-600" size={16} />
          <span className="font-medium">Limited Availability</span>
        </div>
      </div>

      {/* Calendar Grid (Static/Minimal for initial build) */}
      <div className="bg-white border border-border rounded-lg p-6">
        <div className="grid grid-cols-7 gap-2 mb-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center font-semibold text-sm text-muted-foreground">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 35 }, (_, i) => {
            const dayNum = i - 2;
            const isValidDay = dayNum >= 1 && dayNum <= 28;
            const status = isValidDay
              ? dayNum % 7 === 0 || dayNum % 7 === 6
                ? 'limited'
                : dayNum % 3 === 0
                ? 'out'
                : 'available'
              : 'empty';

            const statusColors = {
              available: 'bg-green-100 border-green-600',
              out: 'bg-red-100 border-red-600',
              limited: 'bg-yellow-100 border-yellow-600',
              empty: 'bg-transparent',
            };

            return (
              <div
                key={i}
                className={`aspect-square flex items-center justify-center rounded border ${
                  statusColors[status as keyof typeof statusColors]
                } ${isValidDay ? 'text-foreground' : 'text-transparent'}`}
              >
                {isValidDay ? dayNum : ''}
              </div>
            );
          })}
        </div>
      </div>

      {/* Note */}
      <div className="mt-6 p-4 bg-[oklch(var(--anointed-purple))]/10 border-l-4 border-[oklch(var(--anointed-purple))] rounded">
        <p className="text-sm text-foreground">
          <strong>Please note:</strong> Submitting a request does not guarantee an appointment until confirmation is
          received.
        </p>
      </div>
    </div>
  );
}
