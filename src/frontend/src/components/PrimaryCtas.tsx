import { Link } from '@tanstack/react-router';

interface PrimaryCtasProps {
  variant?: 'hero' | 'header' | 'mobile';
}

export default function PrimaryCtas({ variant = 'hero' }: PrimaryCtasProps) {
  if (variant === 'hero') {
    return (
      <div className="flex flex-col sm:flex-row gap-5 justify-center">
        <a
          href="tel:667-770-1245"
          className="px-8 py-4 bg-gold text-charcoal hover:bg-gold/90 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-gold-glow inline-block text-center"
        >
          Watch Sabbath Service
        </a>
        <Link
          to="/schedule-meeting"
          className="px-8 py-4 bg-gold text-charcoal hover:bg-gold/90 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-gold-glow inline-block text-center"
        >
          Book an Appointment
        </Link>
      </div>
    );
  }

  if (variant === 'header') {
    return (
      <>
        <a
          href="https://www.youtube.com/@KMIFellowship"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-gold text-charcoal hover:bg-gold/90 rounded-lg font-bold transition-all duration-300 hover:shadow-gold-glow"
        >
          Watch Live
        </a>
        <Link
          to="/prayer-request"
          className="px-5 py-2.5 bg-gold text-charcoal hover:bg-gold/90 rounded-lg font-bold transition-all duration-300 hover:shadow-gold-glow"
        >
          Prayer Request
        </Link>
      </>
    );
  }

  // mobile variant
  return (
    <>
      <a
        href="https://www.youtube.com/@KMIFellowship"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center px-5 py-3 bg-gold text-charcoal hover:bg-gold/90 rounded-lg font-bold transition-all"
      >
        Watch Live
      </a>
      <Link
        to="/prayer-request"
        className="block w-full text-center px-5 py-3 bg-gold text-charcoal hover:bg-gold/90 rounded-lg font-bold transition-all"
      >
        Prayer Request
      </Link>
    </>
  );
}
