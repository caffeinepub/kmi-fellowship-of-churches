import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import EmergencyPrayerDialog from '../prayer/EmergencyPrayerDialog';

export default function PrayerAndCareSection() {
  const [emergencyDialogOpen, setEmergencyDialogOpen] = useState(false);

  return (
    <div>
      <h2 className="text-4xl font-display font-bold text-center mb-4 text-royal-purple">
        Prayer & Care
      </h2>
      <p className="text-center text-lg mb-12 text-foreground/70">
        We believe in the power of prayer. Let us stand with you in faith.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Submit Prayer Request */}
        <div className="bg-white border-2 border-gold/30 rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-display font-bold mb-4 text-royal-purple">
            Submit Prayer Request
          </h3>
          <p className="text-base mb-6 text-foreground/80 leading-relaxed">
            Share your prayer needs with our intercessory team. We will lift you up in prayer.
          </p>
          <Link
            to="/prayer-request"
            className="inline-block px-6 py-3 bg-gold text-charcoal hover:bg-gold/90 rounded-lg font-bold transition-all duration-300 hover:shadow-gold-glow"
          >
            Submit Prayer Request
          </Link>
        </div>

        {/* Emergency Prayer */}
        <div className="bg-white border-2 border-gold/30 rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-display font-bold mb-4 text-royal-purple">
            Emergency Prayer
          </h3>
          <p className="text-base mb-6 text-foreground/80 leading-relaxed">
            Urgent prayer need? Alert our intercessory team immediately for critical situations.
          </p>
          <button
            onClick={() => setEmergencyDialogOpen(true)}
            className="inline-block px-6 py-3 bg-burgundy text-white hover:bg-burgundy/90 rounded-lg font-bold transition-all duration-300 hover:shadow-lg"
          >
            Send Emergency Alert
          </button>
        </div>
      </div>

      <EmergencyPrayerDialog 
        open={emergencyDialogOpen} 
        onOpenChange={setEmergencyDialogOpen} 
      />
    </div>
  );
}
