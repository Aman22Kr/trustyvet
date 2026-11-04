import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Stethoscope, 
  CheckCircle2, 
  User, 
  Phone, 
  Mail, 
  PawPrint,
  AlertCircle,
  ArrowRight,
  Trash2
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import AdPlaceholder from '../components/AdPlaceholder';
import { useApp } from '../context/AppContext';
import { clinicsData } from '../data/clinicsData';
import { servicesData } from '../data/servicesData';

export default function BookingPage() {
  const { appointments, addAppointment, cancelAppointment, myPets } = useApp();

  const [formData, setFormData] = useState({
    clinicId: clinicsData[0]?.id || '',
    serviceId: servicesData[0]?.id || '',
    date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    time: '11:00 AM',
    petName: myPets[0]?.name || '',
    species: myPets[0]?.species || 'Dog',
    breed: myPets[0]?.breed || '',
    ownerName: 'Aman Kumar',
    phone: '+91 98765 43210',
    email: 'aman@trustyvet.demo',
    reason: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [lastBooked, setLastBooked] = useState(null);
  const [errors, setErrors] = useState({});

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:30 AM', '01:00 PM', 
    '03:00 PM', '04:30 PM', '06:00 PM', '07:30 PM'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.clinicId) errs.clinicId = 'Please select a hospital';
    if (!formData.serviceId) errs.serviceId = 'Please choose a service';
    if (!formData.date) errs.date = 'Please pick a date';
    if (!formData.petName.trim()) errs.petName = 'Pet name is required';
    if (!formData.ownerName.trim()) errs.ownerName = 'Guardian name is required';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Valid phone is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const clinicObj = clinicsData.find(c => c.id === formData.clinicId);
    const serviceObj = servicesData.find(s => s.id === formData.serviceId);

    const newApt = addAppointment({
      ...formData,
      clinicName: clinicObj ? clinicObj.name : 'TrustyVet Center',
      serviceName: serviceObj ? serviceObj.title : 'General Consultation'
    });

    setLastBooked(newApt);
    setIsSuccess(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        badge="Online Scheduler"
        title="Book a Veterinary Consultation"
        subtitle="Schedule routine health examinations, vaccinations, diagnostic scans, and specialist surgical consults with instant confirmation."
        breadcrumbs={[{ name: 'Book Appointment' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm text-left">
              {isSuccess && lastBooked ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Appointment Scheduled!</h3>
                  <p className="text-xs text-slate-500 mb-6">
                    Booking ID: <span className="font-mono font-bold text-teal-600">{lastBooked.id}</span>
                  </p>

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left text-xs sm:text-sm space-y-2.5 max-w-md mx-auto mb-6">
                    <div className="flex justify-between border-b pb-2 border-slate-200">
                      <span className="text-slate-500">Patient:</span>
                      <span className="font-semibold text-slate-900">{lastBooked.petName} ({lastBooked.species})</span>
                    </div>
                    <div className="flex justify-between border-b pb-2 border-slate-200">
                      <span className="text-slate-500">Hospital:</span>
                      <span className="font-semibold text-slate-900">{lastBooked.clinicName}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2 border-slate-200">
                      <span className="text-slate-500">Service:</span>
                      <span className="font-semibold text-slate-900">{lastBooked.serviceName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Scheduled:</span>
                      <span className="font-semibold text-teal-700">{lastBooked.date} at {lastBooked.time}</span>
                    </div>
                  </div>

                  <div className="flex justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="px-5 py-2.5 bg-teal-600 text-white font-bold rounded-xl text-xs sm:text-sm"
                    >
                      Book Another Appointment
                    </button>
                    <Link
                      to="/my-pets"
                      className="px-5 py-2.5 bg-slate-100 text-slate-800 font-bold rounded-xl text-xs sm:text-sm border border-slate-200 hover:bg-slate-200"
                    >
                      View in My Pets Portal →
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Hospital & Specialty */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-teal-600" />
                      1. Select Hospital & Specialty
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Hospital Location *
                        </label>
                        <select
                          value={formData.clinicId}
                          onChange={(e) => setFormData({ ...formData, clinicId: e.target.value })}
                          className="w-full text-xs sm:text-sm p-3 border rounded-xl border-slate-300 bg-white focus:outline-none focus:border-teal-500"
                        >
                          {clinicsData.map(c => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Veterinary Specialty *
                        </label>
                        <select
                          value={formData.serviceId}
                          onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                          className="w-full text-xs sm:text-sm p-3 border rounded-xl border-slate-300 bg-white focus:outline-none focus:border-teal-500"
                        >
                          {servicesData.map(s => (
                            <option key={s.id} value={s.id}>{s.title}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Date & Slot */}
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-teal-600" />
                      2. Date & Convenient Time
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Date *</label>
                        <input
                          type="date"
                          min={new Date().toISOString().split('T')[0]}
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full text-xs sm:text-sm p-3 border rounded-xl border-slate-300 focus:outline-none focus:border-teal-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Available Slot *</label>
                        <select
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full text-xs sm:text-sm p-3 border rounded-xl border-slate-300 bg-white focus:outline-none focus:border-teal-500"
                        >
                          {timeSlots.map(slot => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Pet Details */}
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                      <PawPrint className="w-4 h-4 text-teal-600" />
                      3. Pet Patient Information
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Pet Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.petName}
                          onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                          className="w-full text-xs sm:text-sm p-2.5 border rounded-lg border-slate-300 focus:outline-none focus:border-teal-500"
                          placeholder="e.g. Leo"
                        />
                        {errors.petName && <p className="text-red-500 text-[10px] mt-0.5">{errors.petName}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Species *</label>
                        <select
                          value={formData.species}
                          onChange={(e) => setFormData({ ...formData, species: e.target.value })}
                          className="w-full text-xs sm:text-sm p-2.5 border rounded-lg border-slate-300 bg-white focus:outline-none focus:border-teal-500"
                        >
                          <option value="Dog">Dog / Canine</option>
                          <option value="Cat">Cat / Feline</option>
                          <option value="Bird">Bird / Avian</option>
                          <option value="Small Mammal">Rabbit / Guinea Pig</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Breed</label>
                        <input
                          type="text"
                          value={formData.breed}
                          onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                          className="w-full text-xs sm:text-sm p-2.5 border rounded-lg border-slate-300 focus:outline-none focus:border-teal-500"
                          placeholder="e.g. Beagle"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Guardian Info */}
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                      <User className="w-4 h-4 text-teal-600" />
                      4. Pet Parent / Guardian Contact
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.ownerName}
                          onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                          className="w-full text-xs sm:text-sm p-2.5 border rounded-lg border-slate-300 focus:outline-none focus:border-teal-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Phone *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full text-xs sm:text-sm p-2.5 border rounded-lg border-slate-300 focus:outline-none focus:border-teal-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full text-xs sm:text-sm p-2.5 border rounded-lg border-slate-300 focus:outline-none focus:border-teal-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 5: Symptoms */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Symptoms or Notes for the Doctor</label>
                    <textarea
                      rows="2"
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      placeholder="Describe what your pet is experiencing or any prior medications..."
                      className="w-full text-xs sm:text-sm p-3 border rounded-xl border-slate-300 focus:outline-none focus:border-teal-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl text-sm transition-colors cursor-pointer shadow-md"
                  >
                    Confirm & Reserve Appointment
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Existing Scheduled Bookings */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#0b2545] mb-1">
                Your Scheduled Visits ({appointments.length})
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Saved directly in your browser's persistent localStorage.
              </p>

              {appointments.length === 0 ? (
                <div className="text-center py-8 bg-slate-50 rounded-2xl border border-slate-200">
                  <Calendar className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  <p className="text-xs text-slate-500">No upcoming appointments scheduled yet.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {appointments.map((apt) => (
                    <div
                      key={apt.id}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-slate-900 text-sm">{apt.petName}</span>
                            <span className="text-[10px] bg-teal-100 text-teal-800 font-bold px-1.5 py-0.2 rounded">
                              {apt.species}
                            </span>
                          </div>
                          <p className="text-xs font-semibold text-teal-700">{apt.serviceName}</p>
                        </div>
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">
                          {apt.status}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{apt.clinicName}</span>
                      </p>

                      <p className="text-xs text-slate-600 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span className="font-semibold text-slate-800">{apt.date} at {apt.time}</span>
                      </p>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-xs">
                        <span className="text-[10px] font-mono text-slate-400">ID: {apt.id}</span>
                        <button
                          type="button"
                          onClick={() => cancelAppointment(apt.id)}
                          className="text-red-600 hover:text-red-700 font-semibold flex items-center gap-1 cursor-pointer text-xs"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>Cancel Booking</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Emergency Info Callout */}
            <div className="bg-red-50 border border-red-200 rounded-3xl p-6 text-left">
              <div className="flex items-center gap-2 text-red-700 font-bold text-sm mb-1">
                <AlertCircle className="w-4 h-4 text-red-600" />
                <span>Need Immediate Critical Care?</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed mb-3">
                For active bleeding, breathing difficulty, or toxin ingestion, please bypass this form and call or visit directly.
              </p>
              <a
                href="tel:+918062744111"
                className="font-black text-red-600 hover:underline text-sm flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4" />
                <span>Call 24/7 Helpline: +91 8062 744 111</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <AdPlaceholder />
    </div>
  );
}
