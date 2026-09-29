import React, { useState } from 'react';
import { Tour, CurrencyCode, CURRENCIES } from '../data/travelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tour: Tour | null;
  currency: CurrencyCode;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  tour,
  currency,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    travelers: 2,
    travelDate: 'Nov 2026',
    accommodationTier: 'Eco-Luxury Bungalow & Safari Tents',
    dietaryNotes: '',
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentCurrency = CURRENCIES[currency];
  const perPersonPrice = tour ? Math.round(tour.priceUSD * currentCurrency.rate) : 2200;
  const totalEstimated = perPersonPrice * formData.travelers;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-md overflow-y-auto">
      <div
        className="w-full max-w-2xl bg-surface-container-lowest rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col gap-6 my-auto animate-fadeIn border border-surface-container max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-surface-container pb-4">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
              Bespoke Proposal Request
            </span>
            <h3 className="font-headline-md text-xl sm:text-headline-md text-primary font-medium">
              {tour ? tour.title : 'Plan Your Custom Expedition'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-secondary-container text-secondary flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>
            <h4 className="font-headline-md text-2xl text-primary font-medium">
              Ayubowan, {formData.fullName || 'Valued Traveler'}!
            </h4>
            <p className="font-body-md text-on-surface-variant max-w-md">
              Your expedition request for <strong>{tour ? tour.title : 'Custom Sri Lanka Tour'}</strong> has been safely received. Our senior naturalist and island concierge team will prepare your bespoke itinerary within 24 hours.
            </p>
            <div className="p-4 rounded-2xl bg-surface-container-low text-xs text-on-surface-variant max-w-md w-full text-left flex flex-col gap-1.5 border border-surface-container">
              <span className="font-bold text-primary">Confirmation Summary:</span>
              <span>· Estimated Travelers: {formData.travelers} Guests</span>
              <span>· Preferred Window: {formData.travelDate}</span>
              <span>· Contact: {formData.email}</span>
              <span>· Carbon Balance: 100% Offset automatically included</span>
            </div>
            <button
              onClick={handleReset}
              className="mt-4 px-8 py-3 rounded-full bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors"
            >
              Return to Expeditions
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {tour && (
              <div className="p-4 rounded-2xl bg-surface-container-low flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div>
                    <span className="font-label-sm text-xs text-secondary font-bold">{tour.tag}</span>
                    <h5 className="font-headline-sm text-sm text-primary font-semibold">
                      {tour.title}
                    </h5>
                    <p className="text-xs text-on-surface-variant">{tour.duration}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-on-surface-variant block">From</span>
                  <span className="font-headline-sm text-lg font-bold text-primary">
                    {currentCurrency.symbol}
                    {perPersonPrice.toLocaleString()}
                  </span>
                  <span className="text-xs text-on-surface-variant"> / person</span>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-on-surface">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Eleanor Vance"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="p-3 rounded-xl bg-surface-container-low border border-surface-container focus:outline-none focus:border-secondary text-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-on-surface">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="eleanor@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="p-3 rounded-xl bg-surface-container-low border border-surface-container focus:outline-none focus:border-secondary text-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-on-surface">Phone / WhatsApp</label>
                <input
                  type="tel"
                  placeholder="+44 7911 123456"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="p-3 rounded-xl bg-surface-container-low border border-surface-container focus:outline-none focus:border-secondary text-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-on-surface">Number of Guests</label>
                <select
                  value={formData.travelers}
                  onChange={(e) => setFormData({ ...formData, travelers: Number(e.target.value) })}
                  className="p-3 rounded-xl bg-surface-container-low border border-surface-container focus:outline-none focus:border-secondary text-sm cursor-pointer"
                >
                  <option value={1}>1 Solo Explorer</option>
                  <option value={2}>2 Guests (Couple / Friends)</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests (Family / Small Group)</option>
                  <option value={6}>6 Guests (Private Party)</option>
                  <option value={8}>8 Guests (Full Group Charter)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-on-surface">Travel Window</label>
                <input
                  type="text"
                  value={formData.travelDate}
                  onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                  placeholder="e.g. Dec 2026 or Spring 2027"
                  className="p-3 rounded-xl bg-surface-container-low border border-surface-container focus:outline-none focus:border-secondary text-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-on-surface">Accommodation Preference</label>
                <select
                  value={formData.accommodationTier}
                  onChange={(e) => setFormData({ ...formData, accommodationTier: e.target.value })}
                  className="p-3 rounded-xl bg-surface-container-low border border-surface-container focus:outline-none focus:border-secondary text-sm cursor-pointer"
                >
                  <option value="Eco-Luxury Bungalow & Safari Tents">Eco-Luxury Bungalows & Tented Camps</option>
                  <option value="5-Star Relais & Chateaux Estates">5-Star Heritage Estates & Tea Trails</option>
                  <option value="Secluded Beach Villas & Treehouses">Ocean Villas & Forest Treehouses</option>
                  <option value="Curated Mix of Nature Sanctuaries">Curated Mix of Boutique Sanctuaries</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-on-surface">
                Special Interests, Dietary Requirements or Safari Goals
              </label>
              <textarea
                rows={3}
                placeholder="Mention if you are interested in photography, birdwatching, private train carriages, ayurvedic treatments, or dietary needs..."
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                className="p-3 rounded-xl bg-surface-container-low border border-surface-container focus:outline-none focus:border-secondary text-sm"
              />
            </div>

            {/* Price Preview Banner */}
            <div className="p-4 rounded-2xl bg-primary-container text-on-primary flex items-center justify-between">
              <div>
                <span className="text-xs text-primary-fixed uppercase tracking-wider">
                  Estimated Trip Total ({formData.travelers} guests)
                </span>
                <div className="font-headline-md text-2xl font-bold">
                  {currentCurrency.symbol}
                  {totalEstimated.toLocaleString()}
                </div>
              </div>
              <div className="text-right text-xs text-surface-variant">
                <span>✓ 100% Tailored & Flexible</span>
                <br />
                <span>✓ No Booking Fee</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 rounded-full bg-surface-container hover:bg-surface-variant font-label-md text-label-md text-on-surface transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-secondary hover:bg-on-secondary-fixed text-on-secondary font-label-lg text-label-lg transition-all flex items-center gap-2 shadow-lg shadow-secondary/20"
              >
                <span>Submit Expedition Request</span>
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
