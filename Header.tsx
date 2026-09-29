import React, { useState, useEffect } from 'react';
import { CurrencyCode, CURRENCIES } from '../data/travelData';

export type NavScreen = 'home' | 'tours' | 'destinations' | 'experiences' | 'about' | 'blog' | 'contact' | 'planner';

interface HeaderProps {
  currentScreen: NavScreen;
  onNavigate: (screen: NavScreen) => void;
  currency: CurrencyCode;
  onCurrencyChange: (currency: CurrencyCode) => void;
  onOpenSearch: () => void;
  onOpenPlanner: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  currency,
  onCurrencyChange,
  onOpenSearch,
  onOpenPlanner,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: NavScreen; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'tours', label: 'Tours' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'about', label: 'About Us' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: NavScreen) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-surface/90 backdrop-blur-xl shadow-[0_16px_36px_-12px_rgba(15,41,30,0.12)]'
            : 'bg-surface/85 backdrop-blur-xl shadow-[0_16px_36px_-12px_rgba(15,41,30,0.08),0_4px_12px_-2px_rgba(15,41,30,0.03)]'
        }`}
      >
        <div className="h-20 max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
            >
              <img
                alt="Eco Travels Sri Lanka Logo"
                className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu2hVd8DofmiyHkRFYxlKPqHCmpibAVa6EaeCXNKeLLzWcqY-RNfH8-UuAzNw5PDY4Pb1b0mDlv6Iw8Dfncx9EYtLZHdLpaP-rwdSSZoLWzeKLSxoH_m-MaJS6_662il0Li5OflyWK94Ikt0f0G5fWyAYHFe7KnBJdKbsjrVRp7ObKXpKMDPQdY-l6dii5uvdsextp6YDBeJl4j9QkcR_dKlQHbWEk8zwEZJAKZf_MLtEO-tDBXSmvn1caX2jkGWto5trV6JshByqvysE"
              />
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary tracking-tight leading-none group-hover:text-secondary transition-colors">
                  Eco Travels
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                  Sri Lanka
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 bg-surface-container-low/80 p-1.5 rounded-full border border-surface-container/50">
            {navLinks.map((link) => {
              const isActive = currentScreen === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-4 py-1.5 transition-all text-xs font-semibold rounded-full cursor-pointer ${
                    isActive
                      ? 'bg-primary-container text-on-primary shadow-sm font-bold'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Zone */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Currency Selector */}
            <div className="relative inline-block">
              <label className="sr-only" htmlFor="currency-select">
                Currency
              </label>
              <select
                id="currency-select"
                value={currency}
                onChange={(e) => onCurrencyChange(e.target.value as CurrencyCode)}
                className="appearance-none bg-surface-container-low text-on-surface font-label-md text-label-md pl-3 pr-8 py-2 rounded-full focus:outline-none cursor-pointer border border-surface-container/60 hover:bg-surface-container transition-colors"
              >
                {Object.keys(CURRENCIES).map((c) => (
                  <option key={c} value={c}>
                    {CURRENCIES[c as CurrencyCode].label}
                  </option>
                ))}
              </select>
              <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-base">
                expand_more
              </span>
            </div>

            {/* Global Search Button */}
            <button
              onClick={onOpenSearch}
              aria-label="Search expeditions"
              className="w-10 h-10 rounded-full bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer border border-surface-container/60"
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
            </button>

            {/* Plan Your Journey CTA */}
            <button
              onClick={onOpenPlanner}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-container text-on-primary font-label-lg text-label-lg px-6 py-2.5 rounded-full hover:to-secondary transition-all transform hover:-translate-y-0.5 shadow-[0_12px_24px_-8px_rgba(20,54,40,0.35)] cursor-pointer"
            >
              <span>Plan Your Journey</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>

            {/* Traveler Avatar / Concierge Badge */}
            <button
              onClick={() => handleLinkClick('contact')}
              title="Travel Concierge Hotline"
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 text-on-primary hover:bg-secondary transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="xl:hidden w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 pt-20 bg-primary/60 backdrop-blur-md xl:hidden animate-fadeIn">
          <div className="bg-surface-container-lowest p-6 border-b border-surface-container shadow-2xl flex flex-col gap-4">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              Navigation Menu
            </span>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`py-3 px-4 rounded-2xl text-left text-base font-semibold flex items-center justify-between transition-colors ${
                    currentScreen === link.id
                      ? 'bg-primary-container text-on-primary'
                      : 'text-on-surface hover:bg-surface-container-low'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-surface-container flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlanner();
                }}
                className="w-full py-3.5 rounded-full bg-secondary text-on-secondary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-md"
              >
                <span>Plan Your Custom Journey</span>
                <span className="material-symbols-outlined text-[18px]">explore</span>
              </button>

              <div className="flex items-center justify-between text-xs text-on-surface-variant pt-2">
                <span>Direct Hotline: +94 11 234 5678</span>
                <a
                  href="https://wa.me/94112345678"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary font-bold flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[16px]">chat</span> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
