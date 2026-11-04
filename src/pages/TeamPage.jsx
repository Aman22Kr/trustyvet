import React, { useState } from 'react';
import { Award, Stethoscope, MapPin, Calendar, CheckCircle2, Search } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import AdPlaceholder from '../components/AdPlaceholder';
import { teamData, teamSpecialties } from '../data/teamData';
import { useApp } from '../context/AppContext';

export default function TeamPage() {
  const [activeSpecialty, setActiveSpecialty] = useState('All Specialties');
  const [searchDoc, setSearchDoc] = useState('');
  const { openBookingModal } = useApp();

  const filteredTeam = teamData.filter(doc => {
    const matchesSpec = activeSpecialty === 'All Specialties' || doc.specialty === activeSpecialty;
    const matchesName = doc.name.toLowerCase().includes(searchDoc.toLowerCase()) ||
                        doc.bio.toLowerCase().includes(searchDoc.toLowerCase()) ||
                        doc.location.toLowerCase().includes(searchDoc.toLowerCase());
    return matchesSpec && matchesName;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        badge="Our Veterinary Doctors"
        title="Compassionate Medical Leadership"
        subtitle="Meet the certified veterinary surgeons, critical care specialists, feline medicine doctors, and internal medicine physicians guiding TrustyVet hospitals."
        breadcrumbs={[{ name: 'Medical Team' }]}
        actionButton={
          <button
            onClick={() => openBookingModal()}
            className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm rounded-xl transition-colors cursor-pointer shadow-md"
          >
            Book Consultation
          </button>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter bar */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {teamSpecialties.map(spec => (
              <button
                key={spec}
                onClick={() => setActiveSpecialty(spec)}
                className={`text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                  activeSpecialty === spec
                    ? 'bg-[#0b2545] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search doctor or city..."
              value={searchDoc}
              onChange={(e) => setSearchDoc(e.target.value)}
              className="w-full text-xs pl-9 pr-3 py-2 border rounded-lg border-slate-300 focus:outline-none focus:border-teal-500 bg-slate-50 focus:bg-white"
            />
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeam.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#0b2545]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded">
                    {doc.experience}
                  </div>
                  <div className="absolute top-3 right-3 bg-teal-600 text-white text-[10px] font-bold px-2.5 py-1 rounded">
                    {doc.location}
                  </div>
                </div>

                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {doc.name}
                  </h3>
                  <p className="text-xs font-semibold text-teal-700 mb-2">{doc.role}</p>

                  <p className="text-xs text-slate-500 font-mono bg-slate-50 p-2 rounded-lg mb-4 border border-slate-100">
                    {doc.qualification}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {doc.bio}
                  </p>

                  <div className="space-y-1 pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Clinical Focus Areas:</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {doc.focusAreas.map((area, i) => (
                        <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full font-medium">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-teal-600" />
                  <span>{doc.location}</span>
                </span>
                <button
                  type="button"
                  onClick={() => openBookingModal()}
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                >
                  Book Visit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AdPlaceholder />
    </div>
  );
}
