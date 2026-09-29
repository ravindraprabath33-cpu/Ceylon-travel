import React, { useState } from 'react';
import { NavScreen } from './Header';

interface FooterProps {
  onNavigate: (screen: NavScreen) => void;
  onOpenPlanner: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPlanner }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="w-full bg-primary text-surface-variant">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-12">
        {/* Top Split Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-16">
          {/* Brand & Manifesto Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img
                alt="Eco Travels Sri Lanka Logo"
                className="h-9 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1VA6UWVci0k-sNr833954WKLLJFH4CzM2gxViW--UZW-qs0bGLbTZKHfsR26eO0qkMFJ2nwy3tyUEyIbFfu-XDx3HN-G7ds3QqMUe5JQDCXi9NyhytCxdKmSsnFwxPQ6ZCqSMWRivtJ1Jo1xxg4WKZH4Hb1KkX9IeDO3iWf4kk4Oqjb6NqkUReBS1QSO9SS46fKxVfY-zHmq4gHND2CT7RSAwZYP4fokUVL06wTrkECxhzz-RJxbxdx6jVn"
              />
              <div className="flex flex-col">
                <span className="font-headline-md text-2xl text-on-primary leading-none font-medium">
                  Eco Travels
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed">
                  Sri Lanka
                </span>
              </div>
            </div>

            <p className="font-headline-sm text-lg italic text-surface-variant max-w-sm">
              Explore responsibly. Travel deeply. Love Sri Lanka.
            </p>

            <p className="font-body-md text-body-md text-on-primary-container max-w-md leading-relaxed">
              Pioneering regenerative luxury expeditions, private wildlife safaris, and low-impact sanctuary stays across the Pearl of the Indian Ocean.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container font-label-sm text-label-sm text-primary-fixed">
                <span className="material-symbols-outlined text-[14px]">verified</span>GSTC Recognized
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container font-label-sm text-label-sm text-primary-fixed">
                <span className="material-symbols-outlined text-[14px]">hotel_class</span>SLTDA Licensed
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container font-label-sm text-label-sm text-primary-fixed">
                <span className="material-symbols-outlined text-[14px]">eco</span>1% For The Planet
              </span>
            </div>
          </div>

          {/* Newsletter / Tree Pledge Box */}
          <div className="lg:col-span-8 flex flex-col justify-between gap-6">
            <div className="p-6 md:p-8 rounded-3xl bg-primary-container border border-primary-fixed/15">
              <div className="max-w-2xl">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed block mb-1 font-bold">
                  Pledge For The Earth
                </span>
                <h3 className="font-headline-md text-2xl text-on-primary mb-2 font-medium">
                  Get Sri Lanka travel inspiration
                </h3>
                <p className="font-body-md text-body-md text-on-primary-container mb-6">
                  Receive intimate seasonal guides, conservation dispatches, and priority access to limited boutique expeditions.
                </p>

                {subscribed ? (
                  <div className="p-4 rounded-2xl bg-secondary text-on-secondary flex items-center gap-3 animate-fadeIn">
                    <span className="material-symbols-outlined text-2xl">park</span>
                    <div>
                      <p className="font-bold text-sm">Tree Pledge Confirmed!</p>
                      <p className="text-xs text-secondary-fixed">
                        Thank you for subscribing. We have logged an endemic sapling to be planted in your honor in the Knuckles Cloud Forest Biosphere!
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                    <input
                      className="flex-1 bg-surface-container-lowest text-on-surface font-body-md text-body-md px-5 py-3 rounded-full focus:outline-none placeholder:text-on-surface-variant/60"
                      placeholder="Enter your personal email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      className="bg-secondary text-on-secondary hover:bg-on-secondary-fixed font-label-lg text-label-lg px-8 py-3 rounded-full transition-colors flex items-center justify-center gap-2 shrink-0 shadow-md cursor-pointer"
                      type="submit"
                    >
                      <span>Subscribe</span>
                      <span className="material-symbols-outlined text-[18px]">eco</span>
                    </button>
                  </form>
                )}

                <div className="flex items-center gap-2 mt-4 text-primary-fixed font-label-sm text-xs">
                  <span className="material-symbols-outlined text-[16px]">nature</span>
                  <span>We plant an endemic rainforest tree in Knuckles Range for every subscriber.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Directory Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-10 border-t border-primary-container">
          {/* Explore */}
          <div className="flex flex-col gap-3">
            <h4 className="font-label-lg text-xs uppercase tracking-wider text-on-primary font-bold">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5 font-body-md text-sm">
              <li
                onClick={() => onNavigate('tours')}
                className="hover:text-on-primary transition-colors cursor-pointer"
              >
                All Journeys
              </li>
              <li
                onClick={() => onNavigate('tours')}
                className="hover:text-on-primary transition-colors cursor-pointer"
              >
                Private Guided Tours
              </li>
              <li
                onClick={() => onNavigate('tours')}
                className="hover:text-on-primary transition-colors cursor-pointer"
              >
                Small Group Safaris
              </li>
              <li
                onClick={onOpenPlanner}
                className="hover:text-on-primary transition-colors cursor-pointer text-secondary-fixed"
              >
                Custom Itinerary Builder
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="flex flex-col gap-3">
            <h4 className="font-label-lg text-xs uppercase tracking-wider text-on-primary font-bold">
              Destinations
            </h4>
            <ul className="flex flex-col gap-2.5 font-body-md text-sm">
              <li
                onClick={() => onNavigate('destinations')}
                className="hover:text-on-primary transition-colors cursor-pointer"
              >
                Ella & Central Highlands
              </li>
              <li
                onClick={() => onNavigate('destinations')}
                className="hover:text-on-primary transition-colors cursor-pointer"
              >
                Sigiriya & Cultural Triangle
              </li>
              <li
                onClick={() => onNavigate('destinations')}
                className="hover:text-on-primary transition-colors cursor-pointer"
              >
                Yala Wildlife Reserve
              </li>
              <li
                onClick={() => onNavigate('destinations')}
                className="hover:text-on-primary transition-colors cursor-pointer"
              >
                Galle Dutch Fort
              </li>
              <li
                onClick={() => onNavigate('destinations')}
                className="hover:text-on-primary transition-colors cursor-pointer"
              >
                Mirissa & Whale Coast
              </li>
            </ul>
          </div>

          {/* Experiences */}
          <div className="flex flex-col gap-3">
            <h4 className="font-label-lg text-xs uppercase tracking-wider text-on-primary font-bold">
              Experiences
            </h4>
            <ul className="flex flex-col gap-2.5 font-body-md text-sm">
              <li
                onClick={() => onNavigate('experiences')}
                className="hover:text-on-primary transition-colors cursor-pointer"
              >
                Wildlife Safaris
              </li>
              <li
                onClick={() => onNavigate('experiences')}
                className="hover:text-on-primary transition-colors cursor-pointer"
              >
                Organic Tea Estates
              </li>
              <li
                onClick={() => onNavigate('experiences')}
                className="hover:text-on-primary transition-colors cursor-pointer"
              >
                Ancient UNESCO Heritage
              </li>
              <li
                onClick={() => onNavigate('experiences')}
                className="hover:text-on-primary transition-colors cursor-pointer"
              >
                Blue Whale Catamarans
              </li>
              <li
                onClick={() => onNavigate('experiences')}
                className="hover:text-on-primary transition-colors cursor-pointer"
              >
                Rainforest Sanctuaries
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h4 className="font-label-lg text-xs uppercase tracking-wider text-on-primary font-bold">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5 font-body-md text-sm">
              <li
                onClick={() => onNavigate('about')}
                className="hover:text-on-primary transition-colors cursor-pointer"
              >
                Our Story
              </li>
              <li
                onClick={() => onNavigate('about')}
                className="hover:text-on-primary transition-colors cursor-pointer"
              >
                Sustainability Compact
              </li>
              <li
                onClick={() => onNavigate('about')}
                className="hover:text-on-primary transition-colors cursor-pointer"
              >
                Carbon Offset Audits
              </li>
              <li
                onClick={() => onNavigate('blog')}
                className="hover:text-on-primary transition-colors cursor-pointer"
              >
                Journal & Articles
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
            <h4 className="font-label-lg text-xs uppercase tracking-wider text-on-primary font-bold">
              Contact
            </h4>
            <div className="flex flex-col gap-3 font-body-md text-sm">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed mt-1 shrink-0">
                  support_agent
                </span>
                <div>
                  <p className="font-label-md text-xs text-on-primary font-bold">24/7 Concierge Hotline</p>
                  <p className="text-surface-variant">+94 11 234 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed mt-1 shrink-0">
                  mail
                </span>
                <div>
                  <p className="font-label-md text-xs text-on-primary font-bold">Email Desk</p>
                  <p className="text-surface-variant break-all">concierge@ecotravelssrilanka.com</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed mt-1 shrink-0">
                  location_on
                </span>
                <div>
                  <p className="font-label-md text-xs text-on-primary font-bold">Island Offices</p>
                  <p className="text-surface-variant">Colombo 07 & Kandy Hill Club</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/94112345678"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-on-secondary font-label-md text-xs hover:bg-on-secondary-fixed transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-container flex flex-col md:flex-row items-center justify-between gap-4 font-body-md text-xs text-on-primary-container">
          <p>© 2026 Eco Travels Sri Lanka. All rights reserved. 100% Carbon Neutral.</p>
          <div className="flex flex-wrap items-center gap-6 font-label-md text-xs">
            <span
              onClick={() => onNavigate('about')}
              className="hover:text-on-primary transition-colors cursor-pointer"
            >
              Responsible Travel Charter
            </span>
            <span
              onClick={() => onNavigate('contact')}
              className="hover:text-on-primary transition-colors cursor-pointer"
            >
              Privacy & Cookies
            </span>
            <span
              onClick={() => onNavigate('contact')}
              className="hover:text-on-primary transition-colors cursor-pointer"
            >
              Terms of Booking
            </span>
          </div>

          <div className="flex items-center gap-3 text-surface-variant">
            <a
              href="https://wa.me/94112345678"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-primary-container hover:bg-secondary hover:text-on-secondary flex items-center justify-center transition-colors"
              title="Chat"
            >
              <span className="material-symbols-outlined text-[16px]">chat</span>
            </a>
            <span
              onClick={() => onNavigate('blog')}
              className="w-8 h-8 rounded-full bg-primary-container hover:bg-secondary hover:text-on-secondary flex items-center justify-center transition-colors cursor-pointer"
              title="Journal"
            >
              <span className="material-symbols-outlined text-[16px]">photo_camera</span>
            </span>
            <span
              onClick={() => onNavigate('tours')}
              className="w-8 h-8 rounded-full bg-primary-container hover:bg-secondary hover:text-on-secondary flex items-center justify-center transition-colors cursor-pointer"
              title="Expeditions"
            >
              <span className="material-symbols-outlined text-[16px]">explore</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
