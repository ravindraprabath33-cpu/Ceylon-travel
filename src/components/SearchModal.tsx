import React, { useState } from 'react';
import { TOURS, DESTINATIONS, ARTICLES, Tour, Destination, Article } from '../data/travelData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTour: (tour: Tour) => void;
  onSelectDestination: (dest: Destination) => void;
  onSelectArticle: (article: Article) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectTour,
  onSelectDestination,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchingTours = q
    ? TOURS.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.locations.toLowerCase().includes(q) ||
          t.highlights.some((h) => h.toLowerCase().includes(q))
      )
    : [];

  const matchingDestinations = q
    ? DESTINATIONS.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.region.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q)
      )
    : [];

  const matchingArticles = q
    ? ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q)
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-primary/70 backdrop-blur-md animate-fadeIn">
      <div
        className="w-full max-w-2xl bg-surface-container-lowest rounded-3xl p-6 shadow-2xl border border-surface-container flex flex-col gap-5 max-h-[85vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-surface-container pb-4">
          <div className="flex items-center gap-3 flex-1">
            <span className="material-symbols-outlined text-secondary text-2xl">search</span>
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search expeditions, destinations (Ella, Sigiriya, Yala), guides..."
              className="w-full bg-transparent text-on-surface font-body-lg text-body-lg focus:outline-none placeholder:text-on-surface-variant/60"
            />
          </div>
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-on-surface-variant hover:text-on-surface px-2 text-sm"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors ml-2"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="overflow-y-auto pr-1 flex flex-col gap-6">
          {!q && (
            <div className="flex flex-col gap-3 py-4">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                Popular Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {['Yala Safari', 'Nine Arch Bridge', 'Sigiriya Sunrise', 'Ceylon Tea Trains', 'Blue Whale Watching', 'Knuckles Trek'].map((keyword) => (
                  <button
                    key={keyword}
                    onClick={() => setQuery(keyword)}
                    className="px-3.5 py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors"
                  >
                    {keyword}
                  </button>
                ))}
              </div>
            </div>
          )}

          {q && (
            <>
              {matchingTours.length === 0 && matchingDestinations.length === 0 && matchingArticles.length === 0 && (
                <div className="py-12 text-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-4xl text-on-surface-variant/50 mb-2 block">
                    travel_explore
                  </span>
                  <p className="font-headline-sm text-headline-sm text-primary">No matching journeys found</p>
                  <p className="font-body-md text-body-md mt-1">Try searching for &quot;Safari&quot;, &quot;Ella&quot;, or &quot;Tea&quot;</p>
                </div>
              )}

              {matchingTours.length > 0 && (
                <div className="flex flex-col gap-2">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                    Expeditions & Tours ({matchingTours.length})
                  </span>
                  <div className="flex flex-col gap-2">
                    {matchingTours.map((t) => (
                      <div
                        key={t.id}
                        onClick={() => {
                          onSelectTour(t);
                          onClose();
                        }}
                        className="p-3 rounded-2xl bg-surface-container-low hover:bg-surface-container cursor-pointer flex items-center justify-between gap-4 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={t.image}
                            alt={t.title}
                            className="w-14 h-14 rounded-xl object-cover"
                          />
                          <div>
                            <h4 className="font-headline-sm text-[16px] text-primary group-hover:text-secondary transition-colors">
                              {t.title}
                            </h4>
                            <p className="font-body-md text-xs text-on-surface-variant">
                              {t.duration} · {t.locations}
                            </p>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-secondary text-sm">
                          arrow_forward
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {matchingDestinations.length > 0 && (
                <div className="flex flex-col gap-2">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                    Destinations ({matchingDestinations.length})
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {matchingDestinations.map((d) => (
                      <div
                        key={d.id}
                        onClick={() => {
                          onSelectDestination(d);
                          onClose();
                        }}
                        className="p-3 rounded-2xl bg-surface-container-low hover:bg-surface-container cursor-pointer flex items-center gap-3 transition-colors group"
                      >
                        <img
                          src={d.image}
                          alt={d.name}
                          className="w-12 h-12 rounded-xl object-cover"
                        />
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-sm text-primary group-hover:text-secondary">
                            {d.name}
                          </span>
                          <span className="text-xs text-on-surface-variant">{d.region}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {matchingArticles.length > 0 && (
                <div className="flex flex-col gap-2">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                    Journal & Articles ({matchingArticles.length})
                  </span>
                  <div className="flex flex-col gap-2">
                    {matchingArticles.map((a) => (
                      <div
                        key={a.id}
                        onClick={() => {
                          onSelectArticle(a);
                          onClose();
                        }}
                        className="p-3 rounded-2xl bg-surface-container-low hover:bg-surface-container cursor-pointer flex items-center justify-between gap-4 transition-colors group"
                      >
                        <div>
                          <span className="text-xs text-secondary font-semibold">{a.category}</span>
                          <h4 className="font-headline-sm text-[15px] text-primary group-hover:text-secondary">
                            {a.title}
                          </h4>
                          <span className="text-xs text-on-surface-variant">{a.readTime}</span>
                        </div>
                        <span className="material-symbols-outlined text-secondary text-sm">
                          menu_book
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
