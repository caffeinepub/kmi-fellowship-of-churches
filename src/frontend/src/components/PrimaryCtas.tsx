import { Link } from '@tanstack/react-router';
import { Calendar, Video } from 'lucide-react';

interface PrimaryCtasProps {
  variant?: 'header' | 'hero' | 'mobile';
}

export default function PrimaryCtas({ variant = 'header' }: PrimaryCtasProps) {
  if (variant === 'hero') {
    return (
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/visit" className="btn-primary text-center">
          Plan Your Visit
        </Link>
        <a href="/connect#watch-live" className="btn-secondary text-center flex items-center justify-center gap-2">
          <Video size={20} />
          Watch Live
        </a>
        <Link to="/schedule-meeting" className="btn-secondary text-center flex items-center justify-center gap-2">
          <Calendar size={20} />
          Schedule a Meeting
        </Link>
      </div>
    );
  }

  if (variant === 'mobile') {
    return (
      <>
        <Link to="/visit" className="btn-primary text-center block w-full">
          Plan Your Visit
        </Link>
        <Link to="/schedule-meeting" className="btn-secondary text-center block w-full">
          Schedule a Meeting
        </Link>
      </>
    );
  }

  return (
    <>
      <Link to="/visit" className="btn-primary text-sm py-2 px-4">
        Plan Your Visit
      </Link>
      <Link to="/schedule-meeting" className="btn-secondary text-sm py-2 px-4">
        Schedule a Meeting
      </Link>
    </>
  );
}
