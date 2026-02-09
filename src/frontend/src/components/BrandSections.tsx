import { ReactNode } from 'react';

interface ScriptureBlockProps {
  children: ReactNode;
  citation?: string;
}

export function ScriptureBlock({ children, citation }: ScriptureBlockProps) {
  return (
    <div className="scripture-block my-12">
      <div className="text-xl md:text-2xl leading-relaxed font-serif">{children}</div>
      {citation && <div className="text-right mt-6 text-base font-bold text-accent not-italic">— {citation}</div>}
    </div>
  );
}

interface EventHighlightProps {
  children: ReactNode;
  title?: string;
}

export function EventHighlight({ children, title }: EventHighlightProps) {
  return (
    <div className="event-highlight my-12">
      {title && <h3 className="text-3xl font-display font-black text-primary mb-6">{title}</h3>}
      {children}
    </div>
  );
}

