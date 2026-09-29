import React, { useState } from 'react';
import { ARTICLES, Article } from '../data/travelData';

interface BlogScreenProps {
  onSelectArticle: (article: Article) => void;
}

export const BlogScreen: React.FC<BlogScreenProps> = ({ onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'all',
    'Expedition Trends',
    'Travel Masterclass',
    'Seasons & Weather',
    'Wildlife Fieldwork',
    'Culinary Traditions',
    'Hidden Trails',
  ];

  const filtered = selectedCategory === 'all'
    ? ARTICLES
    : ARTICLES.filter((a) => a.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="w-full min-h-screen bg-surface py-12 px-4 md:px-8 max-w-7xl mx-auto flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col gap-3 max-w-3xl">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
          Field Notes & Guides
        </span>
        <h1 className="font-display-md text-3xl sm:text-4xl md:text-5xl text-primary font-medium">
          The Sri Lanka Journal
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Written by our resident botanists, archaeologists, and safari naturalists to illuminate the wild beauty and rich history of the island.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 bg-surface-container-low p-2 rounded-2xl w-fit border border-surface-container">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-primary text-on-primary shadow-sm font-bold'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
            }`}
          >
            {cat === 'all' ? 'All Stories' : cat}
          </button>
        ))}
      </div>

      {/* Featured Lead Article */}
      {filtered.length > 0 && (
        <div
          onClick={() => onSelectArticle(filtered[0])}
          className="group rounded-3xl bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-surface-container flex flex-col lg:flex-row cursor-pointer"
        >
          <div className="lg:w-3/5 relative h-72 sm:h-96 overflow-hidden">
            <img
              src={filtered[0].image}
              alt={filtered[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-semibold">
              Featured Story
            </div>
          </div>
          <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                <span className="text-secondary font-bold">{filtered[0].category}</span>
                <span>•</span>
                <span>{filtered[0].readTime}</span>
              </div>
              <h2 className="font-headline-lg text-2xl sm:text-3xl text-primary group-hover:text-secondary transition-colors font-medium">
                {filtered[0].title}
              </h2>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                {filtered[0].excerpt}
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-surface-container">
              <span className="text-xs text-on-surface-variant font-medium">
                By {filtered[0].author}
              </span>
              <span className="font-label-md text-xs text-secondary font-bold flex items-center gap-1">
                Read Story <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Remaining Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.slice(1).map((article) => (
          <article
            key={article.id}
            onClick={() => onSelectArticle(article)}
            className="group rounded-3xl bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-surface-container flex flex-col justify-between"
          >
            <div>
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-md text-on-primary px-3 py-1 rounded-full text-xs">
                  {article.category}
                </div>
              </div>
              <div className="p-6 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="font-headline-sm text-lg text-primary group-hover:text-secondary transition-colors font-medium">
                  {article.title}
                </h3>
                <p className="font-body-md text-xs sm:text-sm text-on-surface-variant line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center justify-between border-t border-surface-container mt-4 pt-3">
              <span className="text-xs text-on-surface-variant truncate max-w-[180px]">
                {article.author.split(',')[0]}
              </span>
              <span className="font-label-md text-xs text-secondary font-bold flex items-center gap-1">
                Read <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
