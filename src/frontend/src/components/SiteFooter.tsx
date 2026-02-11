import { Link } from '@tanstack/react-router';
import { Heart } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="bg-footer-bg text-footer-text mt-auto relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Ministry Description */}
          <div>
            <h3 className="text-gold font-bold text-xl mb-4">Elohim's International Revival Center</h3>
            <p className="text-base leading-relaxed mb-2">KMI – Fellowship of Churches</p>
            <p className="text-sm leading-relaxed opacity-90">
              A prophetic and apostolic community raising up believers for this generation.
            </p>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-gold font-bold text-xl mb-4">Service Times</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Sabbath Service</strong><br />
                Friday – 7:15 PM
              </li>
              <li>
                <strong>The Gathering</strong><br />
                2nd & 4th Sundays – 6 PM
              </li>
              <li>
                <strong>School of the Prophets</strong><br />
                Monday–Thursday – 7:15 PM
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="hover:text-gold transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/worship-services" className="hover:text-gold transition-colors">
                  Worship
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="hover:text-gold transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to="/prayer-request" className="hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Location */}
        <div className="border-t border-gold/30 pt-8 mb-8">
          <h3 className="text-gold font-bold text-xl mb-4">Location</h3>
          <p className="text-sm leading-relaxed">
            13704 Northwest 150th Avenue<br />
            Alachua, Florida 32615<br />
            Next to Alachua Elementary School
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/30 pt-8 text-center text-sm opacity-90">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            © {new Date().getFullYear()}. Built with <Heart size={16} className="text-gold fill-current" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'eirc-ministry')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline font-semibold"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
