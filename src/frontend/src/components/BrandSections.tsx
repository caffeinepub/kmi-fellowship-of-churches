import { ReactNode } from 'react';

interface ScriptureBlockProps {
  children: ReactNode;
  citation?: string;
}

export function ScriptureBlock({ children, citation }: ScriptureBlockProps) {
  return (
    <div className="scripture-block my-8">
      <div className="text-lg md:text-xl leading-relaxed">{children}</div>
      {citation && <div className="text-right mt-4 text-sm opacity-90">— {citation}</div>}
    </div>
  );
}

interface EventHighlightProps {
  children: ReactNode;
  title?: string;
}

export function EventHighlight({ children, title }: EventHighlightProps) {
  return (
    <div className="event-highlight my-8">
      {title && <h3 className="text-2xl font-bold text-[oklch(var(--royal-blue))] mb-4">{title}</h3>}
      {children}
    </div>
  );
}
