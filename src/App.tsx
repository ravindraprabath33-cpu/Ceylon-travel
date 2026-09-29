import React, { useState } from 'react';
import { Header, NavScreen } from './components/Header';
import { Footer } from './components/Footer';
import { HomeScreen } from './screens/HomeScreen';
import { ToursScreen } from './screens/ToursScreen';
import { DestinationsScreen } from './screens/DestinationsScreen';
import { ExperiencesScreen } from './screens/ExperiencesScreen';
import { AboutScreen } from './screens/AboutScreen';
import { BlogScreen } from './screens/BlogScreen';
import { ContactScreen } from './screens/ContactScreen';
import { PlannerScreen } from './screens/PlannerScreen';

import { SearchModal } from './components/SearchModal';
import { TourModal } from './components/TourModal';
import { BookingModal } from './components/BookingModal';
import { ArticleModal } from './components/ArticleModal';
import { DestinationModal } from './components/DestinationModal';

import { Tour, Destination, Article, CurrencyCode, TOURS } from './data/travelData';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<NavScreen>('home');
  const [currency, setCurrency] = useState<CurrencyCode>('USD');

  // Modal states
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [bookingTour, setBookingTour] = useState<Tour | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleOpenBooking = (tour: Tour | null) => {
    setBookingTour(tour || TOURS[0]);
    setBookingModalOpen(true);
  };

  const handleExploreDestinationTours = (_destName: string) => {
    setCurrentScreen('tours');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface flex flex-col selection:bg-secondary selection:text-on-secondary">
      {/* Global Fixed Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={(screen) => {
          setCurrentScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        currency={currency}
        onCurrencyChange={setCurrency}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenPlanner={() => {
          setCurrentScreen('planner');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 flex-1">
        {currentScreen === 'home' && (
          <HomeScreen
            onNavigate={(screen) => {
              setCurrentScreen(screen);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            currency={currency}
            onSelectTour={(t) => setSelectedTour(t)}
            onSelectDestination={(d) => setSelectedDestination(d)}
            onSelectArticle={(a) => setSelectedArticle(a)}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentScreen === 'tours' && (
          <ToursScreen
            currency={currency}
            onSelectTour={(t) => setSelectedTour(t)}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentScreen === 'destinations' && (
          <DestinationsScreen
            onSelectDestination={(d) => setSelectedDestination(d)}
            onExploreTours={handleExploreDestinationTours}
          />
        )}

        {currentScreen === 'experiences' && (
          <ExperiencesScreen
            onNavigate={(screen) => {
              setCurrentScreen(screen);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenBooking={() => handleOpenBooking(null)}
          />
        )}

        {currentScreen === 'about' && (
          <AboutScreen
            onNavigate={(screen) => {
              setCurrentScreen(screen);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenBooking={() => handleOpenBooking(null)}
          />
        )}

        {currentScreen === 'blog' && (
          <BlogScreen onSelectArticle={(a) => setSelectedArticle(a)} />
        )}

        {currentScreen === 'contact' && <ContactScreen />}

        {currentScreen === 'planner' && (
          <PlannerScreen
            currency={currency}
            onOpenBookingModal={() => handleOpenBooking(null)}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={(screen) => {
          setCurrentScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenPlanner={() => {
          setCurrentScreen('planner');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Global Modals */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectTour={(t) => setSelectedTour(t)}
        onSelectDestination={(d) => setSelectedDestination(d)}
        onSelectArticle={(a) => setSelectedArticle(a)}
      />

      <TourModal
        tour={selectedTour}
        onClose={() => setSelectedTour(null)}
        currency={currency}
        onBookNow={(t) => handleOpenBooking(t)}
      />

      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onExploreTours={handleExploreDestinationTours}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        tour={bookingTour}
        currency={currency}
      />

      {/* Floating Concierge WhatsApp Widget */}
      <aside aria-label="Quick travel assistance" className="fixed bottom-6 right-6 z-30">
        <a
          href="https://wa.me/94112345678"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact travel concierge on WhatsApp"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-secondary text-on-secondary shadow-2xl hover:bg-on-secondary-fixed transition-all transform hover:scale-105 group"
        >
          <span className="material-symbols-outlined text-[20px]" aria-hidden="true">chat</span>
          <span className="font-label-md text-xs font-semibold hidden md:inline">
            Island Concierge
          </span>
        </a>
      </aside>
    </div>
  );
}
