import React from 'react';
import { ShieldCheck, ExternalLink } from 'lucide-react';

export default function AdPlaceholder({ variant = 'banner', className = '' }) {
  return (
    <section aria-label="Sponsored advertisement partner" className={`w-full max-w-5xl mx-auto px-4 my-8 ${className}`}>
      <div className="relative border border-dashed border-slate-300 bg-slate-50/80 rounded-lg p-3 sm:p-4 text-center text-slate-500 overflow-hidden">
        {/* Subtle Ad tag */}
        <div className="absolute top-1.5 right-2 text-[10px] tracking-wider uppercase font-semibold text-slate-400">
          Advertisement
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-700">
                Partner Pet Insurance & Wellness Cover
              </p>
              <p className="text-[11px] text-slate-500 line-clamp-1">
                Protect your furry family members with cashless veterinary hospitalization coverage up to ₹1,50,000.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[10px] text-slate-400 hidden md:inline">
              Standard IAB Display Slot (728 × 90 Placeholder)
            </span>
            <button
              type="button"
              onClick={() => alert('This is an advertisement placeholder component per site specifications.')}
              className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded hover:bg-slate-100 transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Learn More</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
