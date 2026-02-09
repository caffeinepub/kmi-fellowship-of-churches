import { Link } from '@tanstack/react-router';

interface PrimaryCtasProps {
  variant: 'hero' | 'header' | 'mobile';
}

export default function PrimaryCtas({ variant }: PrimaryCtasProps) {
  if (variant === 'hero') {
    return (
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Link to="/visit" className="btn-primary text-lg">
          Plan Your Visit
        </Link>
        <Link to="/schedule-meeting" className="btn-secondary text-lg">
          Schedule a Meeting
        </Link>
      </div>
    );
  }

  if (variant === 'header') {
    return (
      <>
        <Link to="/visit" className="text-sm font-bold text-nav-text hover:text-nav-accent transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-accent/10">
          Plan Your Visit
        </Link>
        <Link to="/schedule-meeting" className="text-sm font-bold bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 px-5 py-2 rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
          Schedule Meeting
        </Link>
      </>
    );
  }

  // mobile variant
  return (
    <>
      <Link to="/visit" className="block w-full text-center py-3 px-5 rounded-xl bg-accent/10 text-nav-accent hover:bg-accent/20 transition-all duration-300 font-bold border-2 border-accent/30 hover:border-accent">
        Plan Your Visit
      </Link>
      <Link to="/schedule-meeting" className="block w-full text-center py-3 px-5 rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 font-bold shadow-lg">
        Schedule Meeting
      </Link>
    </>
  );
}

