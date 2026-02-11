import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function SiteNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/leadership', label: 'Leadership' },
    { path: '/worship-services', label: 'Worship' },
    { path: '/learning-study', label: 'Learning' },
    { path: '/prophetic-training', label: 'Training' },
    { path: '/kmi-fellowship', label: 'Fellowship' },
    { path: '/get-involved', label: 'Get Involved' },
  ];

  const isActive = (path: string) => currentPath === path;

  return (
    <header className="bg-header-bg text-header-text sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Ministry Name */}
          <Link to="/" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
            <div className="relative w-16 h-16 shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-gold rounded-full" />
              <img 
                src="/assets/generated/tg-logo.dim_512x512.png" 
                alt="TG Logo" 
                className="relative w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="hidden md:block">
              <div className="font-bold text-xl leading-tight text-gold brand-title-bold">
                Elohim's International Revival Center
              </div>
              <div className="text-xs uppercase tracking-wider text-gold font-bold brand-subtitle-bold">
                KMI – The Fellowship of Churches
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-all duration-300 hover:text-gold ${
                  isActive(link.path) ? 'text-gold border-b-2 border-gold' : 'text-header-text'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://www.youtube.com/@KMIFellowship"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gold text-primary hover:bg-gold/90 rounded-lg font-bold transition-all duration-300 hover:shadow-gold-glow"
            >
              Watch Live
            </a>
            <Link
              to="/prayer-request"
              className="px-5 py-2.5 bg-gold text-primary hover:bg-gold/90 rounded-lg font-bold transition-all duration-300 hover:shadow-gold-glow"
            >
              Prayer Request
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gold/20 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} className="text-gold" /> : <Menu size={24} className="text-gold" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-6 space-y-2 border-t border-gold/30 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg transition-all duration-300 font-semibold ${
                  isActive(link.path) 
                    ? 'bg-gold/20 text-gold' 
                    : 'hover:bg-gold/10 hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href="https://www.youtube.com/@KMIFellowship"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-5 py-3 bg-gold text-primary hover:bg-gold/90 rounded-lg font-bold transition-all"
              >
                Watch Live
              </a>
              <Link
                to="/prayer-request"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-5 py-3 bg-gold text-primary hover:bg-gold/90 rounded-lg font-bold transition-all"
              >
                Prayer Request
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
