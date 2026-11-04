import React from 'react';
import { Link } from 'react-router-dom';
import { Home, MapPin, PhoneCall, Stethoscope } from 'lucide-react';
import AdPlaceholder from '../components/AdPlaceholder';

export default function NotFoundPage() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col justify-between pt-16">
      <div className="max-w-2xl mx-auto px-4 text-center my-auto">
        <div className="w-20 h-20 rounded-3xl bg-teal-100 text-teal-800 flex items-center justify-center mx-auto mb-6 text-3xl font-black shadow-inner">
          🐾
        </div>

        <span className="text-teal-600 font-mono text-sm font-bold uppercase tracking-widest">
          Error 404
        </span>

        <h1 className="text-3xl sm:text-4xl font-black text-[#0b2545] mt-2 mb-4">
          Oops! This Pet Trail Leads Nowhere
        </h1>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto">
          The page you requested may have moved or doesn't exist. Don't worry, our veterinary medical team is always ready to guide you back.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="px-6 py-3 bg-[#0b2545] hover:bg-slate-800 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/locations"
            className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm transition-colors"
          >
            <MapPin className="w-4 h-4" />
            <span>Find 24/7 Hospital</span>
          </Link>

          <Link
            to="/services"
            className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors"
          >
            <Stethoscope className="w-4 h-4" />
            <span>Browse Services</span>
          </Link>
        </div>
      </div>

      <AdPlaceholder />
    </div>
  );
}
