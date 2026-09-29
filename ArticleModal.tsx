import React from 'react';
import { Article } from '../data/travelData';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-md overflow-y-auto">
      <div
        className="w-full max-w-3xl bg-surface-container-lowest rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] my-auto animate-fadeIn border border-surface-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 sm:h-72 w-full shrink-0">
          <img
            src={article.image}
            alt={article.title}
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
            <span className="px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-sm text-xs uppercase tracking-wider">
              {article.category}
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-headline-lg font-medium leading-tight mt-2">
              {article.title}
            </h2>
            <div className="flex items-center gap-3 text-xs text-surface-variant mt-2">
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime}</span>
              <span>·</span>
              <span>By {article.author}</span>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto flex flex-col gap-6 text-on-surface">
          <div className="p-4 rounded-2xl bg-surface-container-low border-l-4 border-secondary italic font-body-lg text-primary">
            {article.excerpt}
          </div>

          <div className="font-body-lg text-body-lg leading-relaxed flex flex-col gap-4 text-on-surface-variant">
            {article.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-6 border-t border-surface-container flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider text-on-surface-variant">Share story:</span>
              <button
                onClick={() => navigator.clipboard?.writeText(window.location.href)}
                className="px-3 py-1.5 rounded-full bg-surface-container hover:bg-surface-variant text-xs text-primary font-medium flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[14px]">link</span> Copy Link
              </button>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors"
            >
              Done Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
