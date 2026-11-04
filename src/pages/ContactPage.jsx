import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ChevronDown, 
  ChevronUp,
  MessageSquare
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import AdPlaceholder from '../components/AdPlaceholder';
import { clinicsData } from '../data/clinicsData';
import { faqData } from '../data/faqData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'Mumbai',
    subject: 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    try {
      const messages = JSON.parse(localStorage.getItem('trustyvet_contact_messages') || '[]');
      messages.push({
        ...formData,
        id: Date.now(),
        date: new Date().toISOString()
      });
      localStorage.setItem('trustyvet_contact_messages', JSON.stringify(messages));
    } catch (err) {
      console.warn('localStorage error', err);
    }

    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: 'Mumbai',
      subject: 'General Inquiry',
      message: ''
    });
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        badge="24/7 Support & Clinics"
        title="Contact TrustyVet"
        subtitle="Need urgent emergency assistance, routine appointment guidance, or partner feedback? Our client services team is here to assist 24/7."
        breadcrumbs={[{ name: 'Contact' }]}
        actionButton={
          <a
            href="tel:+918062744111"
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-colors shadow-md flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>24/7 Helpline: +91 8062 744 111</span>
          </a>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* EMERGENCY TRIAGE GUIDANCE BANNER */}
        <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-6 sm:p-8 mb-12 text-left">
          <div className="flex items-center gap-2 text-red-600 font-black text-sm uppercase tracking-wider mb-2">
            <AlertCircle className="w-5 h-5" />
            <span>Critical Emergency Protocol</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            Do not use online forms for active medical emergencies!
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
            If your pet is suffering from acute trauma, pale gums, uncontrolled vomiting, seizures, or has ingested poison, please call our 24/7 hotline immediately or walk straight into our hospital triage bay.
          </p>
          <a
            href="tel:+918062744111"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black px-6 py-3 rounded-xl text-sm transition-colors shadow-md"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Direct Emergency Call: +91 8062 744 111</span>
          </a>
        </div>

        {/* CONTACT FORM & LOCATIONS DIRECTORY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* General Inquiries Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs text-left">
            <h3 className="text-2xl font-bold text-[#0b2545] mb-1">Send Us a Message</h3>
            <p className="text-xs text-slate-500 mb-6">
              For routine feedback, partnership inquiries, or non-urgent client services.
            </p>

            {submitted ? (
              <div className="py-12 text-center bg-teal-50 rounded-2xl border border-teal-200 p-6">
                <CheckCircle2 className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                <h4 className="text-xl font-bold text-slate-900">Message Received!</h4>
                <p className="text-xs text-slate-600 mt-2 max-w-md mx-auto">
                  Thank you. Your message has been routed to our client care team. We will respond within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-5 py-2 bg-teal-600 text-white font-bold rounded-lg text-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs sm:text-sm p-3 border rounded-xl border-slate-300 focus:outline-none focus:border-teal-500"
                      placeholder="e.g. Deepika Rao"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs sm:text-sm p-3 border rounded-xl border-slate-300 focus:outline-none focus:border-teal-500"
                      placeholder="deepika@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs sm:text-sm p-3 border rounded-xl border-slate-300 focus:outline-none focus:border-teal-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">City</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full text-xs sm:text-sm p-3 border rounded-xl border-slate-300 bg-white focus:outline-none focus:border-teal-500"
                    >
                      <option value="Mumbai">Mumbai</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Pune">Pune</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 border rounded-xl border-slate-300 bg-white focus:outline-none focus:border-teal-500"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Appointment Follow-up">Appointment Follow-up</option>
                    <option value="Medical Records Request">Medical Records Request</option>
                    <option value="Insurance Claim Support">Insurance Claim Support</option>
                    <option value="Corporate / Partnership">Corporate / Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Message *</label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can our veterinary team assist you?"
                    className="w-full text-xs sm:text-sm p-3 border rounded-xl border-slate-300 focus:outline-none focus:border-teal-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl text-sm transition-colors cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* City Direct Lines */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <h3 className="text-xl font-bold text-[#0b2545] mb-2">Metro Hospital Direct Lines</h3>

            <div className="space-y-3">
              {clinicsData.map(c => (
                <div key={c.id} className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{c.name}</h4>
                    {c.is24x7 && (
                      <span className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded border border-red-200">
                        24/7 Open
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-1">{c.address}</p>
                  <div className="pt-2 flex items-center justify-between text-xs">
                    <a href={`tel:${c.emergencyPhone}`} className="font-bold text-teal-700 hover:underline flex items-center gap-1">
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>{c.emergencyPhone}</span>
                    </a>
                    <a href={`mailto:${c.email}`} className="text-slate-400 hover:underline">
                      {c.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs text-left mb-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-teal-600 text-xs font-bold uppercase tracking-widest">Help Center</span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0b2545] mt-1">Frequently Asked Questions</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Find quick answers regarding our 24/7 admission procedures, billing transparency, and facilities.
            </p>
          </div>

          <div className="divide-y divide-slate-100 max-w-4xl mx-auto">
            {faqData.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="py-4">
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between text-left font-bold text-slate-900 hover:text-teal-700 transition-colors text-sm sm:text-base py-1"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-teal-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 pl-1 animate-slide-down">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <AdPlaceholder />
    </div>
  );
}
