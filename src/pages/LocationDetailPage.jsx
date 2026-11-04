import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  PhoneCall, 
  Clock, 
  Mail, 
  ShieldCheck, 
  Calendar, 
  ExternalLink, 
  CheckCircle2, 
  Star,
  Users,
  AlertCircle
} from 'lucide-react';
import { clinicsData } from '../data/clinicsData';
import PageHeader from '../components/PageHeader';
import AdPlaceholder from '../components/AdPlaceholder';
import { useApp } from '../context/AppContext';

export default function LocationDetailPage() {
  const { id } = useParams();
  const { openBookingModal } = useApp();

  const clinic = clinicsData.find(c => c.id === id);

  if (!clinic) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Hospital Not Found</h2>
        <p className="text-slate-600 mb-6">The requested TrustyVet hospital could not be located.</p>
        <Link to="/locations" className="px-6 py-2.5 bg-teal-600 text-white rounded-lg text-sm font-semibold">
          ← Back to All Locations
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        badge={clinic.city}
        title={clinic.name}
        subtitle={clinic.tagline}
        breadcrumbs={[
          { name: 'Our Clinics', path: '/locations' },
          { name: clinic.name }
        ]}
        actionButton={
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => openBookingModal(clinic.id)}
              className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm rounded-xl transition-colors cursor-pointer shadow-md"
            >
              Book at this Hospital
            </button>
            <a
              href={`tel:${clinic.emergencyPhone}`}
              className="px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Emergency</span>
            </a>
          </div>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-10 text-left">
            {/* Hospital Photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-72 sm:h-96">
              <img
                src={clinic.image}
                alt={clinic.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#0b2545]/90 text-white text-xs font-bold px-3 py-1 rounded-md backdrop-blur-sm">
                ★ {clinic.rating} Google Rating ({clinic.reviewCount} Reviews)
              </div>
              {clinic.is24x7 && (
                <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md shadow-md flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Open 24/7/365</span>
                </div>
              )}
            </div>

            {/* Emergency Protocols for this location */}
            {clinic.is24x7 && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-left">
                <div className="flex items-center gap-2 text-red-700 font-bold text-sm mb-1">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span>24/7 Emergency Triage at {clinic.name}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                  This location is a fully accredited 24-hour critical care hospital. For vehicular trauma, GDV bloat, poison ingestion, or acute breathing distress, no appointment is necessary.
                </p>
                <a
                  href={`tel:${clinic.emergencyPhone}`}
                  className="font-black text-red-600 text-base hover:underline flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 animate-pulse" />
                  <span>Direct Emergency Line: {clinic.emergencyPhone}</span>
                </a>
              </div>
            )}

            {/* Facilities & Capabilities */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-2xl font-bold text-[#0b2545]">Hospital Infrastructure & Clinical Capabilities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {clinic.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Doctors & Team */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-xl font-bold text-[#0b2545]">Attending Clinical Leadership</h3>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">{clinic.leadDoctor}</h4>
                  <p className="text-xs text-teal-700 font-medium">Head of Clinical Operations • Team of {clinic.doctorsCount} Veterinarians & Nurses</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm sticky top-28 space-y-6 text-left">
              <div>
                <h4 className="text-lg font-bold text-[#0b2545] mb-4">Clinic Address & Contact</h4>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{clinic.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-teal-600 shrink-0" />
                    <span className="font-semibold text-slate-900">{clinic.hours}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <PhoneCall className="w-4 h-4 text-teal-600 shrink-0" />
                    <a href={`tel:${clinic.phone}`} className="hover:underline">{clinic.phone}</a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-teal-600 shrink-0" />
                    <a href={`mailto:${clinic.email}`} className="hover:underline">{clinic.email}</a>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => openBookingModal(clinic.id)}
                  className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm rounded-lg transition-colors shadow-sm cursor-pointer"
                >
                  Book Appointment Here
                </button>

                <a
                  href={clinic.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-center font-semibold text-xs sm:text-sm rounded-lg border border-slate-200 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span>Get Driving Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdPlaceholder />
    </div>
  );
}
