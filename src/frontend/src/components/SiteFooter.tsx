import { Link } from '@tanstack/react-router';
import { Heart } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="bg-nav-bg text-nav-text mt-auto border-t-4 border-accent/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-secondary to-accent" />
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-nav-accent font-bold text-2xl mb-6 font-display">KMI Fellowship of Churches</h3>
            <p className="text-base leading-relaxed opacity-90">
              A Christ-centered ministry committed to worship, discipleship, and community impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-nav-accent font-bold text-2xl mb-6 font-display">Quick Links</h3>
            <ul className="space-y-3 text-base">
              <li>
                <Link to="/visit" className="hover:text-nav-accent transition-all duration-300 hover:translate-x-1 inline-block font-semibold">
                  → Plan Your Visit
                </Link>
              </li>
              <li>
                <Link to="/ministries" className="hover:text-nav-accent transition-all duration-300 hover:translate-x-1 inline-block font-semibold">
                  → Our Ministries
                </Link>
              </li>
              <li>
                <Link to="/gathering-at-6" className="hover:text-nav-accent transition-all duration-300 hover:translate-x-1 inline-block font-semibold">
                  → The Gathering at 6
                </Link>
              </li>
              <li>
                <Link to="/schedule-meeting" className="hover:text-nav-accent transition-all duration-300 hover:translate-x-1 inline-block font-semibold">
                  → Schedule a Meeting
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-nav-accent font-bold text-2xl mb-6 font-display">Connect With Us</h3>
            <p className="text-base leading-relaxed opacity-90 mb-6">
              Stay connected through worship services, events, and community support.
            </p>
            <Link
              to="/connect"
              className="inline-block text-base font-bold text-nav-accent hover:text-white transition-all duration-300 hover:translate-x-2 border-b-2 border-nav-accent hover:border-white pb-1"
            >
              Contact Information →
            </Link>
          </div>
        </div>

        {/* Ornamental Divider */}
        <div className="flex justify-center my-8">
          <div className="w-64 h-12 bg-contain bg-center bg-no-repeat opacity-40" style={{ backgroundImage: "url('/assets/generated/holiness-divider.dim_1600x200.png')" }} />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent/20 pt-8 text-center text-base opacity-90">
          <p className="flex items-center justify-center gap-2 flex-wrap font-semibold">
            © {new Date().getFullYear()}. Built with <Heart size={18} className="text-accent fill-current animate-pulse" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'kmi-fellowship')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-nav-accent hover:text-white transition-colors duration-300 font-bold underline underline-offset-4"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

