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
    <header className="bg-[oklch(var(--royal-blue))] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img src="/assets/generated/kmi-mark.dim_512x512.png" alt="KMI Fellowship" className="h-12 w-12" />
            <div className="hidden md:block">
              <div className="font-bold text-lg leading-tight">KMI Fellowship</div>
              <div className="text-xs text-[oklch(var(--warm-neutral))] opacity-90">of Churches</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[oklch(var(--flame-gold))] ${
                  isActive(link.path) ? 'text-[oklch(var(--flame-gold))] border-b-2 border-[oklch(var(--flame-gold))]' : ''
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
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 px-4 rounded-lg transition-colors hover:bg-white/10 ${
                  isActive(link.path) ? 'bg-white/20 text-[oklch(var(--flame-gold))]' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <PrimaryCtas variant="mobile" />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
