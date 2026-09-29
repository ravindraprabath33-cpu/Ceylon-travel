import React, { useState } from 'react';
import { FAQS } from '../data/travelData';

export const ContactScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Expedition Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full min-h-screen bg-surface py-12 px-4 md:px-8 max-w-7xl mx-auto flex flex-col gap-16">
      {/* Header */}
      <div className="flex flex-col gap-3 max-w-3xl">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
          Island Concierge Desk
        </span>
        <h1 className="font-display-md text-3xl sm:text-4xl md:text-5xl text-primary font-medium">
          Get in Touch
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Whether you are dreaming of a luxury leopard safari, a misty high-tea retreat, or a complete island grand tour, our local specialists are here to guide you.
        </p>
      </div>

      {/* Contact Cards & Form Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Info Column */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="p-8 rounded-3xl bg-primary text-on-primary flex flex-col gap-6 shadow-md">
            <div>
              <span className="font-label-sm text-xs uppercase tracking-wider text-secondary-fixed font-bold">
                Direct Assistance
              </span>
              <h3 className="font-headline-md text-2xl font-medium mt-1">
                24/7 Travel Concierge
              </h3>
              <p className="text-surface-variant text-sm mt-2">
                We respond to all traveler communications within 6 to 12 hours.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-fixed text-xl mt-1">
                  phone_in_talk
                </span>
                <div>
                  <span className="text-xs text-primary-fixed block">Direct Phone</span>
                  <span className="text-base font-bold">+94 11 234 5678</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-fixed text-xl mt-1">
                  mail
                </span>
                <div>
                  <span className="text-xs text-primary-fixed block">Email Concierge</span>
                  <span className="text-base font-bold">concierge@ecotravelssrilanka.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-fixed text-xl mt-1">
                  location_on
                </span>
                <div>
                  <span className="text-xs text-primary-fixed block">Headquarters</span>
                  <span className="text-sm">48 Ward Place, Colombo 07, Sri Lanka</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-fixed text-xl mt-1">
                  landscape
                </span>
                <div>
                  <span className="text-xs text-primary-fixed block">Highland Field Office</span>
                  <span className="text-sm">Hill Club Road, Nuwara Eliya & Kandy</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-primary-container">
              <a
                href="https://wa.me/94112345678"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-full bg-secondary hover:bg-secondary-fixed text-on-secondary hover:text-on-secondary-fixed font-label-lg text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-surface-container-low border border-surface-container flex items-center gap-4">
            <span className="material-symbols-outlined text-secondary text-3xl">verified</span>
            <div>
              <h4 className="font-headline-sm text-sm text-primary font-bold">
                Licensed Tour Operator
              </h4>
              <p className="text-xs text-on-surface-variant">
                Registered under the Sri Lanka Tourism Development Authority (SLTDA) license #TS/2026/0448.
              </p>
            </div>
          </div>
        </div>

        {/* Message Form Column */}
        <div className="lg:col-span-7 p-8 rounded-3xl bg-surface-container-lowest border border-surface-container shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-headline-md text-2xl text-primary font-medium mb-1">
              Send an Inquiry
            </h3>
            <p className="font-body-md text-sm text-on-surface-variant mb-6">
              Tell us about your upcoming travel plans, questions, or ideas.
            </p>

            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center gap-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-secondary-container text-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl">mark_email_read</span>
                </div>
                <h4 className="font-headline-md text-2xl text-primary font-medium">
                  Message Sent Successfully
                </h4>
                <p className="font-body-md text-sm text-on-surface-variant max-w-md">
                  Thank you, <strong>{formData.name}</strong>. Our senior expedition concierge has received your note and will be in touch shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'General Expedition Inquiry', message: '' });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full bg-primary text-on-primary font-label-md text-xs font-bold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-on-surface">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Chen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="p-3.5 rounded-2xl bg-surface-container-low border border-surface-container focus:outline-none focus:border-secondary text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-on-surface">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="maya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="p-3.5 rounded-2xl bg-surface-container-low border border-surface-container focus:outline-none focus:border-secondary text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-on-surface">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="p-3.5 rounded-2xl bg-surface-container-low border border-surface-container focus:outline-none focus:border-secondary text-sm cursor-pointer"
                  >
                    <option value="General Expedition Inquiry">General Expedition Inquiry</option>
                    <option value="Custom Private Tour Proposal">Custom Private Tour Proposal</option>
                    <option value="Wildlife Safari & Leopard Fieldwork">Wildlife Safari & Leopard Fieldwork</option>
                    <option value="Honeymoon & Romantic Sanctuary Escape">Honeymoon & Romantic Sanctuary Escape</option>
                    <option value="Corporate / Regenerative Group Retreat">Corporate / Regenerative Group Retreat</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-on-surface">Message *</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us about your estimated dates, party size, preferred comfort level, or any special questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="p-3.5 rounded-2xl bg-surface-container-low border border-surface-container focus:outline-none focus:border-secondary text-sm"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-secondary hover:bg-on-secondary-fixed text-on-secondary font-label-lg text-sm font-bold transition-all flex items-center gap-2 shadow-lg shadow-secondary/20 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <span className="material-symbols-outlined text-lg">send</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="flex flex-col gap-8 pt-8">
        <div className="flex flex-col gap-2">
          <span className="font-label-sm text-xs uppercase tracking-widest text-secondary font-bold">
            Got Questions?
          </span>
          <h2 className="font-display-md text-2xl sm:text-3xl text-primary font-medium">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, index) => {
            const isExpanded = expandedFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-surface-container-lowest border border-surface-container overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setExpandedFaq(isExpanded ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-headline-sm text-base sm:text-lg text-primary hover:text-secondary transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="material-symbols-outlined text-secondary transition-transform">
                    {isExpanded ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {isExpanded && (
                  <div className="px-5 pb-5 pt-0 text-sm font-body-md text-on-surface-variant leading-relaxed border-t border-surface-container pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
