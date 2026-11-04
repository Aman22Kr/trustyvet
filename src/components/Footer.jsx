import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Heart, 
  Send, 
  Check, 
  Github,
  Award,
  Sparkles
} from 'lucide-react';
import { clinicsData } from '../data/clinicsData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#0b2545] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Emergency Strip */}
        <div className="bg-[#133b5c]/70 border border-slate-700/60 rounded-2xl p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0">
              <PhoneCall className="w-6 h-6 animate-emergency-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-extrabold tracking-widest text-red-400">
                  Critical Care 24/7 Hotline
                </span>
                <span className="bg-red-500/20 text-red-300 text-[10px] px-2 py-0.5 rounded font-mono font-bold">
                  365 Days
                </span>
              </div>
              <p className="text-lg sm:text-xl font-bold text-white">
                Emergency Triage Helpline: <a href="tel:+918062744111" className="text-teal-400 hover:underline">+91 8062 744 111</a>
              </p>
              <p className="text-xs text-slate-300">
                Direct access to trauma veterinarians across Mumbai, Bengaluru, Pune, Delhi NCR & Hyderabad.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/locations"
              className="px-5 py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors shadow-sm"
            >
              Locate 24/7 Hospital
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm rounded-lg border border-slate-700 transition-colors"
            >
              Emergency Protocols
            </Link>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500 text-[#0b2545] flex items-center justify-center font-bold">
                <svg className="w-6 h-6 text-[#0b2545]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 4.5 4.9.7-3.5 3.5.8 4.9L12 13.3 7.4 15.6l.8-4.9-3.5-3.5 4.9-.7L12 2z" opacity="0.3"/>
                  <circle cx="12" cy="16" r="3.5"/>
                  <circle cx="8" cy="11.5" r="2.2"/>
                  <circle cx="16" cy="11.5" r="2.2"/>
                </svg>
              </div>
              <div>
                <span className="text-2xl font-black text-white tracking-tight">
                  trusty<span className="text-teal-400">vet</span>
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">
                  Companion Animal Healthcare
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              TrustyVet is India's leading 24x7 multi-specialty veterinary hospital network. Built to international AAHA clinical benchmarks, we operate round-the-clock emergency triage, positive-pressure surgical theatres, separate feline and canine recovery wards, and in-house diagnostics.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>AAHA Certified Protocols</span>
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Heart className="w-4 h-4 text-rose-400" />
                <span>Fear Free Certified</span>
              </span>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-white mb-2">Subscribe to Pet Health Newsletter</p>
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="bg-slate-800/90 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 flex-1"
                />
                <button
                  type="submit"
                  className="bg-teal-600 hover:bg-teal-500 text-white px-3 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Join</span>
                </button>
              </form>
              {subscribed && (
                <p className="text-emerald-400 text-xs mt-1.5 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Thank you! You will receive monthly vet tips.
                </p>
              )}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Clinical Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/services/emergency-critical-care" className="hover:text-teal-400 transition-colors flex items-center gap-1">
                  <span className="text-red-400 font-bold">•</span> 24/7 Emergency & ICU
                </Link>
              </li>
              <li>
                <Link to="/services/surgery" className="hover:text-teal-400 transition-colors">
                  Soft Tissue & Orthopedic Surgery
                </Link>
              </li>
              <li>
                <Link to="/services/inpatient-care" className="hover:text-teal-400 transition-colors">
                  Inpatient IPD (Separate Cat & Dog)
                </Link>
              </li>
              <li>
                <Link to="/services/diagnostic-imaging" className="hover:text-teal-400 transition-colors">
                  Digital X-Ray & Ultrasound
                </Link>
              </li>
              <li>
                <Link to="/services/pathology-lab" className="hover:text-teal-400 transition-colors">
                  In-House Pathology (30 Mins)
                </Link>
              </li>
              <li>
                <Link to="/services/pet-dentistry" className="hover:text-teal-400 transition-colors">
                  Veterinary Dentistry & Scaling
                </Link>
              </li>
              <li>
                <Link to="/services/preventive-care" className="hover:text-teal-400 transition-colors">
                  Vaccinations & Microchipping
                </Link>
              </li>
              <li>
                <Link to="/services/teleconsultation" className="hover:text-teal-400 transition-colors">
                  Teleconsultation Video Visits
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Hospital Locations */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Our 24/7 Hospitals
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/locations/mumbai-worli" className="hover:text-teal-400 transition-colors">
                  Mumbai — Worli (24/7 Flagship)
                </Link>
              </li>
              <li>
                <Link to="/locations/mumbai-khar" className="hover:text-teal-400 transition-colors">
                  Mumbai — Khar West (24/7)
                </Link>
              </li>
              <li>
                <Link to="/locations/bengaluru-koramangala" className="hover:text-teal-400 transition-colors">
                  Bengaluru — Koramangala (24/7)
                </Link>
              </li>
              <li>
                <Link to="/locations/pune-aundh" className="hover:text-teal-400 transition-colors">
                  Pune — Aundh (24/7)
                </Link>
              </li>
              <li>
                <Link to="/locations/hyderabad-banjara-hills" className="hover:text-teal-400 transition-colors">
                  Hyderabad — Banjara Hills (24/7)
                </Link>
              </li>
              <li>
                <Link to="/locations/delhi-defence-colony" className="hover:text-teal-400 transition-colors">
                  Delhi NCR — Defence Colony (24/7)
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-teal-400 font-medium hover:underline pt-1 inline-block">
                  View All Locations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links & Corporate */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              TrustyVet
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/about" className="hover:text-teal-400 transition-colors">About Our Journey</Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-teal-400 transition-colors">Veterinary Doctors & Specialists</Link>
              </li>
              <li>
                <Link to="/guides" className="hover:text-teal-400 transition-colors">Pet Parent Health Guides</Link>
              </li>
              <li>
                <Link to="/foundation" className="hover:text-teal-400 transition-colors">TrustyVet Welfare Foundation</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-teal-400 transition-colors">Careers & Vet Fellowships</Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-teal-400 transition-colors">Pet Parent Reviews</Link>
              </li>
              <li>
                <Link to="/my-pets" className="hover:text-teal-400 transition-colors">My Pets Portal</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-400 transition-colors">Contact & Feedback</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & GitHub Pages Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© 2026 trustyvet Veterinary Healthcare Network. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Github className="w-3.5 h-3.5" />
              <span>GitHub: <strong className="text-teal-400">Aman22kr</strong></span>
            </span>
            <span className="text-slate-600">|</span>
            <span>Static Deployment via GitHub Actions</span>
            <span className="text-slate-600">|</span>
            <span>HashRouter Routing</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
