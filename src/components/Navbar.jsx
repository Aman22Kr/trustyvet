import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { 
  PhoneCall, 
  Menu, 
  X, 
  MapPin, 
  Calendar, 
  Heart, 
  ShieldAlert, 
  ChevronDown,
  Stethoscope,
  Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { citiesList } from '../data/clinicsData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const { openBookingModal, selectedCity, setSelectedCity, appointments } = useApp();
  const navigate = useNavigate();

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    navigate('/locations');
  };

  const navLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Clinics', path: '/locations' },
    { name: 'Medical Team', path: '/team' },
    { name: 'Pet Care Guides', path: '/guides' },
    { name: 'Foundation', path: '/foundation' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'My Pets & Visits', path: '/my-pets', badge: appointments.length > 0 ? appointments.length : null },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#0b2545] to-[#133b5c] text-white flex items-center justify-center shadow-md transform transition-transform group-hover:scale-105">
              <div className="relative">
                {/* Crown / Paw Hybrid icon representation */}
                <svg className="w-6 h-6 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 4.5 4.9.7-3.5 3.5.8 4.9L12 13.3 7.4 15.6l.8-4.9-3.5-3.5 4.9-.7L12 2z" opacity="0.3"/>
                  <circle cx="12" cy="16" r="3.5" fill="#14b8a6"/>
                  <circle cx="8" cy="11.5" r="2.2" fill="#14b8a6"/>
                  <circle cx="16" cy="11.5" r="2.2" fill="#14b8a6"/>
                  <circle cx="5" cy="15" r="1.8" fill="#14b8a6"/>
                  <circle cx="19" cy="15" r="1.8" fill="#14b8a6"/>
                </svg>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-[#0b2545]">
                  trusty<span className="text-teal-600">vet</span>
                </span>
                <span className="bg-teal-50 text-teal-700 text-[10px] font-bold px-1.5 py-0.5 rounded border border-teal-200">
                  24/7
                </span>
              </div>
              <p className="text-[10px] font-medium tracking-wide uppercase text-slate-500">
                Companion Animal Hospitals
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            <NavLink 
              to="/about"
              className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-teal-600 font-semibold' : 'text-slate-600 hover:text-[#0b2545]'}`}
            >
              About
            </NavLink>

            <NavLink 
              to="/services"
              className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-teal-600 font-semibold' : 'text-slate-600 hover:text-[#0b2545]'}`}
            >
              Services
            </NavLink>

            <NavLink 
              to="/locations"
              className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-teal-600 font-semibold' : 'text-slate-600 hover:text-[#0b2545]'}`}
            >
              Locations
            </NavLink>

            <NavLink 
              to="/team"
              className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-teal-600 font-semibold' : 'text-slate-600 hover:text-[#0b2545]'}`}
            >
              Team
            </NavLink>

            <NavLink 
              to="/guides"
              className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-teal-600 font-semibold' : 'text-slate-600 hover:text-[#0b2545]'}`}
            >
              Pet Guides
            </NavLink>

            <NavLink 
              to="/reviews"
              className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-teal-600 font-semibold' : 'text-slate-600 hover:text-[#0b2545]'}`}
            >
              Reviews
            </NavLink>

            <NavLink 
              to="/my-pets"
              className={({ isActive }) => `text-sm font-medium transition-colors flex items-center gap-1.5 ${isActive ? 'text-teal-600 font-semibold' : 'text-slate-600 hover:text-[#0b2545]'}`}
            >
              <span>My Pets</span>
              {appointments.length > 0 && (
                <span className="bg-teal-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {appointments.length}
                </span>
              )}
            </NavLink>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick City Selector */}
            <div className="relative">
              <select
                value={selectedCity}
                onChange={handleCityChange}
                aria-label="Filter hospitals by city"
                className="text-xs font-medium bg-slate-100 hover:bg-slate-200/70 border-0 rounded-lg py-2 pl-3 pr-7 text-slate-700 cursor-pointer focus:ring-2 focus:ring-teal-500 appearance-none"
              >
                {citiesList.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              <MapPin className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Book Appointment CTA */}
            <button
              onClick={() => openBookingModal()}
              className="bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Visit</span>
            </button>

            {/* 24/7 Call Pill */}
            <a
              href="tel:+918062744111"
              className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 text-xs sm:text-sm font-bold px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-red-600" />
              <span className="hidden xl:inline">24/7 Helpline</span>
            </a>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openBookingModal()}
              className="bg-teal-600 text-white text-xs font-semibold px-2.5 py-2 rounded-lg"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-slide-down">
          {/* Mobile City Selector */}
          <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
            <MapPin className="w-4 h-4 text-teal-600" />
            <span className="text-xs font-semibold text-slate-600">Select City:</span>
            <select
              value={selectedCity}
              onChange={handleCityChange}
              className="text-xs font-medium bg-transparent border-0 text-slate-800 flex-1 cursor-pointer"
            >
              {citiesList.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between ${
                  isActive ? 'bg-teal-50 text-teal-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="bg-teal-600 text-white text-[10px] px-1.5 py-0.2 rounded-full">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="tel:+918062744111"
              className="w-full bg-red-600 hover:bg-red-700 text-white text-center py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>24/7 Emergency Helpline: +91 8062 744 111</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
