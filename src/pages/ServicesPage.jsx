import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ChevronRight, 
  AlertCircle, 
  Clock, 
  Calendar,
  CheckCircle2,
  Stethoscope
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import AdPlaceholder from '../components/AdPlaceholder';
import { servicesData, serviceCategories } from '../data/servicesData';
import { useApp } from '../context/AppContext';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('All Services');
  const [searchQuery, setSearchQuery] = useState('');
  const { openBookingModal } = useApp();

  const filteredServices = servicesData.filter(service => {
    const matchesCategory = activeCategory === 'All Services' || service.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.overview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        badge="Clinical Specialties"
        title="Comprehensive Veterinary Care"
        subtitle="Explore our 24/7 emergency critical care, sterile surgery suites, advanced digital imaging, separate feline wards, and preventive wellness programs."
        breadcrumbs={[{ name: 'Services' }]}
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
        {/* Filter & Search Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
              {serviceCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#0b2545] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search procedures or symptoms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs sm:text-sm pl-9 pr-3 py-2 border rounded-xl border-slate-300 focus:outline-none focus:border-teal-500 bg-slate-50 focus:bg-white"
              />
            </div>
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <Stethoscope className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-700">No services match your search</h3>
            <p className="text-xs text-slate-500 mt-1">Try searching for keywords like "surgery", "ultrasound", or "teeth".</p>
            <button
              onClick={() => { setActiveCategory('All Services'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-teal-600 text-white text-xs font-semibold rounded-lg hover:bg-teal-700 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl border border-slate-200/80 hover:border-teal-400 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#0b2545]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded">
                      {service.category}
                    </div>
                    {service.badge && (
                      <div className="absolute top-3 right-3 bg-teal-600 text-white text-[10px] font-bold px-2.5 py-1 rounded">
                        {service.badge}
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Key Indications:</p>
                      {service.commonConditions.slice(0, 2).map((cond, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                          <span className="truncate">{cond}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
                  <Link
                    to={`/services/${service.id}`}
                    className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1"
                  >
                    <span>View Full Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={() => openBookingModal('', service.id)}
                    className="px-3.5 py-1.5 bg-[#0b2545] hover:bg-teal-600 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Book Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <AdPlaceholder />
    </div>
  );
}
