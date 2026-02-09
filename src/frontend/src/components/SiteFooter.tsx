import { Link } from '@tanstack/react-router';
import { Heart } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="bg-[oklch(var(--royal-blue))] text-[oklch(var(--warm-neutral))] mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-[oklch(var(--flame-gold))] font-bold text-lg mb-4">KMI Fellowship of Churches</h3>
            <p className="text-sm leading-relaxed opacity-90">
              A Christ-centered ministry committed to worship, discipleship, and community impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[oklch(var(--flame-gold))] font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/visit" className="hover:text-[oklch(var(--flame-gold))] transition-colors">
                  Plan Your Visit
                </Link>
              </li>
              <li>
                <Link to="/ministries" className="hover:text-[oklch(var(--flame-gold))] transition-colors">
                  Our Ministries
                </Link>
              </li>
              <li>
                <Link to="/gathering-at-6" className="hover:text-[oklch(var(--flame-gold))] transition-colors">
                  The Gathering at 6
                </Link>
              </li>
              <li>
                <Link to="/schedule-meeting" className="hover:text-[oklch(var(--flame-gold))] transition-colors">
                  Schedule a Meeting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[oklch(var(--flame-gold))] font-bold text-lg mb-4">Connect With Us</h3>
            <p className="text-sm leading-relaxed opacity-90">
              Stay connected through worship services, events, and community support.
            </p>
            <Link
              to="/connect"
              className="inline-block mt-4 text-sm font-semibold text-[oklch(var(--flame-gold))] hover:text-white transition-colors"
            >
              Contact Information →
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 text-center text-sm opacity-80">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            © 2026. Built with <Heart size={16} className="text-[oklch(var(--revival-orange))] fill-current" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[oklch(var(--flame-gold))] hover:text-white transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
