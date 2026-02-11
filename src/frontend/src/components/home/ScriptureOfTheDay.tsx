import { useMemo } from 'react';
import { getScriptureForDate } from '../../content/scriptureOfTheDay';

export default function ScriptureOfTheDay() {
  const scripture = useMemo(() => getScriptureForDate(new Date()), []);

  return (
    <div className="max-w-3xl mx-auto bg-cream border-2 border-gold/30 rounded-lg p-8 shadow-lg">
      <h3 className="text-2xl font-display font-bold text-center mb-6 text-royal-purple">
        Scripture of the Day
      </h3>
      <blockquote className="text-center">
        <p className="text-lg md:text-xl font-serif italic leading-relaxed text-foreground mb-4">
          "{scripture.text}"
        </p>
        <cite className="text-base font-semibold text-gold not-italic">
          — {scripture.reference}
        </cite>
      </blockquote>
    </div>
  );
}
