import React, { useState } from 'react';
import { Tour, CurrencyCode, CURRENCIES } from '../data/travelData';

interface TourModalProps {
  tour: Tour | null;
  onClose: () => void;
  currency: CurrencyCode;
  onBookNow: (tour: Tour) => void;
}

export const TourModal: React.FC<TourModalProps> = ({
  tour,
  onClose,
  currency,
  onBookNow,
}) => {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions' | 'sustainability'>('itinerary');

  if (!tour) return null;

  const currentCurrency = CURRENCIES[currency];
  const convertedPrice = Math.round(tour.priceUSD * currentCurrency.rate);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-primary/80 backdrop-blur-md overflow-y-auto">
      <div
        className="w-full max-w-4xl bg-surface-container-lowest rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh] my-auto animate-fadeIn border border-surface-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Hero Banner */}
        <div className="relative h-64 sm:h-80 w-full shrink-0">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-surface-container-lowest/80 hover:bg-surface-container-lowest text-primary flex items-center justify-center backdrop-blur-md transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-on-primary">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-surface-container-lowest/20 backdrop-blur-md text-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider">
                  {tour.tag}
                </span>
                <span className="text-surface-variant font-label-sm text-label-sm">
                  {tour.duration}
                </span>
              </div>
              <h2 className="font-headline-lg text-2xl sm:text-headline-lg font-medium leading-tight">
                {tour.title}
              </h2>
              <p className="text-surface-variant text-sm mt-1">{tour.locations}</p>
            </div>

            <div className="flex flex-col items-start sm:items-end bg-primary-container/80 backdrop-blur-md p-3 rounded-2xl">
              <span className="text-xs text-primary-fixed uppercase tracking-wider">Pricing</span>
              <div className="font-headline-md text-2xl font-bold text-on-primary">
                {currentCurrency.symbol}
                {convertedPrice.toLocaleString()}{' '}
                <span className="text-xs font-normal text-surface-variant">/ person</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Tabs */}
        <div className="flex border-b border-surface-container px-6 pt-3 bg-surface-container-low shrink-0 gap-6">
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`pb-3 font-label-lg text-label-lg transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === 'itinerary'
                ? 'border-secondary text-primary font-bold'
                : 'border-transparent text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            Day-by-Day Itinerary
          </button>
          <button
            onClick={() => setActiveTab('inclusions')}
            className={`pb-3 font-label-lg text-label-lg transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === 'inclusions'
                ? 'border-secondary text-primary font-bold'
                : 'border-transparent text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">inventory_2</span>
            Inclusions & Stays
          </button>
          <button
            onClick={() => setActiveTab('sustainability')}
            className={`pb-3 font-label-lg text-label-lg transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === 'sustainability'
                ? 'border-secondary text-primary font-bold'
                : 'border-transparent text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">eco</span>
            Eco Compact
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-6">
          {activeTab === 'itinerary' && (
            <div className="flex flex-col gap-6">
              <div className="bg-surface-container-low p-4 rounded-2xl">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {tour.detailedOverview}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Detailed Itinerary
                </h3>
                <div className="flex flex-col gap-4 border-l-2 border-surface-container pl-4 ml-2">
                  {tour.itinerary.map((day) => (
                    <div key={day.day} className="relative group">
                      <div className="absolute -left-[23px] top-1 w-3 h-3 rounded-full bg-secondary ring-4 ring-surface" />
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                            Day {day.day}
                          </span>
                          <span className="font-headline-sm text-[16px] text-primary font-medium">
                            {day.title}
                          </span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                          {day.desc}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-primary mt-1 font-semibold">
                          <span className="material-symbols-outlined text-[14px] text-secondary">
                            night_shelter
                          </span>
                          <span>Overnight: {day.stay}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'inclusions' && (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  What’s Included in This Journey
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tour.included.map((inc, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-surface-container-low flex items-start gap-2.5"
                    >
                      <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-md text-body-md text-on-surface">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-container border border-surface-variant/40 flex flex-col gap-2">
                <h4 className="font-headline-sm text-[16px] text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">group</span>
                  Group Dynamic & Exclusivity
                </h4>
                <p className="font-body-md text-sm text-on-surface-variant">
                  {tour.groupSize}. All departures offer private customized routing upon request for families or couples wanting complete privacy.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'sustainability' && (
            <div className="flex flex-col gap-5">
              <div className="p-5 rounded-2xl bg-primary text-on-primary flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-on-secondary shrink-0">
                    <span className="material-symbols-outlined text-3xl">nest_eco_leaf</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-lg text-on-primary font-medium">
                      100% Certified Carbon Balanced
                    </h4>
                    <p className="text-xs text-primary-fixed">
                      Estimated carbon footprint: {tour.carbonOffsetKg} kg CO2e per traveler
                    </p>
                  </div>
                </div>
                <div className="px-4 py-2 rounded-full bg-primary-container text-secondary-fixed font-label-md text-label-md border border-secondary/30">
                  Fully Offset & Verified
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-surface-container-low flex flex-col gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-2xl">park</span>
                  <span className="font-headline-sm text-[16px] text-primary font-semibold">
                    1 Native Tree Planted
                  </span>
                  <p className="text-xs text-on-surface-variant">
                    Planted in the UNESCO Knuckles Cloud Forest Biosphere with geolocated certificate.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-surface-container-low flex flex-col gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-2xl">volunteer_activism</span>
                  <span className="font-headline-sm text-[16px] text-primary font-semibold">
                    85% Village Retained
                  </span>
                  <p className="text-xs text-on-surface-variant">
                    Expedition fees flow straight to village naturalists, home cooks, and local boatmen.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-surface-container-low flex flex-col gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-2xl">water_bottle</span>
                  <span className="font-headline-sm text-[16px] text-primary font-semibold">
                    Zero-Single-Use Plastic
                  </span>
                  <p className="text-xs text-on-surface-variant">
                    Complimentary insulated flasks with chilled spring water filtration stations.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-surface-container border-t border-surface-container-high flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div>
            <span className="text-xs text-on-surface-variant block">Total for journey</span>
            <span className="font-headline-md text-2xl font-bold text-primary">
              {currentCurrency.symbol}
              {convertedPrice.toLocaleString()}
              <span className="text-xs font-normal text-on-surface-variant"> / guest</span>
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-full bg-surface-container-lowest text-on-surface hover:bg-surface-variant font-label-md text-label-md transition-colors flex-1 sm:flex-none text-center"
            >
              Close
            </button>
            <button
              onClick={() => {
                onBookNow(tour);
                onClose();
              }}
              className="px-7 py-3 rounded-full bg-secondary hover:bg-on-secondary-fixed text-on-secondary font-label-lg text-label-lg transition-all flex items-center justify-center gap-2 flex-1 sm:flex-none shadow-lg shadow-secondary/20"
            >
              <span>Request Reservation</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
