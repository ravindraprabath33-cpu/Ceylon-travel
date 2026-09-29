import React, { useState } from 'react';
import { CurrencyCode, CURRENCIES } from '../data/travelData';

interface PlannerScreenProps {
  currency: CurrencyCode;
  onOpenBookingModal: () => void;
}

export const PlannerScreen: React.FC<PlannerScreenProps> = ({ currency }) => {
  const [selectedRegions, setSelectedRegions] = useState<string[]>([
    'Highlands & Ella',
    'Yala & Wildlife',
  ]);
  const [durationDays, setDurationDays] = useState<number>(8);
  const [travelersCount, setTravelersCount] = useState<number>(2);
  const [travelStyle, setTravelStyle] = useState<'eco-luxury' | 'safari' | 'heritage' | 'wellness'>('eco-luxury');
  const [accommodationTier, setAccommodationTier] = useState<'signature' | 'relais' | 'villa'>('signature');
  const [submitted, setSubmitted] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  const currentCurrency = CURRENCIES[currency];

  const toggleRegion = (region: string) => {
    if (selectedRegions.includes(region)) {
      if (selectedRegions.length > 1) {
        setSelectedRegions(selectedRegions.filter((r) => r !== region));
      }
    } else {
      setSelectedRegions([...selectedRegions, region]);
    }
  };

  // Base daily cost calculation in USD
  const baseDailyRate =
    accommodationTier === 'relais'
      ? 380
      : accommodationTier === 'villa'
      ? 420
      : 310;

  const styleMultiplier = travelStyle === 'safari' ? 1.15 : travelStyle === 'wellness' ? 1.08 : 1.0;
  const estimatedPerPersonUSD = Math.round(durationDays * baseDailyRate * styleMultiplier);
  const estimatedPerPersonConverted = Math.round(estimatedPerPersonUSD * currentCurrency.rate);
  const estimatedTotalConverted = estimatedPerPersonConverted * travelersCount;
  const estimatedTreePlantingCount = travelersCount * Math.max(1, Math.floor(durationDays / 4));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactName && contactEmail) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full min-h-screen bg-surface py-12 px-4 md:px-8 max-w-7xl mx-auto flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col gap-3 max-w-3xl">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
          Interactive Trip Designer
        </span>
        <h1 className="font-display-md text-3xl sm:text-4xl md:text-5xl text-primary font-medium">
          Tailor-Made Expedition Builder
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Design your dream Sri Lankan journey from the ground up. Customize destinations, pace, accommodation class, and receive an instant estimate with zero booking obligations.
        </p>
      </div>

      {submitted ? (
        <div className="p-8 sm:p-12 rounded-3xl bg-surface-container-lowest border border-surface-container shadow-xl text-center flex flex-col items-center gap-6 max-w-2xl mx-auto animate-fadeIn">
          <div className="w-20 h-20 rounded-full bg-secondary-container text-secondary flex items-center justify-center">
            <span className="material-symbols-outlined text-5xl">verified</span>
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-3xl text-primary font-medium">
            Ayubowan, {contactName}!
          </h2>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            Your customized expedition plan has been assigned to our senior naturalist concierge. We will synthesize your choices into a day-by-day bespoke proposal complete with private driver-guide profiles and lodging alternatives.
          </p>

          <div className="w-full p-5 rounded-2xl bg-surface-container-low text-left text-xs sm:text-sm text-on-surface flex flex-col gap-2 border border-surface-container">
            <span className="font-bold text-primary">Your Tailored Parameters:</span>
            <span>· Duration: {durationDays} Days / {durationDays - 1} Nights</span>
            <span>· Travelers: {travelersCount} Guests</span>
            <span>· Chosen Regions: {selectedRegions.join(', ')}</span>
            <span>· Estimated Estimate: {currentCurrency.symbol}{estimatedTotalConverted.toLocaleString()}</span>
            <span>· Rainforest Tree Planting: {estimatedTreePlantingCount} Native Trees guaranteed</span>
          </div>

          <button
            onClick={() => setSubmitted(false)}
            className="px-8 py-3 rounded-full bg-primary text-on-primary font-label-md text-sm hover:bg-primary-container transition-colors"
          >
            Modify Expedition Parameters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Configuration Form Column */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Step 1: Regions */}
            <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-lowest border border-surface-container shadow-sm flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-xs font-bold">
                  1
                </span>
                <h3 className="font-headline-sm text-lg sm:text-xl text-primary font-semibold">
                  Select Regions & Ecosystems
                </h3>
              </div>
              <p className="text-xs text-on-surface-variant">
                Select one or more landscapes you would love to experience:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { id: 'Highlands & Ella', desc: 'Misty tea hills, waterfalls, vintage train' },
                  { id: 'Sigiriya & Ancient Cities', desc: 'UNESCO rocks, cave temples, sacred reservoirs' },
                  { id: 'Yala & Wildlife', desc: 'Leopards, sloth bears, private tented safari' },
                  { id: 'South Coast & Whales', desc: 'Blue whale catamarans, Galle fort ramparts' },
                  { id: 'Knuckles Cloud Forest', desc: 'Primeval rainforest treks, waterfall gorges' },
                  { id: 'East Coast & Trincomalee', desc: 'Glassy turquoise bays, sperm whales, coral reefs' },
                ].map((reg) => {
                  const isChecked = selectedRegions.includes(reg.id);
                  return (
                    <div
                      key={reg.id}
                      onClick={() => toggleRegion(reg.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                        isChecked
                          ? 'border-secondary bg-secondary-container/20 shadow-sm'
                          : 'border-surface-container bg-surface-container-low hover:bg-surface-container'
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-lg mt-0.5 ${
                          isChecked ? 'text-secondary font-bold' : 'text-on-surface-variant'
                        }`}
                      >
                        {isChecked ? 'check_box' : 'check_box_outline_blank'}
                      </span>
                      <div>
                        <h4 className="font-headline-sm text-sm text-primary font-bold">{reg.id}</h4>
                        <p className="text-xs text-on-surface-variant mt-0.5">{reg.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Duration & Travelers */}
            <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-lowest border border-surface-container shadow-sm flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-xs font-bold">
                  2
                </span>
                <h3 className="font-headline-sm text-lg sm:text-xl text-primary font-semibold">
                  Trip Duration & Number of Guests
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs font-semibold text-on-surface">
                    <span>Duration:</span>
                    <span className="text-secondary font-bold">{durationDays} Days</span>
                  </div>
                  <input
                    type="range"
                    min={4}
                    max={18}
                    value={durationDays}
                    onChange={(e) => setDurationDays(Number(e.target.value))}
                    className="accent-secondary cursor-pointer h-2 bg-surface-container-low rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-on-surface-variant">
                    <span>4 Days (Mini)</span>
                    <span>10 Days (Ideal)</span>
                    <span>18 Days (Grand)</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs font-semibold text-on-surface">
                    <span>Travelers:</span>
                    <span className="text-secondary font-bold">{travelersCount} Guests</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={8}
                    value={travelersCount}
                    onChange={(e) => setTravelersCount(Number(e.target.value))}
                    className="accent-secondary cursor-pointer h-2 bg-surface-container-low rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-on-surface-variant">
                    <span>1 Solo</span>
                    <span>2 Couple</span>
                    <span>4 Family</span>
                    <span>8 Group</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Style & Lodging */}
            <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-lowest border border-surface-container shadow-sm flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-xs font-bold">
                  3
                </span>
                <h3 className="font-headline-sm text-lg sm:text-xl text-primary font-semibold">
                  Travel Style & Accommodation Class
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                    Primary Expedition Focus:
                  </label>
                  <select
                    value={travelStyle}
                    onChange={(e) => setTravelStyle(e.target.value as any)}
                    className="p-3.5 rounded-2xl bg-surface-container-low border border-surface-container text-xs font-semibold text-primary focus:outline-none cursor-pointer"
                  >
                    <option value="eco-luxury">Eco-Luxury Balanced Exploration</option>
                    <option value="safari">Dedicated Big Five Wildlife Fieldwork</option>
                    <option value="heritage">Ancient Citadels & UNESCO Immersion</option>
                    <option value="wellness">Ayurveda, Yoga & Organic Tea Sanctuary</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                    Preferred Lodging Tier:
                  </label>
                  <select
                    value={accommodationTier}
                    onChange={(e) => setAccommodationTier(e.target.value as any)}
                    className="p-3.5 rounded-2xl bg-surface-container-low border border-surface-container text-xs font-semibold text-primary focus:outline-none cursor-pointer"
                  >
                    <option value="signature">Signature Eco-Lodges & Tented Camps</option>
                    <option value="relais">Relais & Châteaux Heritage Estates</option>
                    <option value="villa">Secluded Luxury Beach & Forest Villas</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 4: Submission */}
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-3xl bg-surface-container-lowest border border-surface-container shadow-sm flex flex-col gap-4"
            >
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-xs font-bold">
                  4
                </span>
                <h3 className="font-headline-sm text-lg sm:text-xl text-primary font-semibold">
                  Where Should We Send Your Itinerary?
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-on-surface">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Olivia Sterling"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="p-3.5 rounded-2xl bg-surface-container-low border border-surface-container focus:outline-none focus:border-secondary text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-on-surface">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="olivia@example.com"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="p-3.5 rounded-2xl bg-surface-container-low border border-surface-container focus:outline-none focus:border-secondary text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-4 rounded-full bg-secondary hover:bg-on-secondary-fixed text-on-secondary font-label-lg text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-secondary/20 cursor-pointer"
              >
                <span>Request Detailed Itinerary Proposal</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </form>
          </div>

          {/* Sticky Estimate Summary Column */}
          <div className="lg:col-span-4 sticky top-28 flex flex-col gap-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-primary text-on-primary shadow-xl border border-primary-fixed/15 flex flex-col gap-6">
              <div>
                <span className="font-label-sm text-xs uppercase tracking-widest text-secondary-fixed font-bold">
                  Instant Estimate
                </span>
                <h3 className="font-headline-md text-2xl font-medium mt-1">
                  Trip Investment
                </h3>
              </div>

              <div className="p-4 rounded-2xl bg-primary-container border border-primary-fixed/20 flex flex-col gap-1">
                <span className="text-xs text-primary-fixed">Estimated Per Person</span>
                <div className="font-headline-md text-3xl font-bold text-on-primary">
                  {currentCurrency.symbol}
                  {estimatedPerPersonConverted.toLocaleString()}
                </div>
                <span className="text-[11px] text-surface-variant">
                  Total for {travelersCount} guest{travelersCount > 1 ? 's' : ''}: {currentCurrency.symbol}
                  {estimatedTotalConverted.toLocaleString()}
                </span>
              </div>

              <div className="flex flex-col gap-2.5 text-xs text-surface-variant">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-fixed text-base">
                    check_circle
                  </span>
                  <span>Dedicated Private Chauffeur-Naturalist</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-fixed text-base">
                    check_circle
                  </span>
                  <span>{durationDays - 1} Nights in boutique eco-accommodations</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-fixed text-base">
                    check_circle
                  </span>
                  <span>All National Park safari permits included</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-fixed text-base">
                    park
                  </span>
                  <span>{estimatedTreePlantingCount} Native trees planted in Knuckles</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-fixed text-base">
                    nest_eco_leaf
                  </span>
                  <span>100% Certified Carbon Offset Included</span>
                </div>
              </div>

              <div className="text-[11px] text-surface-variant/80 border-t border-primary-container pt-3">
                *Estimates reflect seasonal averages and include all taxes, local permits, luxury private transport, and breakfast.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
