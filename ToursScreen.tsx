import React, { useState } from 'react';
import { TOURS, Tour, CurrencyCode, CURRENCIES } from '../data/travelData';

interface ToursScreenProps {
  currency: CurrencyCode;
  onSelectTour: (tour: Tour) => void;
  onOpenBooking: (tour: Tour) => void;
}

export const ToursScreen: React.FC<ToursScreenProps> = ({
  currency,
  onSelectTour,
  onOpenBooking,
}) => {
  const [filterDuration, setFilterDuration] = useState<'all' | 'short' | 'medium' | 'long'>('all');
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc' | 'days'>('popular');
  const [searchTerm, setSearchTerm] = useState('');

  const currentCurrency = CURRENCIES[currency];

  const filtered = TOURS.filter((tour) => {
    if (filterDuration === 'short' && tour.days > 6) return false;
    if (filterDuration === 'medium' && (tour.days < 7 || tour.days > 9)) return false;
    if (filterDuration === 'long' && tour.days < 10) return false;

    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      const matchTitle = tour.title.toLowerCase().includes(q);
      const matchLoc = tour.locations.toLowerCase().includes(q);
      const matchTag = tour.tag.toLowerCase().includes(q);
      if (!matchTitle && !matchLoc && !matchTag) return false;
    }
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-asc') return a.priceUSD - b.priceUSD;
    if (sortBy === 'price-desc') return b.priceUSD - a.priceUSD;
    if (sortBy === 'days') return a.days - b.days;
    return b.rating - a.rating;
  });

  return (
    <div className="w-full min-h-screen bg-surface py-12 px-4 md:px-8 max-w-7xl mx-auto flex flex-col gap-10">
      {/* Header Banner */}
      <div className="flex flex-col gap-3 max-w-3xl">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
          Expedition Catalog
        </span>
        <h1 className="font-display-md text-3xl sm:text-4xl md:text-5xl text-primary font-medium">
          Handcrafted Sri Lankan Journeys
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Every itinerary is 100% carbon-balanced and led by private local naturalist guides. Choose a signature departure or customize every detail to your pace.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-surface-container flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface-container-low w-full md:w-80 border border-surface-container">
          <span className="material-symbols-outlined text-secondary text-xl">search</span>
          <input
            type="text"
            placeholder="Search by park, city or style..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent text-sm text-on-surface focus:outline-none w-full"
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} className="text-xs text-on-surface-variant">
              ✕
            </button>
          )}
        </div>

        {/* Duration Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <span className="text-xs font-semibold text-on-surface-variant mr-1">Duration:</span>
          {[
            { id: 'all', label: 'All Durations' },
            { id: 'short', label: '5-6 Days' },
            { id: 'medium', label: '7-9 Days' },
            { id: 'long', label: '10+ Days' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilterDuration(item.id as any)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filterDuration === item.id
                  ? 'bg-primary text-on-primary shadow-sm font-bold'
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Sort dropdown */}
        <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
          <span className="text-xs text-on-surface-variant font-semibold">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-surface-container-low text-xs font-semibold text-primary px-3 py-2 rounded-xl focus:outline-none cursor-pointer border border-surface-container"
          >
            <option value="popular">Top Rated</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="days">Duration (Days)</option>
          </select>
        </div>
      </div>

      {/* Tours Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sorted.map((tour) => {
          const convertedPrice = Math.round(tour.priceUSD * currentCurrency.rate);
          return (
            <div
              key={tour.id}
              className="rounded-3xl bg-surface-container-lowest overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all duration-500 group border border-surface-container"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={tour.image}
                />
                <div className="absolute top-4 left-4 bg-primary text-on-primary font-label-sm text-label-sm uppercase px-3 py-1 rounded-full">
                  {tour.duration}
                </div>
                <div className="absolute bottom-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded-full font-label-sm text-label-sm text-secondary font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">eco</span> 100% Offset
                </div>
              </div>

              <div className="p-6 flex flex-col gap-4 flex-1 justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-xs">
                    <span>{tour.locations}</span>
                    <span className="flex items-center gap-1 text-tertiary-fixed-variant font-semibold">
                      <span
                        className="material-symbols-outlined text-[16px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>{' '}
                      {tour.rating} ({tour.reviewsCount})
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-xl text-primary group-hover:text-secondary transition-colors">
                    {tour.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {tour.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {tour.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-xs text-on-surface-variant"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between bg-surface-container-low p-4 rounded-2xl border border-surface-container">
                  <div>
                    <span className="font-label-sm text-xs uppercase tracking-wider text-on-surface-variant block">
                      From
                    </span>
                    <span className="font-headline-sm text-headline-sm font-semibold text-primary">
                      {currentCurrency.symbol}
                      {convertedPrice.toLocaleString()}{' '}
                      <span className="font-body-md text-xs font-normal text-on-surface-variant">
                        / person
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectTour(tour)}
                      className="px-4 py-2 rounded-full bg-surface-container-lowest hover:bg-surface-variant text-primary font-label-md text-xs font-bold transition-colors cursor-pointer border border-surface-container"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => onOpenBooking(tour)}
                      className="px-4 py-2 rounded-full bg-secondary hover:bg-on-secondary-fixed text-on-secondary font-label-md text-xs font-bold transition-colors cursor-pointer"
                    >
                      Reserve
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {sorted.length === 0 && (
        <div className="py-20 text-center flex flex-col items-center gap-3">
          <span className="material-symbols-outlined text-5xl text-on-surface-variant/40">
            explore_off
          </span>
          <h3 className="font-headline-sm text-2xl text-primary font-medium">No Expeditions Match Your Filter</h3>
          <p className="font-body-md text-on-surface-variant max-w-md">
            Try adjusting your search criteria or duration, or speak to our concierge to craft a bespoke route.
          </p>
          <button
            onClick={() => {
              setFilterDuration('all');
              setSearchTerm('');
            }}
            className="mt-2 px-6 py-2.5 rounded-full bg-primary text-on-primary font-label-md text-sm"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
