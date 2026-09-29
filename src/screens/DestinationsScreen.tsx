import React, { useState } from 'react';
import { DESTINATIONS, Destination } from '../data/travelData';

interface DestinationsScreenProps {
  onSelectDestination: (dest: Destination) => void;
  onExploreTours: (destName: string) => void;
}

export const DestinationsScreen: React.FC<DestinationsScreenProps> = ({
  onSelectDestination,
  onExploreTours,
}) => {
  const [filter, setFilter] = useState<'all' | 'highlands' | 'coast' | 'ancient' | 'wildlife'>('all');

  const filtered = filter === 'all'
    ? DESTINATIONS
    : DESTINATIONS.filter((d) => d.category === filter);

  return (
    <div className="w-full min-h-screen bg-surface py-12 px-4 md:px-8 max-w-7xl mx-auto flex flex-col gap-10">
      {/* Page Header */}
      <div className="flex flex-col gap-3 max-w-3xl">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
          Island Geography & Sanctuaries
        </span>
        <h1 className="font-display-md text-3xl sm:text-4xl md:text-5xl text-primary font-medium">
          Destinations of Sri Lanka
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          From the cloud-kissed peaks of the Central Highlands to the ancient granite citadels and pristine whale waters of the south.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 bg-surface-container-low p-2 rounded-2xl w-fit border border-surface-container">
        {[
          { id: 'all', label: 'All Regions' },
          { id: 'highlands', label: 'Central Highlands' },
          { id: 'coast', label: 'Coast & Marine' },
          { id: 'ancient', label: 'Cultural Triangle' },
          { id: 'wildlife', label: 'National Parks & Wildlife' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              filter === tab.id
                ? 'bg-primary text-on-primary shadow-sm font-bold'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((dest) => (
          <div
            key={dest.id}
            onClick={() => onSelectDestination(dest)}
            className="group rounded-3xl bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col cursor-pointer border border-surface-container"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-md px-3 py-1 rounded-full text-xs text-on-primary">
                {dest.region}
              </div>
              <div className="absolute top-4 right-4 bg-surface-container-lowest/80 text-primary px-3 py-1 rounded-full text-xs flex items-center gap-1 font-semibold">
                <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-variant">sunny</span>
                {dest.bestTime}
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-on-primary">
                <span className="font-label-sm text-xs uppercase tracking-wider text-secondary-fixed">
                  {dest.subtitle}
                </span>
                <h3 className="font-headline-lg text-2xl font-medium">{dest.name}</h3>
              </div>
            </div>

            <div className="p-6 flex flex-col gap-4 flex-1 justify-between">
              <p className="font-body-md text-sm text-on-surface-variant line-clamp-3">
                {dest.description}
              </p>

              <div className="flex flex-col gap-2">
                <span className="font-label-sm text-xs uppercase text-on-surface-variant font-bold">
                  Highlights:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {dest.topAttractions.slice(0, 3).map((a, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full bg-surface-container-low text-xs text-on-surface font-medium"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-surface-container flex items-center justify-between">
                <span className="text-xs text-secondary font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">nature</span>
                  {dest.wildlifeEncounter.split(',')[0]}
                </span>
                <span className="font-label-md text-xs text-primary font-bold flex items-center gap-1 group-hover:text-secondary transition-colors">
                  Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Seasonal Climate Advisory Banner */}
      <div className="p-8 rounded-3xl bg-surface-container-low border border-surface-container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-2xl">wb_sunny</span>
          </div>
          <div>
            <h4 className="font-headline-sm text-lg text-primary font-semibold">
              The Dual Monsoon Advantage
            </h4>
            <p className="font-body-md text-sm text-on-surface-variant max-w-xl">
              Sri Lanka is a year-round destination. When rains arrive on the south-west coast, the eastern and northern regions are bathed in golden sunshine. Our naturalist team designs your route to match optimal microclimates.
            </p>
          </div>
        </div>
        <button
          onClick={() => onExploreTours('Sri Lanka')}
          className="px-6 py-3 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-xs font-semibold whitespace-nowrap cursor-pointer"
        >
          View Seasonal Routes
        </button>
      </div>
    </div>
  );
};
