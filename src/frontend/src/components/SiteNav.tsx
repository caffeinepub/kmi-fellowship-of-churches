import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import PrimaryCtas from './PrimaryCtas';

export default function SiteNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/who-we-are', label: 'Who We Are' },
    { path: '/our-mission', label: 'Our Mission' },
    { path: '/visit', label: 'Visit' },
    { path: '/ministries', label: 'Ministries' },
    { path: '/outreach', label: 'Outreach' },
    { path: '/gathering-at-6', label: 'The Gathering at 6' },
    { path: '/leadership', label: 'Leadership' },
    { path: '/connect', label: 'Connect' },
  ];

  const isActive = (path: string) => currentPath === path;

  return (
    <header className="bg-nav-bg text-nav-text sticky top-0 z-50 shadow-2xl border-b-4 border-accent/50 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-all duration-300 hover:scale-105">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full" />
              <img src="/assets/generated/kmi-site-logo.dim_512x512.png" alt="KMI Fellowship of Churches" className="h-14 w-14 object-contain relative z-10" />
            </div>
            <div className="hidden md:block">
              <div className="font-bold text-xl leading-tight text-nav-accent">KMI Fellowship</div>
              <div className="text-xs text-nav-text/90 font-semibold tracking-wide">of Churches</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm nav-link ${
                  isActive(link.path) ? 'nav-link-active' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <PrimaryCtas variant="header" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 hover:bg-accent/20 rounded-xl transition-all duration-300 border border-accent/30 hover:border-accent"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} className="text-accent" /> : <Menu size={24} className="text-accent" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-6 space-y-2 border-t border-accent/20 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-5 rounded-xl transition-all duration-300 font-semibold ${
                  isActive(link.path) 
                    ? 'bg-accent/20 text-nav-accent border-l-4 border-accent' 
                    : 'hover:bg-accent/10 hover:text-nav-accent border-l-4 border-transparent'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <PrimaryCtas variant="mobile" />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

