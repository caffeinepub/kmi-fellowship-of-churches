import { ReactNode } from 'react';

interface PageTitleProps {
  children: ReactNode;
  className?: string;
}

export function PageTitle({ children, className = '' }: PageTitleProps) {
  return (
    <h1 className={`text-4xl md:text-5xl lg:text-6xl font-display font-black text-primary mb-8 ${className}`}>
      {children}
    </h1>
  );
}

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-black text-primary section-title-spacing ${className}`}>
      {children}
    </h2>
  );
}

interface SubsectionTitleProps {
  children: ReactNode;
  className?: string;
}

export function SubsectionTitle({ children, className = '' }: SubsectionTitleProps) {
  return (
    <h3 className={`text-2xl md:text-3xl font-display font-bold text-primary mb-4 ${className}`}>
      {children}
    </h3>
  );
}

interface BodyTextProps {
  children: ReactNode;
  className?: string;
}

export function BodyText({ children, className = '' }: BodyTextProps) {
  return <p className={`text-base md:text-lg leading-relaxed text-foreground mb-5 ${className}`}>{children}</p>;
}

