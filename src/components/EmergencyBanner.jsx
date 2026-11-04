import React from 'react';
import { PhoneCall, MapPin, X, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function EmergencyBanner() {
  const { bannerDismissed, setBannerDismissed } = useApp();

  if (bannerDismissed) return null;

  return (
    <aside aria-label="24/7 Emergency Helpline" className="bg-red-600 text-white text-xs sm:text-sm font-medium py-2 px-4 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="bg-red-800/80 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
            24/7 Emergency Triage
          </span>
          <span className="hidden md:inline text-red-100">
            Critical trauma & ICU bays open 24/7 across Mumbai, Bengaluru, Pune, Delhi NCR & Hyderabad.
          </span>
          <span className="md:hidden text-red-100">24/7 Critical Care Helpline:</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="tel:+918062744111"
            className="flex items-center gap-1.5 font-bold hover:text-red-200 transition-colors bg-red-700/80 hover:bg-red-700 px-3 py-1 rounded-full text-xs"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>+91 8062 744 111</span>
          </a>

          <Link
            to="/locations"
            className="hidden sm:flex items-center gap-1 hover:underline text-red-100 text-xs"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Find Nearest Hospital</span>
          </Link>

          <button
            onClick={() => setBannerDismissed(true)}
            className="text-red-200 hover:text-white p-1 rounded transition-colors"
            title="Dismiss notice"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
