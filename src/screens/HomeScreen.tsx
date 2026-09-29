import React, { useState } from 'react';
import {
  TOURS,
  DESTINATIONS,
  EXPERIENCES,
  ARTICLES,
  TESTIMONIALS,
  Tour,
  Destination,
  Article,
  CurrencyCode,
  CURRENCIES,
} from '../data/travelData';
import { NavScreen } from '../components/Header';

interface HomeScreenProps {
  onNavigate: (screen: NavScreen) => void;
  currency: CurrencyCode;
  onSelectTour: (tour: Tour) => void;
  onSelectDestination: (dest: Destination) => void;
  onSelectArticle: (article: Article) => void;
  onOpenBooking: (tour: Tour | null) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  currency,
  onSelectTour,
  onSelectDestination,
  onSelectArticle,
  onOpenBooking,
}) => {
  const [destinationFilter, setDestinationFilter] = useState<'all' | 'highlands' | 'coast' | 'ancient' | 'wildlife'>('all');

  // Search planner quick state
  const [plannerDest, setPlannerDest] = useState('all');
  const [plannerDate, setPlannerDate] = useState('Nov 2026 – Apr 2027');
  const [plannerStyle, setPlannerStyle] = useState('eco-luxury');

  const filteredDestinations = destinationFilter === 'all'
    ? DESTINATIONS
    : DESTINATIONS.filter((d) => d.category === destinationFilter);

  const currentCurrency = CURRENCIES[currency];

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('tours');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full -mt-20 overflow-hidden bg-primary text-surface min-h-[960px] flex flex-col justify-between">
        {/* Hero Background Image & Atmospheric Layers */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Nine Arch Bridge Ella misty green tea plantation hills at golden sunrise"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
            id="hero-bg-img"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8uvEnURveEd0EbCgjKrcVb2bpkivV7jI2huQuUfU6Rd281IwUxoTxlNMVhNTBiFm2pmn4oUOYtP9r5EAe3Ss6xfyChnHe9T1N5-Q5DByyYUVxVJfWXCxLduzKQVUikJ1q-ud4HXq3oGC5KFTlrAIfwXCIRN00TS9MzYimShUZA3i658OMdosNKtj9B_awylgZ_bwgAsdRrCz9Li1NBp5F4shaoaLa4B4ZF8aLbNu4vj76j9P6s3araA"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-primary/40" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-surface via-surface/80 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-44 pb-36 flex flex-col items-start gap-6 w-full">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-container-lowest/15 backdrop-blur-md text-surface-container-low shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">
              SRI LANKA&apos;S PREMIER SUSTAINABLE EXPEDITIONS • 100% CARBON NEUTRAL
            </span>
          </div>

          {/* Major Editorial Heading */}
          <div className="max-w-4xl flex flex-col gap-3">
            <h1 className="font-display-lg text-4xl sm:text-5xl md:text-6xl text-on-primary leading-tight font-medium drop-shadow-sm">
              Discover the Soul of <span className="italic font-normal text-secondary-fixed">Sri Lanka</span>
            </h1>
            <p className="font-body-xl text-lg sm:text-xl text-surface-variant max-w-2xl leading-relaxed">
              Authentic journeys. Wild landscapes. Unforgettable memories curated with deep reverence for our sacred island.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('tours')}
              className="inline-flex items-center gap-3 bg-secondary hover:bg-on-secondary-fixed text-on-secondary font-label-lg text-label-lg px-8 py-4 rounded-full transition-all transform hover:-translate-y-0.5 shadow-xl shadow-primary/40 cursor-pointer"
            >
              <span>Explore Tours</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <button
              onClick={() => onNavigate('planner')}
              className="inline-flex items-center gap-2.5 bg-surface-container-lowest/15 hover:bg-surface-container-lowest/30 backdrop-blur-md text-on-primary font-label-lg text-label-lg px-7 py-4 rounded-full transition-all shadow-md cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">explore</span>
              <span>Plan Your Trip</span>
            </button>
          </div>

          {/* Trust Metrics */}
          <div className="flex flex-wrap items-center gap-y-3 gap-x-8 pt-4 text-surface-variant/90 font-label-md text-label-md">
            <div className="flex items-center gap-2">
              <div className="flex text-tertiary-fixed-dim">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <span className="text-on-primary font-semibold">4.98/5</span>
              <span>(2,400+ Explorers)</span>
            </div>
            <div className="h-4 w-px bg-surface-variant/30 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-fixed text-[18px]">person_check</span>
              <span>100% Local Naturalist Guides</span>
            </div>
            <div className="h-4 w-px bg-surface-variant/30 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-fixed text-[18px]">nest_eco_leaf</span>
              <span>Zero-Single-Use-Plastic Guarantee</span>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="relative z-10 w-full flex justify-center pb-8">
          <a
            className="flex flex-col items-center gap-1.5 text-surface-variant/80 hover:text-on-primary transition-colors group"
            href="#search-anchor"
          >
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-[11px]">
              Scroll to explore
            </span>
            <span className="material-symbols-outlined text-2xl animate-bounce">expand_more</span>
          </a>
        </div>

        {/* FLOATING SEARCH & TRIP PLANNING CARD */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 -mb-16 w-full" id="search-anchor">
          <div className="bg-surface-container-lowest/95 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-[0_24px_48px_-12px_rgba(15,41,30,0.15)] flex flex-col gap-6 border border-surface-container">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                <span className="font-label-lg text-label-lg uppercase tracking-wider text-primary font-bold">
                  Tailor-Made Expedition Builder
                </span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
                <span className="material-symbols-outlined text-secondary text-[18px]">bolt</span>
                <span>Instant Availability & Expert Concierge</span>
              </div>
            </div>

            <form
              onSubmit={handleQuickSearch}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center"
              id="trip-planner-form"
            >
              {/* Destination Field */}
              <div className="flex flex-col gap-1.5 p-3 rounded-2xl bg-surface-container-low transition-colors hover:bg-surface-container border border-surface-container">
                <label
                  className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5"
                  htmlFor="search-dest"
                >
                  <span className="material-symbols-outlined text-[16px] text-secondary">pin_drop</span>
                  Destination
                </label>
                <select
                  className="bg-transparent font-label-lg text-label-lg text-on-surface font-semibold focus:outline-none cursor-pointer"
                  id="search-dest"
                  value={plannerDest}
                  onChange={(e) => setPlannerDest(e.target.value)}
                >
                  <option value="all">All Destinations (Islandwide)</option>
                  <option value="ella">Ella & Misty Highlands</option>
                  <option value="sigiriya">Sigiriya & Cultural Triangle</option>
                  <option value="yala">Yala & Southern Wildlife</option>
                  <option value="galle">Galle & Southern Coast</option>
                  <option value="kandy">Kandy & Knuckles Range</option>
                </select>
              </div>

              {/* Travel Dates Field */}
              <div className="flex flex-col gap-1.5 p-3 rounded-2xl bg-surface-container-low transition-colors hover:bg-surface-container border border-surface-container">
                <label
                  className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5"
                  htmlFor="travel-date"
                >
                  <span className="material-symbols-outlined text-[16px] text-secondary">calendar_month</span>
                  Travel Window
                </label>
                <input
                  className="bg-transparent font-label-lg text-label-lg text-on-surface font-semibold focus:outline-none cursor-pointer"
                  id="travel-date"
                  type="text"
                  value={plannerDate}
                  onChange={(e) => setPlannerDate(e.target.value)}
                />
              </div>

              {/* Travelers Style / Guests */}
              <div className="flex flex-col gap-1.5 p-3 rounded-2xl bg-surface-container-low transition-colors hover:bg-surface-container border border-surface-container">
                <label
                  className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5"
                  htmlFor="search-style"
                >
                  <span className="material-symbols-outlined text-[16px] text-secondary">nature_people</span>
                  Travel Style
                </label>
                <select
                  className="bg-transparent font-label-lg text-label-lg text-on-surface font-semibold focus:outline-none cursor-pointer"
                  id="search-style"
                  value={plannerStyle}
                  onChange={(e) => setPlannerStyle(e.target.value)}
                >
                  <option value="eco-luxury">Eco-Luxury & Safari (Small Group)</option>
                  <option value="private-culture">Private Heritage & Ancient Wonders</option>
                  <option value="wellness-tea">Ayurveda, Wellness & High Tea</option>
                  <option value="coastal-marine">Blue Whale & Coastal Sanctuary</option>
                </select>
              </div>

              {/* Search CTA Button */}
              <div className="h-full flex items-end">
                <button
                  className="w-full h-[60px] bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg px-6 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-primary/20 cursor-pointer"
                  type="submit"
                >
                  <span className="material-symbols-outlined text-[20px]">search</span>
                  <span>Find Journeys</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 2. FEATURED EXPERIENCES SECTION */}
      <section className="w-full pt-32 pb-24 bg-surface" id="experiences">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                Curated Island Adventures
              </span>
              <h2 className="font-display-md text-3xl sm:text-4xl text-primary font-medium">
                Travel Beyond the Ordinary
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Experience Sri Lanka through raw nature, ancient living wisdom, gentle ocean waters, and deeply authentic local moments.
              </p>
            </div>
            <button
              onClick={() => onNavigate('experiences')}
              className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary hover:text-secondary transition-colors group cursor-pointer"
            >
              <span>Explore All Experiences</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>

          {/* 6 Interactive Experience Cards in 3-column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                onClick={() => onNavigate('experiences')}
                className="group relative rounded-3xl overflow-hidden bg-surface-container-lowest flex flex-col shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-surface-container"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    src={exp.image}
                  />
                  <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-md text-on-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider">
                    {exp.badge}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded-full font-label-md text-label-md text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-secondary">schedule</span>
                    <span>{exp.duration}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {exp.description}
                    </p>
                  </div>
                  <div className="pt-4 flex items-center justify-between bg-surface-container-low p-3 rounded-2xl">
                    <span className="font-label-sm text-label-sm text-secondary font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">{exp.icon}</span>
                      {exp.ecoFeature}
                    </span>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-[20px]">
                      north_east
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. POPULAR SRI LANKA DESTINATIONS */}
      <section className="w-full py-24 bg-surface-container-low" id="destinations">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-8">
          {/* Section Header with Dynamic Category Filter */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                Island Iconography
              </span>
              <h2 className="font-display-md text-3xl sm:text-4xl text-primary font-medium">
                Places That Stay With You
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                From mist-crowned tea stations and UNESCO citadel rocks to wild game reserves and secluded southern coastlines.
              </p>
            </div>
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 bg-surface-container p-1.5 rounded-full" id="destination-filters">
              {(['all', 'highlands', 'coast', 'ancient', 'wildlife'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setDestinationFilter(filter)}
                  className={`px-4 py-1.5 rounded-full font-label-md text-label-md transition-all cursor-pointer ${
                    destinationFilter === filter
                      ? 'bg-primary text-on-primary shadow-sm font-bold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                  type="button"
                >
                  {filter === 'all'
                    ? 'All'
                    : filter === 'highlands'
                    ? 'Highlands'
                    : filter === 'coast'
                    ? 'Coast & Marine'
                    : filter === 'ancient'
                    ? 'Ancient Cities'
                    : 'Wildlife'}
                </button>
              ))}
            </div>
          </div>

          {/* Asymmetric Editorial Grid of Destinations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {filteredDestinations.map((dest) => (
              <div
                key={dest.id}
                onClick={() => onSelectDestination(dest)}
                className={`${
                  dest.spanCol ? 'lg:col-span-2 h-[420px]' : 'h-[340px]'
                } group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer`}
              >
                <img
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  src={dest.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
                <div className="absolute top-4 sm:top-5 left-4 sm:left-5 bg-surface-container-lowest/20 backdrop-blur-md px-3.5 py-1.5 rounded-full font-label-sm text-label-sm text-on-primary">
                  {dest.region}
                </div>
                <div className="absolute top-4 sm:top-5 right-4 sm:right-5 bg-surface-container-lowest/80 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm flex items-center gap-1 font-semibold">
                  <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-variant">sunny</span>
                  Best: {dest.bestTime}
                </div>
                <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 flex flex-col gap-2 text-on-primary">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">
                    {dest.subtitle}
                  </span>
                  <h3 className={`${dest.spanCol ? 'font-headline-lg text-3xl' : 'font-headline-md text-2xl'} font-medium`}>
                    {dest.name}
                  </h3>
                  <p className="font-body-md text-body-md text-surface-variant line-clamp-2">
                    {dest.description}
                  </p>
                  <div className="pt-1 flex items-center gap-2 font-label-md text-label-md text-secondary-fixed group-hover:text-surface transition-colors">
                    <span>Discover Destination Itineraries</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE TOURS SECTION */}
      <section className="w-full py-24 bg-surface" id="tours">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                Handcrafted Itineraries
              </span>
              <h2 className="font-display-md text-3xl sm:text-4xl text-primary font-medium">
                Our Signature Journeys
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Slow-travel itineraries guided by master local naturalists, balancing deep wilderness immersion with uncompromising eco-luxury.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-4 py-2 rounded-full bg-surface-container text-primary font-label-md text-label-md flex items-center gap-1.5 border border-surface-variant/40">
                <span className="material-symbols-outlined text-[16px] text-secondary">verified_user</span>
                <span>100% Tailored Private Departures</span>
              </span>
            </div>
          </div>

          {/* Tours Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TOURS.map((tour) => {
              const convertedPrice = Math.round(tour.priceUSD * currentCurrency.rate);
              const isGrand = tour.id === 'complete-sri-lanka';
              return (
                <div
                  key={tour.id}
                  className={`${
                    isGrand ? 'lg:col-span-2 flex-col lg:flex-row' : 'flex-col'
                  } rounded-3xl bg-surface-container-lowest overflow-hidden flex shadow-sm hover:shadow-xl transition-all duration-500 group border border-surface-container`}
                >
                  <div className={`relative ${isGrand ? 'lg:w-1/2 h-72 lg:h-auto' : 'h-64'} overflow-hidden shrink-0`}>
                    <img
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src={tour.image}
                    />
                    <div className="absolute top-4 left-4 bg-primary text-on-primary font-label-sm text-label-sm uppercase px-3 py-1 rounded-full">
                      {tour.duration}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded-full font-label-sm text-label-sm text-secondary font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">eco</span> 100% Carbon Offset
                    </div>
                  </div>
                  <div className={`p-6 ${isGrand ? 'lg:p-8 lg:w-1/2' : ''} flex flex-col gap-4 flex-1 justify-between`}>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                        <span>{tour.locations}</span>
                        <span className="flex items-center gap-1 text-tertiary-fixed-variant font-semibold">
                          <span
                            className="material-symbols-outlined text-[16px]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            star
                          </span>{' '}
                          {tour.rating}
                        </span>
                      </div>
                      <h3 className={`${isGrand ? 'font-headline-md text-2xl' : 'font-headline-sm text-xl'} text-primary group-hover:text-secondary transition-colors`}>
                        {tour.title}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {tour.description}
                      </p>
                      {/* Highlights Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {tour.highlights.map((h, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between bg-surface-container-low p-4 rounded-2xl">
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block">
                          From
                        </span>
                        <span className="font-headline-sm text-headline-sm font-semibold text-primary">
                          {currentCurrency.symbol}
                          {convertedPrice.toLocaleString()}{' '}
                          <span className="font-body-md text-body-md font-normal text-on-surface-variant">
                            / person
                          </span>
                        </span>
                      </div>
                      <button
                        onClick={() => onSelectTour(tour)}
                        className="px-5 py-2.5 rounded-full bg-primary hover:bg-secondary text-on-primary font-label-md text-label-md transition-colors flex items-center gap-1.5 cursor-pointer"
                        type="button"
                      >
                        <span>View Journey</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. WHY ECO TRAVELS SRI LANKA (TRAVEL WITH PURPOSE) */}
      <section className="w-full py-24 bg-surface-container-low" id="about-us">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-3">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              Our Sustainability Compact
            </span>
            <h2 className="font-display-md text-3xl sm:text-4xl text-primary font-medium">
              Travel With Purpose
            </h2>
            <p className="font-headline-sm text-lg sm:text-headline-sm italic text-secondary pt-2">
              “We believe the best journeys leave beautiful memories — not a footprint.”
            </p>
          </div>

          {/* 4 Feature Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-3xl bg-surface-container-lowest flex flex-col gap-4 shadow-sm hover:shadow-md transition-all border border-surface-container">
              <div className="w-14 h-14 rounded-2xl bg-secondary-container/50 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">solar_power</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary">Sustainable Travel</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                100% solar-supported safari camps, rigorous zero-plastic hydration programs, and a native tree planted for every traveler in the Knuckles biosphere.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-surface-container-lowest flex flex-col gap-4 shadow-sm hover:shadow-md transition-all border border-surface-container">
              <div className="w-14 h-14 rounded-2xl bg-secondary-container/50 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">handshake</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary">Local Empowerment</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Over 85% of your trip investment remains directly within rural host communities, supporting organic farmers, artisans, and village wildlife patrols.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-surface-container-lowest flex flex-col gap-4 shadow-sm hover:shadow-md transition-all border border-surface-container">
              <div className="w-14 h-14 rounded-2xl bg-secondary-container/50 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">groups</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary">Small Group Intimacy</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                All scheduled journeys are strictly capped at 8 travelers. Private bespoke departures ensure unhurried pacing and peaceful nature encounters.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-surface-container-lowest flex flex-col gap-4 shadow-sm hover:shadow-md transition-all border border-surface-container">
              <div className="w-14 h-14 rounded-2xl bg-secondary-container/50 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">pets</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary">Ethical Wildlife</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Zero animal exploitation. Strict viewing distance guidelines, engine shutdowns during mammal observations, and no wildlife feeding or baiting.
              </p>
            </div>
          </div>

          {/* Trust Badges Banner */}
          <div className="p-6 rounded-2xl bg-surface-container flex flex-wrap items-center justify-around gap-6 text-on-surface-variant border border-surface-variant/40">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-2xl">verified</span>
              <span className="font-label-md text-label-md font-semibold text-primary">
                GSTC Recognized Partner
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-2xl">co2</span>
              <span className="font-label-md text-label-md font-semibold text-primary">
                Certified Climate Neutral
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-2xl">shield</span>
              <span className="font-label-md text-label-md font-semibold text-primary">
                Dept. of Wildlife Conservation Partner
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-2xl">hotel_class</span>
              <span className="font-label-md text-label-md font-semibold text-primary">
                SLTDA Diamond Licensed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SRI LANKA STORY (SPLIT-SCREEN EDITORIAL) */}
      <section className="w-full py-24 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Side: Immersive Imagery Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  alt="Sigiriya rock monolith in morning mist Sri Lanka"
                  className="w-full h-[540px] object-cover object-center"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3DcDc-NotJ-gXssgzRoXM67aIO1FJ8-72z8lmg5OLn0gFBp8rFT-v4LXdgDA-dhBx86sIhvuEBydb2VGSWhPbiTf1uRXcdTaaL24k0Uc10EEHJY6NZQIeXJnHaWYHKg6POoNAzUgsTL7veTXDX_Ea9kDmyGhUW8w_FaFHtwqjCOk6gy-u6NvnPteuaUJqLILEWOiPPd7LV8AZjRoJQgFjWM0o1fIjqr5dycWuetViS_F7zyLzgMlGCg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                {/* Quote Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-surface-container-lowest/90 backdrop-blur-md border border-surface-container">
                  <p className="font-headline-sm text-base sm:text-headline-sm italic text-primary">
                    “Sri Lanka leaves an imprint upon your spirit that lingers long after you have crossed the ocean home.”
                  </p>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary mt-2 block font-semibold">
                    — Dr. Anura Jayawardena, Lead Expedition Botanist
                  </span>
                </div>
              </div>
              {/* Decorative Floating Counter */}
              <div className="absolute -top-6 -right-6 hidden sm:flex flex-col items-center justify-center w-28 h-28 rounded-full bg-secondary text-on-secondary shadow-xl">
                <span className="font-headline-md text-headline-md font-bold leading-none">3,000</span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-[9px] text-center mt-1">
                  Years of History
                </span>
              </div>
            </div>

            {/* Right Side: Evocative Editorial Narrative */}
            <div className="lg:col-span-6 flex flex-col gap-6 lg:pl-6">
              <div className="flex flex-col gap-2">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                  Deep Heritage & Raw Beauty
                </span>
                <h2 className="font-display-md text-3xl sm:text-4xl text-primary font-medium">
                  Sri Lanka, Naturally Extraordinary
                </h2>
              </div>
              <p className="font-body-xl text-lg sm:text-xl text-on-surface leading-relaxed">
                A tear-shaped emerald in the Indian Ocean where ancient kings carved sky palaces into sheer monoliths, mist-shrouded mountain passes echo with morning birdcalls, and wild elephants wander freely through twilight grasslands.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                From the aroma of freshly hand-roasted cinnamon and single-origin Ceylon tea to the genuine, heartfelt smiles of village elders welcoming you into their homes, every moment in Sri Lanka is saturated with wonder. We build bridges of respectful travel that honor this ancient sanctuary.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-surface-container-low flex flex-col gap-1 border border-surface-container">
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">8</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    UNESCO Sites
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-surface-container-low flex flex-col gap-1 border border-surface-container">
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">26</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    National Parks
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-surface-container-low flex flex-col gap-1 border border-surface-container">
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">#1</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    Biodiversity Density
                  </span>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary hover:text-secondary transition-colors group cursor-pointer"
                >
                  <span>Read Our Conservation Manifesto</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WILDLIFE SAFARI FEATURE SECTION (INTO THE WILD) */}
      <section className="w-full py-28 bg-primary text-surface-variant relative overflow-hidden" id="wildlife-safari">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(134,242,228,0.12),rgba(255,255,255,0))] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-bold">
                The Big Five of Sri Lanka
              </span>
              <h2 className="font-display-md text-3xl sm:text-4xl text-on-primary font-medium">
                Into the Wild
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary-container">
                Sri Lanka is one of the world’s top biodiversity hotspots, home to colossal marine giants and elusive jungle predators.
              </p>
            </div>
            <button
              onClick={() => onNavigate('tours')}
              className="inline-flex items-center gap-2.5 bg-secondary hover:bg-secondary-fixed text-on-secondary hover:text-on-secondary-fixed font-label-lg text-label-lg px-8 py-3.5 rounded-full transition-all shadow-lg cursor-pointer"
            >
              <span>Explore Wildlife Tours</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>

          {/* Elephant Anchor Display */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              alt="Majestic wild Sri Lankan elephant walking calmly through golden sunlit grassland at twilight near a calm lake"
              className="w-full h-[460px] object-cover object-center"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpoefjIPLDRXelNQrFdDjBMH_SnAaRcVfi3gsednhezdoXr6aPVh7kZKxM2qteqyA_XAaX_HBDd3rq_JSR6r6e6UL-9KJBV1Kv6zhrzN7u1WDhFtae9sHANVSEBLDrHN3pPRFpWCP39SLM21RUSI140QXwc-gsP9xXg9m5W0FQwY0rokCPmTbKxCplCsJv760FaoRyqJfEKz9BCKOVjURXcrCHBxxRxySV7vAOJVQMzOTI8QSL26KV0Q"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-xl flex flex-col gap-2">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-bold">
                  Iconic Resident
                </span>
                <h3 className="font-display-md text-2xl sm:text-headline-lg md:text-display-md text-on-primary font-medium">
                  The Asian Elephant
                </h3>
                <p className="font-body-md text-body-md text-surface-variant">
                  Witness &apos;The Gathering&apos; at Minneriya, where hundreds of wild elephants assemble around ancient irrigation reservoirs in one of nature&apos;s greatest annual spectacles.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-4 py-2 rounded-full bg-primary-container/80 backdrop-blur-md text-primary-fixed font-label-sm text-label-sm">
                  Peak: July – October
                </span>
                <span className="px-4 py-2 rounded-full bg-primary-container/80 backdrop-blur-md text-primary-fixed font-label-sm text-label-sm">
                  Minneriya & Udawalawe
                </span>
              </div>
            </div>
          </div>

          {/* Wildlife Species Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-3xl bg-primary-container/70 backdrop-blur-md flex flex-col justify-between gap-4 hover:bg-primary-container transition-all border border-primary-fixed/15">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-secondary-fixed">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider">Apex Predator</span>
                  <span className="material-symbols-outlined text-[20px]">visibility</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-primary">Sri Lankan Leopard</h4>
                <p className="font-body-md text-body-md text-on-primary-container text-sm">
                  Panthera pardus kotiya, endemic to the island and flourishing in the granite boulders of Yala and Wilpattu.
                </p>
              </div>
              <div className="font-label-sm text-label-sm text-primary-fixed flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">location_on</span> Yala & Wilpattu
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-primary-container/70 backdrop-blur-md flex flex-col justify-between gap-4 hover:bg-primary-container transition-all border border-primary-fixed/15">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-secondary-fixed">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider">Ocean Sovereign</span>
                  <span className="material-symbols-outlined text-[20px]">waves</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-primary">Blue Whale</h4>
                <p className="font-body-md text-body-md text-on-primary-container text-sm">
                  The planet&apos;s largest living creature migratory route runs mere nautical miles off Mirissa and Trincomalee trench.
                </p>
              </div>
              <div className="font-label-sm text-label-sm text-primary-fixed flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">location_on</span> Mirissa & Trincomalee
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-primary-container/70 backdrop-blur-md flex flex-col justify-between gap-4 hover:bg-primary-container transition-all border border-primary-fixed/15">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-secondary-fixed">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider">Forest Forager</span>
                  <span className="material-symbols-outlined text-[20px]">forest</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-primary">Sloth Bear</h4>
                <p className="font-body-md text-body-md text-on-primary-container text-sm">
                  Shy, nocturnal termite-hunters found roaming the dense palu forests during fruiting season in early summer.
                </p>
              </div>
              <div className="font-label-sm text-label-sm text-primary-fixed flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">location_on</span> Wasgamuwa & Wilpattu
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-primary-container/70 backdrop-blur-md flex flex-col justify-between gap-4 hover:bg-primary-container transition-all border border-primary-fixed/15">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-secondary-fixed">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider">Endemic Aviary</span>
                  <span className="material-symbols-outlined text-[20px]">cruelty_free</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-primary">34 Endemic Birds</h4>
                <p className="font-body-md text-body-md text-on-primary-container text-sm">
                  From the Ceylon Blue Magpie to the Sri Lanka Junglefowl in the primeval Sinharaja Rainforest Biosphere.
                </p>
              </div>
              <div className="font-label-sm text-label-sm text-primary-fixed flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">location_on</span> Sinharaja & Knuckles
              </div>
            </div>
          </div>

          {/* Wildlife Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 rounded-3xl bg-primary-container/40 text-center border border-primary-fixed/10">
            <div className="flex flex-col">
              <span className="font-display-md text-3xl sm:text-display-md text-on-primary font-bold">26</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed">
                National Parks
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display-md text-3xl sm:text-display-md text-on-primary font-bold">100+</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed">
                Mammal Species
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display-md text-3xl sm:text-display-md text-on-primary font-bold">400+</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed">
                Avian Species
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display-md text-3xl sm:text-display-md text-on-primary font-bold">100%</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed">
                Ethical Wildlife Code
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TRAVELER STORIES (TESTIMONIALS) */}
      <section className="w-full py-24 bg-surface" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                Voices of Our Guests
              </span>
              <h2 className="font-display-md text-3xl sm:text-4xl text-primary font-medium">
                Stories From Our Travelers
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Read genuine reflections from explorers who experienced the true soul of Sri Lanka with our naturalist team.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full border border-surface-container">
              <span className="material-symbols-outlined text-secondary text-[20px]">grade</span>
              <span className="font-label-md text-label-md font-bold text-primary">
                Rated 4.98/5 on Trustpilot & Tripadvisor
              </span>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-8 rounded-3xl bg-surface-container-lowest flex flex-col justify-between gap-6 shadow-sm hover:shadow-xl transition-all border border-surface-container"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex text-tertiary-fixed-dim">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[20px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <p className="font-body-lg text-body-lg text-on-surface italic leading-relaxed">
                    &quot;{t.quote}&quot;
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4 bg-surface-container-low p-3 rounded-2xl border border-surface-container">
                  <div className="w-11 h-11 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold font-headline-sm">
                    {t.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-lg text-label-lg font-bold text-primary">
                      {t.author}
                    </span>
                    <span className="font-label-sm text-xs text-on-surface-variant">
                      {t.location} • {t.tour}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TRAVEL INSPIRATION & EDITORIAL JOURNAL */}
      <section className="w-full py-24 bg-surface-container-low" id="blog">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                From Our Journal
              </span>
              <h2 className="font-display-md text-3xl sm:text-4xl text-primary font-medium">
                Travel Inspiration
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Insider guides, packing wisdom, seasonal monsoon maps, and culinary dispatches from our resident island experts.
              </p>
            </div>
            <button
              onClick={() => onNavigate('blog')}
              className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary hover:text-secondary transition-colors group cursor-pointer"
            >
              <span>Read All Journal Entries</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>

          {/* 6 Editorial Article Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((art) => (
              <article
                key={art.id}
                onClick={() => onSelectArticle(art)}
                className="group rounded-3xl bg-surface-container-lowest overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all cursor-pointer border border-surface-container"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={art.image}
                  />
                  <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-md text-on-primary px-3 py-1 rounded-full font-label-sm text-label-sm">
                    {art.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 text-on-surface-variant font-label-sm text-xs">
                      <span>{art.date}</span>
                      <span>•</span>
                      <span>{art.readTime}</span>
                    </div>
                    <h3 className="font-headline-sm text-lg text-primary group-hover:text-secondary transition-colors">
                      {art.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                      {art.excerpt}
                    </p>
                  </div>
                  <span className="font-label-md text-label-md text-secondary font-semibold flex items-center gap-1">
                    Read Guide <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CALL TO ACTION SECTION */}
      <section className="w-full py-28 bg-primary relative overflow-hidden" id="plan-trip">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
          <img
            alt="Nine Arch Bridge Ella Sri Lanka tea country golden light"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8uvEnURveEd0EbCgjKrcVb2bpkivV7jI2huQuUfU6Rd281IwUxoTxlNMVhNTBiFm2pmn4oUOYtP9r5EAe3Ss6xfyChnHe9T1N5-Q5DByyYUVxVJfWXCxLduzKQVUikJ1q-ud4HXq3oGC5KFTlrAIfwXCIRN00TS9MzYimShUZA3i658OMdosNKtj9B_awylgZ_bwgAsdRrCz9Li1NBp5F4shaoaLa4B4ZF8aLbNu4vj76j9P6s3araA"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-lowest/15 backdrop-blur-md text-secondary-fixed">
            <span className="material-symbols-outlined text-[16px]">flight_takeoff</span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold">
              Start Your Journey Today
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-display-lg text-3xl sm:text-4xl md:text-5xl text-on-primary font-medium">
              Your Sri Lankan Story Starts Here.
            </h2>
            <p className="font-body-xl text-lg sm:text-xl text-surface-variant max-w-2xl mx-auto">
              Tell us what inspires you — ancient monoliths, deep wilderness safaris, or slow hill-country retreats — and we’ll craft an extraordinary expedition around it.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenBooking(null)}
              className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary-fixed text-on-secondary hover:text-on-secondary-fixed font-label-lg text-label-lg px-9 py-4 rounded-full transition-all shadow-xl shadow-secondary/20 cursor-pointer"
            >
              <span>Plan My Journey</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
            <a
              className="inline-flex items-center gap-2.5 bg-surface-container-lowest/15 hover:bg-surface-container-lowest/30 backdrop-blur-md text-on-primary font-label-lg text-label-lg px-8 py-4 rounded-full transition-all shadow-md"
              href="https://wa.me/94112345678"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Talk to a Travel Expert</span>
            </a>
          </div>

          {/* Reassurance Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 text-surface-variant font-label-md text-label-md bg-primary-container/40 p-6 rounded-3xl w-full border border-primary-fixed/15">
            <div className="flex items-center justify-center gap-2.5">
              <span className="material-symbols-outlined text-secondary-fixed text-[20px]">timer</span>
              <span>Bespoke Proposal in 24 Hours</span>
            </div>
            <div className="flex items-center justify-center gap-2.5">
              <span className="material-symbols-outlined text-secondary-fixed text-[20px]">support_agent</span>
              <span>No-Obligation Consultation</span>
            </div>
            <div className="flex items-center justify-center gap-2.5">
              <span className="material-symbols-outlined text-secondary-fixed text-[20px]">tune</span>
              <span>100% Tailored to You</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
