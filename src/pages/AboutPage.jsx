import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Heart, 
  Activity, 
  Award, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  ArrowRight,
  Stethoscope
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import AdPlaceholder from '../components/AdPlaceholder';
import YouTubePlaceholder from '../components/YouTubePlaceholder';
import { useApp } from '../context/AppContext';

export default function AboutPage() {
  const { openBookingModal } = useApp();

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        badge="About TrustyVet"
        title="Pioneering International Veterinary Standards in India"
        subtitle="Founded in 2016, TrustyVet is redefining companion animal healthcare with true 24x7 emergency multi-specialty hospitals, certified medical ethics, and Fear-Free patient comfort."
        breadcrumbs={[{ name: 'About Us' }]}
        actionButton={
          <button
            onClick={() => openBookingModal()}
            className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm rounded-xl transition-colors cursor-pointer shadow-md"
          >
            Schedule a Visit
          </button>
        }
      />

      {/* MISSION & VISION */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-teal-600 text-xs font-extrabold uppercase tracking-widest">
              Our Founding Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0b2545] leading-tight">
              Bridging the Critical Care Gap for Pets in India
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Before TrustyVet, pet parents faced an agonising reality during late-night emergencies. Clinics closed by 8:00 PM, diagnostic labs took days to return results, and complex surgeries had to be postponed due to the lack of dedicated intensive care units.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              We established TrustyVet with a single uncompromising mission: <strong>to treat companion animals with the exact same clinical rigor, diagnostic speed, and compassionate hygiene as modern human hospitals.</strong>
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <p className="text-2xl font-black text-teal-600">8 Hospitals</p>
                <p className="text-xs text-slate-500 font-medium">Across 5 major Indian metros</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <p className="text-2xl font-black text-[#0b2545]">100% In-House</p>
                <p className="text-xs text-slate-500 font-medium">Pathology, radiology & ICU</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1200&q=80"
                alt="Veterinary doctors at TrustyVet hospital"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="text-lg font-bold">Compassionate Clinical Excellence</p>
                  <p className="text-xs text-slate-200">Our medical team undergoing international CPD surgical simulation training.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 text-xs font-extrabold uppercase tracking-widest">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0b2545] mt-1">
              The Four Cornerstones of TrustyVet
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Every decision we make at the clinic bedside is guided by clinical evidence and empathetic care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-5">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">24/7 Availability</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Emergency trauma doesn't wait for business hours. Full medical and nursing teams are physically on site 24 hours a day, 365 days a year.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-5">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Fear Free Philosophy</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Separated canine and feline waiting areas and hospitalization wards minimize auditory and scent distress for hospitalized cats.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Medical Ethics & Clarity</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We believe in complete transparency. Itemized clinical estimates, open consultation discussion, and zero unnecessary interventions.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Continuous Training</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our surgeons and veterinary physicians participate in regular Continuing Professional Development (CPD) programs led by international veterinary fellows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOSPITAL INFRASTRUCTURE HIGHLIGHT */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <YouTubePlaceholder
              title="TrustyVet Hospital Infrastructure & Sterilization Standards"
              duration="03:20"
            />
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2 text-left">
            <span className="text-teal-600 text-xs font-extrabold uppercase tracking-widest">
              State-of-the-Art Technology
            </span>
            <h2 className="text-3xl font-black text-[#0b2545] leading-tight">
              Hospital Architecture Designed for Infection Control
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every TrustyVet center is constructed with infection prevention as a primary architectural pillar.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span><strong>Positive-Pressure Operating Suites:</strong> Filtered airflow prevents bacteria from entering surgical rooms during major soft tissue and orthopedic operations.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span><strong>Dedicated Isolation Wards:</strong> Patients with contagious viral conditions (Parvovirus, FeLV) are cared for in separate negative-pressure isolation wards.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span><strong>Central Medical Oxygen Pipeline:</strong> Continuous piped oxygen supplies to every ICU cage and surgical table without cumbersome cylinder movement.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <AdPlaceholder />
    </div>
  );
}
