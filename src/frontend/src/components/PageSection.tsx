import { ReactNode } from 'react';

interface PageSectionProps {
  children: ReactNode;
  className?: string;
  background?: 'default' | 'muted' | 'white';
  noPadding?: boolean;
  id?: string;
}

export default function PageSection({ children, className = '', background = 'default', noPadding = false, id }: PageSectionProps) {
  const bgClass = {
    default: 'bg-background',
    muted: 'bg-muted',
    white: 'bg-white',
  }[background];

  return (
    <section id={id} className={`${bgClass} ${noPadding ? '' : 'section-spacing'} ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">{children}</div>
    </section>
  );
}

