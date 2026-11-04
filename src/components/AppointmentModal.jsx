import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, Stethoscope, CheckCircle2, User, Phone, Mail, PawPrint } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { clinicsData } from '../data/clinicsData';
import { servicesData } from '../data/servicesData';

export default function AppointmentModal() {
  const { bookingModalState, closeBookingModal, addAppointment, myPets } = useApp();
  const { isOpen, prefillClinic, prefillService } = bookingModalState;

  const [formData, setFormData] = useState({
    clinicId: '',
    serviceId: '',
    date: '',
    time: '10:00 AM',
    petName: '',
    species: 'Dog',
    breed: '',
    ownerName: '',
    phone: '',
    email: '',
    reason: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [createdAppointment, setCreatedAppointment] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        clinicId: prefillClinic || clinicsData[0]?.id || '',
        serviceId: prefillService || servicesData[0]?.id || '',
        date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
        petName: myPets[0]?.name || '',
        species: myPets[0]?.species || 'Dog',
        breed: myPets[0]?.breed || '',
        ownerName: 'Aman Kumar',
        phone: '+91 98765 43210',
        email: 'aman@trustyvet.demo',
        reason: 'General wellness checkup and consultation'
      }));
      setIsSuccess(false);
      setErrors({});
    }
  }, [isOpen, prefillClinic, prefillService, myPets]);

  if (!isOpen) return null;

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:30 AM', '01:00 PM', 
    '03:00 PM', '04:30 PM', '06:00 PM', '07:30 PM'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.clinicId) errs.clinicId = 'Please select a hospital location';
    if (!formData.serviceId) errs.serviceId = 'Please choose a service';
    if (!formData.date) errs.date = 'Please select an appointment date';
    if (!formData.petName.trim()) errs.petName = 'Pet name is required';
    if (!formData.ownerName.trim()) errs.ownerName = 'Guardian name is required';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Valid phone number is required';
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

    setCreatedAppointment(newApt);
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-slide-down">
        {/* Modal Header */}
        <div className="bg-[#0b2545] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-teal-400" />
              Book Veterinary Consultation
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Instant appointment scheduling with certified companion animal veterinarians
            </p>
          </div>
          <button
            onClick={closeBookingModal}
            className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSuccess && createdAppointment ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-1">Appointment Confirmed!</h4>
              <p className="text-sm text-slate-600 mb-4">
                Booking Reference ID: <span className="font-mono font-bold text-teal-600">{createdAppointment.id}</span>
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-md mx-auto text-left text-xs sm:text-sm space-y-2 mb-6">
                <div className="flex justify-between border-b pb-1.5 border-slate-200">
                  <span className="text-slate-500">Patient:</span>
                  <span className="font-semibold text-slate-800">{createdAppointment.petName} ({createdAppointment.species})</span>
                </div>
                <div className="flex justify-between border-b pb-1.5 border-slate-200">
                  <span className="text-slate-500">Hospital:</span>
                  <span className="font-semibold text-slate-800">{createdAppointment.clinicName}</span>
                </div>
                <div className="flex justify-between border-b pb-1.5 border-slate-200">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-semibold text-slate-800">{createdAppointment.serviceName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Scheduled:</span>
                  <span className="font-semibold text-teal-700">{createdAppointment.date} at {createdAppointment.time}</span>
                </div>
              </div>

              <div className="flex justify-center gap-3">
                <button
                  type="button"
                  onClick={closeBookingModal}
                  className="px-6 py-2.5 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors cursor-pointer text-sm"
                >
                  Done (Saved to My Appointments)
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Clinic Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-teal-600" />
                    Select Hospital Location *
                  </label>
                  <select
                    value={formData.clinicId}
                    onChange={(e) => setFormData({ ...formData, clinicId: e.target.value })}
                    className="w-full text-xs sm:text-sm p-2.5 border rounded-lg bg-white border-slate-300 focus:border-teal-500"
                  >
                    {clinicsData.map(c => (
                      <option key={c.id} value={c.id}>
                        {c.name} {c.is24x7 ? '(24/7)' : ''}
                      </option>
                    ))}
                  </select>
                  {errors.clinicId && <p className="text-red-500 text-[11px] mt-0.5">{errors.clinicId}</p>}
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                    <Stethoscope className="w-3.5 h-3.5 text-teal-600" />
                    Care Service *
                  </label>
                  <select
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full text-xs sm:text-sm p-2.5 border rounded-lg bg-white border-slate-300 focus:border-teal-500"
                  >
                    {servicesData.map(s => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-teal-600" />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full text-xs sm:text-sm p-2.5 border rounded-lg border-slate-300 focus:border-teal-500"
                  />
                  {errors.date && <p className="text-red-500 text-[11px] mt-0.5">{errors.date}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-teal-600" />
                    Time Slot *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full text-xs sm:text-sm p-2.5 border rounded-lg bg-white border-slate-300 focus:border-teal-500"
                  >
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Pet Details */}
              <div className="border-t border-slate-200 pt-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                  <PawPrint className="w-3.5 h-3.5 text-teal-600" />
                  Pet Patient Details
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Pet Name *"
                      value={formData.petName}
                      onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                      className="w-full text-xs sm:text-sm p-2 border rounded-lg border-slate-300 focus:border-teal-500"
                    />
                    {errors.petName && <p className="text-red-500 text-[11px] mt-0.5">{errors.petName}</p>}
                  </div>
                  <div>
                    <select
                      value={formData.species}
                      onChange={(e) => setFormData({ ...formData, species: e.target.value })}
                      className="w-full text-xs sm:text-sm p-2 border rounded-lg bg-white border-slate-300 focus:border-teal-500"
                    >
                      <option value="Dog">Dog / Canine</option>
                      <option value="Cat">Cat / Feline</option>
                      <option value="Bird">Bird / Avian</option>
                      <option value="Small Mammal">Rabbit / Hamster / Guinea Pig</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Breed (e.g. Beagle)"
                      value={formData.breed}
                      onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                      className="w-full text-xs sm:text-sm p-2 border rounded-lg border-slate-300 focus:border-teal-500"
                    />
                  </div>
                </div>
              </div>

              {/* Owner Details */}
              <div className="border-t border-slate-200 pt-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-teal-600" />
                  Pet Parent / Guardian Info
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Full Name *"
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      className="w-full text-xs sm:text-sm p-2 border rounded-lg border-slate-300 focus:border-teal-500"
                    />
                    {errors.ownerName && <p className="text-red-500 text-[11px] mt-0.5">{errors.ownerName}</p>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Mobile Phone *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs sm:text-sm p-2 border rounded-lg border-slate-300 focus:border-teal-500"
                    />
                    {errors.phone && <p className="text-red-500 text-[11px] mt-0.5">{errors.phone}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs sm:text-sm p-2 border rounded-lg border-slate-300 focus:border-teal-500"
                    />
                  </div>
                </div>
              </div>

              {/* Reason / Notes */}
              <div>
                <textarea
                  rows="2"
                  placeholder="Primary reason for visit or symptoms (optional)..."
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full text-xs sm:text-sm p-2 border rounded-lg border-slate-300 focus:border-teal-500"
                ></textarea>
              </div>

              {/* Actions */}
              <div className="pt-2 flex items-center justify-between">
                <p className="text-[11px] text-slate-400">
                  * All appointment records persist locally in your browser session.
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={closeBookingModal}
                    className="px-4 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-100 text-xs sm:text-sm font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs sm:text-sm font-medium shadow-sm transition-colors cursor-pointer"
                  >
                    Confirm Appointment
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
