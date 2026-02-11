import { ReactNode } from 'react';

interface ScriptureBlockProps {
  children: ReactNode;
}

export function ScriptureBlock({ children }: ScriptureBlockProps) {
  return (
    <div className="scripture-block max-w-4xl mx-auto">
      {children}
    </div>
  );
}

interface EventHighlightProps {
  children: ReactNode;
}

export function EventHighlight({ children }: EventHighlightProps) {
  return (
    <div className="event-highlight max-w-5xl mx-auto">
      {children}
    </div>
  );
}

