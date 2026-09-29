import React from 'react';
import { Destination, Tour } from '../data/travelData';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onExploreTours: (destinationName: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  onExploreTours,
}) => {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-md overflow-y-auto">
      <div
        className="w-full max-w-3xl bg-surface-container-lowest rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] my-auto animate-fadeIn border border-surface-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 sm:h-80 w-full shrink-0">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-surface-container-lowest/80 hover:bg-surface-container-lowest text-primary flex items-center justify-center backdrop-blur-md transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
          <div className="absolute bottom-6 left-6 right-6 text-on-primary">
            <span className="px-3 py-1 rounded-full bg-surface-container-lowest/20 backdrop-blur-md text-secondary-fixed font-label-sm text-xs uppercase tracking-wider">
              {destination.region}
            </span>
            <h2 className="font-headline-lg text-3xl font-medium mt-1">
              {destination.name}
            </h2>
            <p className="text-surface-variant text-sm">{destination.subtitle}</p>
          </div>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto flex flex-col gap-6 text-on-surface">
          <div className="flex flex-wrap items-center gap-4 p-4 rounded-2xl bg-surface-container-low text-xs sm:text-sm text-primary">
            <div className="flex items-center gap-1.5 font-semibold">
              <span className="material-symbols-outlined text-secondary text-lg">calendar_month</span>
              <span>Best Travel Window: {destination.bestTime}</span>
            </div>
            <div className="h-4 w-px bg-surface-variant hidden sm:block" />
            <div className="flex items-center gap-1.5 font-semibold">
              <span className="material-symbols-outlined text-secondary text-lg">nature</span>
              <span>Wildlife: {destination.wildlifeEncounter}</span>
            </div>
          </div>

          <div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">About {destination.name}</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {destination.description}
            </p>
          </div>

          <div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Key Highlights & Top Attractions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {destination.topAttractions.map((attraction, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-surface-container-low flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-lg">location_on</span>
                  <span className="font-body-md text-body-md text-on-surface font-medium">{attraction}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-surface-container flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-on-surface-variant">
              Looking for guided excursions in {destination.name}?
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-surface-container hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onExploreTours(destination.name);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full bg-secondary hover:bg-on-secondary-fixed text-on-secondary font-label-lg text-label-lg transition-colors flex items-center gap-2"
              >
                <span>Browse {destination.name} Tours</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
