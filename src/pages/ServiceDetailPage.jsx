import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  AlertCircle, 
  CheckCircle2, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  ShieldCheck, 
  Stethoscope, 
  ArrowLeft,
  PhoneCall
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import PageHeader from '../components/PageHeader';
import AdPlaceholder from '../components/AdPlaceholder';
import { useApp } from '../context/AppContext';

export default function ServiceDetailPage() {
  const { id } = useParams();
  const { openBookingModal } = useApp();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Service Not Found</h2>
        <p className="text-slate-600 mb-6">The requested veterinary specialty could not be located.</p>
        <Link to="/services" className="px-6 py-2.5 bg-teal-600 text-white rounded-lg text-sm font-semibold">
          ← Back to All Services
        </Link>
      </div>
    );
  }

  const relatedServices = servicesData.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        badge={service.category}
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumbs={[
          { name: 'Services', path: '/services' },
          { name: service.title }
        ]}
        actionButton={
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => openBookingModal('', service.id)}
              className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm rounded-xl transition-colors cursor-pointer shadow-md"
            >
              Book This Service
            </button>
            {service.isEmergency && (
              <a
                href="tel:+918062744111"
                className="px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-colors flex items-center gap-1.5"
              >
                <PhoneCall className="w-4 h-4" />
                <span>24/7 Helpline</span>
              </a>
            )}
          </div>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-10 text-left">
            {/* Service Banner Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-md h-72 sm:h-96">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              {service.badge && (
                <div className="absolute top-4 right-4 bg-[#0b2545]/90 backdrop-blur-sm text-teal-300 font-bold text-xs px-3.5 py-1.5 rounded-full border border-teal-500/30">
                  {service.badge}
                </div>
              )}
            </div>

            {/* Overview Section */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-2xl font-bold text-[#0b2545]">Overview & Clinical Protocol</h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {service.overview}
              </p>
            </div>

            {/* Common Conditions Treated */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-xl font-bold text-[#0b2545]">Indications & Common Conditions Treated</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.commonConditions.map((cond, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800">{cond}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-xl font-bold text-[#0b2545]">What to Expect During Your Visit</h3>
              <div className="space-y-3 pt-1">
                {service.whatToExpect.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment & Diagnostic Technology */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-xl font-bold text-[#0b2545]">Hospital Equipment & Diagnostic Technology</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {service.equipment.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-teal-50/50 rounded-lg border border-teal-100 text-xs sm:text-sm text-slate-800">
                    <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs Accordion */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-xl font-bold text-[#0b2545]">Frequently Asked Questions</h3>
                <div className="divide-y divide-slate-100 pt-1">
                  {service.faqs.map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div key={index} className="py-3">
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                          className="w-full flex items-center justify-between text-left font-semibold text-slate-800 hover:text-teal-700 transition-colors text-sm sm:text-base py-1"
                        >
                          <span>{faq.q}</span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-teal-600 shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 pl-1 animate-slide-down">
                            {faq.a}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm sticky top-28 space-y-6">
              <div className="text-center p-4 bg-teal-50 rounded-xl border border-teal-100">
                <p className="text-xs font-bold uppercase tracking-wider text-teal-800">Consultation Booking</p>
                <h4 className="text-lg font-bold text-[#0b2545] mt-1">Ready to Schedule?</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Pick your preferred TrustyVet hospital and time slot.
                </p>
                <button
                  type="button"
                  onClick={() => openBookingModal('', service.id)}
                  className="w-full mt-4 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm rounded-lg transition-colors shadow-sm cursor-pointer"
                >
                  Book {service.title.split(' ')[0]} Visit
                </button>
              </div>

              {/* 24/7 Emergency Card */}
              <div className="p-4 bg-red-50 rounded-xl border border-red-200 text-left">
                <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase mb-1">
                  <AlertCircle className="w-4 h-4" />
                  <span>24/7 Emergency Line</span>
                </div>
                <p className="text-xs text-slate-700 mb-2">
                  Immediate triage and emergency admissions are accepted 24/7 without prior appointment.
                </p>
                <a
                  href="tel:+918062744111"
                  className="font-black text-red-600 hover:underline text-sm flex items-center gap-1"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>+91 8062 744 111</span>
                </a>
              </div>

              {/* Other Services */}
              <div className="pt-2 text-left">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Other Specialties
                </h5>
                <div className="space-y-2">
                  {relatedServices.map(rel => (
                    <Link
                      key={rel.id}
                      to={`/services/${rel.id}`}
                      className="block p-2.5 rounded-lg border border-slate-100 hover:border-teal-300 hover:bg-slate-50 transition-all text-xs font-medium text-slate-700"
                    >
                      <p className="font-bold text-slate-900">{rel.title}</p>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{rel.shortDescription}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdPlaceholder />
    </div>
  );
}
