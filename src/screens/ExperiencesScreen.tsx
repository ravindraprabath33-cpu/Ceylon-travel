import React from 'react';
import { EXPERIENCES, Experience } from '../data/travelData';
import { NavScreen } from '../components/Header';

interface ExperiencesScreenProps {
  onNavigate: (screen: NavScreen) => void;
  onOpenBooking: () => void;
}

export const ExperiencesScreen: React.FC<ExperiencesScreenProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  return (
    <div className="w-full min-h-screen bg-surface py-12 px-4 md:px-8 max-w-7xl mx-auto flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col gap-3 max-w-3xl">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
          Curated Slow-Travel Immersions
        </span>
        <h1 className="font-display-md text-3xl sm:text-4xl md:text-5xl text-primary font-medium">
          Island Experiences
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Every experience is grounded in conservation ethics, authentic host communities, and unhurried luxury. Select an immersion to build into your custom itinerary.
        </p>
      </div>

      {/* Deep-Dive Experience List */}
      <div className="flex flex-col gap-12">
        {EXPERIENCES.map((exp, index) => {
          const isReversed = index % 2 === 1;
          return (
            <div
              key={exp.id}
              className={`rounded-3xl bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-surface-container flex flex-col ${
                isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } gap-6 p-6 sm:p-8`}
            >
              {/* Media Column */}
              <div className="lg:w-1/2 relative rounded-2xl overflow-hidden min-h-[300px] sm:min-h-[380px]">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary text-on-primary px-3.5 py-1 rounded-full text-xs font-semibold">
                  {exp.badge}
                </div>
                <div className="absolute bottom-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-secondary">schedule</span>
                  {exp.duration}
                </div>
              </div>

              {/* Information Column */}
              <div className="lg:w-1/2 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-secondary-container text-secondary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">{exp.icon}</span>
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                      {exp.tagline}
                    </span>
                  </div>

                  <h3 className="font-headline-lg text-2xl sm:text-3xl text-primary font-medium">
                    {exp.title}
                  </h3>

                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-col gap-2 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      Signature Fieldwork & Encounters:
                    </span>
                    <div className="flex flex-col gap-1.5">
                      {exp.keyActivities.map((act, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-on-surface">
                          <span className="material-symbols-outlined text-secondary text-[16px]">
                            check_circle
                          </span>
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-surface-container-low flex items-center justify-between gap-4 border border-surface-container">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-lg">eco</span>
                    <span className="text-xs font-bold text-primary">{exp.ecoFeature}</span>
                  </div>
                  <button
                    onClick={() => onNavigate('tours')}
                    className="px-4 py-2 rounded-full bg-primary hover:bg-secondary text-on-primary text-xs font-bold transition-colors whitespace-nowrap cursor-pointer"
                  >
                    View Matching Tours
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Banner */}
      <div className="p-8 sm:p-12 rounded-3xl bg-primary text-on-primary flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-xl flex flex-col gap-2 text-center md:text-left">
          <h3 className="font-display-md text-2xl sm:text-3xl font-medium">
            Combine Multiple Immersions
          </h3>
          <p className="text-surface-variant text-sm sm:text-base">
            Spend 3 days in the high tea mist, 3 days tracking leopards, and 3 days cruising beside blue whales. Our travel designers will knit your interests into a seamless itinerary.
          </p>
        </div>
        <button
          onClick={onOpenBooking}
          className="px-8 py-3.5 rounded-full bg-secondary hover:bg-on-secondary-fixed text-on-secondary font-label-lg text-sm font-bold shadow-xl shadow-secondary/20 cursor-pointer whitespace-nowrap"
        >
          Craft Your Bespoke Expedition
        </button>
      </div>
    </div>
  );
};
