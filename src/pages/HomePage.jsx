import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneCall, 
  MapPin, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Heart, 
  ChevronRight, 
  Activity, 
  AlertCircle, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Search,
  Star,
  Users,
  Building2,
  Stethoscope
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { clinicsData } from '../data/clinicsData';
import { servicesData } from '../data/servicesData';
import { teamData } from '../data/teamData';
import { guidesData } from '../data/guidesData';
import { reviewsData } from '../data/reviewsData';
import YouTubePlaceholder from '../components/YouTubePlaceholder';
import AdPlaceholder from '../components/AdPlaceholder';

export default function HomePage() {
  const { openBookingModal, setSelectedCity } = useApp();
  const [selectedHomeCity, setSelectedHomeCity] = useState('All');

  const filteredClinics = selectedHomeCity === 'All' 
    ? clinicsData 
    : clinicsData.filter(c => c.city.toLowerCase().includes(selectedHomeCity.toLowerCase()));

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-[#0b2545] text-white pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
        {/* Abstract Background Accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Hero Text & Actions */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Emergency Badge */}
              <div className="inline-flex items-center gap-2 bg-red-600/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm animate-emergency-pulse">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span>India's Leading 24/7 Emergency Veterinary Hospitals</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                World-Class Medical Care for Your Dogs & Cats. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400">
                  24 Hours a Day.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
                TrustyVet operates 24/7 multi-specialty companion animal hospitals across Mumbai, Bengaluru, Pune, Delhi NCR, and Hyderabad. Equipped with state-of-the-art ICUs, sterile surgical suites, and dedicated separate feline & canine wards.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => openBookingModal()}
                  className="px-6 py-3.5 bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-teal-500/20 transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Consultation</span>
                </button>

                <a
                  href="tel:+918062744111"
                  className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-red-500/20 transition-all flex items-center gap-2"
                >
                  <PhoneCall className="w-5 h-5 animate-pulse" />
                  <span>24/7 Emergency: +91 8062 744 111</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-800 grid grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Fear Free Certified Handling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>In-House Lab Under 30 Mins</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Segregated Cat & Dog Wards</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Card / Quick Hospital Search */}
            <div className="lg:col-span-5">
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 text-slate-800 shadow-2xl border border-slate-100">
                <div className="absolute -top-3 right-6 bg-teal-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                  Immediate Triage
                </div>

                <h3 className="text-xl font-bold text-[#0b2545] mb-2">
                  Find Nearest 24/7 Hospital
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Select your city to view emergency facilities, attending surgeons, and instant directions.
                </p>

                {/* City quick filter pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['All', 'Mumbai', 'Bengaluru', 'Pune', 'Hyderabad', 'Delhi'].map(city => (
                    <button
                      key={city}
                      onClick={() => setSelectedHomeCity(city)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                        selectedHomeCity === city 
                          ? 'bg-[#0b2545] text-white' 
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>

                {/* Clinic preview item */}
                <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                  {filteredClinics.slice(0, 3).map(c => (
                    <div 
                      key={c.id}
                      className="border border-slate-200 hover:border-teal-400 rounded-xl p-3.5 transition-all bg-slate-50/60 hover:bg-white text-left"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">{c.name}</h4>
                          <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                            <Clock className="w-3 h-3 text-teal-600" />
                            <span className="font-medium text-teal-700">{c.hours}</span>
                          </p>
                        </div>
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded shrink-0">
                          ★ {c.rating}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-2 mt-3 pt-2 border-t border-slate-200/60">
                        <a 
                          href={`tel:${c.emergencyPhone}`} 
                          className="text-xs font-bold text-red-600 hover:underline flex items-center gap-1"
                        >
                          <PhoneCall className="w-3 h-3" />
                          <span>Call Emergency</span>
                        </a>
                        <Link 
                          to={`/locations/${c.id}`} 
                          className="text-xs font-semibold text-teal-700 hover:text-teal-800 flex items-center gap-1"
                        >
                          <span>Details</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                  <Link 
                    to="/locations" 
                    className="text-xs font-bold text-teal-700 hover:underline flex items-center justify-center gap-1"
                  >
                    <span>View all 8 hospitals across India</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS TICKER BAR */}
      <section className="bg-teal-700 text-white py-6 shadow-md relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black">50,000+</p>
              <p className="text-xs text-teal-100 uppercase tracking-wider font-medium">Pets Treated With Love</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black">24 / 7 / 365</p>
              <p className="text-xs text-teal-100 uppercase tracking-wider font-medium">Emergency Care Always Open</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black">&lt; 30 Mins</p>
              <p className="text-xs text-teal-100 uppercase tracking-wider font-medium">In-House Lab Results</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black">40+ Vets</p>
              <p className="text-xs text-teal-100 uppercase tracking-wider font-medium">Specialists & Surgeons</p>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY PROTOCOL SPOTLIGHT */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>Immediate Critical Care Guide</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Is Your Pet Experiencing a Medical Emergency?
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                If your pet has collapsed, is having difficulty breathing, has ingested chocolate or rodenticide, suffered a fall/car hit, or male cat cannot urinate, <strong>do not wait for an appointment</strong>. Bring them straight to the nearest TrustyVet 24/7 hospital.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600"></span>
                  <span>Direct emergency admission (no waiting queue)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600"></span>
                  <span>Point-of-care ultrasound and oxygen ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600"></span>
                  <span>Emergency blood bank & fluid therapy</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600"></span>
                  <span>On-duty trauma surgeon on standby</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href="tel:+918062744111"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 px-6 rounded-2xl text-center shadow-lg hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2 text-lg"
              >
                <PhoneCall className="w-6 h-6 animate-pulse" />
                <span>Call Emergency Bay</span>
              </a>
              <Link
                to="/guides/emergency-first-aid-what-to-do-before-the-vet"
                className="w-full bg-white hover:bg-red-100/60 text-red-700 font-bold py-3 px-6 rounded-xl text-center border border-red-300 transition-colors text-sm"
              >
                Read Emergency First Aid Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CORE MEDICAL SERVICES */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-teal-600 text-xs font-extrabold uppercase tracking-widest">
                Comprehensive Companion Healthcare
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0b2545] mt-1">
                Specialized Veterinary Services
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-2">
                From emergency trauma intervention to routine preventative wellness, our clinics are staffed by experienced veterinary specialists.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-bold text-teal-700 hover:text-teal-800 text-sm group"
            >
              <span>View All 10 Services</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="group bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-teal-400 p-6 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 rounded-xl overflow-hidden mb-5">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#0b2545]/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                      {service.category}
                    </div>
                    {service.isEmergency && (
                      <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>24/7 Available</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <Link
                    to={`/services/${service.id}`}
                    className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => openBookingModal('', service.id)}
                    className="text-xs font-semibold px-3 py-1.5 bg-slate-200 hover:bg-teal-600 hover:text-white rounded-lg transition-colors cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIRTUAL HOSPITAL TOUR (WITH YOUTUBE PLACEHOLDER) */}
      <section className="py-20 bg-[#0b2545] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-teal-400 text-xs font-extrabold uppercase tracking-widest">
                Inside Our Facilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Take a Virtual Walkthrough of TrustyVet Super-Specialty Hospital
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Step inside our flagship hospital: view our sterile positive-pressure surgical theatres, high-resolution diagnostic imaging rooms, and our specialized feline recovery wing equipped with calming pheromones.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <span>Positive-pressure surgical OT with HEPA air filtration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                    <Heart className="w-4 h-4" />
                  </div>
                  <span>Strictly separated dog and cat inpatient hospitalization wards</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span>In-house automated lab delivering blood panels in 30 minutes</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-xl text-sm transition-colors"
                >
                  <span>Learn About Our Medical Standards</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* YouTube Embed Placeholder as requested */}
            <div className="lg:col-span-6">
              <YouTubePlaceholder
                title="TrustyVet Flagship Hospital: Virtual Tour & ICU Walkthrough"
                duration="04:18"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY PET PARENTS CHOOSE TRUSTYVET */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 text-xs font-extrabold uppercase tracking-widest">
              The TrustyVet Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0b2545] mt-1">
              Why We Are Different From Typical Vet Clinics
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              We founded TrustyVet to establish true 24-hour critical care veterinary medicine in India, adhering to international hospital hygiene and compassionate handling standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">True 24x7 Round-The-Clock Doctors</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We don’t simply leave an on-call phone number; certified emergency veterinary doctors and paraveterinary nurses are physically stationed in the hospital 24/7/365.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Separate Dog & Cat Recovery Wards</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Cats are prey animals by nature; canine barks elevate feline cortisol and slow recovery. We maintain separated wards with acoustic dampening and pheromone diffusers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Complete Medical Transparency</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Itemized estimates before any surgery or hospitalization, digital copies of all X-rays & blood panels, and daily video updates of your admitted pets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MEET OUR SENIOR VETS */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-teal-600 text-xs font-extrabold uppercase tracking-widest">
                Clinical Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0b2545] mt-1">
                Meet Our Senior Veterinary Doctors
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-2">
                Our veterinary team combines decades of surgical experience, international certifications, and compassionate bedside manner.
              </p>
            </div>
            <Link
              to="/team"
              className="inline-flex items-center gap-2 font-bold text-teal-700 hover:text-teal-800 text-sm group"
            >
              <span>View All Doctors</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.slice(0, 4).map((doctor) => (
              <div
                key={doctor.id}
                className="bg-slate-50 rounded-2xl border border-slate-200/80 overflow-hidden hover:shadow-lg transition-shadow group text-left"
              >
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#0b2545]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {doctor.location}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-xs text-teal-700 font-medium mb-1">{doctor.role}</p>
                  <p className="text-[11px] text-slate-500 line-clamp-2 mb-3">
                    {doctor.qualification}
                  </p>

                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-slate-600">{doctor.experience}</span>
                    <button
                      type="button"
                      onClick={() => openBookingModal()}
                      className="text-xs font-semibold text-teal-700 hover:underline cursor-pointer"
                    >
                      Book With Vet →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <section className="py-20 bg-slate-100/70 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 text-xs font-extrabold uppercase tracking-widest">
              Pet Parent Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0b2545] mt-1">
              Trusted by Over 50,000 Furry Families
            </h2>
            <div className="flex items-center justify-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="font-bold text-slate-800 ml-2">4.9 / 5.0 Average Rating across Metros</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviewsData.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                    "{review.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">{review.author}</h3>
                    <p className="text-[11px] text-teal-700 font-medium">Pet: {review.pet}</p>
                    <p className="text-[10px] text-slate-400">{review.location} • {review.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0b2545] hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition-colors"
            >
              <span>Read All Verified Pet Parent Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST PET CARE GUIDES */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-teal-600 text-xs font-extrabold uppercase tracking-widest">
                Veterinary Knowledge Base
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0b2545] mt-1">
                Pet Health & First Aid Guides
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-2">
                Expert advice penned by our veterinary physicians to keep your pets happy, safe, and thriving.
              </p>
            </div>
            <Link
              to="/guides"
              className="inline-flex items-center gap-2 font-bold text-teal-700 hover:text-teal-800 text-sm group"
            >
              <span>Browse All Guides</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guidesData.slice(0, 2).map((guide) => (
              <div
                key={guide.slug}
                className="flex flex-col sm:flex-row bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="sm:w-1/2 h-48 sm:h-auto overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 sm:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-teal-700 font-bold uppercase mb-2">
                      <span>{guide.category}</span>
                      <span>•</span>
                      <span>{guide.readTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-2 line-clamp-2">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                      {guide.excerpt}
                    </p>
                  </div>

                  <Link
                    to={`/guides/${guide.slug}`}
                    className="text-xs font-bold text-teal-700 hover:underline flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPACT ADVERTISEMENT SECTION ABOVE FOOTER (AS REQUESTED) */}
      <AdPlaceholder />
    </div>
  );
}
