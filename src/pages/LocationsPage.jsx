import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  PhoneCall, 
  Clock, 
  ShieldCheck, 
  Calendar, 
  ExternalLink, 
  CheckCircle2, 
  Star,
  Search,
  ChevronRight,
  Filter
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import AdPlaceholder from '../components/AdPlaceholder';
import { clinicsData, citiesList } from '../data/clinicsData';
import { useApp } from '../context/AppContext';

export default function LocationsPage() {
  const { selectedCity, setSelectedCity, openBookingModal } = useApp();
  const [only24x7, setOnly24x7] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredClinics = clinicsData.filter(clinic => {
    const matchesCity = selectedCity === 'All Cities' || clinic.city.toLowerCase() === selectedCity.toLowerCase();
    const matches24x7 = !only24x7 || clinic.is24x7;
    const matchesSearch = clinic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          clinic.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          clinic.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matches24x7 && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        badge="Our Hospital Network"
        title="24/7 Veterinary Hospitals & Clinics"
        subtitle="Located in major metropolitan hubs across Mumbai, Pune, Bengaluru, Hyderabad, and Delhi NCR. Find your nearest hospital with emergency triage."
        breadcrumbs={[{ name: 'Our Clinics' }]}
        actionButton={
          <a
            href="tel:+918062744111"
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-colors shadow-md flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>24/7 Emergency Helpline</span>
          </a>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* City Filter & Controls */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs mb-10 space-y-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* City pills */}
            <div className="flex flex-wrap gap-2 w-full lg:w-auto">
              {citiesList.map(city => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                    selectedCity === city
                      ? 'bg-[#0b2545] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>

            {/* Right filter controls */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
                <input
                  type="checkbox"
                  checked={only24x7}
                  onChange={(e) => setOnly24x7(e.target.checked)}
                  className="rounded text-teal-600 focus:ring-teal-500"
                />
                <span>24/7 Hospitals Only</span>
              </label>

              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search neighborhood..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs pl-9 pr-3 py-2 border rounded-lg border-slate-300 focus:outline-none focus:border-teal-500 bg-slate-50 focus:bg-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Clinics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredClinics.map((clinic) => (
            <div
              key={clinic.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={clinic.image}
                    alt={clinic.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-[#0b2545]/90 text-white text-xs font-bold px-3 py-1 rounded-md backdrop-blur-sm">
                      {clinic.city}
                    </span>
                    {clinic.is24x7 && (
                      <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md flex items-center gap-1 shadow-sm">
                        <Clock className="w-3.5 h-3.5" />
                        <span>24/7 Emergency Hospital</span>
                      </span>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/95 text-slate-800 text-xs font-bold px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{clinic.rating} ({clinic.reviewCount})</span>
                  </div>
                </div>

                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-1">
                    {clinic.name}
                  </h3>
                  <p className="text-xs font-medium text-teal-700 mb-3">{clinic.tagline}</p>

                  <div className="space-y-2 text-xs text-slate-600 mb-5">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>{clinic.address}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="font-semibold text-slate-800">{clinic.hours}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-red-500 shrink-0" />
                      <a href={`tel:${clinic.emergencyPhone}`} className="font-bold text-red-600 hover:underline">
                        {clinic.emergencyPhone} (24/7 Emergency)
                      </a>
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="pt-3 border-t border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Hospital Highlights:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                      {clinic.features.slice(0, 4).map((feat, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 mt-2">
                <Link
                  to={`/locations/${clinic.id}`}
                  className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1"
                >
                  <span>Clinic Facilities & Doctors</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center gap-2">
                  <a
                    href={clinic.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>Directions</span>
                  </a>

                  <button
                    onClick={() => openBookingModal(clinic.id)}
                    className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-bold transition-colors shadow-sm cursor-pointer"
                  >
                    Book Visit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AdPlaceholder />
    </div>
  );
}
